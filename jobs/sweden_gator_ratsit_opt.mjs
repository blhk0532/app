#!/usr/bin/env node

import mysql from 'mysql2/promise';
import { chromium } from 'playwright';

const MAX_CONCURRENCY = Math.max(1, Number.parseInt(process.env.SCRAPER_CONCURRENCY || '4', 10));

async function createDbPool() {
	return mysql.createPool({
		host: '127.0.0.1',
		port: '3306',
		user: 'root',
		password: '9JVQqZea1bWgqxbZuyZz',
		database: 'app_new',
		charset: 'utf8mb4',
		waitForConnections: true,
		connectionLimit: Math.max(4, MAX_CONCURRENCY + 2),
		queueLimit: 0,
	});
}

function normalizePostnummer(value) {
	return String(value || '').replace(/\D/g, '');
}

async function createBrowserContext() {
	const browser = await chromium.launch({
		headless: true,
		executablePath: '/usr/bin/google-chrome',
		args: [
			'--no-sandbox',
			'--disable-setuid-sandbox',
			'--disable-dev-shm-usage',
			'--disable-accelerated-2d-canvas',
			'--no-first-run',
			'--no-zygote',
			'--disable-gpu',
		],
	});

	const context = await browser.newContext({
		userAgent:
			'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
		viewport: { width: 1366, height: 768 },
		locale: 'sv-SE',
	});

	await context.setExtraHTTPHeaders({
		'Accept-Language': 'sv-SE,sv;q=0.9,en;q=0.8,en-US;q=0.7',
		Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
	});

	await context.route('**/*', (route) => {
		const type = route.request().resourceType();
		if (type === 'image' || type === 'font' || type === 'media' || type === 'stylesheet') {
			return route.abort();
		}

		return route.continue();
	});

	return { browser, context };
}

async function scrapeRatsitAdresser(url, row, pool, context) {
	console.log(`\nScraping: ${url} (${row.gata || ''}, ${row.postnummer || ''} ${row.postort || ''})`);

	let page = null;

	try {
		page = await context.newPage();

		await page.goto(url, {
			waitUntil: 'domcontentloaded',
			timeout: 30000,
		});

		await page.waitForSelector('a[href*="/personer/"]', { timeout: 10000 });
		await page.waitForTimeout(350);

		const adressRows = await page.evaluate(() => {
			try {
				const result = [];

				const allLinks = document.querySelectorAll('a[href*="/personer/"]');

				for (const link of Array.from(allLinks)) {
					const href = link.href;
					const text = (link.textContent || '').replace(/\s+/g, ' ').trim();

					const countFromText = text.match(/\((\d+)\)/)?.[1] || '';
					const countFromLi =
						link
							.closest('li')
							?.querySelector('.tree-structure__count')
							?.textContent?.replace(/[^\d]/g, '') || '';
					const countFromParent =
						link.parentElement
							?.querySelector('.tree-structure__count')
							?.textContent?.replace(/[^\d]/g, '') || '';

					const personer = parseInt(
						countFromLi || countFromParent || countFromText || '0',
						10,
					) || 0;

					if (personer <= 0) {
						continue;
					}

					const adress = text
						.replace(/\s*\(\d+\)\s*/g, ' ')
						.replace(/\d{3}\s*\d{2}/g, ' ')
						.replace(/\s+/g, ' ')
						.trim();

					if (!adress || adress.length < 2) {
						continue;
					}

					result.push({
						adress,
						personer,
						ratsit_link: href,
					});
				}

				return result;
			} catch (error) {
				console.error('Error in page evaluation:', error);
				return [];
			}
		});

		const adressMap = new Map();

		for (const adressRow of adressRows) {
			const existing = adressMap.get(adressRow.adress);

			if (!existing) {
				adressMap.set(adressRow.adress, {
					adress: adressRow.adress,
					personer: adressRow.personer,
					ratsit_link: adressRow.ratsit_link,
				});
			} else {
				existing.personer += adressRow.personer;
			}
		}

		const normalizedPostnummer = normalizePostnummer(row.postnummer);
		const [existingRows] = await pool.execute(
			`SELECT id, adress
			 FROM sweden_adresser
			 WHERE postnummer = ? AND postort = ? AND kommun = ?`,
			[normalizedPostnummer, row.postort, row.kommun],
		);

		const existingByAdress = new Map(existingRows.map((item) => [item.adress, item.id]));

		for (const adressRow of adressMap.values()) {
			try {
				const existingId = existingByAdress.get(adressRow.adress);

				if (existingId) {
					await pool.execute(
						`UPDATE sweden_adresser
						 SET lan = ?, personer = ?, ratsit_link = ?, is_queue = 1
						 WHERE id = ?`,
						[row.lan, adressRow.personer, adressRow.ratsit_link, existingId],
					);
				} else {
					await pool.execute(
						`INSERT INTO sweden_adresser (adress, postnummer, postort, kommun, lan, personer, ratsit_link, is_queue)
						 VALUES (?, ?, ?, ?, ?, ?, ?, 1)`,
						[
							adressRow.adress,
							normalizedPostnummer,
							row.postort,
							row.kommun,
							row.lan,
							adressRow.personer,
							adressRow.ratsit_link,
						],
					);
				}
			} catch (error) {
				console.error(`  Error processing adress ${adressRow.adress}:`, error.message);
			}
		}

		return adressMap.size;
	} catch (error) {
		console.error(`  Scraping error for ${url}:`, error.message);
		return null;
	} finally {
		if (page) {
			await page.close().catch(() => null);
		}
	}
}

async function main() {
	console.log(`Starting Ratsit adress scrape from sweden_gator with concurrency=${MAX_CONCURRENCY}...\n`);

	const pool = await createDbPool();
	const { browser, context } = await createBrowserContext();

	try {
		const [gatorRows] = await pool.execute(
			`SELECT id, gata, postnummer, postort, kommun, lan, ratsit_link
			 FROM sweden_gator
			 WHERE ratsit_link IS NOT NULL AND ratsit_link != '' AND is_done = 0
			 ORDER BY id`,
		);

		console.log(`Found ${gatorRows.length} gator rows to process.\n`);

		let successCount = 0;
		let failCount = 0;
		let cursor = 0;

		const worker = async (workerId) => {
			while (true) {
				const index = cursor;
				cursor += 1;

				if (index >= gatorRows.length) {
					return;
				}

				const row = gatorRows[index];
				console.log(
					`[W${workerId}] [${index + 1}/${gatorRows.length}] Processing: ${row.gata || ''} (${row.postnummer || ''} ${row.postort || ''})`,
				);

				const adresserCount = await scrapeRatsitAdresser(row.ratsit_link, row, pool, context);

				if (adresserCount !== null) {
					await pool.execute(
						'UPDATE sweden_gator SET adresser = ?, is_done = 1, is_queue = 0 WHERE id = ?',
						[adresserCount, row.id],
					);

					console.log(`[W${workerId}] ✓ Done id=${row.id}. adresser=${adresserCount}.`);
					successCount += 1;
				} else {
					console.log(`[W${workerId}] ✗ Failed id=${row.id}.`);
					failCount += 1;
				}
			}
		};

		const workers = Array.from({ length: Math.min(MAX_CONCURRENCY, gatorRows.length || 1) }, (_, idx) => worker(idx + 1));
		await Promise.all(workers);

		console.log('\nAll gator rows processed.');
		console.log(`  Success: ${successCount}`);
		console.log(`  Failed:  ${failCount}`);
	} finally {
		await context.close().catch(() => null);
		await browser.close().catch(() => null);
		await pool.end();
	}
}

main().catch((err) => {
	console.error('Fatal error:', err);
	process.exit(1);
});
