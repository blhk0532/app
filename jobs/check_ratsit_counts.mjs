#!/usr/bin/env node

import mysql from 'mysql2/promise';

async function getDatabaseConnection() {
  const dbHost = process.env.DB_HOST  || '127.0.0.1';
  const dbPort = process.env.DB_PORT || '3306';
  const dbUser = process.env.DB_USERNAME || process.env.DB_USER || 'root';
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_DATABASE || 'app_new';
  const dbCharset = process.env.DB_CHARSET || 'utf8mb4';
  const dbSocket = process.env.DB_SOCKET || process.env.DB_UNIX_SOCKET || null;

  const connOptions = {
    user: dbUser,
    password: dbPassword,
    database: dbName,
    charset: dbCharset,
  };

  if (dbSocket) {
    connOptions.socketPath = dbSocket;
  } else {
    connOptions.host = dbHost;
    connOptions.port = dbPort;
  }

  return mysql.createConnection(connOptions);
}

function normalizePostnummer(input) {
  if (!input) return null;
  const cleaned = input.replace(/\s+/g, '');
  if (cleaned.length === 5) {
    return cleaned.slice(0, 3) + ' ' + cleaned.slice(3);
  }
  return input;
}

async function checkAndUpdate(postNumArg) {
  if (!postNumArg) {
    console.error('Usage: node check_ratsit_counts.mjs <post_nummer>');
    process.exit(1);
  }

  const noSpace = postNumArg.replace(/\s+/g, '');
  const withSpace = normalizePostnummer(postNumArg);

  let connection;
  try {
    connection = await getDatabaseConnection();

    // Count Ratsit data rows for the postal code (normalize by removing spaces)
    const [personRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM ratsit_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1",
      [noSpace],
    );

    const ratsitPersonerSaved = personRows[0].cnt || 0;

    const [phoneRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM ratsit_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1 AND telefon IS NOT NULL AND TRIM(telefon) != ''",
      [noSpace],
    );

    const ratsitPersonerPhoneSaved = phoneRows[0].cnt || 0;

    const [houseRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM ratsit_data WHERE REPLACE(postnummer, ' ', '') = ? AND agandeform = 'Äganderätt'",
      [noSpace],
    );

    const ratsitPersonerHouseSaved = houseRows[0].cnt || 0;

    // Ratsit doesn't have a clear 'company' distinction in this dataset - keep 0 (matches PHP action behavior)
    const ratsitForetagSaved = 0;
    const ratsitForetagPhoneSaved = 0;

    // Update the post_nums table for this postal code (normalize post_nummer)
    const [result] = await connection.execute(
      `UPDATE post_nums SET
        ratsit_personer_saved = ?,
        ratsit_personer_phone_saved = ?,
        ratsit_personer_house_saved = ?,
        ratsit_foretag_saved = ?,
        updated_at = NOW()
      WHERE REPLACE(post_nummer, ' ', '') = ?`,
      [
        ratsitPersonerSaved,
        ratsitPersonerPhoneSaved,
        ratsitPersonerHouseSaved,
        ratsitForetagSaved,
        noSpace,
      ],
    );

    if (result.affectedRows && result.affectedRows > 0) {
      console.log(`Updated post_nums for ${withSpace} / ${noSpace}:`);
      console.log('  ratsit_personer_saved =', ratsitPersonerSaved);
      console.log('  ratsit_personer_phone_saved =', ratsitPersonerPhoneSaved);
      console.log('  ratsit_personer_house_saved =', ratsitPersonerHouseSaved);
    } else {
      console.log(
        `No post_nums row found for ${withSpace} or ${noSpace} - no update performed.`,
      );
    }
  } catch (err) {
    console.error('Error:', err.message || err);
    process.exitCode = 2;
  } finally {
    if (connection) await connection.end();
  }
}

const arg = process.argv[2];
checkAndUpdate(arg).catch((e) => {
  console.error(e);
  process.exit(1);
});
