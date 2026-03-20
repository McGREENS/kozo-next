"use client";

import { useState } from "react";
import Image from "next/image";

const displayFont =
  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

const tabs = {
  Food: [
    "/food-1.JPG", "/food-2.JPG", "/food-3.JPG", "/food-4.JPG",
    "/food-5.JPG", "/food-6.JPG", "/food-7.JPG", "/food-8.JPG",
    "/food-9.JPG", "/food-10.JPG",
  ],
  Wine: ["/wine-1.JPG", "/wine-2.JPG"],
  Cocktails: [
    "/cocktail-1.JPG", "/cocktail-2.JPG", "/cocktail-3.JPG",
    "/cocktail-4.JPG", "/cocktail-5.JPG",
  ],
};

type Tab = keyof typeof tabs;

export default function MenuSection() {
  const [active, setActive] = useState<Tab>("Food");

  return (
    <section className="kozo-menu" aria-label="Food and Drinks Menu">
      <div className="kozo-menu__top">
        <div className="mx-auto max-w-[1120px] px-8 py-10 text-center">
          <p className="kozo-menu__eyebrow">Menu</p>
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
