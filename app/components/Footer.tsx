import Image from "next/image";

export default function Footer() {
  return (
    <footer className="kozo-footer" aria-label="Site footer">
      <div className="mx-auto flex max-w-[1120px] items-start justify-between gap-12 px-8 py-16">
        <div className="kozo-footer__column">
          <h3 className="kozo-footer__heading">Contact Us</h3>
          <p className="kozo-footer__text">
            126 Osu Badu Crescent,
            <br />
            Accra, Ghana
          </p>
          <p className="kozo-footer__text">+233 591159312</p>
        </div>

        <div className="kozo-footer__center">
          <div className="kozo-footer__logo-wrap" aria-label="KŌZO logo">
            <Image
              src="/kozo-logo-mark.png"
              alt="Kōzo logo mark"
              width={130}
              height={84}
              className="kozo-footer__logo-image"
            />
          </div>
          <div className="kozo-footer__socials" aria-label="Social media">
            <a href="#" aria-label="Facebook" className="kozo-footer__icon">f</a>
            <a href="#" aria-label="Instagram" className="kozo-footer__icon">◉</a>
          </div>
          <p className="kozo-footer__copyright">
            2022 &quot;Kōzo Hospitality Ltd&quot;. All Rights Reserved.
          </p>
        </div>

        <div className="kozo-footer__column kozo-footer__column--right">
          <h3 className="kozo-footer__heading">Working Hours</h3>
          <p className="kozo-footer__text">
            <span className="kozo-footer__label">Lunch Hours</span>
            <br />
            Monday &mdash; Friday
            <br />
            12:00 pm &mdash; 3:00 pm
          </p>
          <p className="kozo-footer__text">
            <span className="kozo-footer__label">Dinner Hours</span>
            <br />
            Monday &mdash; Sunday:
            <br />
            6:00 pm &mdash; 12:00 am
          </p>
        </div>
      </div>
    </footer>
  );
}
