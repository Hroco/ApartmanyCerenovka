/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import PhoneSVG from "../assets/icons/phoneContact.svg";
import EmailSVG from "../assets/icons/emailContact.svg";
import FacebookSVG from "../assets/icons/facebookContact.svg";
import InstagramSVG from "../assets/icons/instagramContact.svg";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";
import Image from "next/image";

export default function ContactFooter() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;

  function handlePhoneClick() {
    window.open("tel:+421907371032");
  }

  function handleEmailClick() {
    window.open("mailto:vanillia706@gmail.com");
  }

  function handleFacebookClick() {
    window.open("https://www.facebook.com/profile.php?id=100089919548472");
  }

  function handleInstagramClick() {
    window.open("https://www.instagram.com/apartmany_cerenovka/");
  }

  return (
    <>
      <section className="contact-panel">
        <div className="contact-panel-inside container">
          <div className="contact-panel-left">
            <h2>{t.ContactFooterHeading}</h2>
            <div className="contact-link" onClick={handlePhoneClick}>
              <Image
                className="svg-small contact"
                priority
                src={PhoneSVG}
                alt={t.TopBannerAltBurgerIcon}
              />
              <p>{t.ContactFooterNumber}</p>
            </div>
            <div className="contact-link" onClick={handleEmailClick}>
              <Image
                className="svg-small contact"
                priority
                src={EmailSVG}
                alt={t.TopBannerAltBurgerIcon}
              />
              <p>{t.ContactFooterEmail}</p>
            </div>
            <div className="contact-link" onClick={handleFacebookClick}>
              <Image
                className="svg-small contact"
                priority
                src={FacebookSVG}
                alt={t.TopBannerAltBurgerIcon}
              />
              <p>{t.ContactFooterFacebook}</p>
            </div>
            <div className="contact-link" onClick={handleInstagramClick}>
              <Image
                className="svg-small contact"
                priority
                src={InstagramSVG}
                alt={t.TopBannerAltBurgerIcon}
              />
              <p>{t.ContactFooterInstagram}</p>
            </div>
          </div>
          <div className="contact-panel-right">
            <iframe
              // eslint-disable-next-line max-len
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1845.612387803521!2d19.48944155727905!3d49.141914283301375!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715a300656bfa97%3A0x3a31022e04d63ecb!2zQXBhcnRtw6FueSDEjGVyZcWIb3ZrYQ!5e0!3m2!1ssk!2ssk!4v1687294552597!5m2!1ssk!2ssk"
              allowFullScreen={false}
              loading="lazy"
              data-dashlane-frameid="446"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
