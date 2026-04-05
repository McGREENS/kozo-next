import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Kōzo team in Kigali. We're hiring passionate hospitality professionals. View open positions and apply today.",
  alternates: { canonical: "https://www.kozokg.com/careers" },
  openGraph: {
    url: "https://www.kozokg.com/careers",
    title: "Careers at Kōzo Kigali",
    description: "Join our team. View open positions at Kōzo Kigali and apply today.",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
