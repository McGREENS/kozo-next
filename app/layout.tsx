import type { Metadata } from "next";
import ImageProtection from "./components/ImageProtection";
import localFont from "next/font/local";
import "./globals.css";

const BASE_URL = "https://www.kozokg.com";

const optima = localFont({
  src: [
    {
      path: "./fonts/Optima.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Optima.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-optima",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kozokg.com"),
  title: {
    default: "Kōzo | The Afro-Asian Experience — Kigali",
    template: "%s | Kōzo Kigali",
  },
  description:
    "Kōzo is Kigali's premier Afro-Asian restaurant. Vibrant African flavours meet Pan-Asian precision in a farm-to-table dining experience. Book your table at 17 KN 14 Ave, Kigali.",
  keywords: [
    "Kōzo", "Kozo Kigali", "Afro-Asian restaurant", "African restaurant Kigali",
    "Asian restaurant Kigali", "farm to table Kigali", "fine dining Kigali",
    "sushi Kigali", "Pan-Asian cuisine Rwanda", "best restaurant Kigali",
  ],
  authors: [{ name: "Ramzi Yamusah", url: "https://www.kozokg.com" }],
  creator: "Kōzo",
  publisher: "Kōzo",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.kozokg.com" },
  openGraph: {
    type: "restaurant",
    locale: "en_RW",
    url: "https://www.kozokg.com",
    siteName: "Kōzo Kigali",
    title: "Kōzo | The Afro-Asian Experience — Kigali",
    description:
      "Vibrant African flavours meet Pan-Asian precision. Farm-to-table dining at 17 KN 14 Ave, Kigali. Established 2018.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Kōzo Kigali — Afro-Asian dining experience" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kōzo | The Afro-Asian Experience — Kigali",
    description: "Vibrant African flavours meet Pan-Asian precision. Farm-to-table dining in Kigali.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  themeColor: "#1a1a1a",
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
