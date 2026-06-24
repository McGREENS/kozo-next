import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { createSession } from "@/app/lib/session";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();

  if (!email || !password)
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const result = await db.execute({
    sql: "SELECT * FROM admins WHERE email = ?",
    args: [email],
  });

  const admin = result.rows[0];
  if (!admin)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const valid = await bcrypt.compare(password, admin.password as string);
  if (!valid)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  await createSession(admin.id as number);
  return NextResponse.json({ ok: true });
}
