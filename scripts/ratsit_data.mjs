#!/usr/bin/env node

/**
 * Ratsit.se Queue Processor
 * - Fetches queued records from ratsit_data table (is_queued = true)
 * - Scrapes additional person data from Ratsit.se for each queued record
 * - Updates records with enriched Ratsit data
 * - Sets is_queued = false when processing is complete
 */

import { program } from 'commander';
import { promises as fs, readFileSync } from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import axios from 'axios';
import { closeSwedenPersonPool, syncSwedenPersonFromRatsit } from './sweden_personer_sync.mjs';


const scriptDirectory = path.dirname(new URL(import.meta.url).pathname);
const projectRoot = path.resolve(scriptDirectory, '..');

const loadProjectEnv = () => {
  const envPath = path.join(projectRoot, '.env');

  try {
    const envContents = readFileSync(envPath, 'utf-8');

    for (const rawLine of envContents.split(/\r?\n/)) {
      const line = rawLine.trim();

      if (!line || line.startsWith('#')) {
        continue;
      }

      const separatorIndex = line.indexOf('=');

      if (separatorIndex === -1) {
        continue;
      }

      const key = line.slice(0, separatorIndex).trim();
      let value = line.slice(separatorIndex + 1).trim();

      if (!key || process.env[key]) {
        continue;
      }

      if (
        (value.startsWith('"') && value.endsWith('"'))
        || (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }

      process.env[key] = value;
    }
  } catch {
    // Ignore missing .env files and fall back to the current environment/CLI args.
  }
};

loadProjectEnv();

class RatsitScraper {
  constructor(api_url, api_token) {
    this.api_url = (api_url || process.env.API_URL || process.env.APP_URL || '').replace(/\/+$/, '');
    this.api_token = api_token || process.env.LARAVEL_API_TOKEN;

    this.data_dir = path.join(process.cwd(), 'scripts', 'data');

    // Define unwanted text patterns to filter out
    this.unwantedPatterns = [
      /DOLT - Bli validerad medlem för att se/gi,
      /Kolla lön direkt/gi
    ];
    this.isIgnorePattern = /lgh|1 tr|2 tr|3 tr|4 tr|5 tr|6 tr| nb| bv|\bBox\b|\b([1-9][0-9]?|100)\s*[A-Z]\b/i;

    // Ensure data directory exists
    fs.mkdir(this.data_dir, { recursive: true }).catch(() => {});

    // NOTE: SQLite removed for this script — we only use the API now.
  }

  /**
   * Filter out unwanted text patterns from a string
   * @param {string} text - The text to filter
   * @returns {string} - The filtered text
   */
  filterUnwantedText(text) {
    if (!text || typeof text !== 'string') return text;
    let filtered = text;
    for (const pattern of this.unwantedPatterns) {
      filtered = filtered.replace(pattern, '');
    }
    return filtered.trim();
  }

  /**
   * Check if text contains any unwanted patterns
   * @param {string} text - The text to check
   * @returns {boolean} - True if text contains unwanted patterns
   */
  containsUnwantedText(text) {
    if (!text || typeof text !== 'string') return false;
    return this.unwantedPatterns.some(pattern => pattern.test(text));
  }

  /**
   * Filter array of extraction results (objects with text property)
   * @param {Array} items - Array of items with text property
   * @returns {Array} - Filtered array
   */
  filterExtractionResults(items) {
    if (!Array.isArray(items)) return items;
    return items
      .map(item => {
        if (typeof item === 'string') {
          return this.filterUnwantedText(item);
        } else if (item && typeof item === 'object' && item.text) {
          return {
            ...item,
            text: this.filterUnwantedText(item.text)
          };
        }
        return item;
      })
      .filter(item => {
        if (typeof item === 'string') {
          return item !== '' && !this.containsUnwantedText(item);
        } else if (item && typeof item === 'object' && item.text) {
          return item.text !== '' && !this.containsUnwantedText(item.text);
        }
        return true;
      });
  }

  initSQLiteDatabases() {
    try {
      // Database paths
      const dbDir = path.join(process.cwd(), 'database');
      const ratsitDbPath = path.join(dbDir, 'ratsit.sqlite');
      const personerDbPath = path.join(dbDir, 'personer.sqlite');

      // Ensure database directory exists
      fs.mkdir(dbDir, { recursive: true }).catch(() => {});

      // Initialize ratsit.sqlite
      this.ratsitDb = new Database(ratsitDbPath);
      this.ratsitDb.exec(`
        CREATE TABLE IF NOT EXISTS ratsit_data (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          personnummer TEXT UNIQUE,
          personnamn TEXT,
          gatuadress TEXT,
          postnummer TEXT,
          postort TEXT,
          forsamling TEXT,
          kommun TEXT,
          kommun_ratsit TEXT,
          lan TEXT,
          adressandring TEXT,
          telfonnummer TEXT,
          stjarntacken TEXT,
          fodelsedag TEXT,
          alder TEXT,
          kon TEXT,
          civilstand TEXT,
          fornamn TEXT,
          efternamn TEXT,
          telefon TEXT,
          epost_adress TEXT,
          agandeform TEXT,
          bostadstyp TEXT,
          boarea TEXT,
          byggar TEXT,
          fastighet TEXT,
          personer TEXT,
          foretag TEXT,
          grannar TEXT,
          fordon TEXT,
          hundar TEXT,
          bolagsengagemang TEXT,
          longitude TEXT,
          latitud TEXT,
          google_maps TEXT,
          google_streetview TEXT,
          ratsit_se TEXT,
          is_active INTEGER DEFAULT 1,
          ratsit_created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          ratsit_updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
        CREATE INDEX IF NOT EXISTS idx_personnummer ON ratsit_data(personnummer);
        CREATE INDEX IF NOT EXISTS idx_personnamn ON ratsit_data(personnamn);
      `);

      // Initialize personer.sqlite (should already exist, but ensure ratsit_data_id column)
      this.personerDb = new Database(personerDbPath);
      this.personerDb.exec(`
        CREATE TABLE IF NOT EXISTS personer_data (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          personnamn TEXT,
          gatuadress TEXT,
          postnummer TEXT,
          postort TEXT,
          ratsit_data_id INTEGER,
          ratsit_gatuadress TEXT,
          ratsit_postnummer TEXT,
          ratsit_postort TEXT,
          ratsit_forsamling TEXT,
          ratsit_kommun TEXT,
          ratsit_lan TEXT,
          ratsit_adressandring TEXT,
          ratsit_kommun_ratsit TEXT,
          ratsit_stjarntacken TEXT,
          ratsit_fodelsedag TEXT,
          ratsit_personnummer TEXT,
          ratsit_alder TEXT,
          ratsit_kon TEXT,
          ratsit_civilstand TEXT,
          ratsit_fornamn TEXT,
          ratsit_efternamn TEXT,
          ratsit_personnamn TEXT,
          ratsit_agandeform TEXT,
          ratsit_bostadstyp TEXT,
          ratsit_boarea TEXT,
          ratsit_byggar TEXT,
          ratsit_fastighet TEXT,
          ratsit_telfonnummer TEXT,
          ratsit_epost_adress TEXT,
          ratsit_personer TEXT,
          ratsit_foretag TEXT,
          ratsit_grannar TEXT,
          ratsit_fordon TEXT,
          ratsit_hundar TEXT,
          ratsit_bolagsengagemang TEXT,
          ratsit_longitude TEXT,
          ratsit_latitud TEXT,
          ratsit_google_maps TEXT,
          ratsit_google_streetview TEXT,
          ratsit_ratsit_se TEXT,
          ratsit_is_active INTEGER DEFAULT 1,
          ratsit_updated_at DATETIME,
          is_active INTEGER DEFAULT 1,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );
      `);
      // Add ratsit_data_id column if it doesn't exist
      try {
        this.personerDb.exec(`ALTER TABLE personer_data ADD COLUMN ratsit_data_id INTEGER;`);
      } catch (e) {
        // Column might already exist, ignore error
      }
      // Add all ratsit columns if they don't exist
      const ratsitColumns = [
        'ratsit_gatuadress', 'ratsit_postnummer', 'ratsit_postort', 'ratsit_forsamling',
        'ratsit_kommun', 'ratsit_lan', 'ratsit_adressandring', 'ratsit_kommun_ratsit',
        'ratsit_stjarntacken', 'ratsit_fodelsedag', 'ratsit_personnummer', 'ratsit_alder',
        'ratsit_kon', 'ratsit_civilstand', 'ratsit_fornamn', 'ratsit_efternamn',
        'ratsit_personnamn', 'ratsit_agandeform', 'ratsit_bostadstyp', 'ratsit_boarea',
        'ratsit_byggar', 'ratsit_fastighet', 'ratsit_telfonnummer', 'ratsit_epost_adress',
        'ratsit_personer', 'ratsit_foretag', 'ratsit_grannar', 'ratsit_fordon',
        'ratsit_hundar', 'ratsit_bolagsengagemang', 'ratsit_longitude', 'ratsit_latitud',
        'ratsit_google_maps', 'ratsit_google_streetview', 'ratsit_ratsit_se', 'ratsit_is_active',
        'ratsit_updated_at'
      ];
      for (const col of ratsitColumns) {
        try {
          this.personerDb.exec(`ALTER TABLE personer_data ADD COLUMN ${col} TEXT;`);
        } catch (e) {
          // Column might already exist, ignore error
        }
      }
      this.personerDb.exec(`CREATE INDEX IF NOT EXISTS idx_ratsit_data_id ON personer_data(ratsit_data_id);`);

      console.log('✅ SQLite databases initialized for Ratsit scraper');
    } catch (error) {
      console.error('❌ Failed to initialize SQLite databases:', error.message);
      throw error;
    }
  }

  // SQLite statements removed — using API-only persistence now.

  async saveRatsitToDatabase(ratsitData) {
    /**
     * Save Ratsit data via API only (SQLite removed)
     */
    try {
      // Determine is_telefon: true if has phone numbers
      const hasTelefon = (Array.isArray(ratsitData.ps_telefon) && ratsitData.ps_telefon.length > 0) ||
        (Array.isArray(ratsitData.telefonnummer) && ratsitData.telefonnummer.length > 0);

      // Determine is_hus: false if address indicates apartment
      const isHusFalsePattern = /lgh|1 tr|2 tr|3 tr|4 tr|5 tr|6 tr| nb| bv|\bBox\b|\b([1-9][0-9]?|100)\s*[A-Z]\b/i;
      const isHus = !(ratsitData.bo_gatuadress && isHusFalsePattern.test(ratsitData.bo_gatuadress));

      const apiData = {
        gatuadress: ratsitData.bo_gatuadress || null,
        postnummer: ratsitData.bo_postnummer || null,
        postort: ratsitData.bo_postort || null,
        forsamling: ratsitData.bo_forsamling || null,
        kommun: ratsitData.bo_kommun || null,
        kommun_ratsit: ratsitData.kommun_ratsit || null,
        lan: ratsitData.bo_lan || null,
        adressandring: ratsitData.adressandring || null,
        telfonnummer: Array.isArray(ratsitData.telefonnummer) ? ratsitData.telefonnummer.join(' | ') : null,
        stjarntacken: ratsitData.stjarntacken || null,
        fodelsedag: ratsitData.ps_fodelsedag || null,
        personnummer: ratsitData.ps_personnummer || null,
        alder: ratsitData.ps_alder || null,
        kon: ratsitData.ps_kon || null,
        civilstand: ratsitData.ps_civilstand || null,
        fornamn: ratsitData.ps_fornamn || null,
        efternamn: ratsitData.ps_efternamn || null,
        personnamn: ratsitData.ps_personnamn || null,
        telefon: ratsitData.ps_telefon || null,
        agandeform: ratsitData.bo_agandeform || null,
        bostadstyp: ratsitData.bo_bostadstyp || null,
        boarea: ratsitData.bo_boarea || null,
        byggar: ratsitData.bo_byggar || null,
        personer: Array.isArray(ratsitData.bo_personer) ? ratsitData.bo_personer : null,
        foretag: Array.isArray(ratsitData.bo_foretag) ? ratsitData.bo_foretag : null,
        grannar: Array.isArray(ratsitData.bo_grannar) ? ratsitData.bo_grannar : null,
        fordon: Array.isArray(ratsitData.bo_fordon) ? ratsitData.bo_fordon : null,
        hundar: Array.isArray(ratsitData.bo_hundar) ? ratsitData.bo_hundar : null,
        bolagsengagemang: Array.isArray(ratsitData.ps_bolagsengagemang) ? ratsitData.ps_bolagsengagemang : null,
        longitude: ratsitData.bo_longitude || null,
        latitud: ratsitData.latitud || null,
        google_maps: ratsitData.google_maps || null,
        google_streetview: ratsitData.google_streetview || null,
        ratsit_se: ratsitData.ratsit_se || null,
        is_active: true,
        is_telefon: hasTelefon,
        is_hus: isHus,
      };

      // Log payload summary
      console.log('\n  📤 API Payload for ratsit_data:');
      const nonNullFields = Object.entries(apiData).filter(([k, v]) => v !== null);
      console.log(`     Sending ${nonNullFields.length} non-null fields out of ${Object.keys(apiData).length} total`);
      nonNullFields.forEach(([key, value]) => {
        let display;
        if (Array.isArray(value)) {
          if (value.length === 0) {
            display = '[]';
          } else if (typeof value[0] === 'object' && value[0] !== null) {
            display = `[${value.length} objects: ${value.slice(0, 2).map(obj => obj.text || '[object]').join(', ')}${value.length > 2 ? '...' : ''}]`;
          } else {
            display = JSON.stringify(value);
          }
        } else if (typeof value === 'string' && value.length > 60) {
          display = value.substring(0, 60) + '...';
        } else {
          display = value;
        }
        console.log(`     ${key}: ${display}`);
      });
      console.log('');

      console.log('  → Posting Ratsit data to API...');

      // Use a shorter timeout for API calls here to avoid hanging the scraper
      const axiosConfig = {
        headers: {
          'Content-Type': 'application/json',
          ...(this.api_token ? { 'Authorization': `Bearer ${this.api_token}` } : {}),
        },
        timeout: 30000, // 30s
        maxContentLength: 20_000_000,
        maxBodyLength: 20_000_000,
      };

      try {
        const response = await axios.post(`${this.api_url}/api/ratsit-data/bulk`, { records: [apiData] }, axiosConfig);
        try {
          await syncSwedenPersonFromRatsit(ratsitData);
        } catch (syncError) {
          console.log(`  ⚠ sweden_personer Ratsit sync failed for ${ratsitData.ps_personnamn || 'unknown'}: ${syncError.message}`);
        }
        console.log(`  ✓ Saved Ratsit data for ${ratsitData.ps_personnamn || 'unknown'} via API`);
        console.log(`  ✓ API Response:`, JSON.stringify(response.data, null, 2));

        // If bulk response reports failures (e.g., duplicate entry), attempt to resolve and update
        try {
          const summary = response.data?.summary || null;
          const errors = Array.isArray(response.data?.errors) ? response.data.errors : [];
          if (summary && summary.failed && summary.failed > 0 && errors.length > 0) {
            console.log(`  → Bulk API reported ${summary.failed} failed records; attempting duplicate resolution`);
            for (const err of errors) {
              const errMsg = err.error || '';
              const errPersonnummer = err.personnummer || ratsitData.ps_personnummer || null;
              // Only handle duplicate-entry style errors here
              if (typeof errMsg === 'string' && errMsg.toLowerCase().includes('duplicate')) {
                console.log(`  → Duplicate error for index ${err.index} (${errPersonnummer || 'unknown'})`);
                let existingId = null;

                // Try lookup by personnummer
                if (errPersonnummer) {
                  try {
                    const searchUrl = `${this.api_url}/api/ratsit-data?personnummer=${encodeURIComponent(errPersonnummer)}&per_page=5`;
                    const sresp = await axios.get(searchUrl, { headers: { 'Accept': 'application/json', ...(this.api_token && { 'Authorization': `Bearer ${this.api_token}` }) }, timeout: 20000 });
                    if (sresp?.status === 200 && sresp.data && Array.isArray(sresp.data.data) && sresp.data.data.length > 0) {
                      existingId = sresp.data.data[0].id;
                      console.log(`  → Found existing record by personnummer: id=${existingId}`);
                    }
                  } catch (e) {
                    console.log('  → Personnummer lookup failed:', e?.message || e);
                  }
                }

                // Fallback: try name+address
                if (!existingId && (ratsitData.ps_personnamn || ratsitData.personnamn)) {
                  try {
                    const name = ratsitData.ps_personnamn || ratsitData.personnamn;
                    const searchUrl = `${this.api_url}/api/ratsit-data?personnamn=${encodeURIComponent(name)}&per_page=100`;
                    const sresp = await axios.get(searchUrl, { headers: { 'Accept': 'application/json', ...(this.api_token && { 'Authorization': `Bearer ${this.api_token}` }) }, timeout: 20000 });
                    if (sresp?.status === 200 && sresp.data && Array.isArray(sresp.data.data)) {
                      const candidates = sresp.data.data;
                      const match = candidates.find(r => (r.gatuadress || '').trim() === (ratsitData.bo_gatuadress || '').trim());
                      if (match) {
                        existingId = match.id;
                        console.log(`  → Found existing record by personnamn+gatuadress: id=${existingId}`);
                      } else if (candidates.length === 1) {
                        existingId = candidates[0].id;
                        console.log(`  → Single candidate found by personnamn: id=${existingId}`);
                      } else {
                        console.log(`  → ${candidates.length} candidates found by personnamn but no exact gatuadress match`);
                      }
                    }
                  } catch (e) {
                    console.log('  → Personnamn lookup failed:', e?.message || e);
                  }
                }

                if (existingId) {
                  try {
                    const putUrl = `${this.api_url}/api/ratsit-data/${existingId}`;
                    const putResp = await axios.put(putUrl, apiData, axiosConfig);
                    if (putResp?.status === 200) {
                      try {
                        await syncSwedenPersonFromRatsit(ratsitData);
                      } catch (syncError) {
                        console.log(`  ⚠ sweden_personer Ratsit sync failed for ${ratsitData.ps_personnamn || 'unknown'}: ${syncError.message}`);
                      }
                      console.log(`  ✓ Updated existing ratsit_data id=${existingId} successfully (post-duplicate resolution)`);
                    } else {
                      console.log(`  ✗ PUT update returned status ${putResp?.status}`);
                    }
                  } catch (putErr) {
                    console.error('  ✗ Failed to update existing record after duplicate:', putErr?.message || putErr);
                  }
                }
              }
            }
          }
        } catch (err) {
          console.error('  ✗ Error handling bulk response errors:', err?.message || err);
        }

        return true;
      } catch (postErr) {
        console.error('  ✗ API post failed or timed out:', postErr?.message || postErr);

        // If duplicate entry detected, attempt to find existing record and update it instead
        const status = postErr.response?.status;
        const respData = postErr.response?.data || '';
        const isDuplicate = status === 409 || (typeof respData === 'string' && respData.includes('Duplicate')) || (respData && respData.message && respData.message.includes('Duplicate'));

        if (isDuplicate) {
          console.log('  → Duplicate detected, attempting to locate existing ratsit_data record to update');
          try {
            // Prefer lookup by personnummer when available
            let existingId = null;

            if (ratsitData.ps_personnummer) {
              try {
                const searchUrl = `${this.api_url}/api/ratsit-data?personnummer=${encodeURIComponent(ratsitData.ps_personnummer)}&per_page=5`;
                const sresp = await axios.get(searchUrl, { headers: { 'Accept': 'application/json', ...(this.api_token && { 'Authorization': `Bearer ${this.api_token}` }) }, timeout: 20000 });
                if (sresp?.status === 200 && sresp.data && Array.isArray(sresp.data.data) && sresp.data.data.length > 0) {
                  existingId = sresp.data.data[0].id;
                  console.log(`  → Found existing record by personnummer: id=${existingId}`);
                }
              } catch (e) {
                console.log('  → Personnummer lookup failed:', e?.message || e);
              }
            }

            // Fallback: search by personnamn and gatuadress
            if (!existingId && (ratsitData.ps_personnamn || ratsitData.personnamn)) {
              try {
                const name = ratsitData.ps_personnamn || ratsitData.personnamn;
                const searchUrl = `${this.api_url}/api/ratsit-data?personnamn=${encodeURIComponent(name)}&per_page=100`;
                const sresp = await axios.get(searchUrl, { headers: { 'Accept': 'application/json', ...(this.api_token && { 'Authorization': `Bearer ${this.api_token}` }) }, timeout: 20000 });
                if (sresp?.status === 200 && sresp.data && Array.isArray(sresp.data.data)) {
                  const candidates = sresp.data.data;
                  const match = candidates.find(r => (r.gatuadress || '').trim() === (ratsitData.bo_gatuadress || '').trim());
                  if (match) {
                    existingId = match.id;
                    console.log(`  → Found existing record by personnamn+gatuadress: id=${existingId}`);
                  } else if (candidates.length === 1) {
                    existingId = candidates[0].id;
                    console.log(`  → Single candidate found by personnamn: id=${existingId}`);
                  } else {
                    console.log(`  → ${candidates.length} candidates found by personnamn but no exact gatuadress match`);
                  }
                }
              } catch (e) {
                console.log('  → Personnamn lookup failed:', e?.message || e);
              }
            }

            if (existingId) {
              try {
                const putUrl = `${this.api_url}/api/ratsit-data/${existingId}`;
                const putResp = await axios.put(putUrl, apiData, axiosConfig);
                if (putResp?.status === 200) {
                  try {
                    await syncSwedenPersonFromRatsit(ratsitData);
                  } catch (syncError) {
                    console.log(`  ⚠ sweden_personer Ratsit sync failed for ${ratsitData.ps_personnamn || 'unknown'}: ${syncError.message}`);
                  }
                  console.log(`  ✓ Updated existing ratsit_data id=${existingId} successfully`);
                  return true;
                }
              } catch (putErr) {
                console.error('  ✗ Failed to update existing record:', putErr?.message || putErr);
                return false;
              }
            }
          } catch (err) {
            console.error('  ✗ Error during duplicate resolution:', err?.message || err);
            return false;
          }
        }

        // Continue scraping even if save fails for this result
        return false;
      }
    } catch (error) {
      const status = error.response?.status;
      console.log(`  ✗ Error saving Ratsit data via API${status ? ` (HTTP ${status})` : ''}:`, error.response?.data || error.message);
      return false;
    }
  }



  // async updateHittaDataRatsitFlag(ratsitData) {
  //   /**
  //    * Update is_ratsit flag in hitta_data via API (no local SQLite dependency)
  //    * COMMENTED OUT: This method saves data to hitta_data table, which we don't want
  //    */
  //   try {
  //     const personnamn = ratsitData.ps_personnamn || ratsitData.personnamn || null;
  //     const gatuadress = ratsitData.bo_gatuadress || ratsitData.gatuadress || null;
  //     if (!personnamn || !gatuadress) {
  //       console.log('  ⚠ Skipping hitta_data flag update (missing personnamn or gatuadress)');
  //       return;
  //     }

  //     // Use bulk upsert by personnamn; include gatuadress for better matching and set is_ratsit
  //     const payload = { records: [{ personnamn, gatuadress, is_ratsit: true }] };
  //     await axios.post(`${this.api_url}/api/hitta-data/bulk`, payload, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': this.api_token ? `Bearer ${this.api_token}` : undefined,
  //       },
  //     });

  //     console.log(`  ✓ Updated is_ratsit flag in hitta_data via API`);
  //   } catch (error) {
  //     const status = error.response?.status;
  //     console.log(`  ✗ Error updating hitta_data is_ratsit flag via API${status ? ` (HTTP ${status})` : ''}:`, error.response?.data || error.message);
  //   }
  // }

  async saveToPrivateData(hittaData, ratsitData) {
    /**
     * Save combined Hitta + Ratsit data to private_data table via API
     * Only saves if BOTH hitta and ratsit data are available
     */
    if (!hittaData || !ratsitData) {
      console.log('  ⊘ Skipping private_data save (need both Hitta and Ratsit data)');
      return false;
    }

    try {
      // Combine data from both sources
      // Determine is_telefon: true if has phone numbers from either source
      const hasTelefon = (Array.isArray(ratsitData.ps_telefon) && ratsitData.ps_telefon.length > 0) ||
        (Array.isArray(hittaData.telefon) && hittaData.telefon.length > 0);

      // Determine is_hus: false if address indicates apartment
      const isHusFalsePattern = /lgh|1 tr|2 tr|3 tr|4 tr|5 tr|6 tr| nb| bv|\bBox\b|\b([1-9][0-9]?|100)\s*[A-Z]\b/i;
      const gatuadress = ratsitData.bo_gatuadress || hittaData.gatuadress || null;
      const isHus = !(gatuadress && isHusFalsePattern.test(gatuadress));

      const apiData = {
        // Address fields (prefer Ratsit)
        gatuadress: gatuadress,
        postnummer: ratsitData.bo_postnummer || hittaData.postnummer || null,
        postort: ratsitData.bo_postort || hittaData.postort || null,
        forsamling: ratsitData.bo_forsamling || null,
        kommun: ratsitData.bo_kommun || null,
        kommun_ratsit: ratsitData.kommun_ratsit || null,
        lan: ratsitData.bo_lan || null,
        adressandring: ratsitData.adressandring || null,

        // Phone arrays (send as arrays, not JSON strings)
        telefon: Array.isArray(ratsitData.ps_telefon) ? ratsitData.ps_telefon : (Array.isArray(hittaData.telefon) ? hittaData.telefon : []),

        // Person fields (Ratsit)
        stjarntacken: ratsitData.stjarntacken || null,
        fodelsedag: ratsitData.ps_fodelsedag || null,
        personnummer: ratsitData.ps_personnummer || null,
        alder: ratsitData.ps_alder || hittaData.alder || null,
        kon: ratsitData.ps_kon || hittaData.kon || null,
        civilstand: ratsitData.ps_civilstand || null,
        fornamn: ratsitData.ps_fornamn || null,
        efternamn: ratsitData.ps_efternamn || null,
        personnamn: ratsitData.ps_personnamn || hittaData.personnamn || null,

        // Dwelling fields (Ratsit)
        agandeform: ratsitData.bo_agandeform || null,
        bostadstyp: ratsitData.bo_bostadstyp || null,
        boarea: ratsitData.bo_boarea || null,
        byggar: ratsitData.bo_byggar || null,

        // Collections (Ratsit) - send as arrays
        personer: Array.isArray(ratsitData.bo_personer) ? ratsitData.bo_personer : [],
        foretag: Array.isArray(ratsitData.bo_foretag) ? ratsitData.bo_foretag : [],
        grannar: Array.isArray(ratsitData.bo_grannar) ? ratsitData.bo_grannar : [],
        fordon: Array.isArray(ratsitData.bo_fordon) ? ratsitData.bo_fordon : [],
        hundar: Array.isArray(ratsitData.bo_hundar) ? ratsitData.bo_hundar : [],
        bolagsengagemang: Array.isArray(ratsitData.ps_bolagsengagemang) ? ratsitData.ps_bolagsengagemang : [],

        // Geo & Links (combined)
        longitude: ratsitData.bo_longitude || null,
        latitud: ratsitData.latitud || null,
        google_maps: ratsitData.google_maps || null,
        google_streetview: ratsitData.google_streetview || null,

        // Hitta specific fields
        hitta_link: hittaData.link || null,
        hitta_karta: hittaData.karta || null,
        bostad_typ: hittaData.bostadstyp || null,
        bostad_pris: hittaData.bostadspris || null,

        // Flags
        is_active: true,
        is_telefon: hasTelefon,
        is_hus: isHus,
      };

      // Use API to save
      const response = await axios.post(`${this.api_url}/api/data-private/bulk`, { records: [apiData] }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': this.api_token ? `Bearer ${this.api_token}` : undefined,
        },
      });

      console.log(`  ✓ Combined data saved to private_data via API:`, response.data);
      return true;
    } catch (error) {
      console.log(`  ✗ Error saving combined data via API:`, error.response?.data || error.message);
      return false;
    }
  }

  /**
   * Fetch queued records from ratsit_data table via API
   * @param {number} limit - Maximum number of records to fetch
   * @param {string} postnummer - Optional postnummer filter
   * @returns {Promise<Array>} Array of queued records
   */
  async fetchQueuedRecords(limit = 100000, postnummer = null) {
    try {
      let apiUrl = `${this.api_url}/api/ratsit-data?is_queued=true&per_page=${limit}&sort_by=created_at&sort_direction=desc`;

      // Add postnummer filter if provided
      if (postnummer) {
        apiUrl += `&postnummer=${encodeURIComponent(postnummer)}`;
      }

      console.log(`  📡 Fetching queued records from: ${apiUrl}`);

      const response = await axios.get(apiUrl, {
        headers: {
          'Accept': 'application/json'
        },
        timeout: 112000
      });

      if (response.status === 200 && response.data && response.data.data) {
        const records = response.data.data;
        console.log(`  ✅ Found ${records.length} queued record(s)`);
        return records;
      } else {
        console.log(`  ⚠️  Unexpected API response: ${response.status}`);
        return [];
      }
    } catch (error) {
      console.error(`  ❌ Error fetching queued records:`, error.response?.data || error.message);
      return [];
    }
  }

  /**
   * Update a ratsit_data record with scraped Ratsit data and mark as processed
   * @param {number} recordId - The ID of the record to update
   * @param {Object} ratsitData - The scraped Ratsit data
   * @returns {Promise<boolean>} Success status
   */
  async updateRecordWithRatsitData(recordId, ratsitData) {
    try {
      // Prepare the update payload with Ratsit data
      // Determine is_telefon: true if has phone numbers
      const hasTelefon = (Array.isArray(ratsitData.ps_telefon) && ratsitData.ps_telefon.length > 0) ||
        (Array.isArray(ratsitData.telefonnummer) && ratsitData.telefonnummer.length > 0);

      // Determine is_hus: false if address indicates apartment
      const isHusFalsePattern = /lgh|1 tr|2 tr|3 tr|4 tr|5 tr|6 tr| nb| bv|\bBox\b|\b([1-9][0-9]?|100)\s*[A-Z]\b/i;
      const isHus = !(ratsitData.bo_gatuadress && isHusFalsePattern.test(ratsitData.bo_gatuadress));

      const updateData = {
        gatuadress: ratsitData.bo_gatuadress || null,
        postnummer: ratsitData.bo_postnummer || null,
        postort: ratsitData.bo_postort || null,
        forsamling: ratsitData.bo_forsamling || null,
        kommun: ratsitData.bo_kommun || null,
        kommun_ratsit: ratsitData.kommun_ratsit || null,
        lan: ratsitData.bo_lan || null,
        adressandring: ratsitData.adressandring || null,
        telfonnummer: Array.isArray(ratsitData.telefonnummer) ? ratsitData.telefonnummer.join('|') : null,
        stjarntacken: ratsitData.stjarntacken || null,
        // Handle fodelsedag - try scraped value first, then derive from personnummer
        fodelsedag: (() => {
          let fodelsedag = ratsitData.ps_fodelsedag || null;
          if (fodelsedag) {
            // If it's in Swedish format like "3 oktober 1966", convert to ISO format
            const swedishDateMatch = fodelsedag.match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/);
            if (swedishDateMatch) {
              const day = swedishDateMatch[1].padStart(2, '0');
              const monthName = swedishDateMatch[2].toLowerCase();
              const year = swedishDateMatch[3];

              // Swedish month names to numbers
              const monthMap = {
                'januari': '01', 'februari': '02', 'mars': '03', 'april': '04',
                'maj': '05', 'juni': '06', 'juli': '07', 'augusti': '08',
                'september': '09', 'oktober': '10', 'november': '11', 'december': '12'
              };

              const month = monthMap[monthName];
              if (month) {
                fodelsedag = `${year}-${month}-${day}`;
                console.log(`  📅 Converted Swedish date to ISO: ${fodelsedag}`);
              }
            }
          }
          if (!fodelsedag && ratsitData.ps_personnummer) {
            // Extract date from personnummer (format: YYYYMMDD-XXXX)
            const personnummerMatch = ratsitData.ps_personnummer.match(/^(\d{4})(\d{2})(\d{2})/);
            if (personnummerMatch) {
              fodelsedag = `${personnummerMatch[1]}-${personnummerMatch[2]}-${personnummerMatch[3]}`;
              console.log(`  📅 Derived fodelsedag from personnummer: ${fodelsedag}`);
            }
          }
          if (fodelsedag) {
            console.log(`  📅 Using fodelsedag: ${fodelsedag}`);
          }
          return fodelsedag;
        })(),
        personnummer: ratsitData.ps_personnummer || null,
        alder: ratsitData.ps_alder || null,
        kon: ratsitData.ps_kon || null,
        civilstand: ratsitData.ps_civilstand || null,
        fornamn: ratsitData.ps_fornamn || null,
        efternamn: ratsitData.ps_efternamn || null,
        personnamn: ratsitData.ps_personnamn || null,
        telefon: ratsitData.ps_telefon || null,
        agandeform: ratsitData.bo_agandeform || null,
        bostadstyp: ratsitData.bo_bostadstyp || null,
        boarea: ratsitData.bo_boarea || null,
        byggar: ratsitData.bo_byggar || null,
        personer: Array.isArray(ratsitData.bo_personer) ? ratsitData.bo_personer.map(p => typeof p === 'object' ? p.text : p) : null,
        foretag: Array.isArray(ratsitData.bo_foretag) ? ratsitData.bo_foretag.map(f => typeof f === 'object' ? f.text : f) : null,
        grannar: Array.isArray(ratsitData.bo_grannar) ? ratsitData.bo_grannar.map(g => typeof g === 'object' ? g.text : g) : null,
        fordon: Array.isArray(ratsitData.bo_fordon) ? ratsitData.bo_fordon.map(f => typeof f === 'object' ? f.text : f) : null,
        hundar: Array.isArray(ratsitData.bo_hundar) ? ratsitData.bo_hundar.map(h => typeof h === 'object' ? h.text : h) : null,
        bolagsengagemang: Array.isArray(ratsitData.ps_bolagsengagemang) ? ratsitData.ps_bolagsengagemang.map(b => typeof b === 'object' ? b.text : b) : null,
        longitude: ratsitData.bo_longitude || null,
        latitud: ratsitData.latitud || null,
        google_maps: ratsitData.google_maps || null,
        google_streetview: ratsitData.google_streetview || null,
        ratsit_se: ratsitData.ratsit_se || null,
        is_hus: isHus ? 1 : 0,
        is_telefon: hasTelefon ? 1 : 0,
        is_queued: false, // Mark as processed
      };

      const apiUrl = `${this.api_url}/api/ratsit-data/${recordId}`;

      console.log(`  � Debug arrays:`);
      console.log(`  📤 Updating record ${recordId} via API`);

      const response = await axios.put(apiUrl, updateData, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        timeout: 112000,
        maxRedirects: 0, // Don't follow redirects
        validateStatus: function (status) {
          return status >= 200 && status < 400; // Accept 2xx and 3xx
        }
      });

      if (response.status === 200) {
        try {
          await syncSwedenPersonFromRatsit(ratsitData);
        } catch (syncError) {
          console.log(`  ⚠ sweden_personer Ratsit sync failed for ${ratsitData.ps_personnamn || ratsitData.personnamn || 'unknown'}: ${syncError.message}`);
        }
        console.log(` 𐦂𖨆𐀪𖠋𐀪𐀪 ✅ Successfully updated record ${recordId}`);
        return true;
      } else {
        console.log(`  ⚠️  Unexpected update response: ${response.status}`);
        return false;
      }
    } catch (error) {
      const errData = error.response?.data || error.message || '';
      console.error(`  ❌ Error updating record ${recordId}:`, errData);

      // Detect duplicate key error messages (MySQL/SQL states) and try to update the existing record
      const isDuplicateError = (typeof errData === 'string' && errData.includes('Duplicate entry')) ||
        (errData && typeof errData.message === 'string' && errData.message.includes('Duplicate entry')) ||
        (errData && errData.exception && JSON.stringify(errData.exception).includes('Duplicate entry'));

      if (isDuplicateError && updateData.personnamn && updateData.gatuadress) {
        try {
          console.log(`  🔎 Duplicate error detected — searching for existing record to update for ${updateData.personnamn} @ ${updateData.gatuadress}`);

          const searchUrl = `${this.api_url}/api/ratsit-data?personnamn=${encodeURIComponent(updateData.personnamn)}&per_page=100`;
          const searchResp = await axios.get(searchUrl, {
            headers: { 'Accept': 'application/json', ...(this.api_token && { 'Authorization': `Bearer ${this.api_token}` }) },
            timeout: 20000,
          });

          if (searchResp?.status === 200 && searchResp.data && Array.isArray(searchResp.data.data)) {
            const matches = searchResp.data.data.filter(r => (r.personnamn || '').trim() === (updateData.personnamn || '').trim());
            const exactMatch = matches.find(r => (r.gatuadress || '').trim() === (updateData.gatuadress || '').trim());

            if (exactMatch) {
              console.log(`  🔁 Found existing duplicate record with id ${exactMatch.id}, updating it instead`);
              const duplicateUrl = `${this.api_url}/api/ratsit-data/${exactMatch.id}`;
              const dupResp = await axios.put(duplicateUrl, updateData, {
                headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  ...(this.api_token && { 'Authorization': `Bearer ${this.api_token}` }),
                },
                timeout: 112000,
                maxRedirects: 0,
                validateStatus: function (status) { return status >= 200 && status < 400; }
              });

              if (dupResp.status === 200) {
                try {
                  await syncSwedenPersonFromRatsit(ratsitData);
                } catch (syncError) {
                  console.log(`  ⚠ sweden_personer Ratsit sync failed for ${ratsitData.ps_personnamn || ratsitData.personnamn || 'unknown'}: ${syncError.message}`);
                }
                console.log(`  ✅ Updated duplicate record ${exactMatch.id} successfully`);
                // Mark original queue entry as processed (avoid reattempts)
                try { await this.markRecordProcessed(recordId); } catch (e) { console.warn(`  ⚠️  Failed to mark original record ${recordId} processed:`, e?.message || e); }
                return true;
              }
            } else {
              console.log(`  🔍 Found ${matches.length} candidates for personnamn but no exact gatuadress match`);
            }
          }
        } catch (searchErr) {
          console.error(`  ❌ Error while resolving duplicate record:`, searchErr.response?.data || searchErr.message || searchErr);
        }
      }

      return false;
    }
  }

  /**
   * Mark a record as processed (set is_queued = false) without updating data
   * @param {number} recordId - The ID of the record to mark as processed
   * @returns {Promise<boolean>} Success status
   */
  async markRecordProcessed(recordId) {
    try {
      const apiUrl = `${this.api_url}/api/ratsit-data/${recordId}`;

      const response = await axios.put(apiUrl, { is_queued: false }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(this.api_token && { 'Authorization': `Bearer ${this.api_token}` })
        },
        timeout: 112000
      });

      return response.status === 200;
    } catch (error) {
      console.error(`  ❌ Error marking record ${recordId} as processed:`, error.response?.data || error.message);
      return false;
    }
  }

  closeDbConnection() {
    /** Close SQLite database connection */
    if (this.db) {
      this.db.close();
      this.db = null;
    }
  }

  async safeCloseBrowser(browser) {
    if (!browser) return;
    try {
      // Attempt a graceful close with timeout to avoid hanging indefinitely
      await Promise.race([
        browser.close(),
        new Promise((_, reject) => setTimeout(() => reject(new Error('browser.close() timed out')), 10000))
      ]);
    } catch (err) {
      try {
        const proc = typeof browser.process === 'function' ? browser.process() : null;
        if (proc && proc.pid) {
          try { proc.kill('SIGKILL'); } catch (_) {}
          console.log('  → Browser process killed after close timeout');
        }
      } catch (e) {
        // ignore
      }
    }
  }

  async scrapeRatsitData(query, { savePerResult = false } = {}) {
    /**
     * Scrape Ratsit data with complete extraction
     * - If `savePerResult` is true the method will POST each scraped record to the API
     * Returns array of person data objects with full details
     */
    console.log(`  → Starting Ratsit scrape for: "${query}"`);

    const encodedQuery = encodeURIComponent(query);
    const searchUrl = `https://www.ratsit.se/sok/person?vem=${encodedQuery}`;

    let browser = null;
    const results = [];
    let savedDuringScrape = 0;
    let perPage = null;
    let totalPagesKnown = null;

    try {
      browser = await chromium.launch({
        headless: true,
        executablePath: '/usr/bin/google-chrome',
        args: [
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--window-size=1920,1080',
          '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        ]
      });

      // Load cookies from one of several possible locations (optional)
      let cookies = [];
      const cookieCandidates = [
        path.join(process.cwd(), 'jobs', 'cookies', 'ratsit.json'),
        path.join(process.cwd(), 'cookies', 'ratsit.json'),
        path.join(process.cwd(), 'scripts', 'cookies', 'ratsit.json')
      ];

      let cookieFileUsed = null;
      let rawCookies = null;
      let foundEmptyCandidate = null;

      console.log(`  → Looking for cookie files in: ${cookieCandidates.map(p => path.relative(process.cwd(), p)).join(', ')}`);

      // Prefer a non-empty cookie file; fall back to an empty candidate if no real cookies found
      for (const cand of cookieCandidates) {
        try {
          const data = await fs.readFile(cand, 'utf8');
          const parsed = JSON.parse(data);
          console.log(`  → Candidate ${path.relative(process.cwd(), cand)} exists (parsed ${Array.isArray(parsed) ? parsed.length : 'non-array'} entries)`);

          if (Array.isArray(parsed) && parsed.length > 0) {
            rawCookies = parsed;
            cookieFileUsed = cand;
            break;
          }

          if (Array.isArray(parsed) && parsed.length === 0) {
            // remember first empty candidate but keep searching for a non-empty file
            if (!foundEmptyCandidate) foundEmptyCandidate = cand;
            continue;
          }

          // If file exists and contains something that isn't an array, still accept it
          rawCookies = parsed;
          cookieFileUsed = cand;
          break;
        } catch (e) {
          // not found or invalid — try next
          // console.log(`  → Candidate ${path.relative(process.cwd(), cand)} not available or unreadable`);
          continue;
        }
      }

      if (!cookieFileUsed && foundEmptyCandidate) {
        cookieFileUsed = foundEmptyCandidate;
        rawCookies = [];
      }

      if (cookieFileUsed && Array.isArray(rawCookies)) {
        // Normalize cookies for Playwright
        cookies = rawCookies.map(cookie => {
          const normalizedCookie = { ...cookie };

          if (normalizedCookie.sameSite) {
            const sameSite = String(normalizedCookie.sameSite).toLowerCase();
            if (sameSite === 'lax') normalizedCookie.sameSite = 'Lax';
            else if (sameSite === 'strict') normalizedCookie.sameSite = 'Strict';
            else if (sameSite === 'none' || sameSite === 'no_restriction') normalizedCookie.sameSite = 'None';
            else normalizedCookie.sameSite = 'Lax';
          } else {
            normalizedCookie.sameSite = 'Lax';
          }

          return normalizedCookie;
        });

        if (rawCookies.length === 0) {
          console.log(`  → ${path.relative(process.cwd(), cookieFileUsed)} found but contains 0 cookies — continuing without cookies`);
        } else {
          console.log(`  → Loaded ${cookies.length} cookie(s) from ${path.relative(process.cwd(), cookieFileUsed)}`);
        }
      } else if (!cookieFileUsed) {
        // No cookie file found in candidates — create default at cookies/ratsit.json
        const defaultPath = path.join(process.cwd(), 'cookies', 'ratsit.json');
        try {
          await fs.mkdir(path.dirname(defaultPath), { recursive: true });
          await fs.writeFile(defaultPath, '[]', 'utf8');
          console.log(`  → No cookies file found — created empty ${path.relative(process.cwd(), defaultPath)} and continuing without cookies`);
        } catch (writeErr) {
          console.log(`  ⚠️ Could not create cookies file; continuing without cookies: ${writeErr.message}`);
        }
      } else {
        // cookieFileUsed existed but contained unexpected data — already logged above
      }

      const context = await browser.newContext({
        extraHTTPHeaders: {
          'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });

      // Add cookies to context if loaded
      if (cookies.length > 0) {
        await context.addCookies(cookies);
        console.log(`  → Added ${cookies.length} cookie(s) to browser context`);
      }

      console.log('  → Creating new browser page');
      let page;
      try {
        page = await context.newPage();
        console.log('  → New browser page created');
      } catch (e) {
        console.error('  ✗ Failed to create new page:', e?.message || e);
        await this.safeCloseBrowser(browser);
        throw e;
      }

      console.log(`  → Starting pagination loop with initial URL: ${searchUrl}`);

      // Get search results (handle pagination)
      const links = [];
      const linkSet = new Set();
      let nextUrl = searchUrl;
      const visitedPageUrls = new Set();
      let pageNum = 0;
      const maxPages = 100; // safety cap
      let ignoredCount = 0;

      let totalResults = null;
      let totalPages = null;
      let targetPages = maxPages;

      while (nextUrl && pageNum < maxPages) {
        // Stop if we've already visited this exact URL (prevents cycling)
        if (visitedPageUrls.has(nextUrl)) {
          console.log(`  → Detected repeated page URL, stopping pagination: ${nextUrl}`);
          break;
        }
        visitedPageUrls.add(nextUrl);
        pageNum += 1;
        // Use domcontentloaded instead of networkidle to avoid hangs from long-polling
        try {
          await page.goto(nextUrl, { waitUntil: 'domcontentloaded', timeout: 90000 });
        } catch (gotoErr) {
          console.log(`  → Warning: page.goto failed for ${nextUrl}: ${gotoErr?.message || gotoErr}`);
          // Retry once with a slightly longer timeout and domcontentloaded
          try { await page.goto(nextUrl, { waitUntil: 'domcontentloaded', timeout: 112000 }); } catch (e) { console.log(`  → Retry failed for page.goto: ${e?.message || e}`); throw e; }
        }
        // Give the page a short moment to settle DOM-driven content
        await page.waitForTimeout(1500);

        // Diagnostic: log loaded page URL and title for troubleshooting long queries
        try {
          const currentUrl = await page.url();
          const title = await page.title();
          console.log(`  → Page ${pageNum} loaded: ${currentUrl} — ${title}`);
        } catch (diagErr) {
          console.log('  → Page diagnostics failed:', diagErr?.message || diagErr);
        }

        // On first page: try to extract total counts only (do not use per-page in terminal)
        if (pageNum === 1) {
          const totals = await this.extractSearchTotalsFromPage(page);
          if (totals && totals.personer) {
            totalResults = totals.personer;
            console.log(`  → Search shows ${totalResults} total person(s)`);
          }
        }

        // Collect person links on this results page — inspect each <li> so we can
        // check the visible text against `isIgnorePattern` before adding.
        let resultList = await page.$('ul.search-result-list');
        if (!resultList) {
          // Try common alternative containers before giving up
          resultList = await page.$('div.search-results') || await page.$('div.search-result-list') || await page.$('ul.result-list') || null;
          if (!resultList) {
            const snippet = (await page.content()).replace(/\s+/g, ' ').slice(0, 800);
            console.log(`  → No result list found on page ${pageNum}; page snippet: ${snippet}`);
            console.log('  → Stopping pagination due to unexpected page structure.');
            break;
          } else {
            console.log(`  → Found alternative result container on page ${pageNum}`);
          }
        }

        if (resultList) {
          const items = await resultList.$$('li');
          // Determine per-page count from first page to compute total pages
          if (pageNum === 1) {
            try {
              perPage = items.length || null;
              if (perPage && totalResults) {
                totalPagesKnown = Math.min(maxPages, Math.max(1, Math.ceil(totalResults / perPage)));
                console.log(`  → Determined perPage=${perPage}, totalPages=${totalPagesKnown}`);
              }
            } catch (e) {
              // ignore
            }
          }
          for (const li of items) {
            // Be more permissive when selecting the anchor — some results use data attributes or onclick navigation
            const linkElement = await li.$('a');
            if (!linkElement) continue;

            // Try common attributes first
            let href = (await linkElement.getAttribute('href')) || (await linkElement.getAttribute('data-href')) || null;

            // Fallback: try to parse an onclick handler if present
            if (!href) {
              const onclick = await linkElement.getAttribute('onclick');
              if (onclick) {
                const m = onclick.match(/location\.href\s*=\s*["']([^"']+)["']/);
                if (m) href = m[1];
              }
            }

            if (!href) continue;
            if (href.startsWith('/')) href = 'https://www.ratsit.se' + href;
            if (!href.startsWith('http')) continue;
            if (!href.includes('ratsit.se')) continue;

            // Get the visible text for the list item and skip if it matches ignore pattern
            const liText = (await li.innerText()) || '';
            if (this.isIgnorePattern && this.isIgnorePattern.test(liText)) {
              ignoredCount += 1;

              // Prefer to display an address-like line instead of person name
              const lines = liText.split('\n').map(s => s.trim()).filter(Boolean);
              const addrLine = lines.find(l => /\b\d{3}\s?\d{2}\b/.test(l) || (/\d+/).test(l) && l.length < 80) || lines[1] || lines[0] || '';
              console.log(`  → Skipping search-result (matches isIgnorePattern): ${addrLine.slice(0,120)}`);
              continue; // do not open or queue this result
            }

            if (!linkSet.has(href)) {
              linkSet.add(href);
              links.push(href);
            }
          }

          // Diagnostic: log how many items we found on this page and total links collected so far
          console.log(`  → Page ${pageNum} items: ${items.length} | total openable links so far: ${links.length} (ignored ${ignoredCount})`);
        }

        // If we already know total pages, stop after we've processed them
        if (totalPagesKnown && pageNum >= totalPagesKnown) {
          // we've reached the last expected page
          nextUrl = null;
          break;
        }

        // Prefer finding a "next page" anchor specifically and follow it.
        const nextEl = await page.$(
          'a[rel="next"], a.btn-arrow[rel="next"], a.btn-arrow[title^="Nästa"], a:has-text("Nästa"), button:has-text("Nästa")'
        );

        if (nextEl) {
          // Try to read an href first, but if not present attempt to click the next element
          let href = await nextEl.getAttribute('href');
          if (href) {
            console.log(`  → Found next-page element with href: ${href}`);
            if (href && (href.startsWith('/') || href.startsWith('http'))) {
              nextUrl = href.startsWith('/') ? 'https://www.ratsit.se' + href : href;
              continue;
            }
          } else {
            // No href — log and try to click as a fallback (best-effort)
            console.log('  → Found next-page element without href — attempting click fallback');
            try {
              const isDisabled = await nextEl.evaluate((el) => el.matches('.btn-arrow--disabled') || el.getAttribute('aria-disabled') === 'true' || el.disabled === true);
              if (isDisabled) {
                console.log('  → Next button is disabled, stopping pagination');
                break;
              }
              await Promise.race([
                nextEl.click(),
                new Promise((_, rej) => setTimeout(() => rej(new Error('next_click_timeout')), 8000))
              ]);
              // after clicking, set nextUrl to current page url (will be updated on next loop iteration)
              nextUrl = await page.url();
              console.log(`  → Clicked next-page button; candidate nextUrl: ${nextUrl}`);
              continue;
            } catch (clickErr) {
              console.log(`  → Next-button click failed: ${clickErr?.message || clickErr}`);
              // If click failed, treat as no next and break
              break;
            }
          }

          const disabled = await nextEl.evaluate((el) => el.matches('.btn-arrow--disabled') || el.getAttribute('aria-disabled') === 'true' || el.disabled === true);
          if (disabled) break;
        }

        // Fallback: try constructing next page URL (page=N). Continue until no more results.
        if (pageNum < maxPages) {
          // Prefer to parse current URL's page param and increment it rather than always using pageNum
          try {
            const parsed = new URL(nextUrl);
            // Use the loop-driven page counter to determine the next page to request
            const nextPageNo = pageNum + 1;
            parsed.searchParams.set('page', String(nextPageNo));
            const candidate = parsed.toString();

            if (visitedPageUrls.has(candidate)) {
              console.log(`  → Next page candidate already visited, stopping: ${candidate}`);
              break;
            }

            nextUrl = candidate;
          } catch (uErr) {
            // Fallback string construction if URL parsing fails
            const nextPageNo = pageNum + 1;
            const makePageUrl = (u, n) => {
              if (/page=\d+/.test(u)) return u.replace(/page=\d+/, `page=${n}`);
              return `${u}${u.includes('?') ? '&' : '?'}page=${n}`;
            };
            nextUrl = makePageUrl(nextUrl, nextPageNo);
          }

          // attempt next page; if it contains no result-list items the loop will break
          continue;
        }

        // No next page -> stop
        break;
      }

      // Diagnostic: compare collected links with reported total from the site (if available)
      if (totalResults !== null) {
        const collected = links.length + ignoredCount;
        if (collected !== totalResults) {
          console.log(`  ⚠️  Collected ${links.length} openable result(s) + ${ignoredCount} ignored = ${collected}, but site reports ${totalResults} total person(s). Some results may be companies, paywalled, or filtered.`);
        } else {
          console.log(`  → Collected ${collected} results — matches reported total (${totalResults})`);
        }
      }

      console.log(`  → Found ${links.length} Ratsit result(s) (scanned ${pageNum} page(s)${pageNum >= maxPages ? ', reached maxPages cap' : ''}${ignoredCount ? ` — skipped ${ignoredCount} ignored result(s)` : ''})`);

      // Scrape each person page
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        console.log(`  → [${i + 1}/${links.length}] Scraping: ${link}`);

        try {
          const scrapeTask = (async () => {
            // Try to load the page with retry logic
            let pageLoaded = false;
            let retries = 0;
            const maxRetries = 2;

            while (!pageLoaded && retries <= maxRetries) {
              try {
                await page.goto(link, { waitUntil: 'domcontentloaded', timeout: 60000 });
                pageLoaded = true;
              } catch (gotoError) {
                retries++;
                if (retries > maxRetries) {
                  throw gotoError;
                }
                console.log(`  ⚠️  Retry ${retries}/${maxRetries} for ${link}`);
                await page.waitForTimeout(2000);
              }
            }

            await page.waitForTimeout(1500);

            // Extra safeguard: if the extracted address on the person page matches
            // `isIgnorePattern`, skip scraping this person (do not save).
            try {
              const scrapedAddress = await this.extractRatsitTextAfterLabel(page, 'Gatuadress:');
              if (scrapedAddress && this.isIgnorePattern && this.isIgnorePattern.test(scrapedAddress)) {
                console.log(`  → Skipping person page (address matches isIgnorePattern): ${scrapedAddress} — ${link}`);
                return; // skip to next person link
              }
            } catch (e) {
              // If address extraction fails, continue with normal scraping (best-effort)
            }

            // Scroll to load lazy content
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
            await page.waitForTimeout(1000);

            // Extract person data
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
            // Additional labels
            bo_forsamling: await this.extractRatsitTextAfterLabel(page, 'Församling:'),
            bo_kommun: await this.extractRatsitTextAfterLabel(page, 'Kommun:'),
            kommun_ratsit: await this.extractRatsitKommunLink(page),
            bo_lan: await this.extractRatsitTextAfterLabel(page, 'Län:'),
            ps_civilstand: await this.extractRatsitCivilstand(page),
            adressandring: await this.extractRatsitTextAfterLabel(page, 'Adressändring:'),
            stjarntacken: await this.extractRatsitTextAfterLabel(page, 'Stjärntecken:'),
            // Dwelling specific labels
            bo_agandeform: await this.extractRatsitTextAfterLabel(page, 'Ägandeform:'),
            bo_bostadstyp: await this.extractRatsitTextAfterLabel(page, 'Bostadstyp:'),
            bo_boarea: await this.extractRatsitTextAfterLabel(page, 'Boarea:'),
            bo_byggar: await this.extractRatsitTextAfterLabel(page, 'Byggår:'),
          };
          // Link for saving
          personData.ratsit_se = link;

          // Sections: telefonnummer (additional), personer, foretag, grannar, fordon, hundar, bolagsengagemang
          personData.telefonnummer = await this.extractSectionTelefonnummer(page);

          // DEBUG: Log extracted phone numbers
          if (personData.telefonnummer && personData.telefonnummer.length > 0) {
            console.log(`  🔍 DEBUG: Extracted ${personData.telefonnummer.length} phone numbers: ${personData.telefonnummer.join(', ')}`);
          } else {
            console.log(`  🔍 DEBUG: No phone numbers extracted from Telefonnummer section`);
          }

          const personer = await this.extractSectionListStrong(page, 'Personer');
          if (personer.length) personData.bo_personer = personer;
          const foretag = await this.extractSectionForetag(page);
          if (foretag.length) personData.bo_foretag = foretag;
          const grannar = await this.extractSectionGrannar(page);
          if (grannar.length) personData.bo_grannar = grannar;
          const fordon = await this.extractSectionFordon(page);
          if (fordon.length) personData.bo_fordon = fordon;
          const hundar = await this.extractSectionHundar(page);
          if (hundar.length) personData.bo_hundar = hundar;
          const bolag = await this.extractSectionBolagsengagemang(page);
          if (bolag.length) personData.ps_bolagsengagemang = bolag;

          // Lat/Long & Streetview
          const latLongText = await this.extractLatLongText(page);
          if (latLongText) {
            const m = latLongText.match(/Latitud:\s*([0-9.+-]+).*Longitud:\s*([0-9.+-]+)/i);
            if (m) {
              personData.latitud = m[1];
              personData.bo_longitude = m[2];
            }
          }
          personData.google_streetview = await this.extractStreetViewLink(page);

          // Google maps link - extract directly from "Navigera Till" button
          personData.google_maps = await this.extractGoogleMapsLink(page);

          // Fallback: if Google Maps link wasn't found, generate it from address
          if (!personData.google_maps && personData.bo_gatuadress && personData.bo_postnummer && personData.bo_postort) {
            const addr = `${personData.bo_gatuadress}, ${personData.bo_postnummer} ${personData.bo_postort}`;
            personData.google_maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addr)}`;
          }

          // Map gender value
          if (personData.ps_kon) {
            const konMap = { 'man': 'M', 'kvinna': 'F', 'kvinno': 'F' };
            const lowerKon = personData.ps_kon.toLowerCase().trim();
            personData.ps_kon = konMap[lowerKon] || personData.ps_kon;
          }

          // Handle telefon as string (single number) and telefonnummer as array
          // NOTE: We do NOT filter out ps_telefon from telefonnummer array anymore
          // The telefonnummer array should contain ALL phone numbers from the "Telefonnummer" section
          // ps_telefon is extracted separately from the "Telefon:" label
          if (!personData.ps_telefon && personData.telefonnummer && Array.isArray(personData.telefonnummer) && personData.telefonnummer.length > 0) {
            // Only if we don't have a primary telefon, use first from array
            personData.ps_telefon = personData.telefonnummer[0];
          }

          const cleanData = {};
          for (const [key, value] of Object.entries(personData)) {
            if (value === null || value === undefined) continue;
            if (Array.isArray(value) && value.length === 0) continue;
            if (typeof value === 'string' && value.trim() === '') continue;

            // Filter out unwanted text patterns
            let cleanedValue = value;
            if (typeof value === 'string') {
              cleanedValue = this.filterUnwantedText(value);
              if (cleanedValue === '') continue; // Skip if only contained unwanted text
            } else if (Array.isArray(value)) {
              cleanedValue = value
                .map(item => {
                  if (typeof item === 'string') {
                    return this.filterUnwantedText(item);
                  } else if (item && typeof item === 'object' && item.text) {
                    // Handle objects with text property (like {text: '...', link: '...'})
                    return {
                      ...item,
                      text: this.filterUnwantedText(item.text)
                    };
                  }
                  return item;
                })
                .filter(item => {
                  if (typeof item === 'string') return item !== '';
                  if (item && typeof item === 'object' && item.text) return item.text !== '';
                  return item !== null && item !== undefined;
                });
              if (cleanedValue.length === 0) continue;
            }

            cleanData[key] = cleanedValue;
          }

          if (Object.keys(cleanData).length > 0) {
            results.push(cleanData);
            console.log(`  → ✓ Extracted data for ${cleanData.ps_personnamn || 'Unknown'}`);

            // Log extracted data details
            console.log('\n  📋 Scraped Data Summary:');
            console.log(`     Person: ${cleanData.ps_personnummer || 'N/A'} | ${cleanData.ps_personnamn || 'N/A'} | Age: ${cleanData.ps_alder || 'N/A'}`);
            console.log(`     Address: ${cleanData.bo_gatuadress || 'N/A'}, ${cleanData.bo_postnummer || 'N/A'} ${cleanData.bo_postort || 'N/A'}`);
            console.log(`     Location: ${cleanData.bo_forsamling || 'N/A'} / ${cleanData.bo_kommun || 'N/A'} / ${cleanData.bo_lan || 'N/A'}`);
            console.log(`     Phone: ${cleanData.ps_telefon || 'N/A'}`);
            console.log(`     Additional Phones: ${Array.isArray(cleanData.telefonnummer) ? cleanData.telefonnummer.join(', ') : 'N/A'}`);
            console.log(`     Dwelling: ${cleanData.bo_bostadstyp || 'N/A'} | ${cleanData.bo_agandeform || 'N/A'} | ${cleanData.bo_boarea || 'N/A'}m² | Built: ${cleanData.bo_byggar || 'N/A'}`);
            console.log(`     Civil: ${cleanData.ps_civilstand || 'N/A'} | Sign: ${cleanData.stjarntacken || 'N/A'}`);
            console.log(`     Collections: Personer(${cleanData.bo_personer?.length || 0}) Företag(${cleanData.bo_foretag?.length || 0}) Grannar(${cleanData.bo_grannar?.length || 0})`);
            console.log(`                  Fordon(${cleanData.bo_fordon?.length || 0}) Hundar(${cleanData.bo_hundar?.length || 0}) Bolag(${cleanData.ps_bolagsengagemang?.length || 0})`);
            console.log(`     Geo: Lat ${cleanData.latitud || 'N/A'}, Long ${cleanData.bo_longitude || 'N/A'}`);
            console.log(`     Links: ${cleanData.ratsit_se ? '✓ Ratsit' : '✗'} ${cleanData.google_maps ? '✓ Maps' : '✗'} ${cleanData.google_streetview ? '✓ Street' : '✗'}\n`);

            // Save each collected result to API immediately when requested
            if (savePerResult) {
              try {
                const ok = await this.saveRatsitToDatabase(cleanData);
                if (ok) savedDuringScrape += 1;
              } catch (e) {
                console.log(`  ✗ Failed saving scraped result via API: ${e?.message || e}`);
              }
              // small pause between saves to be polite
              await page.waitForTimeout(300);
            }
          }

            await page.waitForTimeout(500);
          })();

          // Enforce a per-link scrape timeout so a single stuck page doesn't hang the whole job
          const timeoutMs = 90000; // 90s per person page
          await Promise.race([
            scrapeTask,
            new Promise((_, reject) => setTimeout(() => reject(new Error('scrape_link_timeout')), timeoutMs))
          ]);

        } catch (error) {
          if (error && error.message && error.message.includes('scrape_link_timeout')) {
            console.log(`  → ✗ Timed out scraping ${link} after ${90000}ms`);
            try { await page.goto('about:blank', { timeout: 5000 }); } catch (_) {}
            continue;
          }
          console.log(`  → ✗ Error scraping ${link}:`, error.message || error);
        }
      }

      await this.safeCloseBrowser(browser);

    } catch (error) {
      console.log(`  → ✗ Error during Ratsit scraping:`, error.message);
      if (browser) {
        await this.safeCloseBrowser(browser);
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

      const result = await labelElement.evaluate((el, label) => {
        const p = el.closest('p');
        if (!p) return null;

        // Check if there's an anchor tag inside the paragraph (for fields like Stjärntecken)
        const link = p.querySelector('a');
        if (link) {
          // Extract just the text from the anchor, not the full URL
          return link.textContent?.trim() || null;
        }

        // Get the full inner text
        let text = p.innerText;

        // Special handling for Personnummer: remove ALL label occurrences
        // Example: "Personnummer:Personnummer: 19690415-9073" -> "19690415-9073"
        if (label === 'Personnummer:') {
          // Remove all occurrences of the label (even multiple ones)
          text = text.replace(/Personnummer:\s*/gi, '').trim();
          return text;
        }

        // For other fields, just return the full text
        return text;
      }, labelText);

      if (!result) {
        return null;
      }

      // Clean up the text by removing the label if still present
      let text = result;
      if (!labelText.includes('Personnummer')) {
        text = text.replace(labelText, '').trim();
      }
      text = text.replace(/\s*Visas för medlemmar.*/gi, '');

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
        return null;
      }

      const telHref = await labelElement.evaluate((el) => {
        const p = el.closest('p');
        if (!p) return null;
        const telLink = p.querySelector('a[href^="tel:"]');
        return telLink ? telLink.getAttribute('href') : null;
      });

      if (telHref && telHref.startsWith('tel:')) {
        return telHref.replace('tel:', '');
      }

      return null;
    } catch (e) {
      return null;
    }
  }

  async extractRatsitCivilstand(page) {
    // Look for a section where heading contains Civilstånd and return the content after the heading
    try {
      const heading = await page.$('h2:has-text("Civilstånd")');
      if (heading) {
        const parent = await heading.evaluateHandle((el) => el.parentElement);
        if (parent) {
          const fullText = await parent.evaluate((el) => {
            // Get all text content including links
            return el.textContent?.trim() || null;
          });
          if (fullText && !this.containsUnwantedText(fullText)) {
            // Remove the heading "Civilstånd" from the beginning
            const cleaned = fullText.replace(/^Civilstånd\s*/, '').trim();
            return this.filterUnwantedText(cleaned);
          }
        }
      }
      return null;
    } catch { return null; }
  }

  async extractRatsitKommunLink(page) {
    // Extract the kommun link from the kommun field
    try {
      const labelSelector = 'span.color--gray5:has-text("Kommun:")';
      const labelElement = await page.$(labelSelector);

      if (!labelElement) {
        return null;
      }

      const kommunLink = await labelElement.evaluate((el) => {
        const p = el.closest('p');
        if (!p) return null;
        const link = p.querySelector('a[href]');
        return link ? link.getAttribute('href') : null;
      });

      if (kommunLink) {
        // Convert relative URL to absolute URL
        if (kommunLink.startsWith('/')) {
          return 'https://www.ratsit.se' + kommunLink;
        }
        return kommunLink;
      }

      return null;
    } catch (e) {
      return null;
    }
  }

  async extractSectionTelefonnummer(page) {
    try {
      // Try robust extraction by scanning H3/H4 headers with text containing "Telefon"
      const numbers = await page.evaluate(() => {
        const out = [];

        function collectFromNode(node) {
          if (!node) return;
          // If node is hidden (d-none) skip
          if (node.classList && node.classList.contains('d-none')) return;
          // Collect spans inside p.row (visible)
          if (node.matches && node.matches('p.row')) {
            node.querySelectorAll('span.text-nowrap').forEach(span => {
              const txt = (span.textContent || '').trim();
              if (txt) out.push(txt);
            });
            return;
          }
          // If the node contains p.row children, collect them
          const ps = node.querySelectorAll && node.querySelectorAll('p.row');
          if (ps && ps.length) {
            ps.forEach(p => {
              if (p.classList && p.classList.contains('d-none')) return;
              p.querySelectorAll('span.text-nowrap').forEach(span => {
                const txt = (span.textContent || '').trim();
                if (txt) out.push(txt);
              });
            });
          }
        }

        const headers = Array.from(document.querySelectorAll('h3, h4'));
        for (const h of headers) {
          if (!h.textContent) continue;
          if (/telefon/i.test(h.textContent)) {
            // Walk siblings until next header
            let node = h.nextElementSibling;
            while (node && !['H3','H4'].includes(node.tagName)) {
              collectFromNode(node);
              node = node.nextElementSibling;
            }
            if (out.length) return Array.from(new Set(out));
          }
        }

        // Fallback: gather any visible p.row spans on the page
        const fallback = [];
        document.querySelectorAll('p.row').forEach(p => {
          if (p.classList && p.classList.contains('d-none')) return;
          p.querySelectorAll('span.text-nowrap').forEach(span => {
            const txt = (span.textContent || '').trim();
            if (txt) fallback.push(txt);
          });
        });
        return Array.from(new Set(fallback));
      });

      // Normalize and filter extracted values using a permissive phone regex
      const cleaned = Array.isArray(numbers)
        ? numbers
            .map(s => (s || '').replace(/\s+/g, ' ').trim())
            .filter(s => /(^0\d{2,3}[\- \d]{6,}|^(\+|00)46[\- \d]{7,}|^0\d{6,})/.test(s))
        : [];

      return this.filterExtractionResults(cleaned);
    } catch (err) {
      console.error('extractSectionTelefonnummer error:', err.message);
      return [];
    }
  }

  async extractSectionListStrong(page, headerText) {
    try {
      const header = await page.$(`h3:has-text("${headerText}")`);
      if (!header) return [];
      const container = await header.evaluateHandle((el) => el.parentElement?.parentElement);
      const items = await page.evaluate((root) => {
        if (!root) return [];
        const arr = [];
        root.querySelectorAll('strong').forEach((el) => {
          const text = el.textContent?.trim();
          if (text) {
            // Look for a link within or as a parent of this strong element
            let link = null;
            let linkElement = el.querySelector('a[href]');
            if (!linkElement) {
              // Check if the strong element itself is inside a link
              linkElement = el.closest('a[href]');
            }
            if (linkElement) {
              link = linkElement.getAttribute('href');
              // Convert relative URLs to absolute
              if (link && link.startsWith('/')) {
                link = 'https://www.ratsit.se' + link;
              }
            }
            arr.push({ text, link });
          }
        });
        return arr;
      }, container);
      return this.filterExtractionResults(items);
    } catch { return []; }
  }

  async extractSectionForetag(page) {
    try {
      const header = await page.$('h3:has-text("Företag")');
      if (!header) return [];
      const container = await header.evaluateHandle((el) => el.parentElement?.querySelector('table'));
      const rows = await page.evaluate((tbl) => {
        const out = [];
        if (!tbl) return out;
        tbl.querySelectorAll('tbody tr').forEach((tr) => {
          const cells = Array.from(tr.querySelectorAll('td'));
          if (cells.length) {
            // Look for links in the cells
            let text = cells.map((td) => td.innerText.trim()).join(' | ');
            let link = null;

            // Check for links in any cell
            for (const cell of cells) {
              const linkElement = cell.querySelector('a[href]');
              if (linkElement) {
                link = linkElement.getAttribute('href');
                // Convert relative URLs to absolute
                if (link && link.startsWith('/')) {
                  link = 'https://www.ratsit.se' + link;
                }
                break; // Use the first link found
              }
            }

            out.push({ text, link });
          }
        });
        return out;
      }, container);
      return this.filterExtractionResults(rows);
    } catch { return []; }
  }

  async extractSectionGrannar(page) {
    try {
      const titles = await page.$$('button.accordion-neighbours__title');
      const out = [];
      for (const btn of titles) {
        // Expand if possible (best effort)
        try { await btn.click({ timeout: 500 }); } catch {}
      }
      const rows = await page.$$('div .accordion-neighbours__title ~ div table tbody tr');
      for (const tr of rows) {
        const result = await tr.evaluate((el) => {
          const text = el.innerText.replace(/\s+/g, ' ').trim();
          let link = null;
          const linkElement = el.querySelector('a[href]');
          if (linkElement) {
            link = linkElement.getAttribute('href');
            // Convert relative URLs to absolute
            if (link && link.startsWith('/')) {
              link = 'https://www.ratsit.se' + link;
            }
          }
          return { text, link };
        });
        if (result.text) out.push(result);
      }
      return this.filterExtractionResults(out);
    } catch { return []; }
  }

  async extractSectionFordon(page) {
    try {
      const header = await page.$('h3:has-text("Fordon")');
      if (!header) return [];
      const table = await header.evaluateHandle((el) => el.parentElement?.querySelector('table'));
      const rows = await page.evaluate((tbl) => {
        const out = [];
        if (!tbl) return out;
        tbl.querySelectorAll('tbody tr').forEach((tr) => {
          const tds = tr.querySelectorAll('td');
          if (tds.length) {
            const brand = tds[0]?.innerText.trim();
            const model = tds[1]?.innerText.trim();
            const year = tds[2]?.innerText.trim();
            const color = tds[3]?.innerText.trim();
            const owner = tds[4]?.innerText.trim();
            const text = [brand, model, year, color, owner].filter(Boolean).join(', ');

            // Look for links in any cell
            let link = null;
            for (const td of tds) {
              const linkElement = td.querySelector('a[href]');
              if (linkElement) {
                link = linkElement.getAttribute('href');
                // Convert relative URLs to absolute
                if (link && link.startsWith('/')) {
                  link = 'https://www.ratsit.se' + link;
                }
                break; // Use the first link found
              }
            }

            out.push({ text, link });
          }
        });
        return out;
      }, table);
      return this.filterExtractionResults(rows);
    } catch { return []; }
  }

  async extractSectionHundar(page) {
    try {
      const header = await page.$('h3:has-text("Hundar")');
      if (!header) return [];
      const container = await header.evaluateHandle((el) => el.parentElement);

      // Strategy 1: Prefer structured table parsing if present
      const table = await header.evaluateHandle((el) => el.parentElement?.querySelector('table'));
      const tableRows = await page.evaluate((tbl) => {
        const out = [];
        if (!tbl) return out;
        let rows = tbl.querySelectorAll('tbody tr');
        if (!rows.length) rows = tbl.querySelectorAll('tr');
        rows.forEach((tr) => {
          const cells = Array.from(tr.querySelectorAll('td, th')).map((c) => c.innerText.replace(/\s+/g, ' ').trim());
          if (!cells.length) return;
          // Skip header rows
          const headerLike = cells.join(' ').match(/^(Ras|Hund|Födelsedatum|Ålder|Ägare|Namn)/i);
          if (headerLike) return;
          const text = cells.filter(Boolean).join(', ');

          // Look for links in any cell
          let link = null;
          const linkElements = tr.querySelectorAll('a[href]');
          if (linkElements.length) {
            link = linkElements[0].getAttribute('href');
            // Convert relative URLs to absolute
            if (link && link.startsWith('/')) {
              link = 'https://www.ratsit.se' + link;
            }
          }

          if (text) out.push({ text, link });
        });
        return out;
      }, table);
      if (Array.isArray(tableRows) && tableRows.length) return this.filterExtractionResults(tableRows);

      // Strategy 2: Fallback to heuristic grouping of lines (breed, date (age), owner)
      const lines = await page.evaluate((root) => {
        const out = [];
        if (!root) return out;
        const rawLines = (root.innerText || '')
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean)
          .filter((l) => {
            // Filter out unwanted text patterns
            return !/^Hundar$/i.test(l) &&
                   !/Visa mer|Visa mindre/i.test(l) &&
                   !/DOLT - Bli validerad medlem för att se/i.test(l) &&
                   !/Kolla lön direkt/i.test(l);
          });

        const isDateAge = (s) => /\d{4}-\d{2}-\d{2}/.test(s) || /\(\d+\s*år\)/i.test(s);
        for (let i = 0; i < rawLines.length; i++) {
          if (!isDateAge(rawLines[i])) continue;
          const dateAge = rawLines[i];
          const breed = rawLines[i - 1] && !isDateAge(rawLines[i - 1]) ? rawLines[i - 1] : null;
          const owner = rawLines[i + 1] && !isDateAge(rawLines[i + 1]) ? rawLines[i + 1] : null;
          const text = [breed, dateAge, owner].filter(Boolean).join(', ');

          // For fallback strategy, we don't have easy access to links, so link will be null
          if (text) out.push({ text, link: null });
        }
        // Deduplicate while preserving order
        return Array.from(new Set(out.map(item => JSON.stringify(item)))).map(item => JSON.parse(item));
      }, container);
      return this.filterExtractionResults(lines);
    } catch { return []; }
  }

  async extractSectionBolagsengagemang(page) {
    try {
      // Check if "Bolagsengagemang" text exists anywhere on page
      const hasText = await page.locator('text="Bolagsengagemang"').count();
      if (!hasText) {
        return [];
      }

      // Since heading might be in sidebar or other location, search page-wide for any section/div with id="engagemang"
      const sectionEl = await page.$('[id="engagemang"]');
      if (sectionEl) {
        const items = await sectionEl.evaluate((sec) => {
          const out = [];
          const tbl = sec.querySelector('table');
          if (!tbl) return out;
          let rows = tbl.querySelectorAll('tbody tr');
          if (!rows.length) rows = tbl.querySelectorAll('tr');
          rows.forEach((tr) => {
            const cells = Array.from(tr.querySelectorAll('td, th')).map(c => c.innerText.replace(/\s+/g,' ').trim());
            if (cells.length && !cells[0].match(/^(Företagsnamn|Typ|Status|Befattning)/i)) {
              const text = cells.join(', ');

              // Look for links in any cell
              let link = null;
              const linkElements = tr.querySelectorAll('a[href]');
              if (linkElements.length) {
                link = linkElements[0].getAttribute('href');
                // Convert relative URLs to absolute
                if (link && link.startsWith('/')) {
                  link = 'https://www.ratsit.se' + link;
                }
              }

              out.push({ text, link });
            }
          });
          return out;
        });
        if (items.length > 0) {
          return this.filterExtractionResults(items);
        }
      }

      // Fallback: find any h2 containing "Bolagsengagemang" in main content (not sidebar)
      const mainHeader = await page.$('main h2:has-text("Bolagsengagemang"), article h2:has-text("Bolagsengagemang")');
      if (mainHeader) {
        await mainHeader.scrollIntoViewIfNeeded();
        await page.waitForTimeout(1000);
        const items = await mainHeader.evaluate((h) => {
          const out = [];
          // Search next siblings or parent container
          let node = h.nextElementSibling;
          while (node && !node.matches('h1,h2,h3')) {
            const tbl = node.matches('table') ? node : node.querySelector('table');
            if (tbl) {
              let rows = tbl.querySelectorAll('tbody tr');
              if (!rows.length) rows = tbl.querySelectorAll('tr');
              rows.forEach((tr) => {
                const cells = Array.from(tr.querySelectorAll('td, th')).map(c => c.innerText.replace(/\s+/g,' ').trim());
                if (cells.length && !cells[0].match(/^(Företagsnamn|Typ|Status|Befattning)/i)) {
                  const text = cells.join(', ');

                  // Look for links in any cell
                  let link = null;
                  const linkElements = tr.querySelectorAll('a[href]');
                  if (linkElements.length) {
                    link = linkElements[0].getAttribute('href');
                    // Convert relative URLs to absolute
                    if (link && link.startsWith('/')) {
                      link = 'https://www.ratsit.se' + link;
                    }
                  }

                  out.push({ text, link });
                }
              });
              return out;
            }
            node = node.nextElementSibling;
          }
          return out;
        });
        if (items.length > 0) {
          return this.filterExtractionResults(items);
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
    } catch { return null; }
  }

  async extractGoogleMapsLink(page) {
    try {
      // Look for the "Navigera Till Adressen" button with Google Maps link
      const linkEl = await page.$('a[href*="maps.google.com"][data-ga-event-label*="Navigera"]');
      if (!linkEl) return null;
      return await linkEl.getAttribute('href');
    } catch { return null; }
  }

  async extractStreetViewLink(page) {
    try {
      const linkEl = await page.$('a[href*="map_action=pano"][href*="viewpoint="]');
      if (!linkEl) return null;
      return await linkEl.getAttribute('href');
    } catch { return null; }
  }

  /**
   * Attempt to extract total result counts (Personer / Företag) from a search results page
   * Returns { personer: number|null, foretag: number|null }
   */
  async extractSearchTotalsFromPage(page) {
    try {
      const content = await page.content();

      // Pattern A: search-segment or button text like "Personer: 1 234st"
      const searchSegment = await page.$eval('.search-segment', el => el.innerText).catch(() => null);
      if (searchSegment) {
        const pMatch = searchSegment.match(/Personer:\s*([\d\s]+)st/i);
        const fMatch = searchSegment.match(/Företag:\s*([\d\s]+)st/i);
        const personer = pMatch ? parseInt(pMatch[1].replace(/\s/g, ''), 10) : null;
        const foretag = fMatch ? parseInt(fMatch[1].replace(/\s/g, ''), 10) : null;
        if (personer !== null || foretag !== null) return { personer, foretag };
      }

      // Pattern B: any button text containing counts
      const buttonText = await page.$$eval('button', btns => btns.map(b => b.textContent || '').join(' ')).catch(() => '');
      const bP = buttonText.match(/Personer:\s*([\d\s]+)st/i);
      const bF = buttonText.match(/Företag:\s*([\d\s]+)st/i);
      if (bP || bF) {
        const personer = bP ? parseInt(bP[1].replace(/\s/g, ''), 10) : null;
        const foretag = bF ? parseInt(bF[1].replace(/\s/g, ''), 10) : null;
        return { personer, foretag };
      }

      // Pattern C: JSON-ish in page content
      const jsonP = content.match(/"personer"\s*:\s*(\d+)/i);
      const jsonF = content.match(/"foretag"\s*:\s*(\d+)/i);
      if (jsonP || jsonF) {
        const personer = jsonP ? parseInt(jsonP[1], 10) : null;
        const foretag = jsonF ? parseInt(jsonF[1], 10) : null;
        return { personer, foretag };
      }

      // Pattern D: search for "Personer" label followed by numbers anywhere in text
      const bodyText = (await page.evaluate(() => document.body.innerText)).replace(/\u00A0/g, ' ');
      const anyP = bodyText.match(/Personer[:\s]+([\d\s]+)st?/i);
      const anyF = bodyText.match(/Företag[:\s]+([\d\s]+)st?/i);
      if (anyP || anyF) {
        const personer = anyP ? parseInt(anyP[1].replace(/\s/g, ''), 10) : null;
        const foretag = anyF ? parseInt(anyF[1].replace(/\s/g, ''), 10) : null;
        return { personer, foretag };
      }

      return { personer: null, foretag: null };
    } catch (e) {
      return { personer: null, foretag: null };
    }
  }
}

// Main function
async function main() {
  program
    .description('Scrape Ratsit for a single search query (tokens are joined), or process queued records if no query provided')
    .argument('[query...]', 'A single Ratsit search query (multiple tokens are joined, e.g. "renborgsvägen 933 93 Abborrträsk")')
    .option('--api-url <url>', 'Laravel API URL (default: https://app.nordicdigitalthailand.com)')
    .option('--api-token <token>', 'API authentication token')
    .option('--limit <number>', 'When processing queued records, maximum number to fetch (default: 100000)')
    .parse();

  const options = program.opts();
  const queries = program.args || [];
  const limit = parseInt(options.limit) || 100000;

  const scraper = new RatsitScraper(options.apiUrl, options.apiToken);

  try {
    if (queries.length > 0) {
      // Treat all positional arguments as one single search query (join tokens)
      const q = queries.join(' ').trim();
      console.log(`\n→ Searching Ratsit for query: "${q}"`);

      // Scrape and save each result immediately
      const ratsitResults = await scraper.scrapeRatsitData(q, { savePerResult: true });

      if (!ratsitResults || ratsitResults.length === 0) {
        console.log(`   ⏭️  No Ratsit results found for "${q}"`);
      } else {
        console.log(`   📊 Found ${ratsitResults.length} result(s) for "${q}" — saved via API during scraping`);
      }

      return;
    }

    // --- fallback: original queued-records flow (unchanged) ---
    const queuedRecords = await scraper.fetchQueuedRecords(limit, null);

    if (!queuedRecords || queuedRecords.length === 0) {
      console.log(`No queued ratsit_data records found`);
      return;
    }

    console.log(`\n→ Found ${queuedRecords.length} queued ratsit_data record(s) to process...`);

    let processed = 0;
    let updated = 0;

    for (const record of queuedRecords) {
      console.log(`\n[${processed + 1}/${queuedRecords.length}] Processing: ${record.person?.personnamn || 'undefined'} (ID: ${record.id})`);

      try {
        // Build search query using both personnamn and gatuadress for better accuracy
        const personnamn = record.person?.personnamn;
        const gatuadress = record.address?.gatuadress;

        let searchQuery = personnamn || '';

        // Add address to search query if available
        if (gatuadress && gatuadress.trim() !== '') {
          searchQuery = `${personnamn}, ${gatuadress}`.trim();
        }

        if (!searchQuery || searchQuery.trim() === '') {
          console.log(`   ⏭️  Skipping record ${record.id} - no personnamn or address`);
          continue;
        }

        console.log(`   🔍 Searching Ratsit for: "${searchQuery}"`);

        // Scrape Ratsit data and save each scraped result immediately
        const ratsitResults = await scraper.scrapeRatsitData(searchQuery, { savePerResult: true });

        if (!ratsitResults || ratsitResults.length === 0) {
          console.log(`   ⏭️  No Ratsit results found for "${searchQuery}"`);
          // Still mark as processed to avoid infinite retries
          await scraper.markRecordProcessed(record.id);
          processed++;
          continue;
        }

        console.log(`   📊 Found ${ratsitResults.length} Ratsit result(s)`);

        // Find the best matching result (first one for now)
        const bestResult = ratsitResults[0];

        // Update the record with Ratsit data and mark as processed
        const success = await scraper.updateRecordWithRatsitData(record.id, bestResult);

        if (success) {
          console.log(`   ✅ Updated record ${record.id} with Ratsit data`);
          updated++;
        } else {
          console.log(`   ❌ Failed to update record ${record.id}`);
        }

        processed++;

        // Small delay between requests to be respectful
        await new Promise(resolve => setTimeout(resolve, 2000));

      } catch (error) {
        console.log(`   ❌ Error processing record ${record.id}: ${error.message}`);
        // Continue with next record
      }
    }

    console.log(`\n✓ Processed ${processed}/${queuedRecords.length} queued record(s), updated ${updated} with Ratsit data`);

  } finally {
    // Always close database connection
    scraper.closeDbConnection();
    await closeSwedenPersonPool();
  }
}

// Run main function
main().catch(error => {
  console.error('Error:', error);
  process.exit(1);
});
