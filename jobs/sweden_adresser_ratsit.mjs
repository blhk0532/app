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

async function scrapeRatsitPersoner(url, row, connection) {
	console.log(`\nScraping: ${url} (${row.adress || ''}, ${row.postnummer || ''} ${row.postort || ''})`);

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

		const personerRows = await page.evaluate(() => {
			try {
				const result = [];

				const itemNodes = document.querySelectorAll('.tree-structure-result__item');

				for (const item of Array.from(itemNodes)) {
					const link = item.querySelector('a[href*="ratsit.se/"]');
					if (!link) {
						continue;
					}

					const nameNode = item.querySelector('.tree-structure-result__item-name');
					const rawName = (nameNode?.textContent || '').replace(/\s+/g, ' ').trim();

					if (!rawName) {
						continue;
					}

					const ageMatch = rawName.match(/,\s*(\d+)\s*$/);
					const alder = ageMatch ? parseInt(ageMatch[1], 10) : null;
					const personnamn = rawName.replace(/,\s*\d+\s*$/, '').trim();

					if (!personnamn) {
						continue;
					}

					const nameParts = personnamn.split(/\s+/).filter(Boolean);
					const fornamn = nameParts[0] || null;
					const efternamn = nameParts.length > 1 ? nameParts[nameParts.length - 1] : null;

					const addressNode = item.querySelector('.tree-structure-result__item-address');
					let adress = '';

					if (addressNode) {
						const cloned = addressNode.cloneNode(true);
						cloned.querySelectorAll('.search-list-name-address__city').forEach((cityNode) => {
							cityNode.remove();
						});

						adress = (cloned.textContent || '').replace(/\s+/g, ' ').trim();
					}

					let kon = null;
					let civilstand = null;

					const titleNodes = item.querySelectorAll('[title^="Är "]');

					for (const titleNode of Array.from(titleNodes)) {
						const title = (titleNode.getAttribute('title') || '').trim();

						if (!title) {
							continue;
						}

						if (/Är\s+(kvinna|man)/i.test(title) && !kon) {
							kon = title;
							continue;
						}

						if (!civilstand) {
							civilstand = title;
						}
					}

					result.push({
						adress,
						fornamn,
						efternamn,
						personnamn,
						kon,
						civilstand,
						alder,
						ratsit_link: link.href,
					});
				}

				return result;
			} catch (error) {
				console.error('Error in page evaluation:', error);
				return [];
			}
		});

		const personerMap = new Map();

		for (const personRow of personerRows) {
			const uniqueKey = `${personRow.adress}::${personRow.fornamn}::${personRow.efternamn}`;

			if (!personerMap.has(uniqueKey)) {
				personerMap.set(uniqueKey, personRow);
			}
		}

		const normalizedPostnummer = normalizePostnummer(row.postnummer);

		let attemptedUpserts = 0;
		let successfulUpserts = 0;

		for (const personRow of personerMap.values()) {
			if (!personRow.adress || !personRow.fornamn || !personRow.efternamn) {
				continue;
			}

			attemptedUpserts++;

			try {
				await connection.execute(
					`INSERT INTO sweden_personer
						(adress, postnummer, postort, fornamn, efternamn, personnamn, kon, civilstand, alder, kommun, ratsit_link, is_queue)
					 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)
					 ON DUPLICATE KEY UPDATE
						postnummer = VALUES(postnummer),
						postort = VALUES(postort),
						personnamn = VALUES(personnamn),
						kon = VALUES(kon),
						civilstand = VALUES(civilstand),
						alder = VALUES(alder),
						kommun = VALUES(kommun),
						ratsit_link = VALUES(ratsit_link)`,
					[
						personRow.adress,
						normalizedPostnummer,
						row.postort,
						personRow.fornamn,
						personRow.efternamn,
						personRow.personnamn,
						personRow.kon,
						personRow.civilstand,
						personRow.alder,
						row.kommun,
						personRow.ratsit_link,
					],
				);

				console.log(
					`  Upserted person ${personRow.personnamn} (${personRow.alder ?? 'n/a'} år)`,
				);
				successfulUpserts++;
			} catch (error) {
				console.error(
					`  Error processing person ${personRow.personnamn}:`,
					error.message,
				);
			}
		}

		return {
			found: personerMap.size,
			attemptedUpserts,
			successfulUpserts,
		};
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
	console.log('Starting Ratsit personer scrape from sweden_adresser...\n');

	const connection = await createDbConnection();

	try {
		const [adressRows] = await connection.execute(
			`SELECT id, adress, postnummer, postort, kommun, lan, ratsit_link
			 FROM sweden_adresser
			 WHERE ratsit_link IS NOT NULL AND ratsit_link != '' AND is_done = 0
			 ORDER BY id`,
		);

		console.log(`Found ${adressRows.length} adress rows to process.\n`);

		let successCount = 0;
		let failCount = 0;

		for (const [index, row] of adressRows.entries()) {
			console.log(
				`[${index + 1}/${adressRows.length}] Processing: ${row.adress || ''} (${row.postnummer || ''} ${row.postort || ''})`,
			);

			const scrapeResult = await scrapeRatsitPersoner(row.ratsit_link, row, connection);

			if (
				scrapeResult !== null
				&& scrapeResult.successfulUpserts === scrapeResult.attemptedUpserts
			) {
				await connection.execute(
					'UPDATE sweden_adresser SET is_queue = 0, is_done = 1 WHERE id = ?',
					[row.id],
				);

				console.log(
					`  ✓ Done. found=${scrapeResult.found}, saved=${scrapeResult.successfulUpserts}. Marked is_queue=0, is_done=1.\n`,
				);
				successCount++;
			} else {
				console.log(
					`  ✗ Failed. found=${scrapeResult?.found ?? 0}, attempted=${scrapeResult?.attemptedUpserts ?? 0}, saved=${scrapeResult?.successfulUpserts ?? 0}. Skipping is_done update.\n`,
				);
				failCount++;
			}
		}

		console.log('\nAll adress rows processed.');
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
