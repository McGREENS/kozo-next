import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  const result = await db.execute({
    sql: "SELECT filename, filedata FROM menus WHERE category = ?",
    args: [category],
  });

  const row = result.rows[0];
  if (!row?.filedata)
    return NextResponse.json({ error: "Not found" }, { status: 404 });

  const buffer = Buffer.from(row.filedata as string, "base64");

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${row.filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
