import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { getSession } from "@/app/lib/session";
import { writeFile, unlink } from "fs/promises";
import path from "path";

const ALLOWED_CATEGORIES = ["food", "drinks", "wine"];

export async function POST(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const category = formData.get("category") as string;
  const file = formData.get("file") as File;

  if (!ALLOWED_CATEGORIES.includes(category))
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });

  if (!file || file.type !== "application/pdf")
    return NextResponse.json({ error: "PDF file required" }, { status: 400 });

  // Delete old file if one exists
  const existing = await db.execute({
    sql: "SELECT filename FROM menus WHERE category = ?",
    args: [category],
  });
  if (existing.rows[0]?.filename) {
    const oldPath = path.join(process.cwd(), "public", "menus", existing.rows[0].filename as string);
    try { await unlink(oldPath); } catch { /* already gone */ }
  }

  // Timestamped filename busts browser cache
  const filename = `menu-${category}-${Date.now()}.pdf`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await writeFile(path.join(process.cwd(), "public", "menus", filename), buffer);

  await db.execute({
    sql: `INSERT INTO menus (category, filename, updated_at)
          VALUES (?, ?, datetime('now'))
          ON CONFLICT(category) DO UPDATE SET filename = excluded.filename, updated_at = excluded.updated_at`,
    args: [category, filename],
  });

  return NextResponse.json({ ok: true, filename });
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { category } = await req.json();

  if (!ALLOWED_CATEGORIES.includes(category))
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });

  const existing = await db.execute({
    sql: "SELECT filename FROM menus WHERE category = ?",
    args: [category],
  });
  if (existing.rows[0]?.filename) {
    const filepath = path.join(process.cwd(), "public", "menus", existing.rows[0].filename as string);
    try { await unlink(filepath); } catch { /* already gone */ }
  }

  await db.execute({
    sql: "DELETE FROM menus WHERE category = ?",
    args: [category],
  });

  return NextResponse.json({ ok: true });
}

export async function GET() {
  const result = await db.execute(
    "SELECT category, filename, updated_at FROM menus ORDER BY category"
  );
  return NextResponse.json(result.rows);
}
