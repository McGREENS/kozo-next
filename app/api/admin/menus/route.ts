import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { getSession } from "@/app/lib/session";

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

  const buffer = await file.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");
  const filename = `menu-${category}-${Date.now()}.pdf`;

  await db.execute({
    sql: `INSERT INTO menus (category, filename, filedata, updated_at)
          VALUES (?, ?, ?, datetime('now'))
          ON CONFLICT(category) DO UPDATE SET
            filename  = excluded.filename,
            filedata  = excluded.filedata,
            updated_at = excluded.updated_at`,
    args: [category, filename, base64],
  });

  return NextResponse.json({ ok: true, filename });
}

export async function DELETE(req: NextRequest) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { category } = await req.json();

  if (!ALLOWED_CATEGORIES.includes(category))
    return NextResponse.json({ error: "Invalid category" }, { status: 400 });

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
