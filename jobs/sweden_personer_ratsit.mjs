#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import { chromium } from 'playwright';

async function createDbConnection() {
	return mysql.createConnection({
		host: '127.0.0.1',
		port: '3306',
		user: 'root',
		password: 'bkkbkk',
		database: 'app_new',
		charset: 'utf8mb4',
	});
}

function normalizePostnummer(value) {
	return String(value || '').replace(/\D/g, '');
}

function parseIntOrNull(value) {
	if (value === null || value === undefined) {
		return null;
	}

	const parsed = parseInt(String(value).replace(/[^\d-]/g, ''), 10);

	return Number.isNaN(parsed) ? null : parsed;
}

function parseCliFilters(argv) {
	const args = Array.isArray(argv) ? argv : [];
	let postort = null;
	let postnummer = null;
	let kommun = null;
	let lan = null;

	for (let i = 0; i < args.length; i++) {
		const arg = args[i];

		if (arg.startsWith('--postort=')) {
			postort = arg.slice('--postort='.length).trim() || null;
			continue;
		}

		if (arg === '--postort' && args[i + 1]) {
			postort = String(args[i + 1]).trim() || null;
			i++;
			continue;
		}

		if (arg.startsWith('--postnummer=')) {
			postnummer = normalizePostnummer(arg.slice('--postnummer='.length));
			postnummer = postnummer || null;
			continue;
		}

		if (arg === '--postnummer' && args[i + 1]) {
			postnummer = normalizePostnummer(args[i + 1]);
			postnummer = postnummer || null;
			i++;
			continue;
		}

		if (arg.startsWith('--kommun=')) {
			kommun = arg.slice('--kommun='.length).trim() || null;
			continue;
		}

		if (arg === '--kommun' && args[i + 1]) {
			kommun = String(args[i + 1]).trim() || null;
			i++;
			continue;
		}

		if (arg.startsWith('--lan=')) {
			lan = arg.slice('--lan='.length).trim() || null;
			continue;
		}

		if (arg === '--lan' && args[i + 1]) {
			lan = String(args[i + 1]).trim() || null;
			i++;
		}
	}

	return { postort, postnummer, kommun, lan };
}

function loadRatsitCookies() {
	const cookieCandidates = [
		path.join(process.cwd(), 'cookies', 'ratsit.json'),
		path.join(process.cwd(), 'jobs', 'cookies', 'ratsit.json'),
		path.join(process.cwd(), '..', 'cookies', 'ratsit.json'),
		path.join(path.dirname(new URL(import.meta.url).pathname), '..', 'cookies', 'ratsit.json'),
	];

	for (const candidate of cookieCandidates) {
		try {
			if (!fs.existsSync(candidate)) {
				continue;
			}

			const cookiesContent = fs.readFileSync(candidate, 'utf8');
			const parsed = JSON.parse(cookiesContent);

			if (!Array.isArray(parsed) || parsed.length === 0) {
				continue;
			}

			const normalizedCookies = parsed.map((cookie) => {
				const normalizedCookie = { ...cookie };

				if (normalizedCookie.sameSite) {
					const sameSite = String(normalizedCookie.sameSite).toLowerCase();
					if (sameSite === 'lax') {
						normalizedCookie.sameSite = 'Lax';
					} else if (sameSite === 'strict') {
						normalizedCookie.sameSite = 'Strict';
					} else if (sameSite === 'none' || sameSite === 'no_restriction') {
						normalizedCookie.sameSite = 'None';
					} else {
						normalizedCookie.sameSite = 'Lax';
					}
				} else {
					normalizedCookie.sameSite = 'Lax';
				}

				return normalizedCookie;
			});

			console.log(`Loaded ${normalizedCookies.length} cookie(s) from ${candidate}`);
			return normalizedCookies;
		} catch {
			continue;
		}
	}

	console.log('Warning: No valid cookies loaded from ratsit.json candidates');
	return [];
}

class SwedenPersonerRatsitScraper {
	async extractRatsitTextAfterLabel(page, labelText) {
		try {
			const labelSelector = `span.color--gray5:has-text("${labelText}")`;
			const labelElement = await page.$(labelSelector);

			if (!labelElement) {
				return null;
			}

			const result = await labelElement.evaluate((el, label) => {
				const p = el.closest('p');
				if (!p) {
					return null;
				}

				const link = p.querySelector('a');
				if (link) {
					return link.textContent?.trim() || null;
				}

				let text = p.innerText;

				if (label === 'Personnummer:') {
					text = text.replace(/Personnummer:\s*/gi, '').trim();
					return text;
				}

				return text;
			}, labelText);

			if (!result) {
				return null;
			}

			let text = result;
			if (!labelText.includes('Personnummer')) {
				text = text.replace(labelText, '').trim();
			}

			text = text.replace(/\s*Visas för medlemmar.*/gi, '');

			return text || null;
		} catch {
			return null;
		}
	}

	async extractRatsitTelefon(page) {
		try {
			const labelSelector = 'span.color--gray5:has-text("Telefon:")';
			const labelElement = await page.$(labelSelector);

			if (!labelElement) {
				return null;
			}

			const telHref = await labelElement.evaluate((el) => {
				const p = el.closest('p');
				if (!p) {
					return null;
				}

				const telLink = p.querySelector('a[href^="tel:"]');
				return telLink ? telLink.getAttribute('href') : null;
			});

			if (telHref && telHref.startsWith('tel:')) {
				return telHref.replace('tel:', '');
			}

			return null;
		} catch {
			return null;
		}
	}

	async extractRatsitCivilstand(page) {
		try {
			const heading = await page.$('h2:has-text("Civilstånd")');
			if (!heading) {
				return null;
			}

			const fullText = await heading.evaluate((el) => {
				const parent = el.parentElement;
				if (!parent) {
					return null;
				}

				return parent.textContent?.trim() || null;
			});

			if (!fullText) {
				return null;
			}

			return fullText.replace(/^Civilstånd\s*/, '').trim() || null;
		} catch {
			return null;
		}
	}

	async extractRatsitKommunLink(page) {
		try {
			const labelSelector = 'span.color--gray5:has-text("Kommun:")';
			const labelElement = await page.$(labelSelector);

			if (!labelElement) {
				return null;
			}

			const kommunLink = await labelElement.evaluate((el) => {
				const p = el.closest('p');
				if (!p) {
					return null;
				}

				const link = p.querySelector('a[href]');
				return link ? link.getAttribute('href') : null;
			});

			if (!kommunLink) {
				return null;
			}

			if (kommunLink.startsWith('/')) {
				return `https://www.ratsit.se${kommunLink}`;
			}

			return kommunLink;
		} catch {
			return null;
		}
	}

	async extractSectionTelefonnummer(page) {
		try {
			const numbers = await page.evaluate(() => {
				const out = [];

				function collectFromNode(node) {
					if (!node) {
						return;
					}

					if (node.classList && node.classList.contains('d-none')) {
						return;
					}

					if (node.matches && node.matches('p.row')) {
						node.querySelectorAll('span.text-nowrap').forEach((span) => {
							const txt = (span.textContent || '').trim();
							if (txt) {
								out.push(txt);
							}
						});
						return;
					}

					const ps = node.querySelectorAll && node.querySelectorAll('p.row');
					if (ps && ps.length) {
						ps.forEach((p) => {
							if (p.classList && p.classList.contains('d-none')) {
								return;
							}

							p.querySelectorAll('span.text-nowrap').forEach((span) => {
								const txt = (span.textContent || '').trim();
								if (txt) {
									out.push(txt);
								}
							});
						});
					}
				}

				const headers = Array.from(document.querySelectorAll('h3, h4'));
				for (const h of headers) {
					if (!h.textContent) {
						continue;
					}

					if (/telefon/i.test(h.textContent)) {
						let node = h.nextElementSibling;
						while (node && !['H3', 'H4'].includes(node.tagName)) {
							collectFromNode(node);
							node = node.nextElementSibling;
						}

						if (out.length) {
							return Array.from(new Set(out));
						}
					}
				}

				document.querySelectorAll('p.row').forEach((p) => {
					if (p.classList && p.classList.contains('d-none')) {
						return;
					}

					p.querySelectorAll('span.text-nowrap').forEach((span) => {
						const txt = (span.textContent || '').trim();
						if (txt) {
							out.push(txt);
						}
					});
				});

				return Array.from(new Set(out));
			});

			const cleaned = Array.isArray(numbers)
				? numbers
					.map((value) => (value || '').replace(/\s+/g, ' ').trim())
					.filter((value) => /(^0\d{2,3}[\- \d]{6,}|^(\+|00)46[\- \d]{7,}|^0\d{6,})/.test(value))
				: [];

			return cleaned;
		} catch {
			return [];
		}
	}

	async extractSectionListStrong(page, headerText) {
		try {
			const header = await page.$(`h3:has-text("${headerText}")`);
			if (!header) {
				return [];
			}

			const container = await header.evaluateHandle((el) => el.parentElement?.parentElement);
			const items = await page.evaluate((root) => {
				if (!root) {
					return [];
				}

				const arr = [];
				root.querySelectorAll('strong').forEach((el) => {
					const text = el.textContent?.trim();
					if (!text) {
						return;
					}

					let link = null;
					let linkElement = el.querySelector('a[href]');
					if (!linkElement) {
						linkElement = el.closest('a[href]');
					}

					if (linkElement) {
						link = linkElement.getAttribute('href');
						if (link && link.startsWith('/')) {
							link = `https://www.ratsit.se${link}`;
						}
					}

					arr.push({ text, link });
				});

				return arr;
			}, container);

			return Array.isArray(items) ? items : [];
		} catch {
			return [];
		}
	}

	async extractSectionForetag(page) {
		try {
			const header = await page.$('h3:has-text("Företag")');
			if (!header) {
				return [];
			}

			const container = await header.evaluateHandle((el) => el.parentElement?.querySelector('table'));
			const rows = await page.evaluate((tbl) => {
				const out = [];
				if (!tbl) {
					return out;
				}

				tbl.querySelectorAll('tbody tr').forEach((tr) => {
					const cells = Array.from(tr.querySelectorAll('td')).map((td) => td.textContent?.replace(/\s+/g, ' ').trim() || '');
					const text = cells.filter(Boolean).join(' | ');
					if (text) {
						out.push({ text });
					}
				});

				return out;
			}, container);

			return Array.isArray(rows) ? rows : [];
		} catch {
			return [];
		}
	}

	async extractSectionSimpleTable(page, headerText) {
		try {
			const header = await page.$(`h3:has-text("${headerText}")`);
			if (!header) {
				return [];
			}

			const table = await header.evaluateHandle((el) => el.parentElement?.querySelector('table'));
			const rows = await page.evaluate((tbl) => {
				const out = [];
				if (!tbl) {
					return out;
				}

				tbl.querySelectorAll('tbody tr').forEach((tr) => {
					const cells = Array.from(tr.querySelectorAll('td, th')).map((td) => td.textContent?.replace(/\s+/g, ' ').trim() || '');
					const text = cells.filter(Boolean).join(' | ');
					if (text) {
						out.push({ text });
					}
				});

				return out;
			}, table);

			return Array.isArray(rows) ? rows : [];
		} catch {
			return [];
		}
	}

	async extractLatLongText(page) {
		try {
			const el = await page.$('div:has-text("Latitud:")');
			if (!el) {
				return null;
			}

			return await el.innerText();
		} catch {
			return null;
		}
	}

	async extractGoogleMapsLink(page) {
		try {
			const linkEl = await page.$('a[href*="maps.google.com"][data-ga-event-label*="Navigera"]');
			if (!linkEl) {
				return null;
			}

			return await linkEl.getAttribute('href');
		} catch {
			return null;
		}
	}

	async extractStreetViewLink(page) {
		try {
			const linkEl = await page.$('a[href*="map_action=pano"][href*="viewpoint="]');
			if (!linkEl) {
				return null;
			}

			return await linkEl.getAttribute('href');
		} catch {
			return null;
		}
	}

	async scrapePersonPage(page, link) {
		await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 60000 });
		await page.waitForTimeout(1500);

		await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
		await page.waitForTimeout(1000);

		const personData = {
			ps_personnummer: await this.extractRatsitTextAfterLabel(page, 'Personnummer:'),
			ps_alder: await this.extractRatsitTextAfterLabel(page, 'Ålder:'),
			ps_fodelsedag: await this.extractRatsitTextAfterLabel(page, 'Födelsedag:'),
			ps_kon: await this.extractRatsitTextAfterLabel(page, 'Juridiskt kön:'),
			ps_telefon: await this.extractRatsitTelefon(page),
			ps_personnamn: await this.extractRatsitTextAfterLabel(page, 'Personnamn:'),
			ps_fornamn: await this.extractRatsitTextAfterLabel(page, 'Förnamn:'),
			ps_efternamn: await this.extractRatsitTextAfterLabel(page, 'Efternamn:'),
			bo_gatuadress: await this.extractRatsitTextAfterLabel(page, 'Gatuadress:'),
			bo_postnummer: await this.extractRatsitTextAfterLabel(page, 'Postnummer:'),
			bo_postort: await this.extractRatsitTextAfterLabel(page, 'Postort:'),
			bo_forsamling: await this.extractRatsitTextAfterLabel(page, 'Församling:'),
			bo_kommun: await this.extractRatsitTextAfterLabel(page, 'Kommun:'),
			kommun_ratsit: await this.extractRatsitKommunLink(page),
			bo_lan: await this.extractRatsitTextAfterLabel(page, 'Län:'),
			ps_civilstand: await this.extractRatsitCivilstand(page),
			adressandring: await this.extractRatsitTextAfterLabel(page, 'Adressändring:'),
			stjarntacken: await this.extractRatsitTextAfterLabel(page, 'Stjärntecken:'),
			bo_agandeform: await this.extractRatsitTextAfterLabel(page, 'Ägandeform:'),
			bo_bostadstyp: await this.extractRatsitTextAfterLabel(page, 'Bostadstyp:'),
			bo_boarea: await this.extractRatsitTextAfterLabel(page, 'Boarea:'),
			bo_byggar: await this.extractRatsitTextAfterLabel(page, 'Byggår:'),
			ratsit_se: link,
		};

		personData.telefonnummer = await this.extractSectionTelefonnummer(page);

		const personer = await this.extractSectionListStrong(page, 'Personer');
		if (personer.length) {
			personData.bo_personer = personer;
		}

		const foretag = await this.extractSectionForetag(page);
		if (foretag.length) {
			personData.bo_foretag = foretag;
		}

		const grannar = await this.extractSectionSimpleTable(page, 'Grannar');
		if (grannar.length) {
			personData.bo_grannar = grannar;
		}

		const fordon = await this.extractSectionSimpleTable(page, 'Fordon');
		if (fordon.length) {
			personData.bo_fordon = fordon;
		}

		const hundar = await this.extractSectionSimpleTable(page, 'Hundar');
		if (hundar.length) {
			personData.bo_hundar = hundar;
		}

		const bolag = await this.extractSectionSimpleTable(page, 'Bolagsengagemang');
		if (bolag.length) {
			personData.ps_bolagsengagemang = bolag;
		}

		const latLongText = await this.extractLatLongText(page);
		if (latLongText) {
			const match = latLongText.match(/Latitud:\s*([0-9.+-]+).*Longitud:\s*([0-9.+-]+)/i);
			if (match) {
				personData.latitud = match[1];
				personData.bo_longitude = match[2];
			}
		}

		personData.google_maps = await this.extractGoogleMapsLink(page);
		personData.google_streetview = await this.extractStreetViewLink(page);

		return personData;
	}
}

async function processPersonRow(scraper, row, connection) {
	console.log(`\nScraping: ${row.ratsit_link} (${row.personnamn || `${row.fornamn || ''} ${row.efternamn || ''}`.trim()})`);

	let browser = null;

	try {
		browser = await chromium.launch({
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

		const cookies = loadRatsitCookies();

		const context = await browser.newContext({
			userAgent:
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
			viewport: { width: 1920, height: 1080 },
			locale: 'sv-SE',
		});

		if (cookies.length > 0) {
			await context.addCookies(cookies);
		}

		const page = await context.newPage();

		await page.setExtraHTTPHeaders({
			'Accept-Language': 'sv-SE,sv;q=0.9,en;q=0.8,en-US;q=0.7',
			Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
		});

		const scraped = await scraper.scrapePersonPage(page, row.ratsit_link);

		const extractedPostnummer = normalizePostnummer(scraped.bo_postnummer || row.postnummer);
		const extractedAlder = parseIntOrNull(scraped.ps_alder);
		const telefonnummer = Array.isArray(scraped.telefonnummer) && scraped.telefonnummer.length
			? scraped.telefonnummer
			: null;
		const personerCount = Array.isArray(scraped.bo_personer) ? scraped.bo_personer.length : null;

		const agandeform = scraped.bo_agandeform || null;
		const bostadstyp = scraped.bo_bostadstyp || null;

		const isHus = Boolean(
			agandeform
			&& /(tomträtt|äganderätt)/i.test(agandeform)
			&& !/(lägenhet)/i.test(bostadstyp || ''),
		);

		const ratsitData = {
			fodelsedag: scraped.ps_fodelsedag || null,
			stjarntacken: scraped.stjarntacken || null,
			forsamling: scraped.bo_forsamling || null,
			lan: scraped.bo_lan || null,
			kommun_ratsit_link: scraped.kommun_ratsit || null,
			foretag: scraped.bo_foretag || [],
			grannar: scraped.bo_grannar || [],
			fordon: scraped.bo_fordon || [],
			hundar: scraped.bo_hundar || [],
			bolagsengagemang: scraped.ps_bolagsengagemang || [],
			latitud: scraped.latitud || null,
			longitude: scraped.bo_longitude || null,
			google_maps: scraped.google_maps || null,
			google_streetview: scraped.google_streetview || null,
			raw_personer_section: scraped.bo_personer || [],
		};

		await connection.execute(
			`UPDATE sweden_personer
			 SET
				personnummer = COALESCE(?, personnummer),
				telefon = COALESCE(?, telefon),
				telefonnummer = COALESCE(?, telefonnummer),
				adressandring = COALESCE(?, adressandring),
				bostadstyp = COALESCE(?, bostadstyp),
				agandeform = COALESCE(?, agandeform),
				boarea = COALESCE(?, boarea),
				byggar = COALESCE(?, byggar),
				personer = COALESCE(?, personer),
				alder = COALESCE(?, alder),
				kon = COALESCE(?, kon),
				civilstand = COALESCE(?, civilstand),
				fornamn = COALESCE(?, fornamn),
				efternamn = COALESCE(?, efternamn),
				personnamn = COALESCE(?, personnamn),
				adress = COALESCE(?, adress),
				postnummer = COALESCE(?, postnummer),
				postort = COALESCE(?, postort),
				kommun = COALESCE(?, kommun),
				ratsit_data = ?,
				is_hus = ?,
				is_queue = 1,
				is_done = 0
			 WHERE id = ?`,
			[
				scraped.ps_personnummer || null,
				scraped.ps_telefon || null,
				telefonnummer ? JSON.stringify(telefonnummer) : null,
				scraped.adressandring || null,
				bostadstyp,
				agandeform,
				scraped.bo_boarea || null,
				scraped.bo_byggar || null,
				personerCount,
				extractedAlder,
				scraped.ps_kon || null,
				scraped.ps_civilstand || null,
				scraped.ps_fornamn || null,
				scraped.ps_efternamn || null,
				scraped.ps_personnamn || null,
				scraped.bo_gatuadress || null,
				extractedPostnummer || null,
				scraped.bo_postort || null,
				scraped.bo_kommun || null,
				JSON.stringify(ratsitData),
				isHus ? 1 : 0,
				row.id,
			],
		);

		console.log(
			`  ✓ Updated ${scraped.ps_personnamn || row.personnamn || row.id} (personnummer=${scraped.ps_personnummer || 'n/a'}, personer=${personerCount ?? 'n/a'}, is_hus=${isHus ? 1 : 0})`,
		);

		return true;
	} catch (error) {
		console.error(`  ✗ Error processing ${row.id}:`, error.message);
		return false;
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}

async function main() {
	console.log('Starting Ratsit detail enrichment from sweden_personer...\n');
	const filters = parseCliFilters(process.argv.slice(2));

	const connection = await createDbConnection();
	const scraper = new SwedenPersonerRatsitScraper();

	try {
		const whereClauses = [
			`ratsit_link IS NOT NULL`,
			`ratsit_link != ''`,
			`is_done = 0`,
			`is_queue = 1`,
		];
		const queryParams = [];

		if (filters.postort) {
			whereClauses.push('postort = ?');
			queryParams.push(filters.postort);
		}

		if (filters.postnummer) {
			whereClauses.push('postnummer = ?');
			queryParams.push(filters.postnummer);
		}

		if (filters.kommun) {
			whereClauses.push('kommun = ?');
			queryParams.push(filters.kommun);
		}

		if (filters.lan) {
			whereClauses.push('lan = ?');
			queryParams.push(filters.lan);
		}

		const query = `SELECT id, adress, postnummer, postort, kommun, fornamn, efternamn, personnamn, ratsit_link
			 FROM sweden_personer
			 WHERE ${whereClauses.join(' AND ')}
			 ORDER BY id`;

		const [rows] = await connection.execute(query, queryParams);

		if (filters.postort || filters.postnummer || filters.kommun || filters.lan) {
			console.log(`Applied filters: postort=${filters.postort || '-'} postnummer=${filters.postnummer || '-'} kommun=${filters.kommun || '-'} lan=${filters.lan || '-'}`);
		}

		console.log(`Found ${rows.length} person rows to process.\n`);

		let successCount = 0;
		let failCount = 0;

		for (const [index, row] of rows.entries()) {
			console.log(
				`[${index + 1}/${rows.length}] Processing: ${row.personnamn || `${row.fornamn || ''} ${row.efternamn || ''}`.trim()} (${row.postnummer || ''} ${row.postort || ''})`,
			);

			const ok = await processPersonRow(scraper, row, connection);
			if (ok) {
				successCount++;
			} else {
				failCount++;
			}
		}

		console.log('\nAll sweden_personer rows processed.');
		console.log(`  Success: ${successCount}`);
		console.log(`  Failed:  ${failCount}`);
	} finally {
		await connection.end();
	}
}

main().catch((err) => {
	console.error('Fatal error:', err);
	process.exit(1);
});
