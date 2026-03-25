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

function normalizeNoSpace(input) {
  return (input || '').toString().replace(/\s+/g, '');
}

async function checkAndUpdate(postNumArg) {
  if (!postNumArg) {
    console.error('Usage: node check_hitta_counts.mjs <post_nummer>');
    process.exit(1);
  }

  const noSpace = normalizeNoSpace(postNumArg);

  let connection;
  try {
    connection = await getDatabaseConnection();

    // Count Hitta data rows
    const [personRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM hitta_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1",
      [noSpace],
    );
    const hittaPersonerSaved = personRows[0].cnt || 0;

    const [houseRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM hitta_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1 AND is_hus = 1",
      [noSpace],
    );
    const hittaHusSaved = houseRows[0].cnt || 0;

    const [personPhoneRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM hitta_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1 AND is_telefon = 1",
      [noSpace],
    );
    const hittaPersonerPhoneSaved = personPhoneRows[0].cnt || 0;

    const [foretagPhoneRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM hitta_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1 AND is_hus = 1 AND is_telefon = 1",
      [noSpace],
    );
    const hittaForetagPhoneSaved = foretagPhoneRows[0].cnt || 0;

    // Update post_nums
    const [result] = await connection.execute(
      `UPDATE post_nums SET
        hitta_personer_saved = ?,
        hitta_personer_house_saved = ?,
        hitta_personer_phone_saved = ?,
        hitta_foretag_saved = ?,
        updated_at = NOW()
      WHERE REPLACE(post_nummer, ' ', '') = ?`,
      [
        hittaPersonerSaved,
        hittaHusSaved,
        hittaPersonerPhoneSaved,
        hittaForetagPhoneSaved,
        noSpace,
      ],
    );

    if (result.affectedRows && result.affectedRows > 0) {
      console.log(`Updated post_nums for ${noSpace}:`);
      console.log('  hitta_personer_saved =', hittaPersonerSaved);
      console.log('  hitta_personer_house_saved =', hittaHusSaved);
      console.log('  hitta_personer_phone_saved =', hittaPersonerPhoneSaved);
      console.log('  hitta_foretag_saved =', hittaForetagPhoneSaved);
    } else {
      console.log(`No post_nums row found for ${noSpace} - no update performed.`);
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
