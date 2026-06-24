"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const displayFont =
  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json();
      setError(data.error ?? "Something went wrong. Please try again.");
      return;
    }

    setSuccess(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  }

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

            {success ? (
              <div
                className="rounded-[4px] px-6 py-8"
                style={{ background: "rgba(242,228,177,0.08)", border: "1px solid rgba(242,228,177,0.25)" }}
              >
                <p
                  className="text-[22px] font-normal mb-3"
                  style={{ color: "#F2E4B1", fontFamily: displayFont }}
                >
                  Message received!
                </p>
                <p className="text-[14px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Thank you for reaching out. Our team will get back to you within{" "}
                  <span style={{ color: "#F2E4B1" }}>5 working hours</span>.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-[11px] tracking-[0.16em] uppercase"
                  style={{ color: "rgba(255,255,255,0.45)", background: "none", border: "none", cursor: "pointer" }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="contact-input"
                  type="tel"
                  name="phone"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                />
                <textarea
                  className="contact-input contact-textarea"
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
                {error && (
                  <p className="text-[12px] px-3 py-2 rounded-[3px]" style={{ color: "#f87171", background: "rgba(248,113,113,0.08)" }}>
                    {error}
                  </p>
                )}
                <button className="contact-submit" type="submit" disabled={loading}>
                  {loading ? "Sending…" : "Submit"}
                </button>
              </form>
            )}
          </div>

          {/* Right — info */}
          <div className="contact-hero__right">
            <p className="contact-quote" style={{ fontFamily: displayFont }}>
              Experience it yourself, it&apos;s worth every sip, and every bite.
            </p>

            <div className="contact-info">
              <div className="contact-info__block">
                <p className="contact-info__label">Contact</p>
                <p className="contact-info__value">0798 979 779</p>
              </div>
              <div className="contact-info__block">
                <p className="contact-info__label">Based in</p>
                <p className="contact-info__value">17 KN 14 Ave, Kigali</p>
              </div>
              <div className="contact-info__block">
                <p className="contact-info__label">Media</p>
                <div className="contact-socials">
                  <a href="#" aria-label="Facebook" className="contact-social-link">Facebook</a>
                  <a href="https://www.instagram.com/kozokigali/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-social-link">Instagram</a>
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
