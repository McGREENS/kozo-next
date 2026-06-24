import { createClient } from "@libsql/client";
import bcrypt from "bcryptjs";

const db = createClient({
  url: "libsql://kozo-laurier.aws-us-east-1.turso.io",
  authToken: process.env.TURSO_DB_TOKEN,
});

async function init() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS admins (
      id      INTEGER PRIMARY KEY AUTOINCREMENT,
      email   TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      name    TEXT NOT NULL,
      created_at TEXT DEFAULT (datetime('now'))
    )
  `);

  const hash = await bcrypt.hash("kozo@admin2025", 12);

  await db.execute({
    sql: `INSERT OR IGNORE INTO admins (email, password, name) VALUES (?, ?, ?)`,
    args: ["admin@kozokg.com", hash, "Kōzo Admin"],
  });

  console.log("✅ Admins table ready. Default: admin@kozokg.com / kozo@admin2025");
  process.exit(0);
}

init().catch((e) => { console.error(e); process.exit(1); });
