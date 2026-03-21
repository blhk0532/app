#!/usr/bin/env node

/**
 * Hitta.se + Ratsit.se combined scraper script
 * Scrapes person data from hitta.se and Ratsit.se
 * Saves Hitta data to hitta_se table
 * Saves Ratsit data to ratsit_data table
 * Saves combined data to private_data table (only when both sources have data)
 */

import { program } from "commander";
import fs from "fs/promises";
import fsSync from "fs";
import path from "path";
import { URL, fileURLToPath } from "url";
import { chromium } from "playwright";
import { spawn } from "child_process";
import mysql from "mysql2/promise";
import { closeSwedenPersonPool, syncSwedenPersonFromHitta, syncSwedenPersonFromRatsit } from './sweden_personer_sync.mjs';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
loadEnvFile(path.resolve(scriptDir, "..", ".env"));

function loadEnvFile(envPath) {
    if (!fsSync.existsSync(envPath)) {
        return;
    }

    const contents = fsSync.readFileSync(envPath, "utf8");
    for (const rawLine of contents.split("\n")) {
        const line = rawLine.trim();
        if (!line || line.startsWith("#")) {
            continue;
        }

        const eqIndex = line.indexOf("=");
        if (eqIndex === -1) {
            continue;
        }

        const key = line.slice(0, eqIndex).trim();
        let value = line.slice(eqIndex + 1).trim();

        if (
            (value.startsWith('"') && value.endsWith('"')) ||
            (value.startsWith("'") && value.endsWith("'"))
        ) {
            value = value.slice(1, -1);
        }

        if (!(key in process.env)) {
            process.env[key] = value;
        }
    }
}

class HittaRatsitScraper {
    constructor(api_url, api_token) {
        this.api_url =
            api_url ||
            process.env.APP_URL ||
            process.env.APP_URL;
        this.api_token = api_token || process.env.LARAVEL_API_TOKEN;

        this.data_dir = path.join(process.cwd(), "scripts", "data");
        this.results = [];
        this.base_url = "https://www.hitta.se";
        this.log_dir = path.resolve(scriptDir, "..", "storage", "logs");
        this.log_file =
            process.env.RATSIT_LOG_FILE ||
            path.join(this.log_dir, "ratsit.log");

        this.dbPool = null;

        // Ensure data directory exists
        fs.mkdir(this.data_dir, { recursive: true }).catch(() => {});
        fsSync.mkdirSync(this.log_dir, { recursive: true });

        const originalLog = console.log;
        console.log = (...args) => {
            originalLog(...args);
            try {
                fsSync.appendFileSync(
                    this.log_file,
                    `${new Date().toISOString()} ${args.join(" ")}\n`,
                );
            } catch {
                // Ignore logging failures
            }
        };

        const originalError = console.error;
        console.error = (...args) => {
            originalError(...args);
            try {
                fsSync.appendFileSync(
                    this.log_file,
                    `${new Date().toISOString()} ${args.join(" ")}\n`,
                );
            } catch {
                // Ignore logging failures
            }
        };
    }

    async getDbPool() {
        if (this.dbPool) {
            return this.dbPool;
        }

        const database = process.env.DB_DATABASE;
        const user = process.env.DB_USERNAME;
        const password = process.env.DB_PASSWORD || "";
        const host = process.env.DB_HOST || "127.0.0.1";
        const port = process.env.DB_PORT
            ? parseInt(process.env.DB_PORT, 10)
            : 3306;
        const socketPath = process.env.DB_SOCKET || undefined;

        if (!database || !user) {
            throw new Error("Missing DB_DATABASE or DB_USERNAME in .env");
        }

        const config = {
            user,
            password,
            database,
            charset: "utf8mb4",
            waitForConnections: true,
            connectionLimit: 5,
            queueLimit: 0,
        };

        if (socketPath) {
            config.socketPath = socketPath;
        } else {
            config.host = host;
            config.port = port;
        }

        this.dbPool = mysql.createPool(config);
        console.log(`✓ Connected to MySQL database: ${database}`);
        return this.dbPool;
    }

    async saveRatsitToDatabase(ratsitData) {
        /**
         * Save Ratsit data to ratsit_data table (unprefixed schema)
         * Uses INSERT or UPDATE based on existing record
         */
        try {
            const db = await this.getDbPool();

            // Prepare data for database insertion (matching new ratsit_data schema - no prefixes)
            const dbData = {
                gatuadress: ratsitData.bo_gatuadress || null,
                postnummer: ratsitData.bo_postnummer || null,
                postort: ratsitData.bo_postort || null,
                forsamling: ratsitData.bo_forsamling || null,
                kommun: ratsitData.bo_kommun || null,
                lan: ratsitData.bo_lan || null,
                adressandring: ratsitData.adressandring || null,
                telfonnummer: Array.isArray(ratsitData.telefonnummer)
                    ? JSON.stringify(ratsitData.telefonnummer)
                    : "[]",
                stjarntacken: ratsitData.stjarntacken || null,
                fodelsedag: ratsitData.ps_fodelsedag || null,
                personnummer: ratsitData.ps_personnummer || null,
                alder: ratsitData.ps_alder || null,
                kon: ratsitData.ps_kon || null,
                civilstand: ratsitData.ps_civilstand || null,
                fornamn: ratsitData.ps_fornamn || null,
                efternamn: ratsitData.ps_efternamn || null,
                personnamn: ratsitData.ps_personnamn || null,
                telefon: Array.isArray(ratsitData.ps_telefon)
                    ? JSON.stringify(ratsitData.ps_telefon)
                    : "[]",
                agandeform: ratsitData.bo_agandeform || null,
                bostadstyp: ratsitData.bo_bostadstyp || null,
                boarea: ratsitData.bo_boarea || null,
                byggar: ratsitData.bo_byggar || null,
                personer: Array.isArray(ratsitData.bo_personer)
                    ? JSON.stringify(ratsitData.bo_personer)
                    : "[]",
                foretag: Array.isArray(ratsitData.bo_foretag)
                    ? JSON.stringify(ratsitData.bo_foretag)
                    : "[]",
                grannar: Array.isArray(ratsitData.bo_grannar)
                    ? JSON.stringify(ratsitData.bo_grannar)
                    : "[]",
                fordon: Array.isArray(ratsitData.bo_fordon)
                    ? JSON.stringify(ratsitData.bo_fordon)
                    : "[]",
                hundar: Array.isArray(ratsitData.bo_hundar)
                    ? JSON.stringify(ratsitData.bo_hundar)
                    : "[]",
                bolagsengagemang: Array.isArray(ratsitData.ps_bolagsengagemang)
                    ? JSON.stringify(ratsitData.ps_bolagsengagemang)
                    : "[]",
                longitude: ratsitData.bo_longitude || null,
                latitud: ratsitData.latitud || null,
                google_maps: ratsitData.google_maps || null,
                google_streetview: ratsitData.google_streetview || null,
                ratsit_se: ratsitData.ratsit_se || null,
                is_active: 1,
            };

            // Check if record already exists based on unique constraint: gatuadress + personnamn
            const [existingRows] = await db.execute(
                "SELECT id FROM ratsit_data WHERE gatuadress = ? AND personnamn = ? LIMIT 1",
                [dbData.gatuadress, dbData.personnamn],
            );
            const existing =
                Array.isArray(existingRows) && existingRows.length > 0
                    ? existingRows[0]
                    : null;

            let result;
            let action;

            if (existing) {
                const updateFields = Object.keys(dbData)
                    .map((f) => `${f} = ?`)
                    .join(", ");
                const [updateResult] = await db.execute(
                    `UPDATE ratsit_data SET ${updateFields}, updated_at = NOW() WHERE id = ?`,
                    [...Object.values(dbData), existing.id],
                );
                result = updateResult;
                action = "updated";
            } else {
                const fields = Object.keys(dbData);
                const placeholders = fields.map(() => "?").join(", ");
                const [insertResult] = await db.execute(
                    `INSERT INTO ratsit_data (${fields.join(", ")}, created_at, updated_at) VALUES (${placeholders}, NOW(), NOW())`,
                    Object.values(dbData),
                );
                result = insertResult;
                action = "created";
            }

            if (result.affectedRows > 0) {
                try {
                    await syncSwedenPersonFromRatsit(ratsitData);
                } catch (syncError) {
                    console.log(`  ⚠ sweden_personer Ratsit sync failed for ${ratsitData.ps_personnamn || ratsitData.personnamn || 'unknown'}: ${syncError.message}`);
                }

                console.log(
                    `  ✓ Ratsit data saved to ratsit_data table (${action})`,
                );
                return true;
            } else {
                console.log("  ⚠ No changes made to ratsit_data table");
                return false;
            }
        } catch (error) {
            console.log("  ✗ Error saving Ratsit data:", error.message);
            console.log("  ✗ Stack:", error.stack);
            return false;
        }
    }

    async saveHittaToDatabase(hittaData) {
        /**
         * Save Hitta data to hitta_se table (if kon exists) or hitta_bolag table (if kon doesn't exist)
         */
        try {
            const db = await this.getDbPool();

            // Handle telefon properly - if it's an empty array, store null or empty string
            let telefonValue = null;
            if (
                Array.isArray(hittaData.telefon) &&
                hittaData.telefon.length > 0
            ) {
                telefonValue = JSON.stringify(hittaData.telefon);
            } else if (
                typeof hittaData.telefon === "string" &&
                hittaData.telefon.trim().length > 0
            ) {
                telefonValue = hittaData.telefon;
            }

            const dbData = {
                personnamn: hittaData.personnamn || null,
                // For person records (hitta_se) we capture alder & kon
                alder: hittaData.alder || null,
                kon: hittaData.kon || null,
                gatuadress: hittaData.gatuadress || null,
                postnummer: hittaData.postnummer || null,
                postort: hittaData.postort || null,
                telefon: telefonValue,
                karta: hittaData.karta || null,
                link: hittaData.link || null,
                bostadstyp: hittaData.bostadstyp || null,
                bostadspris: hittaData.bostadspris || null,
                is_active: 1,
                // Track if we found phone, if it was processed in ratsit, if it's a house
                is_telefon: telefonValue ? 1 : 0,
                is_hus: hittaData.bostadstyp === "Hus" ? 1 : 0,
                // CRITICAL: Enforce constraint - if is_hus=1 AND is_telefon=1, then is_ratsit MUST be 1
                is_ratsit:
                    hittaData.bostadstyp === "Hus" && telefonValue
                        ? 1
                        : hittaData.is_ratsit
                          ? 1
                          : 0,
            };

            // Always save to hitta_se table
            const tableName = "hitta_se";

            // Check if record exists based on personnamn, gatuadress and postnummer
            const [existingRows] = await db.execute(
                `SELECT id FROM ${tableName} WHERE personnamn = ? AND gatuadress = ? AND postnummer = ? LIMIT 1`,
                [dbData.personnamn, dbData.gatuadress, dbData.postnummer],
            );
            const existing =
                Array.isArray(existingRows) && existingRows.length > 0
                    ? existingRows[0]
                    : null;

            let result;
            let action;

            if (existing) {
                const updateFields = Object.keys(dbData)
                    .map((f) => `${f} = ?`)
                    .join(", ");
                const [updateResult] = await db.execute(
                    `UPDATE ${tableName} SET ${updateFields}, updated_at = NOW() WHERE id = ?`,
                    [...Object.values(dbData), existing.id],
                );
                result = updateResult;
                action = "updated";
            } else {
                const fields = Object.keys(dbData);
                const placeholders = fields.map(() => "?").join(", ");
                const [insertResult] = await db.execute(
                    `INSERT INTO ${tableName} (${fields.join(", ")}, created_at, updated_at) VALUES (${placeholders}, NOW(), NOW())`,
                    Object.values(dbData),
                );
                result = insertResult;
                action = "created";
            }

            if (result.affectedRows > 0) {
                try {
                    await syncSwedenPersonFromHitta(hittaData);
                } catch (syncError) {
                    console.log(`    ⚠ sweden_personer Hitta sync failed for ${hittaData.personnamn}: ${syncError.message}`);
                }

                console.log(
                    `    ✓ ${tableName}: ${result.affectedRows} row(s) ${action}`,
                );
                return true;
            } else {
                console.log(`    ⚠ No changes (${tableName})`);
                return false;
            }
        } catch (error) {
            console.log(`    ✗ DB Error: ${error.message}`);
            return false;
        }
    }

    async saveToPrivateData(hittaData, ratsitData = null) {
        /**
         * Save data to private_data table - works with JUST Hitta or combined Hitta + Ratsit
         * ALL records should be saved to private_data, not just when both sources exist
         */
        if (!hittaData) {
            return false;
        }

        try {
            const db = await this.getDbPool();

            // Combine data from both sources (or just Hitta if Ratsit is missing)
            const dbData = {
                // Address fields (prefer Ratsit if available)
                gatuadress:
                    ratsitData?.bo_gatuadress || hittaData.gatuadress || null,
                postnummer:
                    ratsitData?.bo_postnummer || hittaData.postnummer || null,
                postort: ratsitData?.bo_postort || hittaData.postort || null,
                forsamling: ratsitData?.bo_forsamling || null,
                kommun: ratsitData?.bo_kommun || null,
                lan: ratsitData?.bo_lan || null,
                adressandring: ratsitData?.adressandring || null,

                // Phone arrays
                telfonnummer:
                    ratsitData && Array.isArray(ratsitData.telefonnummer)
                        ? JSON.stringify(ratsitData.telefonnummer)
                        : "[]",
                telefon:
                    ratsitData && Array.isArray(ratsitData.ps_telefon)
                        ? JSON.stringify(ratsitData.ps_telefon)
                        : Array.isArray(hittaData.telefon)
                          ? JSON.stringify(hittaData.telefon)
                          : "[]",

                // Person fields (prefer Ratsit)
                stjarntacken: ratsitData?.stjarntacken || null,
                fodelsedag: ratsitData?.ps_fodelsedag || null,
                personnummer: ratsitData?.ps_personnummer || null,
                alder: ratsitData?.ps_alder || hittaData.alder || null,
                kon: ratsitData?.ps_kon || hittaData.kon || null,
                civilstand: ratsitData?.ps_civilstand || null,
                fornamn: ratsitData?.ps_fornamn || null,
                efternamn: ratsitData?.ps_efternamn || null,
                personnamn:
                    ratsitData?.ps_personnamn || hittaData.personnamn || null,

                // Dwelling fields (prefer Ratsit)
                agandeform: ratsitData?.bo_agandeform || null,
                bostadstyp: ratsitData?.bo_bostadstyp || null,
                boarea: ratsitData?.bo_boarea || null,
                byggar: ratsitData?.bo_byggar || null,

                // Collections (Ratsit only)
                personer:
                    ratsitData && Array.isArray(ratsitData.bo_personer)
                        ? JSON.stringify(ratsitData.bo_personer)
                        : "[]",
                foretag:
                    ratsitData && Array.isArray(ratsitData.bo_foretag)
                        ? JSON.stringify(ratsitData.bo_foretag)
                        : "[]",
                grannar:
                    ratsitData && Array.isArray(ratsitData.bo_grannar)
                        ? JSON.stringify(ratsitData.bo_grannar)
                        : "[]",
                fordon:
                    ratsitData && Array.isArray(ratsitData.bo_fordon)
                        ? JSON.stringify(ratsitData.bo_fordon)
                        : "[]",
                hundar:
                    ratsitData && Array.isArray(ratsitData.bo_hundar)
                        ? JSON.stringify(ratsitData.bo_hundar)
                        : "[]",
                bolagsengagemang:
                    ratsitData && Array.isArray(ratsitData.ps_bolagsengagemang)
                        ? JSON.stringify(ratsitData.ps_bolagsengagemang)
                        : "[]",

                // Geo & Links (Ratsit preferred)
                longitude: ratsitData?.bo_longitude || null,
                latitud: ratsitData?.latitud || null,
                google_maps: ratsitData?.google_maps || null,
                google_streetview: ratsitData?.google_streetview || null,
                ratsit_link: ratsitData?.ratsit_se || null,

                // Hitta specific fields
                hitta_link: hittaData.link || null,
                hitta_karta: hittaData.karta || null,
                hitta_bostadstyp: hittaData.bostadstyp || null,
                hitta_alder: hittaData.alder || null,
                hitta_telefon: Array.isArray(hittaData.telefon)
                    ? JSON.stringify(hittaData.telefon)
                    : hittaData.telefon || null,
                bostad_typ: hittaData.bostadstyp || null,
                bostad_pris: hittaData.bostadspris || null,

                // IDs
                hitta_id: null, // Will be fetched from hitta_se table
                ratsit_id: ratsitData?.id || null,
                luid: `${hittaData.personnamn || "unknown"}|${hittaData.gatuadress || "unknown"}|${hittaData.postnummer || "unknown"}`,

                // Queue flag
                ratsit_queue: ratsitData ? true : false,

                // Flags
                is_active: 1,
                is_update: ratsitData ? 1 : 0,
            };

            // Get hitta_id if it exists
            if (
                hittaData.personnamn &&
                hittaData.gatuadress &&
                hittaData.postnummer
            ) {
                const [hittaRows] = await db.execute(
                    "SELECT id FROM hitta_se WHERE personnamn = ? AND gatuadress = ? AND postnummer = ? LIMIT 1",
                    [
                        hittaData.personnamn,
                        hittaData.gatuadress,
                        hittaData.postnummer,
                    ],
                );
                if (Array.isArray(hittaRows) && hittaRows.length > 0) {
                    dbData.hitta_id = hittaRows[0].id;
                }
            }

            // Check if record exists
            const uniqueKey = dbData.personnummer || dbData.personnamn;
            const uniqueAddr = dbData.gatuadress;
            const uniquePostal = dbData.postnummer;

            const [existingRows] = await db.execute(
                "SELECT id FROM private_data WHERE personnamn = ? AND gatuadress = ? AND postnummer = ? LIMIT 1",
                [dbData.personnamn, uniqueAddr, uniquePostal],
            );
            const existing =
                Array.isArray(existingRows) && existingRows.length > 0
                    ? existingRows[0]
                    : null;

            let result;
            let action;

            if (existing) {
                const updateFields = Object.keys(dbData)
                    .map((f) => `${f} = ?`)
                    .join(", ");
                const [updateResult] = await db.execute(
                    `UPDATE private_data SET ${updateFields}, updated_at = NOW() WHERE id = ?`,
                    [...Object.values(dbData), existing.id],
                );
                result = updateResult;
                action = "updated";
            } else {
                const fields = Object.keys(dbData);
                const placeholders = fields.map(() => "?").join(", ");
                const [insertResult] = await db.execute(
                    `INSERT INTO private_data (${fields.join(", ")}, created_at, updated_at) VALUES (${placeholders}, NOW(), NOW())`,
                    Object.values(dbData),
                );
                result = insertResult;
                action = "created";
            }

            if (result.affectedRows > 0) {
                const source = ratsitData ? "Hitta + Ratsit" : "Hitta only";
                console.log(
                    `  ✓ Data saved to private_data (${source}, ${action})`,
                );
                return true;
            } else {
                console.log("  ⚠ No changes made to private_data table");
                return false;
            }
        } catch (error) {
            console.log("  ✗ Error saving to private_data:", error.message);
            return false;
        }
    }

    async closeDbConnection() {
        /** Close MySQL pool */
        if (this.dbPool) {
            await this.dbPool.end();
            this.dbPool = null;
        }
    }

    async gotoWithRetry(page, url, options, retries = 2) {
        let lastError = null;
        for (let attempt = 1; attempt <= retries + 1; attempt++) {
            try {
                await page.goto(url, options);
                return true;
            } catch (error) {
                lastError = error;
                const message = error?.message || "";
                const retryable =
                    message.includes("ERR_NETWORK_CHANGED") ||
                    message.includes("chrome-error://chromewebdata/") ||
                    message.includes("interrupted by another navigation");

                if (!retryable || attempt > retries) {
                    throw error;
                }

                await page.waitForTimeout(500 * attempt);
            }
        }

        if (lastError) {
            throw lastError;
        }

        return false;
    }

    async loadRatsitCookies() {
        const cookieCandidates = [
            path.join(process.cwd(), "jobs", "cookies", "ratsit.json"),
            path.join(process.cwd(), "cookies", "ratsit.json"),
            path.join(process.cwd(), "scripts", "cookies", "ratsit.json"),
        ];

        console.log(
            `  → Looking for Ratsit cookie file in: ${cookieCandidates
                .map((p) => path.relative(process.cwd(), p))
                .join(", ")}`,
        );

        let rawCookies = null;

        for (const candidate of cookieCandidates) {
            try {
                const data = await fs.readFile(candidate, "utf8");
                const parsed = JSON.parse(data);

                if (!Array.isArray(parsed)) {
                    continue;
                }

                if (parsed.length > 0) {
                    rawCookies = parsed;
                    console.log(
                        `  → Loaded ${parsed.length} cookie(s) from ${path.relative(process.cwd(), candidate)}`,
                    );
                    break;
                }
            } catch {
                continue;
            }
        }

        if (!rawCookies) {
            console.log("  → No non-empty ratsit.json cookie file found; continuing without cookies");
            return [];
        }

        return rawCookies.map((cookie) => {
            const normalizedCookie = { ...cookie };

            if (normalizedCookie.sameSite) {
                const sameSite = String(normalizedCookie.sameSite).toLowerCase();

                if (sameSite === "lax") {
                    normalizedCookie.sameSite = "Lax";
                } else if (sameSite === "strict") {
                    normalizedCookie.sameSite = "Strict";
                } else if (sameSite === "none" || sameSite === "no_restriction") {
                    normalizedCookie.sameSite = "None";
                } else {
                    normalizedCookie.sameSite = "Lax";
                }
            } else {
                normalizedCookie.sameSite = "Lax";
            }

            return normalizedCookie;
        });
    }

    async scrapeRatsitData(query) {
        /**
         * Scrape Ratsit data with complete extraction (all fields from ratsit_data.mjs)
         * Returns array of person data objects with full details
         */
        console.log(`  → Starting inline Ratsit scrape for: "${query}"`);

        const encodedQuery = encodeURIComponent(query);
        const searchUrl = `https://www.ratsit.se/sok/person?vem=${encodedQuery}`;

        let browser = null;
        const results = [];

        try {
            browser = await chromium.launch({
                headless: true,
                executablePath: "/usr/bin/google-chrome",
                args: [
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                    "--disable-gpu",
                    "--window-size=1920,1080",
                    "--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                ],
            });

            const cookies = await this.loadRatsitCookies();

            const context = await browser.newContext({
                extraHTTPHeaders: {
                    "User-Agent":
                        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                },
            });

            if (cookies.length > 0) {
                await context.addCookies(cookies);
                console.log(`  → Added ${cookies.length} cookie(s) to Ratsit browser context`);
            }

            const page = await context.newPage();

            // Get search results
            await this.gotoWithRetry(page, searchUrl, {
                waitUntil: "networkidle",
                timeout: 30000,
            });
            await page.waitForTimeout(2000);

            // Find all person links
            const links = [];
            const resultList = await page.$("ul.search-result-list");

            if (resultList) {
                const linkElements = await resultList.$$(
                    'li a[href^="https://www.ratsit.se/"]',
                );
                for (const linkElement of linkElements) {
                    const href = await linkElement.getAttribute("href");
                    if (href && href.startsWith("https://www.ratsit.se/")) {
                        links.push(href);
                    }
                }
            }

            console.log(`  → Found ${links.length} Ratsit result(s)`);

            // Scrape each person page
            for (let i = 0; i < links.length; i++) {
                const link = links[i];
                console.log(`  → [${i + 1}/${links.length}] Scraping: ${link}`);

                try {
                    await this.gotoWithRetry(page, link, {
                        waitUntil: "networkidle",
                        timeout: 30000,
                    });
                    await page.waitForTimeout(1500);

                    // Scroll to load lazy content
                    await page.evaluate(() =>
                        window.scrollTo(0, document.body.scrollHeight),
                    );
                    await page.waitForTimeout(1000);

                    // Extract person data (complete extraction from ratsit_data.mjs)
                    const personData = {
                        ps_personnummer: await this.extractRatsitTextAfterLabel(
                            page,
                            "Personnummer:",
                        ),
                        ps_alder: await this.extractRatsitTextAfterLabel(
                            page,
                            "Ålder:",
                        ),
                        ps_fodelsedag: await this.extractRatsitTextAfterLabel(
                            page,
                            "Födelsedag:",
                        ),
                        ps_kon: await this.extractRatsitTextAfterLabel(
                            page,
                            "Juridiskt kön:",
                        ),
                        ps_telefon: await this.extractRatsitTelefon(page),
                        ps_personnamn: await this.extractRatsitTextAfterLabel(
                            page,
                            "Personnamn:",
                        ),
                        ps_fornamn: await this.extractRatsitTextAfterLabel(
                            page,
                            "Förnamn:",
                        ),
                        ps_efternamn: await this.extractRatsitTextAfterLabel(
                            page,
                            "Efternamn:",
                        ),
                        bo_gatuadress: await this.extractRatsitTextAfterLabel(
                            page,
                            "Gatuadress:",
                        ),
                        bo_postnummer: await this.extractRatsitTextAfterLabel(
                            page,
                            "Postnummer:",
                        ),
                        bo_postort: await this.extractRatsitTextAfterLabel(
                            page,
                            "Postort:",
                        ),
                        // Additional labels
                        bo_forsamling: await this.extractRatsitTextAfterLabel(
                            page,
                            "Församling:",
                        ),
                        bo_kommun: await this.extractRatsitTextAfterLabel(
                            page,
                            "Kommun:",
                        ),
                        bo_lan: await this.extractRatsitTextAfterLabel(
                            page,
                            "Län:",
                        ),
                        ps_civilstand: await this.extractRatsitCivilstand(page),
                        adressandring: await this.extractRatsitTextAfterLabel(
                            page,
                            "Adressändring:",
                        ),
                        stjarntacken: await this.extractRatsitTextAfterLabel(
                            page,
                            "Stjärntecken:",
                        ),
                        // Dwelling specific labels
                        bo_agandeform: await this.extractRatsitTextAfterLabel(
                            page,
                            "Ägandeform:",
                        ),
                        bo_bostadstyp: await this.extractRatsitTextAfterLabel(
                            page,
                            "Bostadstyp:",
                        ),
                        bo_boarea: await this.extractRatsitTextAfterLabel(
                            page,
                            "Boarea:",
                        ),
                        bo_byggar: await this.extractRatsitTextAfterLabel(
                            page,
                            "Byggår:",
                        ),
                    };
                    // Link for saving
                    personData.ratsit_se = link;

                    // Sections: telefonnummer (additional), personer, foretag, grannar, fordon, hundar, bolagsengagemang
                    personData.telefonnummer =
                        await this.extractSectionTelefonnummer(page);
                    const personer = await this.extractSectionListStrong(
                        page,
                        "Personer",
                    );
                    if (personer.length) personData.bo_personer = personer;
                    const foretag = await this.extractSectionForetag(page);
                    if (foretag.length) personData.bo_foretag = foretag;
                    const grannar = await this.extractSectionGrannar(page);
                    if (grannar.length) personData.bo_grannar = grannar;
                    const fordon = await this.extractSectionFordon(page);
                    if (fordon.length) personData.bo_fordon = fordon;
                    const hundar = await this.extractSectionHundar(page);
                    if (hundar.length) personData.bo_hundar = hundar;
                    const bolag =
                        await this.extractSectionBolagsengagemang(page);
                    if (bolag.length) personData.ps_bolagsengagemang = bolag;

                    // Lat/Long & Streetview
                    const latLongText = await this.extractLatLongText(page);
                    if (latLongText) {
                        const m = latLongText.match(
                            /Latitud:\s*([0-9.+-]+).*Longitud:\s*([0-9.+-]+)/i,
                        );
                        if (m) {
                            personData.latitud = m[1];
                            personData.bo_longitude = m[2];
                        }
                    }
                    personData.google_streetview =
                        await this.extractStreetViewLink(page);

                    // Google maps link from address
                    if (
                        personData.bo_gatuadress &&
                        personData.bo_postnummer &&
                        personData.bo_postort
                    ) {
                        const addr = `${personData.bo_gatuadress}, ${personData.bo_postnummer} ${personData.bo_postort}`;
                        personData.google_maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
                    }

                    // Map gender value
                    if (personData.ps_kon) {
                        const konMap = { man: "M", kvinna: "F", kvinno: "F" };
                        personData.ps_kon =
                            konMap[personData.ps_kon.toLowerCase()] ||
                            personData.ps_kon;
                    }

                    // Merge telefon arrays and clean null/empty
                    if (
                        Array.isArray(personData.telefonnummer) &&
                        Array.isArray(personData.ps_telefon)
                    ) {
                        const seen = new Set();
                        const merged = [
                            ...personData.ps_telefon,
                            ...personData.telefonnummer,
                        ].filter((n) => {
                            const k = String(n).trim();
                            if (!k) return false;
                            if (seen.has(k)) return false;
                            seen.add(k);
                            return true;
                        });
                        personData.ps_telefon = merged;
                    }

                    const cleanData = {};
                    for (const [key, value] of Object.entries(personData)) {
                        if (value === null || value === undefined) continue;
                        if (Array.isArray(value) && value.length === 0)
                            continue;
                        if (typeof value === "string" && value.trim() === "")
                            continue;
                        cleanData[key] = value;
                    }

                    if (Object.keys(cleanData).length > 0) {
                        results.push(cleanData);
                        console.log(
                            `  → ✓ Extracted data for ${cleanData.ps_personnamn || "Unknown"}`,
                        );
                    }

                    await page.waitForTimeout(1000);
                } catch (error) {
                    console.log(`  → ✗ Error scraping ${link}:`, error.message);
                }
            }

            await browser.close();
        } catch (error) {
            console.log(`  → ✗ Error during Ratsit scraping:`, error.message);
            if (browser) {
                await browser.close();
            }
        }

        return results;
    }

    async extractRatsitTextAfterLabel(page, labelText) {
        /** Extract text value after a label span on Ratsit pages */
        try {
            const labelSelector = `span.color--gray5:has-text("${labelText}")`;
            const labelElement = await page.$(labelSelector);

            if (!labelElement) {
                return null;
            }

            const parentText = await labelElement.evaluate((el) => {
                const p = el.closest("p");
                return p ? p.innerText : null;
            });

            if (!parentText) {
                return null;
            }

            let text = parentText.replace(labelText, "").trim();
            text = text.replace(/\s*Visas för medlemmar.*/gi, "");

            return text || null;
        } catch (e) {
            return null;
        }
    }

    async extractRatsitTelefon(page) {
        /** Extract telefon number from href tel: link on Ratsit pages */
        try {
            const labelSelector = 'span.color--gray5:has-text("Telefon:")';
            const labelElement = await page.$(labelSelector);

            if (!labelElement) {
                return [];
            }

            const telHref = await labelElement.evaluate((el) => {
                const p = el.closest("p");
                if (!p) return null;
                const telLink = p.querySelector('a[href^="tel:"]');
                return telLink ? telLink.getAttribute("href") : null;
            });

            if (telHref && telHref.startsWith("tel:")) {
                return [telHref.replace("tel:", "")];
            }

            return [];
        } catch (e) {
            return [];
        }
    }

    async extractRatsitCivilstand(page) {
        // Look for a section where heading contains Civilstånd and return nearby span text
        try {
            const heading = await page.$('h2:has-text("Civilstånd")');
            if (heading) {
                const parent = await heading.evaluateHandle(
                    (el) => el.parentElement,
                );
                if (parent) {
                    const text = await parent.evaluate((el) => {
                        const span = el.querySelector("span");
                        return span ? span.textContent?.trim() : null;
                    });
                    if (text) return text;
                }
            }
            return null;
        } catch {
            return null;
        }
    }

    async extractSectionTelefonnummer(page) {
        try {
            // Find heading by text (h3 preferred)
            let header = await page.$('h3:has-text("Telefonnummer")');
            if (!header) return [];
            // Traverse siblings until next header and collect spans that look like phone numbers
            const numbers = await header.evaluate((h3) => {
                const out = [];
                let node = h3.nextElementSibling;
                const isHeader = (el) =>
                    !el ? false : ["H1", "H2", "H3"].includes(el.tagName);
                const looksLikePhone = (t) =>
                    /^(?:0\d{1,3}|\+46)[\d\s-]{5,}$/.test(t) && /\d/.test(t);
                while (node && !isHeader(node)) {
                    // Only scan common wrappers
                    if (node.matches("p, div, section")) {
                        node.querySelectorAll("span, a").forEach((el) => {
                            const txt = (el.textContent || "").trim();
                            if (looksLikePhone(txt)) out.push(txt);
                        });
                    }
                    node = node.nextElementSibling;
                }
                return Array.from(new Set(out));
            });
            return numbers;
        } catch {
            return [];
        }
    }

    async extractSectionListStrong(page, headerText) {
        try {
            const header = await page.$(`h3:has-text("${headerText}")`);
            if (!header) return [];
            const container = await header.evaluateHandle(
                (el) => el.parentElement?.parentElement,
            );
            const items = await page.evaluate((root) => {
                if (!root) return [];
                const arr = [];
                root.querySelectorAll("strong").forEach((el) => {
                    const t = el.textContent?.trim();
                    if (t) arr.push(t);
                });
                return arr;
            }, container);
            return items;
        } catch {
            return [];
        }
    }

    async extractSectionForetag(page) {
        try {
            const header = await page.$('h3:has-text("Företag")');
            if (!header) return [];
            const container = await header.evaluateHandle((el) =>
                el.parentElement?.querySelector("table"),
            );
            const rows = await page.evaluate((tbl) => {
                const out = [];
                if (!tbl) return out;
                tbl.querySelectorAll("tbody tr").forEach((tr) => {
                    const cells = Array.from(tr.querySelectorAll("td")).map(
                        (td) => td.innerText.trim(),
                    );
                    if (cells.length) out.push(cells.join(" | "));
                });
                return out;
            }, container);
            return rows;
        } catch {
            return [];
        }
    }

    async extractSectionGrannar(page) {
        try {
            const titles = await page.$$("button.accordion-neighbours__title");
            const out = [];
            for (const btn of titles) {
                // Expand if possible (best effort)
                try {
                    await btn.click({ timeout: 500 });
                } catch {}
            }
            const rows = await page.$$(
                "div .accordion-neighbours__title ~ div table tbody tr",
            );
            for (const tr of rows) {
                const text = await tr.evaluate((el) =>
                    el.innerText.replace(/\s+/g, " ").trim(),
                );
                if (text) out.push(text);
            }
            return out;
        } catch {
            return [];
        }
    }

    async extractSectionFordon(page) {
        try {
            const header = await page.$('h3:has-text("Fordon")');
            if (!header) return [];
            const table = await header.evaluateHandle((el) =>
                el.parentElement?.querySelector("table"),
            );
            const rows = await page.evaluate((tbl) => {
                const out = [];
                if (!tbl) return out;
                tbl.querySelectorAll("tbody tr").forEach((tr) => {
                    const tds = tr.querySelectorAll("td");
                    if (tds.length) {
                        const brand = tds[0]?.innerText.trim();
                        const model = tds[1]?.innerText.trim();
                        const year = tds[2]?.innerText.trim();
                        const color = tds[3]?.innerText.trim();
                        const owner = tds[4]?.innerText.trim();
                        out.push(
                            [brand, model, year, color, owner]
                                .filter(Boolean)
                                .join(", "),
                        );
                    }
                });
                return out;
            }, table);
            return rows;
        } catch {
            return [];
        }
    }

    async extractSectionHundar(page) {
        try {
            const header = await page.$('h3:has-text("Hundar")');
            if (!header) return [];
            const container = await header.evaluateHandle(
                (el) => el.parentElement,
            );

            // Strategy 1: Prefer structured table parsing if present
            const table = await header.evaluateHandle((el) =>
                el.parentElement?.querySelector("table"),
            );
            const tableRows = await page.evaluate((tbl) => {
                const out = [];
                if (!tbl) return out;
                let rows = tbl.querySelectorAll("tbody tr");
                if (!rows.length) rows = tbl.querySelectorAll("tr");
                rows.forEach((tr) => {
                    const cells = Array.from(tr.querySelectorAll("td, th")).map(
                        (c) => c.innerText.replace(/\s+/g, " ").trim(),
                    );
                    if (!cells.length) return;
                    // Skip header rows
                    const headerLike = cells
                        .join(" ")
                        .match(/^(Ras|Hund|Födelsedatum|Ålder|Ägare|Namn)/i);
                    if (headerLike) return;
                    const line = cells.filter(Boolean).join(", ");
                    if (line) out.push(line);
                });
                return out;
            }, table);
            if (Array.isArray(tableRows) && tableRows.length) return tableRows;

            // Strategy 2: Fallback to heuristic grouping of lines (breed, date (age), owner)
            const lines = await page.evaluate((root) => {
                const out = [];
                if (!root) return out;
                const rawLines = (root.innerText || "")
                    .split("\n")
                    .map((l) => l.trim())
                    .filter(Boolean)
                    .filter(
                        (l) =>
                            !/^Hundar$/i.test(l) &&
                            !/Visa mer|Visa mindre/i.test(l),
                    );

                const isDateAge = (s) =>
                    /\d{4}-\d{2}-\d{2}/.test(s) || /\(\d+\s*år\)/i.test(s);
                for (let i = 0; i < rawLines.length; i++) {
                    if (!isDateAge(rawLines[i])) continue;
                    const dateAge = rawLines[i];
                    const breed =
                        rawLines[i - 1] && !isDateAge(rawLines[i - 1])
                            ? rawLines[i - 1]
                            : null;
                    const owner =
                        rawLines[i + 1] && !isDateAge(rawLines[i + 1])
                            ? rawLines[i + 1]
                            : null;
                    const composed = [breed, dateAge, owner]
                        .filter(Boolean)
                        .join(", ");
                    if (composed) out.push(composed);
                }
                // Deduplicate while preserving order
                return Array.from(new Set(out));
            }, container);
            return lines;
        } catch {
            return [];
        }
    }

    async extractSectionBolagsengagemang(page) {
        try {
            // Check if "Bolagsengagemang" text exists anywhere on page
            const hasText = await page
                .locator('text="Bolagsengagemang"')
                .count();
            if (!hasText) {
                return [];
            }

            // Since heading might be in sidebar or other location, search page-wide for any section/div with id="engagemang"
            const sectionEl = await page.$('[id="engagemang"]');
            if (sectionEl) {
                const items = await sectionEl.evaluate((sec) => {
                    const out = [];
                    const tbl = sec.querySelector("table");
                    if (!tbl) return out;
                    let rows = tbl.querySelectorAll("tbody tr");
                    if (!rows.length) rows = tbl.querySelectorAll("tr");
                    rows.forEach((tr) => {
                        const cells = Array.from(
                            tr.querySelectorAll("td, th"),
                        ).map((c) => c.innerText.replace(/\s+/g, " ").trim());
                        if (
                            cells.length &&
                            !cells[0].match(
                                /^(Företagsnamn|Typ|Status|Befattning)/i,
                            )
                        ) {
                            out.push(cells.join(", "));
                        }
                    });
                    return out;
                });
                if (items.length > 0) {
                    return items;
                }
            }

            // Fallback: find any h2 containing "Bolagsengagemang" in main content (not sidebar)
            const mainHeader = await page.$(
                'main h2:has-text("Bolagsengagemang"), article h2:has-text("Bolagsengagemang")',
            );
            if (mainHeader) {
                await mainHeader.scrollIntoViewIfNeeded();
                await page.waitForTimeout(1000);
                const items = await mainHeader.evaluate((h) => {
                    const out = [];
                    // Search next siblings or parent container
                    let node = h.nextElementSibling;
                    while (node && !node.matches("h1,h2,h3")) {
                        const tbl = node.matches("table")
                            ? node
                            : node.querySelector("table");
                        if (tbl) {
                            let rows = tbl.querySelectorAll("tbody tr");
                            if (!rows.length) rows = tbl.querySelectorAll("tr");
                            rows.forEach((tr) => {
                                const cells = Array.from(
                                    tr.querySelectorAll("td, th"),
                                ).map((c) =>
                                    c.innerText.replace(/\s+/g, " ").trim(),
                                );
                                if (
                                    cells.length &&
                                    !cells[0].match(
                                        /^(Företagsnamn|Typ|Status|Befattning)/i,
                                    )
                                ) {
                                    out.push(cells.join(", "));
                                }
                            });
                            return out;
                        }
                        node = node.nextElementSibling;
                    }
                    return out;
                });
                if (items.length > 0) {
                    return items;
                }
            }

            return [];
        } catch (e) {
            return [];
        }
    }

    async extractLatLongText(page) {
        try {
            const el = await page.$('div:has-text("Latitud:")');
            if (!el) return null;
            return await el.innerText();
        } catch {
            return null;
        }
    }

    async extractStreetViewLink(page) {
        try {
            const linkEl = await page.$(
                'a[href*="map_action=pano"][href*="viewpoint="]',
            );
            if (!linkEl) return null;
            return await linkEl.getAttribute("href");
        } catch {
            return null;
        }
    }

    async scrapeSearchResults(query, maxResults = 50) {
        this.results = [];
        const encodedQuery = encodeURIComponent(query);
        const searchUrl = `${this.base_url}/s%C3%B6k?vad=${encodedQuery}&typ=prv`;

        console.log(`Searching for: ${query} (max ${maxResults} results)`);
        console.log(`URL: ${searchUrl}`);

        let browser = null;
        let currentPage = 1;
        let totalPages = null;
        let hasMorePages = true;

        try {
            // Launch browser
            browser = await chromium.launch({
                headless: true,
                executablePath: "/usr/bin/google-chrome",
                args: [
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                    "--disable-gpu",
                    "--window-size=1920,1080",
                    "--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                ],
            });

            const context = await browser.newContext();
            const page = await context.newPage();

            while (hasMorePages) {
                const pageUrl =
                    currentPage === 1
                        ? searchUrl
                        : `${searchUrl}&sida=${currentPage}`;
                console.log(`\nPage ${currentPage}: ${pageUrl}`);

                try {
                    await this.gotoWithRetry(page, pageUrl, {
                        waitUntil: "domcontentloaded",
                        timeout: 30000,
                    });
                } catch (navError) {
                    console.log(
                        `⚠ Navigation timeout/error: ${navError.message}, retrying...`,
                    );
                    try {
                        await this.gotoWithRetry(page, pageUrl, {
                            waitUntil: "networkidle",
                            timeout: 45000,
                        });
                    } catch (retryError) {
                        console.log(
                            `✗ Failed to load page after retry: ${retryError.message}`,
                        );
                        break;
                    }
                }

                // Wait for search results to load
                try {
                    await page.waitForSelector('li[data-test="person-item"]', {
                        timeout: 15000,
                    });
                } catch (error) {
                    console.log(
                        "No results found or timeout waiting for results",
                    );
                    break;
                }

                // Try to dismiss cookie/consent overlays (only on first page)
                if (currentPage === 1) {
                    try {
                        await this.dismissConsentOverlay(page);
                    } catch (error) {
                        // Ignore consent overlay errors
                    }
                }

                // Get total results count on first page
                if (currentPage === 1) {
                    try {
                        const countElement = await page.$(
                            'span[data-test="search-results-count"]',
                        );
                        if (countElement) {
                            const countText = await countElement.textContent();
                            const totalMatch = countText.match(/\d+/);
                            if (totalMatch) {
                                const totalResults = parseInt(totalMatch[0]);
                                totalPages = Math.ceil(totalResults / 25); // 25 results per page
                                console.log(`Total results: ${totalResults}`);
                                console.log(`Total pages: ${totalPages}`);
                            }
                        }
                    } catch (error) {
                        console.log(
                            `Could not determine total results: ${error}`,
                        );
                    }
                }

                // Extract all person items on current page
                const personItems = await page.$$(
                    'li[data-test="person-item"]',
                );
                const pageTotal = personItems.length;
                console.log(
                    `Found ${pageTotal} results on page ${currentPage}`,
                );

                const pageResults = [];
                let pendingToSave = [];
                const ratsitQueue = []; // Queue houses for ratsit processing after page scraping

                for (let i = 0; i < pageTotal; i++) {
                    let personData = null;
                    const idx = i + 1;

                    for (let attempt = 1; attempt <= 2; attempt++) {
                        try {
                            // Re-query items each attempt to avoid stale references
                            const currentItems = await page.$$(
                                'li[data-test="person-item"]',
                            );
                            if (i >= currentItems.length) break;

                            const item = currentItems[i];
                            personData = await this.extractPersonData(
                                item,
                                page,
                            );
                            if (personData) {
                                break;
                            }

                            if (attempt < 2) {
                                await page.waitForTimeout(300);
                            }
                        } catch (error) {
                            if (attempt >= 2) {
                                console.log(
                                    `Error extracting person ${idx} (attempt ${attempt}): ${error.message}`,
                                );
                            }
                        }
                    }

                    if (personData) {
                        pageResults.push(personData);
                        this.results.push(personData);
                        pendingToSave.push(personData);
                        console.log(
                            `[Page ${currentPage}] Extracted ${idx}/${pageTotal}: ${personData.personnamn || "Unknown"} (${personData.bostadstyp || "N/A"})`,
                        );

                        // Queue for ratsit processing if it's a house with full address
                        // CRITICAL: If is_hus=1 AND is_telefon=1, then is_ratsit MUST be 1
                        // So queue if: (is house with full address) OR (has phone with full address)
                        const hasFullAddress = !!(
                            personData.personnamn &&
                            personData.gatuadress &&
                            personData.postort
                        );
                        const isHouse = personData.bostadstyp === "Hus";
                        const hasPhone =
                            personData.telefon &&
                            Array.isArray(personData.telefon) &&
                            personData.telefon.length > 0;
                        if (hasFullAddress && (isHouse || hasPhone)) {
                            ratsitQueue.push(personData);
                        }
                    } else {
                        console.log(
                            `✗ Skipped person ${idx}/${pageTotal} after 2 attempts`,
                        );
                    }
                }

                // STEP 1: Save all basic hitta_se results to database immediately
                if (pendingToSave.length > 0) {
                    try {
                        console.log(
                            `\n→ [STEP 1] Saving ${pendingToSave.length} record(s) to hitta_se...`,
                        );
                        await this.saveToDatabase(pendingToSave);
                        console.log(
                            `✓ Saved ${pendingToSave.length} records to hitta_se`,
                        );
                    } catch (e) {
                        console.log(`✗ Error saving to hitta_se: ${e.message}`);
                    }
                }

                // STEP 2: Process ratsit for houses (this saves to ratsit_data and private_data)
                if (ratsitQueue.length > 0) {
                    console.log(
                        `\n→ [STEP 2] Processing Ratsit for ${ratsitQueue.length} house(s)...`,
                    );
                    for (const houseData of ratsitQueue) {
                        try {
                            console.log(
                                `  → Ratsit: ${houseData.personnamn}...`,
                            );
                            await this.runRatsitForPerson(houseData);
                        } catch (e) {
                            console.log(
                                `  ✗ Ratsit error for ${houseData.personnamn}: ${e.message}`,
                            );
                        }
                    }
                }

                // Check if we've reached max results
                if (this.results.length >= maxResults) {
                    console.log(
                        `\n→ Reached max results limit (${maxResults})`,
                    );
                    hasMorePages = false;
                }
                // Check if there are more pages
                else if (pageTotal === 0) {
                    console.log("\n→ No results on this page, stopping");
                    hasMorePages = false;
                } else if (totalPages && currentPage < totalPages) {
                    console.log(
                        `\n→ Moving to page ${currentPage + 1} of ${totalPages}`,
                    );
                    currentPage += 1;
                    await page.waitForTimeout(1000); // Brief pause between pages
                } else if (!totalPages) {
                    // If we don't know total pages, check for next button
                    try {
                        const nextButton = await page.$(
                            'button[data-ga4-action="next_page"]',
                        );
                        if (
                            nextButton &&
                            (await nextButton.isVisible()) &&
                            (await nextButton.isEnabled())
                        ) {
                            console.log(
                                `\n→ Next page button found, moving to page ${currentPage + 1}`,
                            );
                            currentPage += 1;
                            await page.waitForTimeout(1000);
                        } else {
                            console.log(
                                "\n→ No more pages (next button not available)",
                            );
                            hasMorePages = false;
                        }
                    } catch (error) {
                        console.log(
                            "\n→ No more pages (next button not found)",
                        );
                        hasMorePages = false;
                    }
                } else {
                    console.log(
                        `\n→ Reached final page (${currentPage} of ${totalPages})`,
                    );
                    hasMorePages = false;
                }
            }
        } catch (error) {
            console.log("Error during scraping:", error);
        } finally {
            if (browser) {
                await browser.close();
            }
        }

        return this.results;
    }

    async extractPersonData(item, page) {
        const data = {
            personnamn: null,
            alder: null,
            kon: null,
            gatuadress: null,
            postnummer: null,
            postort: null,
            telefon: null,
            karta: null,
            link: null,
            bostadstyp: null,
            bostadspris: null,
        };

        try {
            // Extract name and age from h2 title
            try {
                const title = await item.$(
                    'h2[data-test="search-result-title"]',
                );
                if (title) {
                    const titleText = await title.textContent();
                    if (titleText) {
                        // Age is in a span with class style_age__ZgTHo
                        try {
                            const ageSpan = await title.$(
                                "span.style_age__ZgTHo",
                            );
                            if (ageSpan) {
                                data.alder =
                                    (await ageSpan.textContent())?.trim() ||
                                    null;
                                // Remove age from title to get name
                                data.personnamn = titleText
                                    .replace(data.alder || "", "")
                                    .trim();
                            } else {
                                data.personnamn = titleText.trim();
                            }
                        } catch {
                            data.personnamn = titleText.trim();
                        }
                    }
                }
            } catch {
                // Ignore errors
            }

            // Extract gender and address from paragraph
            try {
                const addressP = await item.$("p.text-body-long-sm-regular");
                if (addressP) {
                    const addressText = await addressP.textContent();
                    if (addressText) {
                        // First try to extract gender from span
                        try {
                            const genderSpan = await addressP.$(
                                "span.style_gender__hKSL0",
                            );
                            if (genderSpan) {
                                data.kon = (
                                    await genderSpan.textContent()
                                )?.trim();
                            }
                        } catch {
                            // Ignore
                        }

                        // Parse the address text - format is now single-line: "KvinnaKällvägen 4153 32 Järna"
                        // Swedish postal codes are always 5 digits formatted as "XXX XX"
                        // The format is: Gender + StreetAddress (no space) + PostalCode (XXX XX) + City
                        // Strategy: Find the LAST occurrence of pattern "3digits 2digits" as postal code
                        const postalMatch = addressText.match(
                            /(\d{3})\s+(\d{2})\s+([^\d]+)$/,
                        );

                        if (postalMatch) {
                            // Postal code found
                            data.postnummer =
                                `${postalMatch[1]} ${postalMatch[2]}`.trim();
                            data.postort = postalMatch[3].trim();

                            // Everything before the postal code is gender + street
                            const beforePostal = addressText.substring(
                                0,
                                addressText.indexOf(postalMatch[0]),
                            );

                            // Extract gender from the beginning
                            const genderMatch =
                                beforePostal.match(/^(Kvinna|Man|Kvinno)/);
                            if (genderMatch && !data.kon) {
                                data.kon = genderMatch[1];
                            }

                            // Street is everything after gender
                            const streetStart = genderMatch
                                ? genderMatch[0].length
                                : 0;
                            const street = beforePostal
                                .substring(streetStart)
                                .trim();
                            if (street) {
                                data.gatuadress = street;
                            }
                        } else {
                            // No postal code pattern found - try legacy fallback for multi-line format
                            const addressLines = addressText
                                .split("\n")
                                .map((l) => l.trim())
                                .filter((l) => l);
                            if (addressLines.length >= 3) {
                                if (!data.kon && addressLines[0]) {
                                    data.kon = addressLines[0];
                                }
                                if (addressLines[1]) {
                                    data.gatuadress = addressLines[1];
                                }
                                if (addressLines[2]) {
                                    const parts = addressLines[2]
                                        .split(" ")
                                        .filter((p) => p);
                                    if (parts.length >= 2) {
                                        data.postnummer =
                                            `${parts[0]} ${parts[1]}`.trim();
                                        if (parts.length >= 3) {
                                            data.postort = parts
                                                .slice(2)
                                                .join(" ")
                                                .trim();
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } catch {
                // Ignore errors
            }

            // EXTRACT KARTA AND LINK BEFORE PHONE EXTRACTION (to avoid stale references after navigation)
            // Extract map link
            try {
                const mapLink = await item.$(
                    'a[data-test="show-on-map-button"]',
                );
                if (mapLink) {
                    const href = await mapLink.getAttribute("href");
                    if (href) {
                        data.karta = href.startsWith("/")
                            ? `${this.base_url}${href}`
                            : href;
                    }
                }
            } catch {
                // Ignore errors
            }

            // Extract profile link
            try {
                const profileLink = await item.$(
                    'a[data-test="search-list-link"]',
                );
                if (profileLink) {
                    const href = await profileLink.getAttribute("href");
                    if (href) {
                        data.link = href.startsWith("/")
                            ? `${this.base_url}${href}`
                            : href;
                    }
                }
            } catch {
                // Ignore errors
            }

            // CRITICAL: Extract phone number BY CLICKING BUTTON during pagination
            try {
                const phoneButton = await item.$(
                    'button[data-test="phone-link"]',
                );
                if (phoneButton) {
                    const phoneText = await phoneButton.textContent();

                    if (
                        phoneText &&
                        !phoneText.includes("Lägg till telefonnummer")
                    ) {
                        try {
                            // Ensure element is in view
                            await phoneButton.scrollIntoViewIfNeeded();
                            await phoneButton.waitForElementState("stable", {
                                timeout: 5000,
                            });

                            const currentUrl = page.url();

                            try {
                                await phoneButton.click();
                            } catch {
                                // Attempt to close consent overlay then retry
                                await this.dismissConsentOverlay(page);
                                try {
                                    await phoneButton.click();
                                } catch {
                                    // Fallback: force click via JS
                                    await page.evaluate(
                                        (el) => el.click(),
                                        phoneButton,
                                    );
                                }
                            }

                            // Wait briefly for potential navigation or reveal
                            await page.waitForTimeout(800);

                            // Check if URL changed (redirect)
                            const newUrl = page.url();
                            if (
                                newUrl !== currentUrl &&
                                newUrl.includes("revealNumber")
                            ) {
                                // Extract the full phone number from URL
                                const urlObj = new URL(newUrl);
                                const firstPhone =
                                    urlObj.searchParams.get("revealNumber");

                                const numbers = [];
                                try {
                                    await page.waitForSelector(
                                        'button[data-test="show-number"] span',
                                        { timeout: 5000 },
                                    );
                                    const spans = await page.$$(
                                        'button[data-test="show-number"] span',
                                    );
                                    for (const sp of spans) {
                                        const txt = await sp.textContent();
                                        if (txt) {
                                            numbers.push(txt.trim());
                                        }
                                    }
                                } catch {
                                    // Ignore errors
                                }

                                // If none found via spans, fallback to the revealNumber param
                                if (numbers.length === 0 && firstPhone) {
                                    numbers.push(firstPhone);
                                }

                                // De-duplicate while preserving order
                                const seen = new Set();
                                const deduped = [];
                                for (const n of numbers) {
                                    if (!seen.has(n)) {
                                        seen.add(n);
                                        deduped.push(n);
                                    }
                                }

                                data.telefon = deduped;
                                if (deduped.length > 0) {
                                    console.log(
                                        `    ✓ Phone(s) found: ${deduped.join(", ")}`,
                                    );
                                }

                                // Extract house type and price information from person-intro-section
                                try {
                                    const introSpan = await page.$(
                                        'span[data-test="person-intro-section"]',
                                    );
                                    if (introSpan) {
                                        const introText =
                                            await introSpan.textContent();

                                        // Check if "Huset" or "en villa" appears in the text
                                        if (
                                            introText &&
                                            (introText.includes("Huset") ||
                                                introText.includes("en villa"))
                                        ) {
                                            data.bostadstyp = "Hus";

                                            // Extract price range (format: "2 800 000 – 4 200 000 kr" or similar)
                                            const pricePattern =
                                                /(\d[\d\s]*\d)\s*[–-]\s*(\d[\d\s]*\d)\s*kr/;
                                            const priceMatch =
                                                introText.match(pricePattern);
                                            if (priceMatch) {
                                                const minPrice =
                                                    priceMatch[1].replace(
                                                        /\s+/g,
                                                        " ",
                                                    );
                                                const maxPrice =
                                                    priceMatch[2].replace(
                                                        /\s+/g,
                                                        " ",
                                                    );
                                                data.bostadspris = `${minPrice} – ${maxPrice} kr`;
                                            }
                                        }
                                    }
                                } catch (error) {
                                    // Ignore
                                }

                                // Navigate back to search results
                                await page.goBack();
                                // Wait for results list to be available again
                                await page.waitForSelector(
                                    'li[data-test="person-item"]',
                                    { timeout: 10000 },
                                );
                                await page.waitForTimeout(200);
                            } else {
                                // No redirect, try to extract from updated button text
                                try {
                                    const freshButton = await item.$(
                                        'button[data-test="phone-link"]',
                                    );
                                    const freshText = freshButton
                                        ? await freshButton.textContent()
                                        : phoneText;
                                    const phoneMatches =
                                        freshText?.match(/(\+?\d[\d\s-]{7,})/g);
                                    if (phoneMatches) {
                                        data.telefon = phoneMatches.map((m) =>
                                            m.trim(),
                                        );
                                    }
                                } catch {
                                    // Ignore errors
                                }
                            }
                        } catch (error) {
                            console.log(
                                `    ⚠ Error clicking phone button: ${error.message}`,
                            );
                            // Fallback to extracting from text
                            const phoneMatches =
                                phoneText?.match(/(\+?\d[\d\s-]{7,})/g);
                            if (phoneMatches) {
                                data.telefon = phoneMatches.map((m) =>
                                    m.trim(),
                                );
                            }
                        }
                    } else {
                        data.telefon = [];
                    }
                }
            } catch {
                // Ignore errors
            }

            // Detect house type from address pattern
            try {
                const isApartmentAddress =
                    /lgh|1 tr|2 tr|3 tr|4 tr|5 tr|6 tr| nb| bv|\bBox\b|\b\d+\s*[A-Z]\b/i.test(
                        data.gatuadress || "",
                    );

                // Mark as Hus if:
                // 1. Address does NOT match apartment pattern, OR
                // 2. We found a price on the reveal page
                // In both cases, mark as Hus
                if (!isApartmentAddress || data.bostadspris) {
                    data.bostadstyp = "Hus";
                } else {
                    data.bostadstyp = null;
                }
            } catch {
                // Ignore
            }
        } catch (error) {
            console.log("Error extracting data:", error);
            return null;
        }

        return data;
    }

    async extractPhoneFromProfileLink(profileLink, browser = null) {
        /**
         * Extract phone number from a person's profile page
         * Creates temporary page, clicks phone button, extracts number, closes page
         */
        if (!profileLink) {
            return [];
        }

        let profilePage = null;
        try {
            // Use provided browser or create a new one
            let browserInstance = browser;
            let shouldClose = false;

            if (!browserInstance) {
                browserInstance = await chromium.launch({
                    headless: true,
                    executablePath: "/usr/bin/google-chrome",
                    args: [
                        "--no-sandbox",
                        "--disable-dev-shm-usage",
                        "--disable-gpu",
                        "--window-size=1920,1080",
                        "--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                    ],
                });
                shouldClose = true;
            }

            const ctx = await browserInstance.newContext();
            profilePage = await ctx.newPage();

            await this.gotoWithRetry(profilePage, profileLink, {
                waitUntil: "domcontentloaded",
                timeout: 20000,
            });
            await profilePage.waitForTimeout(800);

            // Find and click phone button
            const phoneButton = await profilePage.$(
                'button[data-test="phone-link"]',
            );
            if (!phoneButton) {
                await ctx.close();
                if (shouldClose && browserInstance) {
                    await browserInstance.close();
                }
                return [];
            }

            const phoneText = await phoneButton.textContent();
            if (phoneText && phoneText.includes("Lägg till telefonnummer")) {
                await ctx.close();
                if (shouldClose && browserInstance) {
                    await browserInstance.close();
                }
                return [];
            }

            // Click to reveal phone
            try {
                await phoneButton.scrollIntoViewIfNeeded();
                await phoneButton.waitForElementState("stable", {
                    timeout: 3000,
                });
                await phoneButton.click();
            } catch {
                await profilePage.evaluate((el) => el.click(), phoneButton);
            }

            await profilePage.waitForTimeout(800);

            // Extract phone from button or URL
            const numbers = [];
            const newUrl = profilePage.url();

            if (newUrl.includes("revealNumber")) {
                const urlObj = new URL(newUrl);
                const phoneParam = urlObj.searchParams.get("revealNumber");
                if (phoneParam) {
                    numbers.push(phoneParam);
                }
            }

            // Also try to extract from page content
            try {
                const phoneSpans = await profilePage.$$(
                    'button[data-test="show-number"] span, [class*="phone"] span',
                );
                for (const span of phoneSpans) {
                    const txt = await span.textContent();
                    if (txt && txt.match(/\d/)) {
                        const cleaned = txt.trim();
                        if (!numbers.includes(cleaned)) {
                            numbers.push(cleaned);
                        }
                    }
                }
            } catch {
                // Ignore
            }

            await ctx.close();
            if (shouldClose && browserInstance) {
                await browserInstance.close();
            }
            return numbers;
        } catch (error) {
            if (profilePage) {
                try {
                    await profilePage.context().close();
                } catch {}
            }
            return [];
        }
    }

    async runRatsitForPerson(personData) {
        /**
         * Run inline Ratsit scraping for a specific person and save to database
         * Saves to ratsit_data and private_data (with or without Ratsit data)
         * NOTE: Hitta data is already saved to hitta_se in STEP 1, don't re-save it here
         */
        try {
            // Validate that ALL required arguments are present
            if (
                !personData.personnamn ||
                !personData.gatuadress ||
                !personData.postort
            ) {
                const missing = [];
                if (!personData.personnamn) missing.push("personnamn");
                if (!personData.gatuadress) missing.push("gatuadress");
                if (!personData.postort) missing.push("postort");
                console.log(
                    `  → ⚠ Skipping ratsit - missing required fields: ${missing.join(", ")}`,
                );
                return;
            }

            // NOTE: Don't re-save Hitta data here - it was already saved in STEP 1 (scrapeSearchResults)
            // Calling saveHittaToDatabase again would UPDATE the record and potentially overwrite good data

            // Build search query for ratsit: "personnamn gatuadress postort"
            const ratsitQuery = `${personData.personnamn} ${personData.gatuadress} ${personData.postort}`;
            console.log(`  → Running inline Ratsit scrape: "${ratsitQuery}"`);

            // Scrape Ratsit data inline
            const ratsitResults = await this.scrapeRatsitData(ratsitQuery);

            // Save results to databases
            if (ratsitResults && ratsitResults.length > 0) {
                console.log(
                    `  → Processing ${ratsitResults.length} Ratsit record(s)...`,
                );

                for (const ratsitData of ratsitResults) {
                    // Save to ratsit_data table
                    await this.saveRatsitToDatabase(ratsitData);

                    // Save combined data to private_data table with Ratsit data
                    await this.saveToPrivateData(personData, ratsitData);
                }

                // Mark this Hitta record as having been processed in Ratsit
                await this.markHittaAsRatsitProcessed(personData);

                console.log(
                    `  → ✓ Completed processing for ${personData.personnamn}`,
                );
            } else {
                console.log(
                    `  → No Ratsit data found for ${personData.personnamn}`,
                );
                // Still save Hitta data to private_data even without Ratsit results
                await this.saveToPrivateData(personData, null);
            }
        } catch (error) {
            console.log(
                `  → Error processing ${personData.personnamn}:`,
                error.message,
            );
        }
    }

    async markHittaAsRatsitProcessed(personData) {
        /**
         * Update hitta_se record to mark it as having been processed by Ratsit
         */
        try {
            const db = await this.getDbPool();

            const [result] = await db.execute(
                "UPDATE hitta_se SET is_ratsit = 1 WHERE personnamn = ? AND gatuadress = ? AND postnummer = ?",
                [
                    personData.personnamn,
                    personData.gatuadress,
                    personData.postnummer,
                ],
            );

            if (result.affectedRows > 0) {
                console.log(`  → ✓ Marked as Ratsit processed`);
            }
        } catch (error) {
            console.log(
                `  → ⚠ Error marking as Ratsit processed:`,
                error.message,
            );
        }
    }

    async dismissConsentOverlay(page) {
        try {
            // Try to find and click consent buttons
            const selectors = [
                'button:has-text("Godkänn")',
                'button:has-text("Acceptera")',
                'button:has-text("OK")',
                'button:has-text("Jag förstår")',
                'button[data-test="uc-accept-all-button"]',
                'button[aria-label*="Godkänn"]',
            ];

            for (const selector of selectors) {
                try {
                    const buttons = await page.$$(selector);
                    for (const button of buttons) {
                        if (await button.isVisible()) {
                            await page.evaluate((el) => {
                                if (el.click) el.click();
                            }, button);
                            await page.waitForTimeout(200);
                            return;
                        }
                    }
                } catch {
                    // Continue trying other selectors
                }
            }

            // As a last resort, hide overlays via JS
            await page.evaluate(() => {
                document
                    .querySelectorAll(
                        '.gravitoCMP-background-overlay, .gravitoCMP, [class*="consent"]',
                    )
                    .forEach((e) => {
                        e.style.display = "none";
                    });
            });
            await page.waitForTimeout(100);
        } catch {
            // Non-fatal; proceed regardless
        }
    }

    async enrichAddressFromProfile(page, personData) {
        if (!personData.link) {
            return false;
        }
        let detailPage = null;
        try {
            const context = page.context();
            detailPage = await context.newPage();
            await this.gotoWithRetry(detailPage, personData.link, {
                waitUntil: "domcontentloaded",
                timeout: 20000,
            });

            try {
                await this.dismissConsentOverlay(detailPage);
            } catch {}

            // Try to locate explicit address lines first
            // Heuristic approach: find two consecutive lines where second line matches Swedish postnummer + postort
            const bodyText = await detailPage.evaluate(
                () => document.body.innerText || "",
            );
            const lines = bodyText
                .split("\n")
                .map((l) => l.trim())
                .filter(Boolean);

            let foundStreet = null;
            let foundZip = null;
            let foundCity = null;

            for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                const m = line.match(/^(\d{3})\s?(\d{2})\s+(.+)$/);
                if (m) {
                    foundZip = `${m[1]} ${m[2]}`;
                    foundCity = m[3].trim();
                    // Prefer the previous non-empty line as street address
                    if (i > 0) {
                        const prev = lines[i - 1];
                        if (
                            prev &&
                            prev.length > 0 &&
                            !prev.match(/^Telefon|^Ålder|^Födelsedag/i)
                        ) {
                            foundStreet = prev;
                        }
                    }
                    break;
                }
            }

            let updated = false;
            if (foundStreet && !personData.gatuadress) {
                personData.gatuadress = foundStreet;
                updated = true;
            }
            if (foundZip && !personData.postnummer) {
                personData.postnummer = foundZip;
                updated = true;
            }
            if (foundCity && !personData.postort) {
                personData.postort = foundCity;
                updated = true;
            }

            await detailPage.close();
            return updated && !!(personData.gatuadress && personData.postort);
        } catch (e) {
            try {
                if (detailPage) await detailPage.close();
            } catch {}
            return false;
        }
    }

    async saveToCsv(query, includePhoneMissing = false) {
        if (this.results.length === 0) {
            console.log("No results to save");
            return;
        }

        const total = this.results.length;
        const safeQuery = query
            .replace(/[^\w\s-]/g, "")
            .trim()
            .replace(/\s+/g, "_");

        // Save all results
        const allFilename = path.join(
            this.data_dir,
            `hitta_ratsit_${safeQuery}_alla_${total}.csv`,
        );
        await this.writeCsv(allFilename, this.results);
        console.log(`Saved all results to: ${allFilename}`);

        // Save results with phone numbers (not missing)
        if (includePhoneMissing) {
            const withPhone = this.results.filter(
                (r) =>
                    r.telefon &&
                    r.telefon.length > 0 &&
                    !r.telefon.includes("Lägg till telefonnummer"),
            );

            if (withPhone.length > 0) {
                const withPhoneTotal = withPhone.length;
                const withPhoneFilename = path.join(
                    this.data_dir,
                    `hitta_ratsit_${safeQuery}_visa_${withPhoneTotal}.csv`,
                );
                await this.writeCsv(withPhoneFilename, withPhone);
                console.log(
                    `Saved ${withPhoneTotal} results with phone numbers to: ${withPhoneFilename}`,
                );
            }
        }
    }

    async saveToDatabase(records = this.results) {
        /**
         * Save Hitta search results to hitta_se database table
         */
        if (!records || records.length === 0) {
            console.log("No results to save to database");
            return 0;
        }

        let savedCount = 0;

        for (const record of records) {
            try {
                // Save directly to hitta_se table
                const success = await this.saveHittaToDatabase(record);
                if (success) {
                    savedCount++;
                }
            } catch (error) {
                console.log(
                    `  ⚠ Error saving ${record.personnamn}:`,
                    error.message,
                );
                continue;
            }
        }

        console.log(
            `\n✓ Saved ${savedCount}/${records.length} records to hitta_se table`,
        );
        return savedCount;
    }

    async writeCsv(filename, data) {
        const fieldnames = [
            "personnamn",
            "alder",
            "kon",
            "gatuadress",
            "postnummer",
            "postort",
            "telefon",
            "karta",
            "link",
            "bostadstyp",
            "bostadspris",
        ];

        let csv = "";

        for (const row of data) {
            const values = fieldnames.map((field) => {
                let value = row[field];

                // Convert telefon arrays to a single string for CSV output
                if (field === "telefon" && Array.isArray(value)) {
                    value = value.join(" | ");
                }

                // Handle null/undefined values
                if (value === null || value === undefined) {
                    return "";
                }

                // Escape quotes and wrap in quotes if contains comma, newline, or quotes
                const strValue = String(value);
                if (
                    strValue.includes(",") ||
                    strValue.includes('"') ||
                    strValue.includes("\n")
                ) {
                    return `"${strValue.replace(/"/g, '""')}"`;
                }
                return strValue;
            });

            csv += values.join(",") + "\n";
        }

        await fs.writeFile(filename, csv, "utf-8");
    }
}

// Main function
async function main() {
    program
        .description(
            "Scrape person data from hitta.se and run ratsit for house owners",
        )
        .argument("query", "Search query")
        .option(
            "--no-missing",
            "Do not create separate CSV for missing phone numbers",
        )
        .option("--no-db", "Do not save to database")
        .option(
            "--api-url <url>",
            "Laravel API URL (default: https://app.nordicdigitalthailand.com)",
        )
        .option("--api-token <token>", "API authentication token")
        .parse();

    const options = program.opts();
    const query = program.args[0];

    const scraper = new HittaRatsitScraper(options.apiUrl, options.apiToken);

    try {
        // Scrape results (limit to 10 for testing)
        const results = await scraper.scrapeSearchResults(query, 1000);

        if (results.length > 0) {
            console.log(`\nTotal results found: ${results.length}`);

            // Save to CSV (include missing phone CSV by default)
            await scraper.saveToCsv(query, !options.noMissing);

            // Save to database unless --no-db flag is set
            if (!options.noDb) {
                console.log("\nSaving to database...");
                await scraper.saveToDatabase();
            }
        } else {
            console.log("No results found");
        }
    } finally {
        // Always close database connection
        await scraper.closeDbConnection();
        await closeSwedenPersonPool();
    }
}

// Run main function
main().catch((error) => {
    console.error("Error:", error);
    process.exit(1);
});
