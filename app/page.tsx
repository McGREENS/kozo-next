import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlideshow from "./components/HeroSlideshow";
import MenuSection from "./components/MenuSection";
import EventsSection from "./components/EventsSection";
import HeroMenuButton from "./components/HeroMenuButton";

export const metadata: Metadata = {
  title: "Kōzo Kigali | Afro-Asian Fine Dining & Luxury Restaurant Rwanda",
  description:
    "Kozo Kigali — Rwanda's finest Afro-Asian restaurant. Sushi, Pan-Asian cuisine, and African flavours in an elegant farm-to-table setting at 17 KN 14 Ave, Kigali. The best dining experience in Rwanda.",
  alternates: { canonical: "https://www.kozokg.com" },
  openGraph: {
    url: "https://www.kozokg.com",
    title: "Kōzo Kigali | Afro-Asian Fine Dining & Luxury Restaurant Rwanda",
    description: "Rwanda's finest Afro-Asian restaurant. Sushi, farm-to-table fine dining, and African hospitality in Kigali.",
  },
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Restaurant",
            name: "Kōzo",
            url: "https://www.kozokg.com",
            logo: "https://www.kozokg.com/kozo-circl.png",
            image: "https://www.kozokg.com/og-image.jpg",
            description:
              "Kōzo is Kigali's premier Afro-Asian restaurant. Vibrant African flavours meet Pan-Asian precision in a farm-to-table dining experience.",
            foundingDate: "2018",
            servesCuisine: ["African", "Asian", "Pan-Asian", "Sushi", "Japanese", "Thai", "Fusion", "Farm to Table"],
            priceRange: "$$$",
            keywords: "Kozo, Kozo Kigali, Kozo Rwanda, Afro-Asian restaurant, luxury restaurant Kigali, fine dining Rwanda, sushi Kigali, Asian restaurant Rwanda",
            address: {
              "@type": "PostalAddress",
              streetAddress: "17 KN 14 Ave",
              addressLocality: "Kigali",
              addressCountry: "RW",
            },
            telephone: "+250798979779",
            sameAs: ["https://www.instagram.com/kozokigali/"],
          }),
        }}
      />
      <section className="kozo-hero">
        <HeroSlideshow />

        <Navbar />

        <main className="relative z-10 flex min-h-[100svh] items-center">
          <div className="mx-auto w-full max-w-[1120px] px-8">
            <div className="mx-auto max-w-[900px] pt-10 text-center text-white">
              <h1
                className="text-[56px] font-normal leading-[1.05] tracking-wide"
                style={{
                  fontFamily:
                    "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
                  textShadow: "0 10px 35px rgba(0,0,0,0.55)",
                }}
              >
                The Afro - Asian Experience
              </h1>
              <p className="mt-4 text-[14px] font-medium tracking-wide text-white/85">
                More than just a restaurant
              </p>
              <div className="mt-8 flex justify-center">
                <HeroMenuButton />
              </div>
            </div>
          </div>
        </main>
      </section>

      <section className="kozo-intro" aria-label="KŌZO intro">
        <Image
          src="/about.webp"
          alt=""
          fill
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div className="kozo-intro__circle" aria-hidden="true">
          <Image
            src="/kozo-circl.webp"
            alt=""
            width={620}
            height={620}
            priority={false}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1120px] px-8">
          <div className="mx-auto max-w-[980px] text-center text-white">
            <h2
              className="kozo-intro__title"
              style={{
                fontFamily:
                  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
              }}
            >
              An unforgettable Asian dining journey with an African influence
              that stimulates all senses
            </h2>
            <p className="kozo-intro__copy">
              The Kōzo dining experience is elegant, sophisticated and exquisite.
              Our farm-to-table concept means we source ingredients from local
              farms, supporting the African Farmer while maintaining our
              commitment to bring only fresh ingredients to your tables.
            </p>
            <p className="kozo-intro__copy mt-5">
              The Kōzo food is made to share amongst friends and family, over
              piquant conversation and exquisite drinks.
            </p>
            <div className="mt-10">
              <a
                href="https://www.instagram.com/kozokigali/"
                className="rounded-[3px] border border-[#F2E4B1] px-6 py-3 text-[12px] font-semibold tracking-widest text-[#F2E4B1] uppercase transition hover:bg-[#F0C2B2] hover:border-[#F0C2B2] hover:text-black/80"
              >
                Our Community
              </a>
            </div>
          </div>
        </div>
      </section>

      <MenuSection />

      <section className="kozo-founder" aria-labelledby="kozo-founder-heading" style={{ backgroundColor: "#f0c1b1" }}>
        <div className="mx-auto max-w-[780px] px-8 py-20 text-center">
          <p className="text-[13px] font-semibold tracking-widest uppercase text-[#b89a5a] mb-6">A Message from Our Founder</p>
          <blockquote className="space-y-5 text-[15px] leading-[1.85] text-black/75">
            <p>Step into Kōzo, where vibrant African flavours meet the refined precision of Pan-Asian cuisine through an innovative culinary process that transforms each plate into a masterpiece. Established in 2018, we welcome you into our home—a space that celebrates genuine African hospitality and a cherished farm-to-table tradition. In every city we find ourselves, we integrate with the local supply chain, partnering with community farmers to ensure sustainable, fresh dining that honors both nature and tradition.</p>
            <p>Under the guidance of Our Chef, our dishes are far more than just food—they are the result of countless hours of innovation, fusing two cultures into every bite. Inspired by the ancient ties that once bound Africa and Asia along historic trade routes like the Silk Road, our menu reflects a modern interpretation of a timeless culinary dialogue. Just as the Silk Road connected continents, exchanging spices, techniques, and traditions, our creations bridge diverse flavours and culinary wisdom to inspire a new era of dining.</p>
            <p>At Kōzo, every shared plate, well-curated music, and warm smile invites you to explore a journey of taste and innovation. We are excited to bring our unique experience and vibrant flavours to a city near you.</p>
            <p className="italic text-black/60">Where Cultures Converge and Flavours Inspire.</p>
          </blockquote>
          <Image
            src="/founder-signature.webp"
            alt="Ramzi Yamusah signature"
            width={180}
            height={80}
            className="mt-8 mb-2 opacity-80 mx-auto"
          />
          <div className="mt-2">
            <p className="text-[14px] font-semibold text-black/80">Ramzi Yamusah</p>
            <p className="text-[12px] tracking-widest uppercase text-[#b89a5a] mt-1">Founder</p>
            <p className="text-[12px] tracking-widest uppercase text-[#b89a5a] mt-1">Kōzo</p>
          </div>
        </div>
      </section>

      {/* <section className="kozo-chef" aria-labelledby="kozo-chef-heading">
        <div className="mx-auto flex max-w-[1120px] items-center gap-14 px-8 py-20">
          <div className="relative shrink-0">
            <div className="kozo-chef__photo-circle">
              <Image
                src="/sakon2.webp"
                alt="Chef Sakorn Somboon"
                fill
                className="object-cover object-top rounded-full"
              />
            </div>
          </div>

          <div className="max-w-[560px]">
            <p className="kozo-chef__eyebrow">Our Executive Chef</p>
            <h2
              id="kozo-chef-heading"
              className="kozo-chef__name"
              style={{
                fontFamily:
                  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
              }}
            >
              Sakorn Somboon
            </h2>
            <p className="kozo-chef__lead">
              Born in Thailand but raised in a Western world in the Netherlands,
              Sakorn has developed a unique palate that had given him a specific
              point of view as a chef.
            </p>
            <p className="kozo-chef__body">
              With many years of experience in different kitchens paired with an
              extensive immersion in his Asian roots, Sakorn the executive chef
              of Kōzo, is now focused on a &quot;farm to table&quot; concept. All
              while honoring each ingredient and its seasons. To create a unique
              experience for his guests.
            </p>
          </div>
        </div>
      </section> */}

      <EventsSection />

      <section style={{ background: "#F2E4B1", overflow: "hidden" }} aria-labelledby="kozo-look-heading">
        <div className="mx-auto max-w-[1120px] px-6 py-14">

          {/* Header row */}
          <div className="flex items-center justify-between mb-8">
            <h2
              id="kozo-look-heading"
              className="font-normal leading-[1.2]"
              style={{
                fontSize: "clamp(28px, 3.2vw, 44px)",
                color: "#1b232b",
                fontFamily: "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
              }}
            >
              Take a look
            </h2>
            <a
              href="https://www.instagram.com/kozokigali/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[12px] tracking-[0.12em] uppercase rounded-[2px] px-5 py-2 shrink-0"
              style={{ background: "#A0D8B3", color: "#1b232b", textDecoration: "none" }}
            >
              View More
            </a>
          </div>

          {/* Single unified grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* Row 1 */}
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", background: "#000" }}>
              <Image src="/food-8.webp" alt="Kōzo food" fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4", background: "#000" }}>
              <Image src="/music-and-friends-3.JPG" alt="Music & Friends" fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden col-span-2 md:col-span-1 md:row-span-2 flex flex-col gap-3" style={{ background: "transparent" }}>
              <div className="relative overflow-hidden flex-1" style={{ background: "#000", minHeight: "120px" }}>
                <Image src="/TKX07690.webp" alt="Kōzo experience" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden flex-1" style={{ background: "#000", minHeight: "120px" }}>
                <Image src="/coffe-social-2.JPG" alt="Coffee Social" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden flex-1" style={{ background: "#000", minHeight: "120px" }}>
                <Image src="/music-and-friends-1.JPG" alt="Music & Friends" fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover" />
              </div>
            </div>
            {/* Row 2 */}
            <div className="relative overflow-hidden col-span-2" style={{ aspectRatio: "16/9", background: "#000" }}>
              <Image src="/giants-of-africa-afterparty-2.JPG" alt="Giants of Africa Afterparty" fill sizes="(max-width:768px) 100vw, 66vw" className="object-cover object-top" />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
