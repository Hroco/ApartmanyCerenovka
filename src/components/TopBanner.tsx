/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import InstagramSVG from "../assets/icons/instagram.svg";
import FacebookSVG from "../assets/icons/facebook.svg";
import EmailSVG from "../assets/icons/email.svg";
import SkSVG from "../assets/icons/sk.svg";
import EnSVG from "../assets/icons/en.svg";
import PlSVG from "../assets/icons/pl.svg";
import HamburgerSVG from "../assets/icons/hamburger.svg";
import Link from "next/link";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";

export default function TopBanner() {
  const [showSmallMenu, setShowSmallMenu] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;

  const changeLanguage = (lng: string) => {
    void router.push(router.pathname, router.asPath, { locale: lng });
  };

  useEffect(() => {
    console.log("router.pathname", router.pathname);
    window.scrollTo(0, 0);
    setShowSmallMenu(false);
  }, [router.pathname]);

  return (
    <>
      <div className="top-banner">
        <div className="small-navbar">
          <button onClick={() => setShowSmallMenu(true)}>
            <Image
              className="svg-small"
              priority
              src={HamburgerSVG}
              alt={t.TopBannerAltBurgerIcon}
            />
          </button>

          {showSmallMenu ? (
            <>
              <button
                className="small-navbar-list-button"
                onClick={() => setShowSmallMenu(false)}
              >
                <Image
                  className="svg-small"
                  priority
                  src={HamburgerSVG}
                  alt={t.TopBannerAltBurgerIcon}
                />
              </button>
              <nav className="small-navbar-list">
                <ul>
                  <li>
                    <Link href="/">{t.MenuItem_1}</Link>
                  </li>
                  <li>
                    <Link href="/about">{t.MenuItem_2}</Link>
                  </li>
                  <li>
                    <Link href="/accomodation">{t.MenuItem_3}</Link>
                  </li>
                  <li>
                    <Link href="/activity">{t.MenuItem_4}</Link>
                  </li>
                  <li>
                    <Link href="/gallery">{t.MenuItem_5}</Link>
                  </li>
                  <li>
                    <Link href="/contact">{t.MenuItem_6}</Link>
                  </li>
                </ul>
              </nav>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="top-banner-inside container">
          <div className="top-banner-left">
            <p>{t.HeaderAdress}</p>
          </div>
          <div className="top-banner-right">
            <a
              href="mailto:vanillia706@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="svg-small"
                priority
                src={EmailSVG}
                alt={t.TopBannerAltEmailIcon}
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100089919548472"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="svg-small"
                priority
                src={FacebookSVG}
                alt={t.TopBannerAltFacebookIcon}
              />
            </a>
            <a
              href="https://www.instagram.com/apartmany_cerenovka/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="svg-small"
                priority
                src={InstagramSVG}
                alt={t.TopBannerAltInstagramIcon}
              />
            </a>
            <button onClick={() => changeLanguage("sk")}>
              <Image
                className="svg-small"
                priority
                src={SkSVG}
                alt={t.TopBannerAltSlovakIcon}
              />
            </button>
            <button onClick={() => changeLanguage("en")}>
              <Image
                className="svg-small"
                priority
                src={EnSVG}
                alt={t.TopBannerAltEnglishIcon}
              />
            </button>
            <button onClick={() => changeLanguage("pl")}>
              <Image
                className="svg-small"
                priority
                src={PlSVG}
                alt={t.TopBannerAltPolandIcon}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
