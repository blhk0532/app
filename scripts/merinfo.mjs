#!/usr/bin/env node

/**
 * Merinfo.se scraper script
 * - Fetches postnummer from API queue
 * - Applies advanced filters (GEO postnummer + telephone)
 * - Intercepts network responses from api/v1/search/results
 * - Saves data to SQLite and sends to bulk API
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';
import { chromium } from 'playwright-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import Database from 'better-sqlite3';

chromium.use(StealthPlugin());

const scriptDirectory = path.dirname(new URL(import.meta.url).pathname);
const projectRoot = path.resolve(scriptDirectory, '..');

const loadProjectEnv = () => {
  const envPath = path.join(projectRoot, '.env');
  try {
    const envContents = readFileSync(envPath, 'utf-8');
    for (const rawLine of envContents.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) continue;
      const separatorIndex = line.indexOf('=');
      if (separatorIndex === -1) continue;
      const key = line.slice(0, separatorIndex).trim();
      let value = line.slice(separatorIndex + 1).trim();
      if (!key || process.env[key]) continue;
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      process.env[key] = value;
    }
  } catch {
    // Ignore missing .env
  }
};

loadProjectEnv();

const TEST_POSTNUMMER = ['15332', '11115', '22223', '33332', '44447'];
const COOKIES_FILE = path.join(scriptDirectory, 'cookies.json');
const DB_FILE = path.join(scriptDirectory, 'merinfo_results.db');
const API_URL = `${(process.env.APP_URL || 'http://localhost:8000').replace(/\/+$/, '')}/api/merinfo/bulk`;
const QUEUE_URL = 'https://nordicdigitalthailand.com/api/sweden-postnummer/get-queue';

const IS_HUS_PATTERN = /lgh|1 tr|2 tr|3 tr|4 tr|5 tr|6 tr| nb| box| bv|\bBox\b|\b([1-9][0-9]?|100)\s*[A-Z]\b/i;

// ─── Database ────────────────────────────────────────────────────────────────

function initDb() {
  const db = new Database(DB_FILE);
  db.pragma('journal_mode = WAL');
  db.exec(`
    CREATE TABLE IF NOT EXISTS results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      postnummer TEXT,
      page_num INTEGER,
      short_uuid TEXT,
      name TEXT,
      given_name TEXT,
      personal_number TEXT,
      street TEXT,
      zip_code TEXT,
      city TEXT,
      gender TEXT,
      phone_raw TEXT,
      phone_number TEXT,
      url TEXT,
      merinfo_url TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      sent_to_api INTEGER DEFAULT 0
    )
  `);
  console.log(`✓ SQLite database ready: ${DB_FILE}`);
  return db;
}

const insertStmt = (db) =>
  db.prepare(`
    INSERT INTO results (
      postnummer, page_num, short_uuid, name, given_name,
      personal_number, street, zip_code, city, gender,
      phone_raw, phone_number, url, merinfo_url
    ) VALUES (
      @postnummer, @page_num, @short_uuid, @name, @given_name,
      @personal_number, @street, @zip_code, @city, @gender,
      @phone_raw, @phone_number, @url, @merinfo_url
    )
  `);

function saveToDb(db, postnummer, pageNum, data) {
  const insert = insertStmt(db);
  const saveMany = db.transaction((items) => {
    let count = 0;
    for (const item of items) {
      try {
        const phoneNumbers = item.phone_number || [];
        const phoneRaw = phoneNumbers[0]?.raw || '';
        const phoneDisplay = phoneNumbers[0]?.number || '';
        const address = Array.isArray(item.address) ? item.address[0] : (item.address || {});

        insert.run({
          postnummer,
          page_num: pageNum,
          short_uuid: item.short_uuid || '',
          name: item.name || '',
          given_name: item.givenNameOrFirstName || '',
          personal_number: item.personalNumber || '',
          street: address.street || '',
          zip_code: address.zip_code || '',
          city: address.city || '',
          gender: item.gender || '',
          phone_raw: phoneRaw,
          phone_number: phoneDisplay,
          url: item.url || '',
          merinfo_url: item.same_address_url || '',
        });
        count++;
      } catch (err) {
        console.error(`  save_to_db error: ${err.message}`);
      }
    }
    return count;
  });

  const allItems = (data.results || []).flatMap((g) => g.items || []);
  console.log(`    save_to_db: found ${allItems.length} items to save`);
  return saveMany(allItems);
}

// ─── Data helpers ─────────────────────────────────────────────────────────────

function stripHtml(text) {
  if (!text) return '';
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .trim();
}

function cleanData(data) {
  if (Array.isArray(data)) return data.map(cleanData);
  if (data && typeof data === 'object') {
    const cleaned = {};
    for (const [key, value] of Object.entries(data)) {
      cleaned[key] = key === 'name' && typeof value === 'string' ? stripHtml(value) : cleanData(value);
    }
    if (Array.isArray(cleaned.address) && cleaned.address.length > 0) {
      const street = cleaned.address[0]?.street || '';
      cleaned.is_hus = !street || !IS_HUS_PATTERN.test(street);
    }
    return cleaned;
  }
  if (typeof data === 'string') return stripHtml(data);
  return data;
}

// ─── Cookies ──────────────────────────────────────────────────────────────────

function loadCookies() {
  try {
    if (!existsSync(COOKIES_FILE)) return [];
    const raw = JSON.parse(readFileSync(COOKIES_FILE, 'utf-8'));
    // Convert browser-extension format to Playwright format
    return raw
      .filter((c) => c.name && c.value)
      .map((c) => ({
        name: c.name,
        value: c.value,
        domain: (c.domain || '').replace(/^\./, '') || 'www.merinfo.se',
        path: c.path || '/',
        expires: c.expirationDate ? Math.floor(c.expirationDate) : -1,
        httpOnly: c.httpOnly ?? false,
        secure: c.secure ?? false,
        sameSite: (() => {
          const s = (c.sameSite || '').toLowerCase();
          if (s === 'strict') return 'Strict';
          if (s === 'none') return 'None';
          return 'Lax';
        })(),
      }));
  } catch {
    return [];
  }
}

// ─── API ──────────────────────────────────────────────────────────────────────

async function getQueue() {
  try {
    const res = await fetch(QUEUE_URL, { signal: AbortSignal.timeout(10000) });
    if (!res.ok) return null;
    const data = await res.json();
    return data?.postnummer || null;
  } catch {
    return null;
  }
}

async function sendToBulkApi(allItems) {
  try {
    const batchSize = 5;
    const batches = Math.ceil(allItems.length / batchSize);
    console.log(`    Sending ${allItems.length} items in ${batches} batches of ${batchSize}...`);

    let lastStatus = 200;
    for (let i = 0; i < batches; i++) {
      const batch = allItems.slice(i * batchSize, (i + 1) * batchSize);
      const payload = { results: [{ type: 'person', items: batch }] };

      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          signal: AbortSignal.timeout(120000),
        });
        const text = await res.text();
        lastStatus = res.status;
        console.log(`    Batch ${i + 1}/${batches}: status ${res.status}, response: ${text.slice(0, 200)}`);
        if (!res.ok) break;
      } catch (err) {
        console.error(`    Batch ${i + 1} error: ${err.message}`);
        break;
      }
    }
    return lastStatus;
  } catch (err) {
    console.error(`    Bulk API error: ${err.message}`);
    return 0;
  }
}

// ─── Browser helpers ──────────────────────────────────────────────────────────

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function safeClick(page, selector, timeoutMs = 5000) {
  const isXpath = selector.startsWith('/') || selector.startsWith('(');
  const deadline = Date.now() + timeoutMs;

  while (Date.now() < deadline) {
    try {
      const locator = isXpath ? page.locator(`xpath=${selector}`) : page.locator(selector);
      const count = await locator.count();
      if (count > 0) {
        await locator.first().click({ timeout: 2000 });
        await sleep(2000);
        console.log(`  Clicked: ${selector}`);
        return true;
      }
    } catch {
      // retry
    }
    await sleep(500);
  }
  console.log(`  Failed to click after ${timeoutMs}ms: ${selector}`);
  return false;
}

async function waitForCloudflare(page, maxWaitMs = 60000) {
  const deadline = Date.now() + maxWaitMs;
  while (Date.now() < deadline) {
    try {
      const cfRunning = await page.evaluate(() => {
        return !!document.querySelector('#cf-challenge-running, .cf-challenge-container, #challenge-running');
      });
      if (cfRunning) {
        console.log('  Waiting for Cloudflare challenge...');
        await sleep(5000);
      } else {
        await sleep(2000);
        return true;
      }
    } catch {
      await sleep(5000);
    }
  }
  return false;
}

async function acceptCookies(page) {
  const tryClick = async (selector) => {
    try {
      const result = await page.evaluate((sel) => {
        const el = document.querySelector(sel);
        if (!el) return false;
        const tag = el.tagName.toLowerCase();
        if (tag === 'a' && el.href && el.href.includes('cookie')) return 'skip';
        el.click();
        return true;
      }, selector);

      if (result === 'skip') return 'skip';
      if (result) {
        await sleep(2000);
        console.log('  Cookie consent accepted');
        return true;
      }
    } catch {
      // ignore
    }
    return false;
  };

  const selectors = [
    '#accept-btn',
    'button#accept-btn',
    'button[id="accept-btn"]',
    '.accept-btn',
    'button.accept-btn',
    'button[class*="accept"]',
    '[role="button"][class*="cookie"]',
  ];

  for (const sel of selectors) {
    const res = await tryClick(sel);
    if (res === true) {
      const currentUrl = page.url();
      if (currentUrl.toLowerCase().includes('cookie') || currentUrl.toLowerCase().includes('policy')) {
        console.log(`  WARNING: navigated to ${currentUrl}`);
        await page.goBack();
        await sleep(2000);
        continue;
      }
      return true;
    }
  }

  // Fallback: find button by text
  try {
    const found = await page.evaluate(() => {
      const texts = ['acceptera', 'godkänn', 'accept', 'agree', 'ok', 'got it', 'understand'];
      for (const btn of document.querySelectorAll('button, [role="button"], input[type="button"]')) {
        const text = btn.textContent.toLowerCase().trim();
        if (texts.some((t) => text.includes(t))) {
          btn.click();
          return true;
        }
      }
      return false;
    });
    if (found) {
      await sleep(2000);
      console.log('  Cookie consent accepted (by text)');
      return true;
    }
  } catch {
    // ignore
  }

  console.log('  No cookie button found');
  return false;
}

// ─── Main scraping logic ───────────────────────────────────────────────────────

async function processPostnummer(page, postnummer, db) {
  let pageNum = 1;
  let totalDb = 0;
  const capturedPages = [];

  // Intercept API responses
  const onResponse = async (response) => {
    if (!response.url().includes('api/v1/search/results')) return;
    try {
      const data = await response.json();
      const itemCount = (data?.results || []).reduce((n, g) => n + (g.items?.length || 0), 0);
      if (itemCount > 0) {
        console.log(`    [NET] Captured ${itemCount} results from response`);
        capturedPages.push(data);
      }
    } catch {
      // non-JSON or partial body
    }
  };

  page.on('response', onResponse);

  try {
    await page.goto(`https://www.merinfo.se/search?d=p&q=${encodeURIComponent(postnummer)}`, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });
    await sleep(5000);
  } catch (err) {
    console.error(`  [ERROR] Page load: ${err.message}`);
    page.off('response', onResponse);
    return 0;
  }

  // Accept cookies (multiple attempts)
  for (let i = 0; i < 3; i++) {
    await acceptCookies(page);
    await sleep(2000);
  }

  await waitForCloudflare(page);

  for (let i = 0; i < 2; i++) {
    await acceptCookies(page);
    await sleep(1000);
  }

  // ── Apply advanced filters ──
  console.log('  Clicking Avancerat sök...');
  await safeClick(page, '[aria-label="Växla till det avancerade filret"]');
  await sleep(3000);

  console.log('  Clicking GEO filter section...');
  await safeClick(page, 'xpath=//*[@id="search-filter-advanced-component"]/DIV[1]/DIV[3]/DIV[1]');
  await sleep(3000);

  console.log('  Clicking postnummer filter section...');
  await safeClick(page, 'xpath=//*[@id="search-filter-advanced-component"]/DIV[1]/DIV[3]/DIV[2]/DIV[3]/INPUT[1]');
  await sleep(2000);

  console.log('  Clicking postnummer input...');
  await safeClick(page, '[aria-label^="Ange ett postnummer"]');
  await sleep(1000);

  console.log(`  Filling postnummer: ${postnummer}`);
  try {
    const filled = await page.evaluate((pnr) => {
      for (const inp of document.querySelectorAll('input')) {
        if (inp.ariaLabel && inp.ariaLabel.includes('postnummer')) {
          inp.focus();
          inp.value = pnr;
          inp.dispatchEvent(new Event('focus', { bubbles: true }));
          inp.dispatchEvent(new Event('input', { bubbles: true }));
          inp.dispatchEvent(new Event('blur', { bubbles: true }));
          inp.dispatchEvent(new Event('change', { bubbles: true }));
          return inp.value;
        }
      }
      return null;
    }, postnummer);
    if (filled) {
      console.log(`  Input filled: ${filled}`);
    } else {
      console.log('  No postnummer input found');
    }
    await sleep(3000);
  } catch (err) {
    console.error(`  Fill error: ${err.message}`);
  }

  console.log('  Clicking search button...');
  await safeClick(page, 'button.button-primary');
  await sleep(3000);

  console.log('  Clicking Telefonnummer filter...');
  try {
    await page.evaluate(() => {
      for (const h of document.querySelectorAll('.text-secondary.text-lg.font-semibold')) {
        if (h.textContent.includes('Telefonnummer')) {
          const parent = h.closest('.p-4');
          if (parent) { parent.click(); return; }
        }
      }
    });
    await sleep(2000);
  } catch (err) {
    console.error(`  Telefonnummer filter error: ${err.message}`);
  }

  console.log('  Clicking Med telefonnummer toggle...');
  try {
    await page.evaluate(() => {
      for (const c of document.querySelectorAll('div.mx-4')) {
        if (c.textContent.includes('Med telefonnummer')) {
          const toggle = c.querySelector('div[style*="border-color: rgb(150, 207, 229)"]');
          if (toggle) { toggle.click(); return; }
        }
      }
    });
    await sleep(2000);
  } catch (err) {
    console.error(`  Toggle error: ${err.message}`);
  }

  console.log('  Clicking Visa sökresultat...');
  await safeClick(page, 'button[aria-label="Visa sökresultat för nuvarande filtrering"]');
  await sleep(5000);

  // ── Pagination loop ──
  while (true) {
    console.log(`  Page ${pageNum}...`);
    await sleep(10000); // let network requests settle

    // Process captured responses for this page
    while (capturedPages.length > 0) {
      const data = capturedPages.shift();
      const cleaned = cleanData(data);
      const dbCount = saveToDb(db, postnummer, pageNum, cleaned);
      console.log(`    Saved ${dbCount} to DB`);
      totalDb += dbCount;

      const allItems = (cleaned.results || []).flatMap((g) => g.items || []);
      if (allItems.length > 0) {
        console.log(`  Sending ${allItems.length} items to API...`);
        await sendToBulkApi(allItems);
      }

      pageNum++;
    }

    // Check for next page
    let hasNext = false;
    try {
      hasNext = await page.evaluate(() => {
        const next = document.querySelector('a[rel="next"]');
        return next ? !next.classList.contains('pointer-events-none') : false;
      });
    } catch {
      hasNext = false;
    }

    if (hasNext) {
      const clicked = await safeClick(page, 'a[rel="next"]');
      if (!clicked) break;
      await sleep(3000);
    } else {
      break;
    }
  }

  page.off('response', onResponse);
  return totalDb;
}

// ─── Entry point ─────────────────────────────────────────────────────────────

async function main() {
  console.log('Initializing database...');
  const db = initDb();
  let testIndex = 0;

  while (true) {
    console.log('\n' + '='.repeat(50));

    let postnummer = await getQueue();

    if (!postnummer) {
      console.log('Queue empty, checking test list...');
      if (testIndex < TEST_POSTNUMMER.length) {
        postnummer = TEST_POSTNUMMER[testIndex++];
        console.log(`Using test: ${postnummer}`);
      } else {
        console.log('All test postnummer done. Restarting...');
        testIndex = 0;
        await sleep(60000);
        continue;
      }
    }

    console.log(`Processing: ${postnummer}`);

    let browser = null;
    try {
      browser = await chromium.launch({
        headless: false,
        executablePath: '/usr/bin/google-chrome',
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--window-size=1280,900',
          '--disable-blink-features=AutomationControlled',
          '--disable-features=IsolateOrigins,site-per-process',
          '--disable-web-security',
          '--ignore-certificate-errors',
          '--lang=sv-SE',
        ],
      });

      const context = await browser.newContext({
        userAgent:
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        viewport: { width: 1280, height: 900 },
        locale: 'sv-SE',
        timezoneId: 'Europe/Stockholm',
        extraHTTPHeaders: {
          'Accept-Language': 'sv-SE,sv;q=0.9,en;q=0.8',
        },
      });

      // Comprehensive anti-detection patches
      await context.addInitScript(() => {
        // Remove webdriver traces
        delete Object.getPrototypeOf(navigator).webdriver;
        Object.defineProperty(navigator, 'webdriver', { get: () => undefined });

        // Realistic plugins (Chrome has these)
        Object.defineProperty(navigator, 'plugins', {
          get: () => {
            const makePlugin = (name, filename, description, mimeTypes) => {
              const plugin = Object.create(Plugin.prototype);
              Object.defineProperty(plugin, 'name', { value: name });
              Object.defineProperty(plugin, 'filename', { value: filename });
              Object.defineProperty(plugin, 'description', { value: description });
              Object.defineProperty(plugin, 'length', { value: mimeTypes.length });
              mimeTypes.forEach((mt, i) => { plugin[i] = mt; });
              return plugin;
            };
            return [
              makePlugin('PDF Viewer', 'internal-pdf-viewer', 'Portable Document Format', []),
              makePlugin('Chrome PDF Viewer', 'internal-pdf-viewer', 'Portable Document Format', []),
              makePlugin('Chromium PDF Viewer', 'internal-pdf-viewer', 'Portable Document Format', []),
            ];
          },
        });

        Object.defineProperty(navigator, 'languages', { get: () => ['sv-SE', 'sv', 'en-US', 'en'] });
        Object.defineProperty(navigator, 'hardwareConcurrency', { get: () => 8 });
        Object.defineProperty(navigator, 'deviceMemory', { get: () => 8 });
        Object.defineProperty(navigator, 'maxTouchPoints', { get: () => 0 });
        Object.defineProperty(navigator, 'platform', { get: () => 'Linux x86_64' });

        // Spoof chrome runtime
        window.chrome = {
          app: { isInstalled: false },
          runtime: {
            id: undefined,
            connect: () => {},
            sendMessage: () => {},
          },
        };

        // Permissions API
        const originalQuery = window.Permissions && window.Permissions.prototype.query;
        if (originalQuery) {
          window.Permissions.prototype.query = function (parameters) {
            return parameters.name === 'notifications'
              ? Promise.resolve({ state: Notification.permission })
              : originalQuery.apply(this, [parameters]);
          };
        }

        // Fix iframes
        const iframeDesc = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'contentWindow');
        if (iframeDesc) {
          Object.defineProperty(HTMLIFrameElement.prototype, 'contentWindow', {
            get() {
              const win = iframeDesc.get.call(this);
              try {
                if (win && win.navigator) {
                  Object.defineProperty(win.navigator, 'webdriver', { get: () => undefined });
                }
              } catch {}
              return win;
            },
          });
        }
      });

      // Load cookies
      const cookies = loadCookies();
      if (cookies.length > 0) {
        await context.addCookies(cookies);
        console.log(`  Loaded ${cookies.length} cookies`);
      }

      const page = await context.newPage();

      const total = await processPostnummer(page, postnummer, db);
      console.log(`Completed: ${postnummer} - ${total} records`);

      // Save updated cookies back (Playwright format → browser-extension-like format)
      try {
        const updatedCookies = await context.cookies();
        writeFileSync(COOKIES_FILE, JSON.stringify(updatedCookies, null, 4), 'utf-8');
        console.log(`  Saved ${updatedCookies.length} cookies`);
      } catch (err) {
        console.error(`  Cookie save error: ${err.message}`);
      }

      await browser.close();
    } catch (err) {
      console.error(`[ERROR] Browser: ${err.message}`);
      if (browser) {
        try { await browser.close(); } catch {}
      }
    }

    console.log('Waiting 30 seconds...');
    await sleep(30000);
  }
}

main().catch((err) => {
  console.error('Fatal:', err);
  process.exit(1);
});
