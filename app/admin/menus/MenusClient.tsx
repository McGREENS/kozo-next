"use client";

import { useRef, useState } from "react";
import Link from "next/link";

type Menu = { category: string; filename: string; updated_at: string };

const CATEGORIES = [
  { key: "food",   label: "Food Menu" },
  { key: "drinks", label: "Drinks Menu" },
  { key: "wine",   label: "Wine Menu" },
];

const displayFont = "var(--font-optima), ui-serif, Georgia, serif";

export default function MenusClient({ menus: initial }: { menus: Menu[] }) {
  const [menus, setMenus]     = useState<Menu[]>(initial);
  const [files, setFiles]     = useState<Record<string, File | null>>({});
  const [loading, setLoading] = useState<string | null>(null);
  const [removing, setRemoving] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  function getMenu(cat: string) {
    return menus.find((m) => m.category === cat) ?? null;
  }

  function handleFileChange(cat: string, e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    setFiles((prev) => ({ ...prev, [cat]: file }));
    setSuccess(null);
  }

  async function handleUpload(cat: string) {
    const file = files[cat];
    if (!file) return;

    setLoading(cat);
    setSuccess(null);

    const fd = new FormData();
    fd.append("category", cat);
    fd.append("file", file);

    const res  = await fetch("/api/admin/menus", { method: "POST", body: fd });
    const data = await res.json();
    setLoading(null);

    if (!res.ok) { alert(data.error ?? "Upload failed"); return; }

    setMenus((prev) => {
      const exists = prev.find((m) => m.category === cat);
      const updated = { category: cat, filename: data.filename, updated_at: new Date().toISOString() };
      return exists ? prev.map((m) => m.category === cat ? updated : m) : [...prev, updated];
    });

    setFiles((prev) => ({ ...prev, [cat]: null }));
    if (inputRefs.current[cat]) inputRefs.current[cat]!.value = "";
    setSuccess(cat);
  }

  async function handleRemove(cat: string) {
    if (!confirm(`Remove the ${cat} menu PDF? It will no longer appear on the website.`)) return;
    setRemoving(cat);
    const res = await fetch("/api/admin/menus", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: cat }),
    });
    setRemoving(null);
    if (!res.ok) { alert("Failed to remove"); return; }
    setMenus((prev) => prev.filter((m) => m.category !== cat));
    setFiles((prev) => ({ ...prev, [cat]: null }));
    setSuccess(null);
  }

  return (
    <div className="min-h-screen" style={{ background: "#05060c" }}>
      <header
        className="flex items-center justify-between px-10 py-6 border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="flex items-center gap-8">
          <Link href="/admin/dashboard">
            <p className="text-[22px] tracking-[0.28em] text-white font-normal" style={{ fontFamily: displayFont }}>KŌZO</p>
          </Link>
          <nav className="flex items-center gap-6 text-[12px] tracking-[0.1em] uppercase">
            <Link href="/admin/dashboard" style={{ color: "rgba(255,255,255,0.4)" }}>Dashboard</Link>
            <span style={{ color: "#F2E4B1" }}>Menus</span>
          </nav>
        </div>
        <form action="/api/auth/logout" method="POST">
          <button type="submit" className="text-[11px] tracking-[0.14em] uppercase px-4 py-2 rounded-[3px]"
            style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}>
            Sign out
          </button>
        </form>
      </header>

      <main className="px-10 py-12 max-w-[680px]">
        <h1 className="text-[30px] font-normal text-white mb-2" style={{ fontFamily: displayFont }}>Menus</h1>
        <p className="text-[13px] mb-10" style={{ color: "rgba(255,255,255,0.4)" }}>
          Upload PDF menus — they will be instantly available on the website.
        </p>

        <div className="flex flex-col gap-5">
          {CATEGORIES.map(({ key, label }) => {
            const current    = getMenu(key);
            const chosenFile = files[key] ?? null;
            return (
              <div key={key} className="rounded-[4px] px-6 py-6"
                style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>

                {/* Top row */}
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <p className="text-[15px] text-white mb-1" style={{ fontFamily: displayFont }}>{label}</p>
                    {current ? (
                      <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
                        Last updated: {new Date(current.updated_at).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                      </p>
                    ) : (
                      <p className="text-[11px]" style={{ color: "rgba(255,255,255,0.22)" }}>No PDF uploaded yet</p>
                    )}
                  </div>
                  {current && (
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <a href={`/api/menus/${key}/file`} target="_blank" rel="noopener noreferrer"
                        className="text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-[3px]"
                        style={{ border: "1px solid rgba(242,228,177,0.3)", color: "#F2E4B1", textDecoration: "none" }}>
                        View
                      </a>
                      <button onClick={() => handleRemove(key)} disabled={removing === key}
                        className="text-[11px] tracking-[0.12em] uppercase px-3 py-1.5 rounded-[3px] disabled:opacity-40"
                        style={{ border: "1px solid rgba(248,113,113,0.35)", color: "rgba(248,113,113,0.75)", background: "none", cursor: "pointer" }}>
                        {removing === key ? "Removing…" : "Remove"}
                      </button>
                    </div>
                  )}
                </div>

                {/* File picker + upload */}
                <div className="flex items-center gap-3">
                  {/* Hidden real input */}
                  <input
                    ref={(el) => { inputRefs.current[key] = el; }}
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => handleFileChange(key, e)}
                  />
                  {/* Custom trigger */}
                  <button
                    type="button"
                    onClick={() => inputRefs.current[key]?.click()}
                    className="flex-1 min-w-0 text-left px-4 py-2.5 rounded-[3px] text-[12px] truncate"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: chosenFile ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.3)",
                      cursor: "pointer",
                    }}
                  >
                    {chosenFile ? chosenFile.name : "Choose PDF file…"}
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUpload(key)}
                    disabled={!chosenFile || loading === key}
                    className="shrink-0 text-[11px] tracking-[0.14em] uppercase px-5 py-2.5 rounded-[3px] font-semibold disabled:opacity-40"
                    style={{ background: "#F2E4B1", color: "#1b232b", cursor: chosenFile && loading !== key ? "pointer" : "not-allowed" }}
                  >
                    {loading === key ? "Uploading…" : current ? "Replace" : "Upload"}
                  </button>
                </div>

                {success === key && (
                  <p className="text-[12px] mt-3" style={{ color: "#86efac" }}>✓ Uploaded successfully</p>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
