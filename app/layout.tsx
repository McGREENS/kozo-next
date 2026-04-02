import type { Metadata } from "next";
import ImageProtection from "./components/ImageProtection";
import localFont from "next/font/local";
import "./globals.css";

const optima = localFont({
  src: [
    {
      path: "../public/Optima.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Optima.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-optima",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kozogh | The Afro-Asian Experience",
  description: "An unforgettable Asian dining journey with an African influence that stimulates all senses. The Kōzo dining experience is elegant, sophisticated and exquisite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${optima.variable} antialiased`}>
        <ImageProtection />
        {children}
      </body>
    </html>
  );
}
