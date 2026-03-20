import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSlideshow from "./components/HeroSlideshow";
import MenuSection from "./components/MenuSection";

export default function Home() {
  return (
    <div>
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
                  href="#"
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

      <section className="kozo-chef" aria-labelledby="kozo-chef-heading">
        <div className="mx-auto flex max-w-[1120px] items-center gap-14 px-8 py-20">
          <div className="relative shrink-0">
            <div className="kozo-chef__photo-circle">
              <Image
                src="/sakon.JPG"
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
                src="/experience-1.JPG"
                alt="Kōzo lifestyle 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="kozo-look__image">
              <Image
                src="/experience-2.JPG"
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
