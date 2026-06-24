import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
});

await db.execute("ALTER TABLE contacts ADD COLUMN phone TEXT DEFAULT ''");
console.log("✅ phone column added to contacts");

const check = await db.execute("PRAGMA table_info(contacts)");
console.log("Columns:", check.rows.map((r) => r.name));
