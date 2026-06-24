"use client";

import { useEffect, useState } from "react";

type Menu = { category: string; filename: string };

const MENU_OPTIONS = [
  { key: "food",   label: "Food",   sub: "Farm-to-table Afro-Asian cuisine" },
  { key: "drinks", label: "Drinks", sub: "Cocktails & non-alcoholic selections" },
  { key: "wine",   label: "Wine",   sub: "Curated cellar & by-the-glass" },
];

const displayFont = "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

export default function MenuModal({ onClose }: { onClose: () => void }) {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    fetch("/api/menus").then((r) => r.json()).then(setMenus);
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function getUrl(category: string) {
    const m = menus.find((m) => m.category === category);
    return m ? `/menus/${m.filename}` : null;
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center"
      style={{ background: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-[420px] px-8 pt-10 pb-12 sm:rounded-[3px]"
        style={{ background: "#08090f" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-[13px] tracking-[0.16em] uppercase"
          style={{ color: "rgba(255,255,255,0.3)", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}
        >
          Close
        </button>

        {/* Header */}
        <p className="text-[11px] tracking-[0.24em] uppercase mb-5" style={{ color: "#b89a5a" }}>
          Our Menus
        </p>

        {/* Divider */}
        <div className="mb-8" style={{ height: 1, background: "rgba(255,255,255,0.08)" }} />

        {/* Options */}
        <div className="flex flex-col">
          {MENU_OPTIONS.map(({ key, label, sub }, i) => {
            const url = getUrl(key);
            return (
              <a
                key={key}
                href={url ?? undefined}
                target="_blank"
                rel="noopener noreferrer"
                onClick={!url ? (e) => e.preventDefault() : undefined}
                className="group flex items-center justify-between py-5 transition-opacity"
                style={{
                  borderBottom: i < MENU_OPTIONS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                  textDecoration: "none",
                  opacity: url ? 1 : 0.38,
                  cursor: url ? "pointer" : "default",
                }}
              >
                <div>
                  <p
                    className="text-[22px] font-normal text-white mb-1 transition-colors group-hover:text-[#F2E4B1]"
                    style={{ fontFamily: displayFont }}
                  >
                    {label}
                  </p>
                  <p className="text-[12px] tracking-wide" style={{ color: "rgba(255,255,255,0.38)" }}>
                    {sub}
                  </p>
                </div>
                <span
                  className="text-[12px] tracking-[0.14em] uppercase shrink-0 ml-6 transition-colors group-hover:text-[#F2E4B1]"
                  style={{ color: url ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.2)" }}
                >
                  {url ? "View →" : "Soon"}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
