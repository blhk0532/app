#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import mysql from 'mysql2/promise';
import { fileURLToPath } from 'url';

const helperDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(helperDir, '..');

let envLoaded = false;
let dbPool = null;

const APARTMENT_PATTERN = /lgh|1 tr|2 tr|3 tr|4 tr|5 tr|6 tr| nb| bv|\bBox\b|\b([1-9][0-9]?|100)\s*[A-Z]\b/i;
const OWNER_PATTERN = /(tomträtt|äganderätt)/i;
const APARTMENT_TYPE_PATTERN = /lägenhet/i;

function loadEnvFile() {
  if (envLoaded) {
    return;
  }

  envLoaded = true;
  const envPath = path.join(projectRoot, '.env');

  try {
    const contents = fs.readFileSync(envPath, 'utf8');

    for (const rawLine of contents.split(/\r?\n/)) {
      const line = rawLine.trim();
      if (!line || line.startsWith('#')) {
        continue;
      }

      const eqIndex = line.indexOf('=');
      if (eqIndex === -1) {
        continue;
      }

      const key = line.slice(0, eqIndex).trim();
      let value = line.slice(eqIndex + 1).trim();

      if (!key || process.env[key]) {
        continue;
      }

      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      process.env[key] = value;
    }
  } catch {
    // Ignore missing .env files.
  }
}

async function getDbPool() {
  loadEnvFile();

  if (dbPool) {
    return dbPool;
  }

  const database = process.env.DB_DATABASE || 'nordic_new';
  const user = process.env.DB_USERNAME || 'root';
  const password = process.env.DB_PASSWORD || 'bkkbkk';
  const host = process.env.DB_HOST || '127.0.0.1';
  const port = process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306;
  const socketPath = process.env.DB_SOCKET || undefined;

  const config = {
    user,
    password,
    database,
    charset: 'utf8mb4',
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

  dbPool = mysql.createPool(config);
  return dbPool;
}

function cleanString(value) {
  if (value === null || value === undefined) {
    return null;
  }

  const text = String(value).trim();
  return text === '' ? null : text;
}

function normalizePostnummer(value) {
  const text = cleanString(value);
  if (!text) {
    return null;
  }

  const digits = text.replace(/\D/g, '');
  return digits || text;
}

function parseInteger(value) {
  if (value === null || value === undefined || value === '') {
    return null;
  }

  if (typeof value === 'number' && Number.isFinite(value)) {
    return Math.trunc(value);
  }

  const digits = String(value).replace(/[^\d-]/g, '');
  if (!digits) {
    return null;
  }

  const parsed = parseInt(digits, 10);
  return Number.isNaN(parsed) ? null : parsed;
}

function splitPersonnamn(personnamn) {
  const name = cleanString(personnamn);
  if (!name) {
    return { fornamn: '', efternamn: '' };
  }

  const parts = name.split(/\s+/).filter(Boolean);
  if (parts.length === 1) {
    return { fornamn: parts[0], efternamn: '' };
  }

  return {
    fornamn: parts.slice(0, -1).join(' '),
    efternamn: parts.at(-1) || '',
  };
}

function normalizePhoneList(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => cleanString(typeof item === 'object' && item !== null ? item.text : item))
      .filter(Boolean);
  }

  const text = cleanString(value);
  return text ? [text] : [];
}

function firstPhone(value) {
  const phones = normalizePhoneList(value);
  return phones[0] || null;
}

function toJsonString(value) {
  if (value === null || value === undefined) {
    return null;
  }

  try {
    return JSON.stringify(value);
  } catch {
    return null;
  }
}

function hasValue(value) {
  if (value === undefined || value === null) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim() !== '';
  }

  if (Array.isArray(value)) {
    return value.length > 0;
  }

  return true;
}

function mergeValue(existingValue, incomingValue) {
  if (incomingValue === undefined || incomingValue === null) {
    return existingValue;
  }

  if (typeof incomingValue === 'string' && incomingValue.trim() === '') {
    return existingValue;
  }

  return incomingValue;
}

function computeHittaIsHus(hittaData) {
  const address = cleanString(hittaData.gatuadress);
  return !(address && APARTMENT_PATTERN.test(address));
}

function computeRatsitIsHus(ratsitData) {
  const agandeform = cleanString(ratsitData.bo_agandeform);
  const bostadstyp = cleanString(ratsitData.bo_bostadstyp);

  if (agandeform) {
    return Boolean(OWNER_PATTERN.test(agandeform) && !APARTMENT_TYPE_PATTERN.test(bostadstyp || ''));
  }

  const address = cleanString(ratsitData.bo_gatuadress || ratsitData.gatuadress);
  return !(address && APARTMENT_PATTERN.test(address));
}

function buildHittaPayload(hittaData) {
  const personnamn = cleanString(hittaData.personnamn);
  const split = splitPersonnamn(personnamn);
  const phones = normalizePhoneList(hittaData.telefon);
  const isHus = computeHittaIsHus(hittaData);
  const shouldQueue = isHus && phones.length > 0;

  return {
    adress: cleanString(hittaData.gatuadress),
    postnummer: normalizePostnummer(hittaData.postnummer),
    postort: cleanString(hittaData.postort),
    fornamn: split.fornamn,
    efternamn: split.efternamn,
    personnamn,
    alder: parseInteger(hittaData.alder),
    kon: cleanString(hittaData.kon),
    telefon: firstPhone(hittaData.telefon),
    telefonnummer: phones.length > 0 ? toJsonString(phones) : undefined,
    hitta_link: cleanString(hittaData.link),
    hitta_data: toJsonString(hittaData),
    is_hus: isHus,
    is_active: true,
    is_queue: shouldQueue ? true : undefined,
  };
}

function buildRatsitPayload(ratsitData) {
  const personnamn = cleanString(ratsitData.ps_personnamn || ratsitData.personnamn);
  const split = {
    fornamn: cleanString(ratsitData.ps_fornamn),
    efternamn: cleanString(ratsitData.ps_efternamn),
  };
  const fallbackSplit = splitPersonnamn(personnamn);
  const telefonnummer = normalizePhoneList(ratsitData.telefonnummer);
  const personerCount = Array.isArray(ratsitData.bo_personer)
    ? ratsitData.bo_personer.length
    : parseInteger(ratsitData.personer);

  return {
    adress: cleanString(ratsitData.bo_gatuadress || ratsitData.gatuadress),
    postnummer: normalizePostnummer(ratsitData.bo_postnummer || ratsitData.postnummer),
    postort: cleanString(ratsitData.bo_postort || ratsitData.postort),
    fornamn: split.fornamn || fallbackSplit.fornamn,
    efternamn: split.efternamn || fallbackSplit.efternamn,
    personnamn,
    personnummer: cleanString(ratsitData.ps_personnummer || ratsitData.personnummer),
    alder: parseInteger(ratsitData.ps_alder || ratsitData.alder),
    kommun: cleanString(ratsitData.bo_kommun || ratsitData.kommun),
    kon: cleanString(ratsitData.ps_kon || ratsitData.kon),
    telefon: cleanString(ratsitData.ps_telefon || ratsitData.telefon),
    telefonnummer: telefonnummer.length > 0 ? toJsonString(telefonnummer) : undefined,
    civilstand: cleanString(ratsitData.ps_civilstand || ratsitData.civilstand),
    adressandring: cleanString(ratsitData.adressandring),
    bostadstyp: cleanString(ratsitData.bo_bostadstyp || ratsitData.bostadstyp),
    agandeform: cleanString(ratsitData.bo_agandeform || ratsitData.agandeform),
    boarea: cleanString(ratsitData.bo_boarea || ratsitData.boarea),
    byggar: cleanString(ratsitData.bo_byggar || ratsitData.byggar),
    personer: personerCount,
    ratsit_link: cleanString(ratsitData.ratsit_se || ratsitData.ratsit_link),
    ratsit_data: toJsonString(ratsitData),
    is_hus: computeRatsitIsHus(ratsitData),
    is_active: true,
    is_queue: false,
    is_done: true,
  };
}

async function findExistingRow(connection, payload) {
  const attempts = [
    {
      condition: 'personnummer = ? LIMIT 1',
      values: [payload.personnummer],
    },
    {
      condition: 'ratsit_link = ? LIMIT 1',
      values: [payload.ratsit_link],
    },
    {
      condition: 'hitta_link = ? LIMIT 1',
      values: [payload.hitta_link],
    },
    {
      condition: 'adress = ? AND fornamn = ? AND efternamn = ? LIMIT 1',
      values: [payload.adress, payload.fornamn ?? '', payload.efternamn ?? ''],
    },
    {
      condition: 'adress = ? AND personnamn = ? LIMIT 1',
      values: [payload.adress, payload.personnamn],
    },
  ];

  for (const attempt of attempts) {
    if (attempt.values.some((value) => !hasValue(value))) {
      continue;
    }

    const [rows] = await connection.execute(
      `SELECT * FROM sweden_personer WHERE ${attempt.condition}`,
      attempt.values,
    );

    if (Array.isArray(rows) && rows.length > 0) {
      return rows[0];
    }
  }

  return null;
}

async function upsertPayload(partialPayload) {
  const pool = await getDbPool();
  const connection = await pool.getConnection();

  try {
    const payload = { ...partialPayload };

    if (!hasValue(payload.personnamn) && (hasValue(payload.fornamn) || hasValue(payload.efternamn))) {
      payload.personnamn = [payload.fornamn, payload.efternamn].filter(Boolean).join(' ').trim();
    }

    if (!hasValue(payload.fornamn) && hasValue(payload.personnamn)) {
      const split = splitPersonnamn(payload.personnamn);
      payload.fornamn = split.fornamn;
      payload.efternamn = payload.efternamn ?? split.efternamn;
    }

    payload.fornamn = payload.fornamn ?? '';
    payload.efternamn = payload.efternamn ?? '';

    const existing = await findExistingRow(connection, payload);

    const record = {
      adress: null,
      postnummer: null,
      postort: null,
      fornamn: '',
      efternamn: '',
      personnamn: null,
      alder: null,
      kommun: null,
      personnummer: null,
      kon: null,
      telefon: null,
      telefonnummer: null,
      civilstand: null,
      adressandring: null,
      bostadstyp: null,
      agandeform: null,
      boarea: null,
      byggar: null,
      personer: null,
      ratsit_link: null,
      ratsit_data: null,
      hitta_link: null,
      hitta_data: null,
      merinfo_link: null,
      merinfo_data: null,
      eniro_link: null,
      eniro_data: null,
      upplysning_link: null,
      upplysning_data: null,
      mrkoll_link: null,
      mrkoll_data: null,
      is_hus: false,
      is_owner: false,
      is_active: true,
      is_queue: false,
      is_done: false,
    };

    for (const [key, defaultValue] of Object.entries(record)) {
      record[key] = existing ? mergeValue(existing[key], payload[key]) : mergeValue(defaultValue, payload[key]);
    }

    if (!record.personnamn && (record.fornamn || record.efternamn)) {
      record.personnamn = [record.fornamn, record.efternamn].filter(Boolean).join(' ').trim();
    }

    if (!existing && !hasValue(record.adress) && !hasValue(record.personnamn) && !hasValue(record.ratsit_link) && !hasValue(record.hitta_link)) {
      return { skipped: true };
    }

    const fields = Object.keys(record);

    if (existing) {
      const updateAssignments = fields.map((field) => `${field} = ?`).join(', ');
      await connection.execute(
        `UPDATE sweden_personer SET ${updateAssignments}, updated_at = NOW() WHERE id = ?`,
        [...fields.map((field) => record[field]), existing.id],
      );

      return { updated: true, id: existing.id };
    }

    const placeholders = fields.map(() => '?').join(', ');
    const [insertResult] = await connection.execute(
      `INSERT INTO sweden_personer (${fields.join(', ')}, created_at, updated_at) VALUES (${placeholders}, NOW(), NOW())`,
      fields.map((field) => record[field]),
    );

    return { created: true, id: insertResult.insertId };
  } finally {
    connection.release();
  }
}

export async function syncSwedenPersonFromHitta(hittaData) {
  return upsertPayload(buildHittaPayload(hittaData));
}

export async function syncSwedenPersonFromRatsit(ratsitData) {
  return upsertPayload(buildRatsitPayload(ratsitData));
}

export async function syncSwedenPersonsFromHittaBatch(persons) {
  const summary = { created: 0, updated: 0, skipped: 0, failed: 0 };

  for (const person of persons) {
    try {
      const result = await syncSwedenPersonFromHitta(person);
      if (result?.created) {
        summary.created += 1;
      } else if (result?.updated) {
        summary.updated += 1;
      } else {
        summary.skipped += 1;
      }
    } catch {
      summary.failed += 1;
    }
  }

  return summary;
}

export async function closeSwedenPersonPool() {
  if (dbPool) {
    await dbPool.end();
    dbPool = null;
  }
}
