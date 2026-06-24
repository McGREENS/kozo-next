"use client";

import { useState } from "react";
import MenuModal from "./MenuModal";

export default function HeroMenuButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-[3px] bg-[#F2E4B1] px-5 py-2 text-[12px] font-semibold tracking-wide text-black/80 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition hover:bg-[#F0C2B2]"
        style={{ fontFamily: "inherit", cursor: "pointer", border: "none" }}
      >
        Explore Menu
      </button>
      {open && <MenuModal onClose={() => setOpen(false)} />}
    </>
  );
}
