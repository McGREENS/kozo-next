"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Something went wrong");
      return;
    }

    router.push("/admin/dashboard");
  }

  return (
    <div className="min-h-screen flex" style={{ background: "#05060c" }}>

      {/* Left — branding panel */}
      <div
        className="hidden lg:flex flex-col justify-between w-[480px] shrink-0 px-14 py-14 relative overflow-hidden"
        style={{ background: "#0b0c15" }}
      >
        {/* Subtle background image */}
        <Image
          src="/hero.webp"
          alt=""
          fill
          className="object-cover object-center opacity-20"
        />
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Logo */}
          <div>
            <p
              className="text-[32px] tracking-[0.28em] text-white font-normal"
              style={{ fontFamily: "var(--font-optima), ui-serif, Georgia, serif" }}
            >
              KŌZO
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase mt-1" style={{ color: "#b89a5a" }}>
              Admin Panel
            </p>
          </div>

          {/* Bottom quote */}
          <div>
            <p
              className="text-[22px] font-normal leading-[1.3]"
              style={{
                color: "#F2E4B1",
                fontFamily: "var(--font-optima), ui-serif, Georgia, serif",
              }}
            >
              Where Cultures Converge<br />and Flavours Inspire.
            </p>
            <p className="text-[12px] tracking-wide mt-3" style={{ color: "rgba(255,255,255,0.4)" }}>
              Kōzo Kigali — Est. 2018
            </p>
          </div>
        </div>
      </div>

      {/* Right — login form */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-[400px]">

          {/* Mobile logo */}
          <div className="lg:hidden mb-10 text-center">
            <p
              className="text-[28px] tracking-[0.28em] text-white font-normal"
              style={{ fontFamily: "var(--font-optima), ui-serif, Georgia, serif" }}
            >
              KŌZO
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase mt-1" style={{ color: "#b89a5a" }}>
              Admin Panel
            </p>
          </div>

          <h1
            className="text-[28px] font-normal text-white mb-2"
            style={{ fontFamily: "var(--font-optima), ui-serif, Georgia, serif" }}
          >
            Sign in
          </h1>
          <p className="text-[13px] mb-10" style={{ color: "rgba(255,255,255,0.45)" }}>
            Enter your credentials to access the dashboard
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="admin@kozokg.com"
                className="w-full px-4 py-3 text-[13px] text-white rounded-[3px] outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#F2E4B1")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[11px] tracking-[0.16em] uppercase" style={{ color: "rgba(255,255,255,0.5)" }}>
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 text-[13px] text-white rounded-[3px] outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  fontFamily: "inherit",
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = "#F2E4B1")}
                onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
              />
            </div>

            {error && (
              <p className="text-[12px] px-3 py-2 rounded-[3px]" style={{ color: "#f87171", background: "rgba(248,113,113,0.08)" }}>
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full py-3 text-[12px] tracking-[0.18em] uppercase font-semibold rounded-[3px] transition-colors disabled:opacity-60"
              style={{ background: "#F2E4B1", color: "#1b232b", fontFamily: "inherit" }}
              onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = "#F0C2B2"; }}
              onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = "#F2E4B1"; }}
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
