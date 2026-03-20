import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const displayFont =
  "var(--font-display), ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif";

const pillars = [
  {
    title: "Being Sustainable",
    body: "We support sustainable farming through our menu.",
  },
  {
    title: "Being Ethical",
    body: "We work closely with suppliers to ensure farming methods meet our moral principles.",
  },
  {
    title: "Being Local",
    body: "We source locally wherever possible.",
  },
  {
    title: "Being Organic",
    body: "Traceable farm to fork produce.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      {/* Hero */}
      <section className="about-hero">
        <div className="mx-auto max-w-[1120px] px-8 pt-48 pb-28 text-center text-white">
          <p className="about-eyebrow">About Us</p>
          <h1 className="about-hero__title" style={{ fontFamily: displayFont }}>
            We are committed to innovation,
            <br />
            sustainability and supporting
            <br />
            local businesses
          </h1>
          <p className="about-hero__sub">
            Which is why we are so passionate about our food and drinks.
          </p>
        </div>
      </section>

      {/* Moral Pillars */}
      <section className="about-pillars">
        <div className="mx-auto max-w-[1120px] px-8 py-24">
          <p className="about-eyebrow about-eyebrow--dark">Our moral guidances are:</p>
          <div className="about-pillars__grid">
            {pillars.map((p) => (
              <div key={p.title} className="about-pillar">
                <h3 className="about-pillar__title" style={{ fontFamily: displayFont }}>
                  {p.title}
                </h3>
                <p className="about-pillar__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kōzo Experience */}
      <section className="about-experience-section">
        <div className="mx-auto max-w-[1120px] px-8 py-28 text-center text-white">
          <p className="about-eyebrow">Kōzo Experience</p>
          <h2 className="about-section__title" style={{ fontFamily: displayFont }}>
            We are passionate about
            <br />
            flavour and experience
          </h2>
        </div>
      </section>

      {/* Careers */}
      <section className="about-careers">
        <div className="mx-auto flex max-w-[1120px] items-center gap-14 px-8 py-20">
          <div className="max-w-[560px]">
            <p className="about-eyebrow about-eyebrow--dark">Our Careers</p>
            <h2 className="about-careers__title" style={{ fontFamily: displayFont }}>
              Our Chef
            </h2>
            <p className="about-careers__sub" style={{ fontFamily: displayFont }}>
              A Journey of Flavours
            </p>
            <p className="about-careers__body">
              There is nothing we love more than experimenting with traditional
              African flavours and using Japanese and Thai cooking techniques to
              surprise and excite even the most seasoned foodie. Our menus change
              regularly but you will always find your favourites, plates to share,
              fish and meat cooked over our charcoal grill and delicious Sushi.
            </p>
            <a href="#" className="about-cta">
              Join Our Team
            </a>
          </div>

          <div className="relative shrink-0 ml-auto">
            <div className="kozo-chef__photo-circle" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
