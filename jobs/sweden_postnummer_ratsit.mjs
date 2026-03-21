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

async function scrapeRatsitGator(url, row, connection) {
	console.log(`\nScraping: ${url} (${row.post_nummer} ${row.post_ort || ''})`);

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

		const gatorRows = await page.evaluate(() => {
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

					const gata = text
						.replace(/\s*\(\d+\)\s*/g, ' ')
						.replace(/\d{3}\s*\d{2}/g, ' ')
						.replace(/\s+/g, ' ')
						.trim();

					if (!gata || gata.length < 2) {
						continue;
					}

					result.push({
						gata,
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

		const gatorMap = new Map();

		for (const gatorRow of gatorRows) {
			const existing = gatorMap.get(gatorRow.gata);

			if (!existing) {
				gatorMap.set(gatorRow.gata, {
					gata: gatorRow.gata,
					personer: gatorRow.personer,
					ratsit_link: gatorRow.ratsit_link,
				});
			} else {
				existing.personer += gatorRow.personer;
			}
		}

		const normalizedPostnummer = normalizePostnummer(row.post_nummer);

		for (const gataRow of gatorMap.values()) {
			try {
				const [existingRows] = await connection.execute(
					`SELECT id
					 FROM sweden_gator
					 WHERE gata = ? AND postnummer = ? AND postort = ? AND kommun = ?
					 LIMIT 1`,
					[
						gataRow.gata,
						normalizedPostnummer,
						row.post_ort,
						row.kommun,
					],
				);

				if (existingRows.length > 0) {
					await connection.execute(
						`UPDATE sweden_gator
						 SET lan = ?, personer = ?, ratsit_link = ?, is_queue = 1
						 WHERE id = ?`,
						[
							row.lan,
							gataRow.personer,
							gataRow.ratsit_link,
							existingRows[0].id,
						],
					);
				} else {
					await connection.execute(
						`INSERT INTO sweden_gator (gata, postnummer, postort, kommun, lan, personer, ratsit_link, is_queue)
						 VALUES (?, ?, ?, ?, ?, ?, ?, 1)`,
						[
							gataRow.gata,
							normalizedPostnummer,
							row.post_ort,
							row.kommun,
							row.lan,
							gataRow.personer,
							gataRow.ratsit_link,
						],
					);
				}

				console.log(
					`  Upserted gata ${gataRow.gata} (${gataRow.personer} personer)`,
				);
			} catch (error) {
				console.error(`  Error processing gata ${gataRow.gata}:`, error.message);
			}
		}

		return gatorMap.size;
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
	console.log('Starting Ratsit gator scrape from sweden_postnummer...\n');

	const connection = await createDbConnection();

	try {
		const [postnummerRows] = await connection.execute(
			`SELECT id, post_nummer, post_ort, kommun, lan, ratsit_link
			 FROM sweden_postnummer
			 WHERE ratsit_link IS NOT NULL AND ratsit_link != '' AND is_done = 0
			 ORDER BY id`,
		);

		console.log(`Found ${postnummerRows.length} postnummer rows to process.\n`);

		let successCount = 0;
		let failCount = 0;

		for (const [index, row] of postnummerRows.entries()) {
			console.log(
				`[${index + 1}/${postnummerRows.length}] Processing: ${row.post_nummer} ${row.post_ort || ''} (${row.kommun || ''})`,
			);

			const gatorCount = await scrapeRatsitGator(row.ratsit_link, row, connection);

			if (gatorCount !== null) {
				await connection.execute(
					'UPDATE sweden_postnummer SET gator = ?, is_done = 1 WHERE id = ?',
					[gatorCount, row.id],
				);

				console.log(`  ✓ Done. gator=${gatorCount}. Marked is_done=1.\n`);
				successCount++;
			} else {
				console.log('  ✗ Failed. Skipping is_done update.\n');
				failCount++;
			}
		}

		console.log('\nAll postnummer rows processed.');
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
