import React from "react";
import Link from "next/link";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  return (
    <>
      <div className="bottom-banner">
        <div className="bottom-banner-inside container">
          <div className="bottom-banner-left">
            <nav className="bottom-navbar">
              <ul>
                <li>
                  <Link href="/">{t.MenuItem_1}</Link>
                </li>
                <li className="footer-separator">|</li>
                <li>
                  <Link href="/about">{t.MenuItem_2}</Link>
                </li>
                <li className="footer-separator">|</li>
                <li>
                  <Link href="/accomodation">{t.MenuItem_3}</Link>
                </li>
                <li className="footer-separator">|</li>
                <li>
                  <Link href="/activity">{t.MenuItem_4}</Link>
                </li>
                <li className="footer-separator">|</li>
                <li>
                  <Link href="/gallery">{t.MenuItem_5}</Link>
                </li>
                <li className="footer-separator">|</li>
                <li>
                  <Link href="/contact">{t.MenuItem_6}</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="bottom-banner-right">
            <p>{t.FooterCopyright}</p>
          </div>
        </div>
      </div>
    </>
  );
}
