import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
});

await db.batch([
  `CREATE TABLE IF NOT EXISTS admins (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    email      TEXT UNIQUE NOT NULL,
    password   TEXT NOT NULL,
    name       TEXT NOT NULL,
    created_at TEXT DEFAULT (datetime('now'))
  )`,
  `CREATE TABLE IF NOT EXISTS contacts (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    name       TEXT NOT NULL,
    email      TEXT NOT NULL,
    phone      TEXT DEFAULT '',
    message    TEXT NOT NULL,
    status     TEXT DEFAULT 'unread',
    created_at TEXT DEFAULT (datetime('now'))
  )`,
  `CREATE TABLE IF NOT EXISTS menus (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    category   TEXT UNIQUE NOT NULL,
    filename   TEXT NOT NULL,
    updated_at TEXT DEFAULT (datetime('now'))
  )`,
], "write");

const tables = await db.execute("SELECT name FROM sqlite_master WHERE type='table'");
console.log("Tables in DB:", tables.rows.map((r) => r.name));
