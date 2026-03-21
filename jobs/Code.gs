// ⭐ IMPORTANT: CONFIGURATION ZONE ⭐

// Options: 'DATABASE', 'PHONE', or 'HOUSE'
const DATA_SAVE_MODE = 'DATABASE';

// The sheet name that will act as the single source-of-truth.
const MASTER_SHEET_NAME = 'MASTER';

const UNIQUE_KEY = 'short_uuid';
const METADATA_HEADERS = ['status', 'created_at', 'updated_at'];
const STATUS_CREATED = 'created';
const STATUS_UPDATED = 'updated';

// --- Utilities ---
function normalizeValue(value) {
  if (Array.isArray(value)) return value.join(', ');
  if (typeof value === 'boolean') return value ? 'TRUE' : 'FALSE';
  if (value === null || value === undefined) return '';
  return String(value).trim();
}

function safeSheetName(name) {
  return String(name).replace(/[:\\/?*\[\]]/g, ' ').trim().substring(0, 100);
}

function escapeForQuery(str) {
  if (str === null || str === undefined) return '';
  // double single quotes for SQL-like literal
  return String(str).replace(/'/g, "''");
}

// Create JSON response (ContentService can't reliably set custom headers like Access-Control-Allow-Origin).
// If you need CORS headers, set web app access accordingly (deploy as "Anyone, even anonymous") or use a proxy.
function createJsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

// --- HTTP handlers ---
function doGet(e) {
  return ContentService.createTextOutput('Web App is running. Send a JSON POST request to this URL.')
    .setMimeType(ContentService.MimeType.TEXT);
}

// OPTIONS preflight placeholder
function doOptions(e) {
  // Apps Script doesn't support custom headers reliably on ContentService responses.
  // Set deployment access to allow requests from clients, or use an external proxy if you must set CORS headers.
  return ContentService.createTextOutput('').setMimeType(ContentService.MimeType.TEXT);
}

// --- Core logic: MASTER-only upsert with per-city query sheets ---
function doPost(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return createJsonResponse({ status: 'error', message: 'Invalid POST request: Data payload is missing.' });
  }

  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const masterSheet = getOrCreateMasterSheet(ss);

    const people = JSON.parse(e.postData.contents);
    if (!Array.isArray(people) || people.length === 0) {
      return createJsonResponse({ status: 'error', message: 'No valid people array found.' });
    }

    // Filter by DATA_SAVE_MODE per incoming person
    const filteredPeople = people.filter(p => {
      const hasPhone = !!p.phone || !!p.phone_numbers || !!p.number || !!p.raw_number;
      const isAddress = !!p.house;
      switch (DATA_SAVE_MODE) {
        case 'DATABASE': return true;
        case 'PHONE': return hasPhone;
        case 'HOUSE': return isAddress && hasPhone;
        default: return false;
      }
    });

    if (filteredPeople.length === 0) {
      return createJsonResponse({ status: 'success', message: 'No rows matched DATA_SAVE_MODE filter.', mode: DATA_SAVE_MODE });
    }

    // Read master headers + data once
    const masterRangeLastRow = masterSheet.getLastRow();
    const masterRangeLastCol = masterSheet.getLastColumn();

    let masterHeaders = [];
    let masterData = []; // array of arrays (rows)

    if (masterRangeLastRow >= 1 && masterRangeLastCol >= 1) {
      const fullRange = masterSheet.getRange(1, 1, masterRangeLastRow, masterRangeLastCol).getValues();
      masterHeaders = fullRange[0].map(h => String(h).trim());
      masterData = fullRange.slice(1);
    } else {
      // No headers yet. Build headers from first incoming object (non-metadata) + metadata headers
      const incomingHeaders = Object.keys(filteredPeople[0] || {});
      const coreHeaders = incomingHeaders.filter(h => !METADATA_HEADERS.includes(h));
      masterHeaders = coreHeaders.concat(METADATA_HEADERS);
      // ensure MASTER sheet has headers
      masterSheet.clear(); // clear anything odd
      masterSheet.getRange(1, 1, 1, masterHeaders.length).setValues([masterHeaders]);
      masterData = [];
    }

    // Ensure metadata headers exist in masterHeaders (append if missing)
    METADATA_HEADERS.forEach(meta => {
      if (masterHeaders.indexOf(meta) === -1) masterHeaders.push(meta);
    });

    // Map header -> index
    const headerIndex = {};
    masterHeaders.forEach((h, i) => headerIndex[h] = i);

    // If master sheet had fewer columns than masterHeaders, resize the sheet header row
    if (masterRangeLastCol < masterHeaders.length) {
      masterSheet.getRange(1, 1, 1, masterHeaders.length).setValues([masterHeaders]);
      // If existing masterData rows exist, pad them with empty strings to match headers length
      if (masterData.length > 0) {
        masterData = masterData.map(row => {
          const copy = row.slice();
          while (copy.length < masterHeaders.length) copy.push('');
          return copy;
        });
      }
    }

    // Build existing map by UNIQUE_KEY
    const existingMap = {}; // key -> { rowIndex (0-based in masterData), rowArray }
    if (masterData.length > 0 && headerIndex[UNIQUE_KEY] !== undefined) {
      const idx = headerIndex[UNIQUE_KEY];
      for (let i = 0; i < masterData.length; i++) {
        const row = masterData[i];
        const key = row[idx];
        if (key !== '' && key !== null && key !== undefined) {
          existingMap[String(key)] = { rowIndex: i, rowArray: row.slice() };
        }
      }
    }

    const now = new Date().toISOString().replace('T', ' ').substring(0, 19);

    let appended = 0;
    let updated = 0;
    const citiesSeen = new Set();

    // Process each incoming person (in-memory)
    filteredPeople.forEach(person => {
      const uniqueValue = person[UNIQUE_KEY];
      if (!uniqueValue) return; // skip records without unique key

      // track city for creating sheets later
      const cityName = normalizeValue(person.city);
      if (cityName) citiesSeen.add(cityName);

      const keyStr = String(uniqueValue);
      const exists = existingMap[keyStr];

      if (exists) {
        // Update logic (non-destructive)
        const rowArr = exists.rowArray;
        let changed = false;

        // For each header in masterHeaders, update from incoming person if present and non-empty
        masterHeaders.forEach((header, i) => {
          if (METADATA_HEADERS.includes(header)) return; // skip metadata for now in this loop

          // Skip some fields from destructive overwrites if desired (as original)
          if (['phone_numbers', 'number', 'raw_number', 'phones_url'].indexOf(header) !== -1) {
            return;
          }

          if (person.hasOwnProperty(header)) {
            const newVal = normalizeValue(person[header]);
            const oldVal = rowArr[i] === undefined || rowArr[i] === null ? '' : String(rowArr[i]);
            if (newVal !== '' && newVal !== oldVal) {
              rowArr[i] = newVal;
              changed = true;
            }
          }
        });

        // Merge phone_numbers
        const phoneNumbersIndex = headerIndex['phone_numbers'];
        if (phoneNumbersIndex !== undefined) {
          const existingPhoneString = rowArr[phoneNumbersIndex] || '';
          const existingPhoneSet = new Set(existingPhoneString.split(',').map(s => s.trim()).filter(Boolean));
          const newNumbers = [];

          if (Array.isArray(person.phone_numbers)) person.phone_numbers.forEach(n => { if (n) newNumbers.push(n); });
          if (person.raw_number) newNumbers.push(person.raw_number);
          if (person.number) newNumbers.push(person.number);

          newNumbers.forEach(n => {
            const norm = normalizeValue(n);
            if (norm !== '') existingPhoneSet.add(norm);
          });

          const merged = Array.from(existingPhoneSet).join(', ');
          if (merged !== existingPhoneString) {
            rowArr[phoneNumbersIndex] = merged;
            changed = true;
          }
        }

        // Single phone fields (raw_number, number, phones_url)
        ['raw_number', 'number', 'phones_url'].forEach(field => {
          const idx = headerIndex[field];
          if (idx === undefined) return;
          if (person[field] !== undefined) {
            const newVal = normalizeValue(person[field]);
            const oldVal = rowArr[idx] === undefined || rowArr[idx] === null ? '' : String(rowArr[idx]);
            if (newVal !== '' && newVal !== oldVal) {
              rowArr[idx] = newVal;
              changed = true;
            }
          }
        });

        // metadata updates
        const statusIdx = headerIndex['status'];
        const createdAtIdx = headerIndex['created_at'];
        const updatedAtIdx = headerIndex['updated_at'];
        if (changed) {
          if (statusIdx !== undefined) rowArr[statusIdx] = STATUS_UPDATED;
          if (updatedAtIdx !== undefined) rowArr[updatedAtIdx] = now;
          updated += 1;
        } else {
          // keep existing updated_at as-is
        }

        // write back into masterData
        masterData[exists.rowIndex] = rowArr;

      } else {
        // Insert new row
        const newRow = Array(masterHeaders.length).fill('');
        masterHeaders.forEach((header, i) => {
          if (METADATA_HEADERS.includes(header)) return; // handled below
          if (person.hasOwnProperty(header)) newRow[i] = normalizeValue(person[header]);
        });

        // set metadata
        const statusIdx = headerIndex['status'];
        const createdAtIdx = headerIndex['created_at'];
        const updatedAtIdx = headerIndex['updated_at'];
        if (statusIdx !== undefined) newRow[statusIdx] = STATUS_CREATED;
        if (createdAtIdx !== undefined) newRow[createdAtIdx] = now;
        if (updatedAtIdx !== undefined) newRow[updatedAtIdx] = now;

        masterData.push(newRow);
        existingMap[keyStr] = { rowIndex: masterData.length - 1, rowArray: newRow };
        appended += 1;
      }
    });

    // Now write masterHeaders + masterData back in one write operation.
    // Clear sheet then set values (faster than many appends).
    const totalRows = masterData.length + 1;
    const totalCols = masterHeaders.length;

    // Prepare full values array
    const fullValues = [masterHeaders].concat(masterData);

    // Resize the sheet range to exactly fit (clear extra)
    masterSheet.clearContents();
    masterSheet.getRange(1, 1, fullValues.length, totalCols).setValues(fullValues);

    // Create per-city sheets (with QUERY formulas) for each unique city
    // Determine the city column index in MASTER (1-based for columns)
    const cityHeaderIndex = headerIndex['city'];
    let cityColQueryIndex = null;
    if (cityHeaderIndex !== undefined) {
      // Query uses Col1, Col2, etc. This variable will be 1-based column index for QUERY.
      cityColQueryIndex = cityHeaderIndex + 1;
    }

    const cityStats = {};
    citiesSeen.forEach(city => {
      const safeName = safeSheetName(city);
      const sheet = getOrCreateSheet(ss, safeName);

      // Put a single QUERY formula in A1 that pulls rows where lower(ColX) = 'city' (case-insensitive)
      if (cityColQueryIndex !== null) {
        // build formula: =QUERY(MASTER!A:ZZ,"select * where lower(ColN) = 'cityname'",1)
        // We'll use a wide range to be safe (A:Z or A:ZZ). Use A:ZZ to support many columns
        const literalCity = escapeForQuery(city).toLowerCase();
        const formula = `=QUERY(${MASTER_SHEET_NAME}!A:ZZ,"select * where lower(Col${cityColQueryIndex}) = '${literalCity}'",1)`;
        sheet.clearContents();
        sheet.getRange(1, 1).setFormula(formula);
      } else {
        // If no 'city' column, just create an empty sheet with a comment
        sheet.clear();
        sheet.getRange(1, 1).setValue('No city column found in MASTER. Add a "city" header to use auto-query sheets.');
      }

      // keep a small stat
      cityStats[city] = { sheet: safeName };
    });

    const jsonOutput = {
      status: 'success',
      message: `Data saved in ${DATA_SAVE_MODE} mode.`,
      mode: DATA_SAVE_MODE,
      appended: appended,
      updated: updated,
      cities_processed_count: citiesSeen.size,
      cities: cityStats,
      total_rows_master: masterData.length
    };

    return createJsonResponse(jsonOutput);

  } catch (err) {
    Logger.log('Execution Error: ' + err.toString());
    return createJsonResponse({ status: 'error', message: 'Script execution failed: ' + err.toString() });
  }
}

// --- Helper: get or create MASTER sheet ---
function getOrCreateMasterSheet(ss) {
  let s = ss.getSheetByName(MASTER_SHEET_NAME);
  if (!s) {
    s = ss.insertSheet(MASTER_SHEET_NAME, 0);
  }
  return s;
}

// --- Helper: get or create generic sheet by safe name ---
function getOrCreateSheet(ss, name) {
  const safe = safeSheetName(name);
  let s = ss.getSheetByName(safe);
  if (!s) {
    s = ss.insertSheet(safe);
  }
  return s;
}
