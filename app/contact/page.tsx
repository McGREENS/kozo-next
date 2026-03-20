"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const displayFont =
  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

export default function ContactPage() {
  return (
    <div>
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero__overlay" />

        <div className="contact-hero__inner">
          {/* Left — form */}
          <div className="contact-hero__left">
            <p className="about-eyebrow">Contact us</p>
            <h1 className="contact-hero__title" style={{ fontFamily: displayFont }}>
              Drop us a line anytime for questions,
              <br />
              suggestions or concerns. We&apos;ll respond
              <br />
              as soon as possible.
            </h1>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input className="contact-input" type="text" placeholder="Name" required />
              <input className="contact-input" type="email" placeholder="Email" required />
              <textarea className="contact-input contact-textarea" placeholder="Message" required />
              <button className="contact-submit" type="submit">
                Submit
              </button>
            </form>
          </div>

          {/* Right — info */}
          <div className="contact-hero__right">
            <p className="contact-quote" style={{ fontFamily: displayFont }}>
              Experience it yourself, it&apos;s worth every sip, and every bite.
            </p>

            <div className="contact-info">
              <div className="contact-info__block">
                <p className="contact-info__label">Contact</p>
                <p className="contact-info__value">+233 591159312</p>
              </div>
              <div className="contact-info__block">
                <p className="contact-info__label">Based in</p>
                <p className="contact-info__value">
                  126 Osu Badu Crescent,
                  <br />
                  Accra, Ghana
                </p>
              </div>
              <div className="contact-info__block">
                <p className="contact-info__label">Media</p>
                <div className="contact-socials">
                  <a href="#" aria-label="Facebook" className="contact-social-link">Facebook</a>
                  <a href="#" aria-label="Instagram" className="contact-social-link">Instagram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
