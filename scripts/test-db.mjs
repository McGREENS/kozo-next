import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
});

// Tables
const tables = await db.execute("SELECT name FROM sqlite_master WHERE type='table'");
console.log("Tables:", tables.rows.map((r) => r.name));

// admins columns
const admins = await db.execute("PRAGMA table_info(admins)");
console.log("admins columns:", admins.rows.map((r) => r.name));

// contacts columns
const contacts = await db.execute("PRAGMA table_info(contacts)");
console.log("contacts columns:", contacts.rows.map((r) => r.name));

// menus columns
const menus = await db.execute("PRAGMA table_info(menus)");
console.log("menus columns:", menus.rows.map((r) => r.name));

// admin user exists?
const admin = await db.execute("SELECT id, email, name FROM admins");
console.log("admins rows:", admin.rows);
