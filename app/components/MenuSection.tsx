"use client";

import { useState } from "react";
import Image from "next/image";

const displayFont =
  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

const tabs = {
  Food: [
    "/food-1.webp", "/food-2.webp", "/food-3.webp", "/food-4.webp",
    "/food-5.webp", "/food-6.webp", "/food-7.webp", "/food-8.webp",
    "/food-9.webp", "/food-10.webp",
  ],
  Wine: ["/wine-1.webp", "/wine-2.webp"],
  Cocktails: [
    "/cocktail-1.webp", "/cocktail-2.webp", "/cocktail-3.webp",
    "/cocktail-4.webp", "/cocktail-5.webp",
  ],
};

type Tab = keyof typeof tabs;

export default function MenuSection() {
  const [active, setActive] = useState<Tab>("Food");

  return (
    <section className="kozo-menu" aria-label="Food and Drinks Menu">
      <div className="kozo-menu__top">
        <div className="mx-auto max-w-[1120px] px-8 py-10 text-center">
          
          <h2 className="kozo-menu__title" style={{ fontFamily: displayFont }}>
            Food and Drinks
          </h2>
          <nav className="kozo-menu__tabs" aria-label="Menu categories">
            {(Object.keys(tabs) as Tab[]).map((tab) => (
              <button
                key={tab}
                className={`kozo-menu__tab ${active === tab ? "kozo-menu__tab--active" : ""}`}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="kozo-menu__gallery">
        <div className="kozo-menu__gallery-inner">
          {tabs[active].map((src, i) => (
            <div key={src} className="kozo-menu__image">
              <Image
                src={src}
                alt={`${active} ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
