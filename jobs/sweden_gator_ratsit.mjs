#!/usr/bin/env node

import mysql from 'mysql2/promise';
import { chromium } from 'playwright';

async function createDbConnection() {
	return mysql.createConnection({
		host: '127.0.0.1',
		port: '3306',
		user: 'root',
		password: 'bkkbkk',
		database: 'nordic_new',
		charset: 'utf8mb4',
	});
}

function normalizePostnummer(value) {
	return String(value || '').replace(/\D/g, '');
}

async function scrapeRatsitAdresser(url, row, connection) {
	console.log(`\nScraping: ${url} (${row.gata || ''}, ${row.postnummer || ''} ${row.postort || ''})`);

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

		const context = await browser.newContext({
			userAgent:
				'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
			viewport: { width: 1920, height: 1080 },
			locale: 'sv-SE',
		});

		const page = await context.newPage();

		await page.setExtraHTTPHeaders({
			'Accept-Language': 'sv-SE,sv;q=0.9,en;q=0.8,en-US;q=0.7',
			Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
		});

		await page.goto(url, {
			waitUntil: 'networkidle',
			timeout: 30000,
		});

		await page.waitForTimeout(5000);
		await page.waitForTimeout(3000);

		await page.waitForFunction(
			() => {
				return document.body && document.body.innerHTML.length > 1000;
			},
			{ timeout: 10000 },
		);

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

		for (const adressRow of adressMap.values()) {
			try {
				const [existingRows] = await connection.execute(
					`SELECT id
					 FROM sweden_adresser
					 WHERE adress = ? AND postnummer = ? AND postort = ? AND kommun = ?
					 LIMIT 1`,
					[
						adressRow.adress,
						normalizedPostnummer,
						row.postort,
						row.kommun,
					],
				);

				if (existingRows.length > 0) {
					await connection.execute(
						`UPDATE sweden_adresser
						 SET lan = ?, personer = ?, ratsit_link = ?, is_queue = 1
						 WHERE id = ?`,
						[
							row.lan,
							adressRow.personer,
							adressRow.ratsit_link,
							existingRows[0].id,
						],
					);
				} else {
					await connection.execute(
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

				console.log(
					`  Upserted adress ${adressRow.adress} (${adressRow.personer} personer)`,
				);
			} catch (error) {
				console.error(`  Error processing adress ${adressRow.adress}:`, error.message);
			}
		}

		return adressMap.size;
	} catch (error) {
		console.error(`  Scraping error for ${url}:`, error.message);
		return null;
	} finally {
		if (browser) {
			await browser.close();
		}
	}
}

async function main() {
	console.log('Starting Ratsit adress scrape from sweden_gator...\n');

	const connection = await createDbConnection();

	try {
		const [gatorRows] = await connection.execute(
			`SELECT id, gata, postnummer, postort, kommun, lan, ratsit_link
			 FROM sweden_gator
			 WHERE ratsit_link IS NOT NULL AND ratsit_link != '' AND is_done = 0
			 ORDER BY id`,
		);

		console.log(`Found ${gatorRows.length} gator rows to process.\n`);

		let successCount = 0;
		let failCount = 0;

		for (const [index, row] of gatorRows.entries()) {
			console.log(
				`[${index + 1}/${gatorRows.length}] Processing: ${row.gata || ''} (${row.postnummer || ''} ${row.postort || ''})`,
			);

			const adresserCount = await scrapeRatsitAdresser(row.ratsit_link, row, connection);

			if (adresserCount !== null) {
				await connection.execute(
					'UPDATE sweden_gator SET adresser = ?, is_done = 1, is_queue = 0 WHERE id = ?',
					[adresserCount, row.id],
				);

				console.log(`  ✓ Done. adresser=${adresserCount}. Marked is_done=1.\n`);
				successCount++;
			} else {
				console.log('  ✗ Failed. Skipping is_done update.\n');
				failCount++;
			}
		}

		console.log('\nAll gator rows processed.');
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
