/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import BannerImgPath from "../assets/bannerNature.png";
import Image from "next/image";
import { useRouter } from "next/router";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";

interface BannerImgProps {
  text: string;
}

export default function BannerImg({ text }: BannerImgProps) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  return (
    <>
      <div className="banner-main">
        <div className="text-container">
          <h1>{text}</h1>
        </div>
        <Image
          src={BannerImgPath}
          alt={t.BannerImgAlt}
          loading="lazy"
          placeholder="blur"
        />
      </div>
    </>
  );
}
