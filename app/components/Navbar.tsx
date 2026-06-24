"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MenuModal from "./MenuModal";

const displayFont =
  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close menu on route change / resize
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkClass = `hover:opacity-100 transition-opacity`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled || open ? "bg-white shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-5">
          {/* Left nav — hidden on mobile */}
          <nav
            className={`hidden md:flex items-center gap-10 text-[12px] font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? "text-black/70" : "text-white opacity-90"
            }`}
          >
            <Link className={linkClass} href="/">Home</Link>
            <Link className={linkClass} href="/about">About</Link>
            <button className={`${linkClass} bg-transparent border-none cursor-pointer`} style={{ fontFamily: "inherit", fontSize: "inherit", letterSpacing: "inherit", fontWeight: "inherit" }} onClick={() => setMenuOpen(true)}>Menu</button>
          </nav>

          {/* Logo */}
          <Link
            href="/"
            className={`select-none text-[28px] md:text-[32px] font-medium tracking-[0.28em] transition-colors duration-300 ${
              scrolled || open ? "text-black" : "text-white"
            }`}
            style={{
              fontFamily: displayFont,
              textShadow: scrolled || open ? "none" : "0 2px 16px rgba(0,0,0,0.35)",
            }}
          >
            KŌZO
          </Link>

          {/* Right nav — hidden on mobile */}
          <div
            className={`hidden md:flex items-center gap-10 text-[12px] font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? "text-black/70" : "text-white/90"
            }`}
          >
            <Link className={linkClass} href="/careers">Careers</Link>
            <Link className={linkClass} href="/contact">Contact Us</Link>
            <Link
              href="https://www.sevenrooms.com/reservations/kozokigali"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[3px] bg-[#F2E4B1] px-4 py-2 text-[12px] font-semibold tracking-wide text-black/80 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition hover:bg-[#F0C2B2]"
            >
              Book a table
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className={`md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 ${
              scrolled || open ? "text-black" : "text-white"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] w-full bg-current transition-transform duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] w-full bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-full bg-current transition-transform duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-[18px] font-medium tracking-wide text-black/80"
          onClick={() => setOpen(false)}
        >
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <button onClick={() => { setOpen(false); setMenuOpen(true); }} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontSize: "inherit", letterSpacing: "inherit", fontWeight: "inherit" }} className="text-black/80">Menu</button>
          <Link href="/careers" onClick={() => setOpen(false)}>Careers</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact Us</Link>
          <Link
            href="https://www.sevenrooms.com/reservations/kozokigali"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-[3px] bg-[#F2E4B1] px-6 py-3 text-[13px] font-semibold tracking-wide text-black/80 transition hover:bg-[#F0C2B2]"
          >
            Book a table
          </Link>
        </div>
      )}
      {menuOpen && <MenuModal onClose={() => setMenuOpen(false)} />}
    </>
  );
}
