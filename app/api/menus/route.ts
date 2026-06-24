import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET() {
  const result = await db.execute(
    "SELECT category, filename FROM menus ORDER BY category"
  );
  return NextResponse.json(result.rows);
}
