"use client";

import { useState } from "react";
import Link from "next/link";

type Contact = {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: string;
  created_at: string;
};

const displayFont = "var(--font-optima), ui-serif, Georgia, serif";

export default function ContactsClient({ contacts: initial }: { contacts: Contact[] }) {
  const [contacts, setContacts] = useState(initial);
  const [expanded, setExpanded] = useState<number | null>(null);

  async function toggleStatus(id: number, current: string) {
    const next = current === "unread" ? "read" : "unread";
    await fetch(`/api/admin/contacts/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: next }),
    });
    setContacts((prev) => prev.map((c) => c.id === id ? { ...c, status: next } : c));
  }

  async function deleteContact(id: number) {
    if (!confirm("Delete this message?")) return;
    await fetch(`/api/admin/contacts/${id}`, { method: "DELETE" });
    setContacts((prev) => prev.filter((c) => c.id !== id));
  }

  const unread = contacts.filter((c) => c.status === "unread").length;

  return (
    <div className="min-h-screen" style={{ background: "#05060c" }}>
      {/* Header */}
      <header
        className="flex items-center justify-between px-10 py-6 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-8">
          <Link href="/admin/dashboard">
            <p className="text-[22px] tracking-[0.28em] text-white font-normal" style={{ fontFamily: displayFont }}>
              KŌZO
            </p>
          </Link>
          <nav className="flex items-center gap-6 text-[12px] tracking-[0.1em] uppercase">
            <Link href="/admin/dashboard" style={{ color: "rgba(255,255,255,0.4)" }}>Dashboard</Link>
            <span style={{ color: "#F2E4B1" }}>Messages</span>
          </nav>
        </div>
        <form action="/api/auth/logout" method="POST">
          <button
            type="submit"
            className="text-[11px] tracking-[0.14em] uppercase px-4 py-2 rounded-[3px]"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
          >
            Sign out
          </button>
        </form>
      </header>

      <main className="px-10 py-12 max-w-[960px]">
        {/* Title */}
        <div className="flex items-baseline gap-4 mb-10">
          <h1 className="text-[30px] font-normal text-white" style={{ fontFamily: displayFont }}>
            Messages
          </h1>
          {unread > 0 && (
            <span
              className="text-[11px] tracking-[0.12em] uppercase px-3 py-1 rounded-full"
              style={{ background: "#F2E4B1", color: "#1b232b" }}
            >
              {unread} unread
            </span>
          )}
        </div>

        {contacts.length === 0 ? (
          <p className="text-[14px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            No messages yet.
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {contacts.map((c) => (
              <div
                key={c.id}
                className="rounded-[4px] overflow-hidden"
                style={{
                  background: c.status === "unread" ? "rgba(242,228,177,0.06)" : "rgba(255,255,255,0.03)",
                  border: `1px solid ${c.status === "unread" ? "rgba(242,228,177,0.2)" : "rgba(255,255,255,0.08)"}`,
                }}
              >
                {/* Row */}
                <div
                  className="flex items-center justify-between px-6 py-4 cursor-pointer"
                  onClick={() => setExpanded(expanded === c.id ? null : c.id)}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    {c.status === "unread" && (
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: "#F2E4B1" }} />
                    )}
                    <div className="min-w-0">
                      <p className="text-[14px] text-white truncate">{c.name}</p>
                      <p className="text-[12px] truncate" style={{ color: "rgba(255,255,255,0.4)" }}>{c.email}{c.phone ? ` · ${c.phone}` : ""}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0 ml-4">
                    <p className="text-[11px] hidden sm:block" style={{ color: "rgba(255,255,255,0.3)" }}>
                      {new Date(c.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </p>
                    <span
                      className="text-[10px] tracking-[0.12em] uppercase px-2 py-0.5 rounded-full"
                      style={{
                        background: c.status === "unread" ? "rgba(242,228,177,0.15)" : "rgba(255,255,255,0.07)",
                        color: c.status === "unread" ? "#F2E4B1" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      {c.status}
                    </span>
                  </div>
                </div>

                {/* Expanded */}
                {expanded === c.id && (
                  <div className="px-6 pb-5 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
                    <p
                      className="text-[13px] leading-[1.8] mt-4 whitespace-pre-wrap"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                    >
                      {c.message}
                    </p>
                    <div className="flex items-center gap-4 mt-5">
                      <a
                        href={`mailto:${c.email}`}
                        className="text-[11px] tracking-[0.14em] uppercase px-4 py-2 rounded-[3px] transition-colors"
                        style={{ background: "#F2E4B1", color: "#1b232b" }}
                      >
                        Reply via Email
                      </a>
                      <button
                        onClick={() => toggleStatus(c.id, c.status)}
                        className="text-[11px] tracking-[0.14em] uppercase px-4 py-2 rounded-[3px]"
                        style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
                      >
                        Mark as {c.status === "unread" ? "read" : "unread"}
                      </button>
                      <button
                        onClick={() => deleteContact(c.id)}
                        className="text-[11px] tracking-[0.14em] uppercase px-4 py-2 rounded-[3px]"
                        style={{ border: "1px solid rgba(248,113,113,0.3)", color: "rgba(248,113,113,0.7)" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
