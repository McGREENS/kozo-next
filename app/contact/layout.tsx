import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kōzo Kigali. Visit us at 17 KN 14 Ave, Kigali or call 0798 979 779. We'd love to hear from you.",
  alternates: { canonical: "https://www.kozokg.com/contact" },
  openGraph: {
    url: "https://www.kozokg.com/contact",
    title: "Contact Kōzo Kigali",
    description: "Reach out to Kōzo at 17 KN 14 Ave, Kigali. Call 0798 979 779.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
