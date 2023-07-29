import React from "react";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";

export default function ContactFooter() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  return (
    <>
      <div className="contact-panel">
        <div className="contact-panel-inside container">
          <div className="contact-panel-left">
            <h2>{t.ContactFooterHeading}</h2>
            <p className="p-subsite">
              <a href="tel:+421907371032">{t.ContactFooterNumber}</a>
            </p>
            <p className="p-subsite">
              <a
                href="mailto:vanillia706@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                {t.ContactFooterEmail}
              </a>
            </p>
            <p className="p-subsite">
              <a href="https://www.facebook.com/profile.php?id=100089919548472">
                {t.ContactFooterFacebook}
              </a>
            </p>
            <p className="p-subsite">
              <a href="https://www.instagram.com/apartmany_cerenovka/">
                {t.ContactFooterInstagram}
              </a>
            </p>
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
      </div>
    </>
  );
}
