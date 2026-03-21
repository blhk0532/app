#!/usr/bin/env node

import mysql from 'mysql2/promise';

async function getDatabaseConnection() {
  const dbHost = process.env.DB_HOST  || '127.0.0.1';
  const dbPort = process.env.DB_PORT || '3306';
  const dbUser = process.env.DB_USERNAME || process.env.DB_USER || 'root';
  const dbPassword = process.env.DB_PASSWORD;
  const dbName = process.env.DB_DATABASE || 'nordic_new';
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
    console.error('Usage: node check_merinfo_counts.mjs <post_nummer>');
    process.exit(1);
  }

  const noSpace = normalizeNoSpace(postNumArg);

  let connection;
  try {
    connection = await getDatabaseConnection();

    // Merinfo stores postnummer without space in this app; normalize and count
    const [personRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM merinfo_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1 AND is_hus = 0",
      [noSpace],
    );
    const merinfoPersonerSaved = personRows[0].cnt || 0;

    const [personPhoneRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM merinfo_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1 AND is_telefon = 1 AND is_hus = 0",
      [noSpace],
    );
    const merinfoPersonerPhoneSaved = personPhoneRows[0].cnt || 0;

    const [houseRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM merinfo_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1 AND is_hus = 1",
      [noSpace],
    );
    const merinfoPersonerHouseSaved = houseRows[0].cnt || 0;

    const [foretagPhoneRows] = await connection.execute(
      "SELECT COUNT(*) AS cnt FROM merinfo_data WHERE REPLACE(postnummer, ' ', '') = ? AND is_active = 1 AND is_hus = 1 AND is_telefon = 1",
      [noSpace],
    );
    const merinfoForetagPhoneSaved = foretagPhoneRows[0].cnt || 0;

    const merinfoForetagSaved = 0; // keep parity with PHP action

    // Update post_nums
    const [result] = await connection.execute(
      `UPDATE post_nums SET
        merinfo_personer_saved = ?,
        merinfo_personer_house_saved = ?,
        merinfo_foretag_saved = ?,
        merinfo_personer_phone_saved = ?,
        merinfo_foretag_phone_saved = ?,
        updated_at = NOW()
      WHERE REPLACE(post_nummer, ' ', '') = ?`,
      [
        merinfoPersonerSaved,
        merinfoPersonerHouseSaved,
        merinfoForetagSaved,
        merinfoPersonerPhoneSaved,
        merinfoForetagPhoneSaved,
        noSpace,
      ],
    );

    if (result.affectedRows && result.affectedRows > 0) {
      console.log(`Updated post_nums for ${noSpace}:`);
      console.log('  merinfo_personer_saved =', merinfoPersonerSaved);
      console.log('  merinfo_personer_house_saved =', merinfoPersonerHouseSaved);
      console.log('  merinfo_personer_phone_saved =', merinfoPersonerPhoneSaved);
      console.log('  merinfo_foretag_phone_saved =', merinfoForetagPhoneSaved);
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
