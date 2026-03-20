"use client";

import { useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const displayFont =
  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

const openPositions = [
  {
    title: "Head Sushi Chef",
    type: "Full-time",
    location: "Kigali, Rwanda",
    description:
      "We are looking for an experienced Sushi Chef to lead our Japanese kitchen. You will craft exceptional sushi and omakase experiences for our guests.",
  },
  {
    title: "Floor Manager",
    type: "Full-time",
    location: "Kigali, Rwanda",
    description:
      "Lead our front-of-house team to deliver the elevated Kōzo dining experience. You will oversee service standards, staff training and guest satisfaction.",
  },
];

export default function CareersPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("No file chosen");

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="careers-hero">
        <div className="careers-hero__overlay" />
        <div className="careers-hero__inner">
          <div className="careers-hero__left">
            <p className="about-eyebrow">Join our Team</p>
            <h1 className="contact-hero__title" style={{ fontFamily: displayFont }}>
              We are always on the lookout for likeminded
              <br />
              professionals to join our team.
            </h1>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input className="contact-input" type="text" placeholder="Name" required />
              <input className="contact-input" type="email" placeholder="Email" required />
              <textarea className="contact-input contact-textarea" placeholder="Message" required />

              <p className="careers-cv-note">
                If you are passionate about hospitality, ambitious about progression
                and want to be a part of a winning team, please submit your CV.
              </p>

              <div className="careers-file-row">
                <button
                  type="button"
                  className="careers-file-btn"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Attach PDF
                </button>
                <span className="careers-file-name">{fileName}</span>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  className="sr-only"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name ?? "No file chosen")
                  }
                />
              </div>

              <button className="contact-submit" type="submit">
                Submit
              </button>
            </form>
          </div>

          <div className="careers-hero__right">
            <p className="contact-quote" style={{ fontFamily: displayFont }}>
              Be part of something extraordinary.
            </p>
            <div className="contact-info">
              <div className="contact-info__block">
                <p className="contact-info__label">Location</p>
                <p className="contact-info__value">17 KN 14 Ave, Kigali</p>
              </div>
              <div className="contact-info__block">
                <p className="contact-info__label">Contact</p>
                <p className="contact-info__value">0798 979 779</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="careers-positions">
        <div className="mx-auto max-w-[1120px] px-8 py-24">
          <p className="about-eyebrow about-eyebrow--dark">Open Positions</p>
          <h2 className="careers-positions__title" style={{ fontFamily: displayFont }}>
            Current Opportunities
          </h2>
          <div className="careers-positions__grid">
            {openPositions.map((pos) => (
              <div key={pos.title} className="careers-position">
                <div className="careers-position__top">
                  <h3 className="careers-position__title" style={{ fontFamily: displayFont }}>
                    {pos.title}
                  </h3>
                  <div className="careers-position__meta">
                    <span className="careers-position__tag">{pos.type}</span>
                    <span className="careers-position__location">{pos.location}</span>
                  </div>
                </div>
                <p className="careers-position__desc">{pos.description}</p>
                <a href="#" className="careers-position__apply">
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
