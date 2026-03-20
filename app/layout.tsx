import type { Metadata } from "next";
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
  title: "KŌZO",
  description: "KŌZO restaurant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${optima.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
