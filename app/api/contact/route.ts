import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function POST(req: NextRequest) {
  const { name, email, phone, message } = await req.json();

  if (!name?.trim() || !email?.trim() || !message?.trim())
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });

  await db.execute({
    sql: "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)",
    args: [name.trim(), email.trim(), (phone ?? "").trim(), message.trim()],
  });

  return NextResponse.json({ ok: true });
}
