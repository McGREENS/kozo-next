"use client";

import Image from "next/image";

const displayFont =
  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

const events = [
  {
    name: "Coffee Social",
    description:
      "An intimate morning gathering where great coffee meets great conversation. The perfect setting for networking, creative minds, and community.",
    images: ["/coffe-social-1.JPG", "/coffe-social-2.JPG"],
  },
  {
    name: "Music & Friends",
    description:
      "Live music, curated sounds, and the people you love — all under one roof. An evening that moves you in every sense.",
    images: ["/music-and-friends-1.JPG", "/music-and-friends-2.JPG"],
  },
  {
    name: "Giants of Africa Afterparty",
    description:
      "Kōzo hosted the official afterparty for the Giants of Africa Festival — a night of celebration, culture, and unforgettable energy.",
    images: ["/giants-of-africa-afterparty-1.JPG", "/giants-of-africa-afterparty-2.JPG"],
  },
  {
    name: "Christmas at Kōzo",
    description:
      "The festive season, elevated. Private Christmas dinners and celebrations in a setting that turns every gathering into a memory.",
    images: ["/christmass-1.JPG", "/christmass-2.JPG"],
  },
];

export default function EventsSection() {
  return (
    <section style={{ background: "#05060c" }} aria-labelledby="kozo-events-heading">
      <div className="mx-auto max-w-[1120px] px-8 py-20">

        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[12px] tracking-[0.22em] uppercase mb-4"
            style={{ color: "#b89a5a" }}
          >
            Private Events &amp; Venue Hire
          </p>
          <h2
            id="kozo-events-heading"
            className="text-[clamp(34px,4vw,58px)] font-normal leading-[1.08] tracking-wide text-white mb-4"
            style={{ fontFamily: displayFont }}
          >
            Kigali&apos;s Premier Event Venue
          </h2>
          <p
            className="text-[14px] leading-[1.7] tracking-wide mx-auto max-w-[480px]"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            From intimate gatherings to large-scale celebrations — Kōzo sets the stage.
          </p>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {events.map((event) => (
            <div key={event.name} className="flex flex-col gap-5">
              {/* Dual image layout */}
              <div className="grid grid-cols-2 gap-2 h-[260px]">
                <div className="relative overflow-hidden" style={{ background: "#111" }}>
                  <Image
                    src={event.images[0]}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden" style={{ background: "#111" }}>
                  <Image
                    src={event.images[1]}
                    alt={event.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 150px"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* Text */}
              <div>
                <h3
                  className="text-[clamp(20px,1.8vw,26px)] font-normal leading-[1.15] mb-2"
                  style={{ color: "#F2E4B1", fontFamily: displayFont }}
                >
                  {event.name}
                </h3>
                <p
                  className="text-[13px] leading-[1.8] tracking-wide"
                  style={{ color: "rgba(255,255,255,0.62)" }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://wa.me/250798979779"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-[12px] tracking-[0.18em] uppercase rounded-[3px] font-semibold transition-colors"
            style={{ background: "#F2E4B1", color: "#1b232b" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#F0C2B2")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#F2E4B1")}
          >
            Enquire About Your Event
          </a>
        </div>
      </div>
    </section>
  );
}
