/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import BannerImg from "../components/BannerImg";
import Image from "next/image";
import LogoPath from "../assets/logo.png";
import Head from "next/head";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";

export default function AboutPage() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;

  return (
    <>
      <Head>
        <title>{t.AboutUsTitle}</title>
        <meta name="description" content={t.AboutUsMetaDescription}></meta>
      </Head>
      <div className="main-panel">
        <BannerImg text={t.AboutPageBanner} />
        <div className="main-panel-inside container">
          <div className="logo-about">
            <Image
              src={LogoPath}
              alt={t.WebsiteLogoAlt}
              width={300}
              height={300}
              loading="lazy"
            />
          </div>
          <h1 className="h-subsite">{t.AboutPageHeading}</h1>
          <br />
          <section className="main-panel-down">
            <h3 className="p-subsite">{t.AboutPageOurMissionHeading}</h3>
            <p className="p-subsite">{t.AboutPageOurMissionText}</p>
          </section>
          <p>&nbsp;</p>
          <section className="main-panel-down">
            <h3 className="p-subsite">{t.AboutPageAboutUsHeading}</h3>
            <p className="p-subsite">{t.AboutPageAboutUsText}</p>
          </section>
          <p>&nbsp;</p>
          <section className="main-panel-down">
            <h3 className="p-subsite">{t.AboutPageourApartmentsHeading}</h3>
            <p className="p-subsite">{t.AboutPageourApartmentsText}</p>
          </section>
          <p>&nbsp;</p>
          <section className="main-panel-down">
            <h3 className="p-subsite">{t.AboutPageOurVisionHeading}</h3>
            <p className="p-subsite">{t.AboutPageOurVisionText1}</p>
            <p className="p-subsite">{t.AboutPageOurVisionText2}</p>
          </section>
        </div>
      </div>
    </>
  );
}
