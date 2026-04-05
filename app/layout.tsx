import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kozokg.com"),
  title: {
    default: "Kōzo | Afro-Asian & Luxury Restaurant in Kigali, Rwanda",
    template: "%s | Kōzo Kigali",
  },
  description:
    "Kōzo is Kigali's most luxurious Afro-Asian restaurant. Vibrant African flavours meet Pan-Asian precision — sushi, farm-to-table fine dining, and warm hospitality at 17 KN 14 Ave, Kigali, Rwanda.",
  keywords: [
    // Brand
    "Kōzo", "Kozo", "Kozo Kigali", "Kozo Rwanda", "Kozo restaurant",
    // Cuisine type
    "Afro-Asian restaurant", "Afro Asian restaurant", "African Asian fusion",
    "Pan-Asian cuisine", "Asian restaurant Kigali", "Asian restaurant Rwanda",
    "African restaurant Kigali", "African restaurant Rwanda",
    "sushi Kigali", "sushi Rwanda", "Japanese restaurant Kigali",
    "Thai restaurant Kigali", "fusion restaurant Kigali",
    // Luxury / experience
    "luxury restaurant Kigali", "luxurious restaurant Kigali",
    "fine dining Kigali", "fine dining Rwanda",
    "best restaurant Kigali", "best restaurant Rwanda",
    "upscale restaurant Kigali", "elegant dining Kigali",
    "romantic restaurant Kigali", "top restaurant Kigali",
    // Farm to table
    "farm to table Kigali", "farm to table Rwanda",
    "sustainable dining Kigali", "organic restaurant Kigali",
    // Location
    "restaurant KN 14 Ave", "restaurant Kigali city",
    "where to eat Kigali", "best place to eat Kigali",
  ],
  authors: [{ name: "Ramzi Yamusah", url: "https://www.kozokg.com" }],
  creator: "Kōzo",
  publisher: "Kōzo",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: "https://www.kozokg.com" },
  openGraph: {
    type: "website",
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
