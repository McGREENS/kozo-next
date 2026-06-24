import { NextResponse } from "next/server";
import { deleteSession } from "@/app/lib/session";

export async function POST() {
  await deleteSession();
  return NextResponse.redirect(new URL("/admin/login", process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"));
}
