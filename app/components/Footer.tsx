import Image from "next/image";
import { FaTripadvisor, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="kozo-footer" aria-label="Site footer">
      <Image
        src="/about.png"
        alt=""
        fill
        className="object-cover object-center"
        style={{ zIndex: 0 }}
      />
      <div className="relative z-10 mx-auto flex w-full max-w-[1120px] items-start justify-between gap-12 px-8 py-16">
        <div className="kozo-footer__column">
          <h3 className="kozo-footer__heading">Contact Us</h3>
          <p className="kozo-footer__text">
            17 KN 14 Ave, Kigali
          </p>
          <p className="kozo-footer__text">0798 979 779</p>
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
            <a href="https://www.tripadvisor.com/Restaurant_Review-g293829-d33392702-Reviews-Kozo_Kigali-Kigali_Kigali_Province.html" target="_blank" rel="noopener noreferrer" aria-label="Tripadvisor" className="kozo-footer__icon">
              <FaTripadvisor size={20} />
            </a>
            <a href="https://www.instagram.com/kozokigali/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="kozo-footer__icon">
              <FaInstagram size={20} />
            </a>
          </div>
          <p className="kozo-footer__copyright">
            2022 &quot;Kōzo Hospitality Ltd&quot;. All Rights Reserved.
          </p>
        </div>

        <div className="kozo-footer__column kozo-footer__column--right">
          <h3 className="kozo-footer__heading">Working Hours</h3>
          <p className="kozo-footer__text">
            <span className="kozo-footer__label">Afro-Asian Dining Experience</span>
            <br />
            Lunch: Tues&mdash;Sat, 12pm to 3pm
            <br />
            Dinner: Tues&mdash;Sat, 6pm to 12am
            <br />
            Sunday Brunch: 2pm to 10pm
          </p>
        </div>
      </div>
    </footer>
  );
}
