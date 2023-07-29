import React, { useEffect, useState } from "react";
import Link from "next/link";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`top-navbar${isSticky ? " sticky" : ""}`}>
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
  );
}
