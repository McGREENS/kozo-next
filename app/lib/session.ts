import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const secret = new TextEncoder().encode(process.env.SESSION_SECRET!);
const COOKIE = "kozo_admin_session";

export async function createSession(userId: number) {
  const token = await new SignJWT({ userId })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("8h")
    .sign(secret);

  (await cookies()).set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 8,
    path: "/",
  });
}

export async function getSession(): Promise<{ userId: number } | null> {
  const token = (await cookies()).get(COOKIE)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    return { userId: payload.userId as number };
  } catch {
    return null;
  }
}

export async function deleteSession() {
  (await cookies()).delete(COOKIE);
}
