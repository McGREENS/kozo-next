import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlideshow from "./components/HeroSlideshow";
import MenuSection from "./components/MenuSection";

export const metadata: Metadata = {
  title: "Kōzo | Afro-Asian Restaurant Kigali",
  description:
    "Welcome to Kōzo Kigali. Where vibrant African flavours meet Pan-Asian precision. Farm-to-table dining, sushi, and shared plates at 17 KN 14 Ave, Kigali.",
  alternates: { canonical: "https://www.kozokg.com" },
  openGraph: {
    url: "https://www.kozokg.com",
    title: "Kōzo | Afro-Asian Restaurant Kigali",
    description: "Where vibrant African flavours meet Pan-Asian precision. Farm-to-table dining in Kigali.",
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
            servesCuisine: ["African", "Asian", "Pan-Asian", "Sushi"],
            priceRange: "$$$",
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
                <a
                  href="https://l.instagram.com/?u=https%3A%2F%2F5631821.qrfy.com%2Fp%2FMLHDtw3hW7%3Futm_source%3Dqrcode%26utm_medium%3Dpdf%26utm_campaign%3D37007427%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnSYbBMAiqoGPp-6dmsOuVknLkJyIz9XZ75r3A7plfhXg_iNUiT4GXbk3D3VQ_aem_TrMhPvQF6T8LPIq6BEIEHg&e=AT4DvwrZx_9UfwQZlBa7X6wA1C34KKxaFUHiwVTdXdoBeT9ll5gE2AnbHx5EMofVAk_xPuo37Lf94-Zqrvczxpm8PnNdeG6qZucomNsrIQ"
                  className="rounded-[3px] bg-[#F2E4B1] px-5 py-2 text-[12px] font-semibold tracking-wide text-black/80 shadow-[0_6px_18px_rgba(0,0,0,0.28)] transition hover:bg-[#F0C2B2]"
                >
                  Explore Menu
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section className="kozo-intro" aria-label="KŌZO intro">
        <Image
          src="/about.png"
          alt=""
          fill
          className="object-cover object-center"
          style={{ zIndex: 0 }}
        />
        <div className="kozo-intro__circle" aria-hidden="true">
          <Image
            src="/kozo-circl.png"
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
                href="#"
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
            <p>Under the guidance of Group Executive Chef Sakorn Somboon, our dishes are far more than just food—they are the result of countless hours of innovation, fusing two cultures into every bite. Inspired by the ancient ties that once bound Africa and Asia along historic trade routes like the Silk Road, our menu reflects a modern interpretation of a timeless culinary dialogue. Just as the Silk Road connected continents, exchanging spices, techniques, and traditions, our creations bridge diverse flavours and culinary wisdom to inspire a new era of dining.</p>
            <p>At Kōzo, every shared plate, well-curated music, and warm smile invites you to explore a journey of taste and innovation. We are excited to bring our unique experience and vibrant flavours to a city near you.</p>
            <p className="italic text-black/60">Where Cultures Converge and Flavours Inspire.</p>
          </blockquote>
          <Image
            src="/founder-signature.png"
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

      <section className="kozo-chef" aria-labelledby="kozo-chef-heading">
        <div className="mx-auto flex max-w-[1120px] items-center gap-14 px-8 py-20">
          <div className="relative shrink-0">
            <div className="kozo-chef__photo-circle">
              <Image
                src="/sakon2.JPG"
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
      </section>

      <section className="kozo-look" aria-labelledby="kozo-look-heading">
        <div className="mx-auto flex max-w-[1120px] items-center gap-14 px-8 py-16">
          <div className="max-w-[320px]">
            <h2
              id="kozo-look-heading"
              className="kozo-look__title"
              style={{
                fontFamily:
                  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
              }}
            >
              Take a look
            </h2>
            <a
              href="https://www.instagram.com/kozokigali/"
              target="_blank"
              rel="noopener noreferrer"
              className="kozo-look__button"
            >
              View More
            </a>
          </div>

          <div className="kozo-look__grid">
            <div className="kozo-look__image">
              <Image
                src="/food-8.JPG"
                alt="Kōzo lifestyle 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="kozo-look__image">
              <Image
                src="/TKX07690.jpg"
                alt="Kōzo lifestyle 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="kozo-look__image">
              <Image
                src="/experience-3.JPG"
                alt="Kōzo lifestyle 3"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
