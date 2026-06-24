import { NextRequest, NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { getSession } from "@/app/lib/session";

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;
  const { status } = await req.json();

  await db.execute({
    sql: "UPDATE contacts SET status = ? WHERE id = ?",
    args: [status, id],
  });

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await params;

  await db.execute({
    sql: "DELETE FROM contacts WHERE id = ?",
    args: [id],
  });

  return NextResponse.json({ ok: true });
}
