"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = [
  "/hero.JPG",
  "/hero-2.JPG",
  "/hero-3.JPG",
  "/hero-4.JPG",
  "/hero-5.JPG",
  "/hero-6.JPG",
];

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {heroImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          priority={i === 0}
          className={`object-cover object-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
