import { createClient } from "@libsql/client";

const db = createClient({
  url: process.env.TURSO_DB_URL,
  authToken: process.env.TURSO_DB_TOKEN,
});

await db.execute("ALTER TABLE menus ADD COLUMN filedata TEXT DEFAULT ''");
console.log("✅ filedata column added");

const check = await db.execute("PRAGMA table_info(menus)");
console.log("menus columns:", check.rows.map((r) => r.name));
