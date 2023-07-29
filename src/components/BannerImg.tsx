/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import BannerImgPath from "../assets/bannerNature.png";
import Image from "next/image";

interface BannerImgProps {
  text: string;
}

export default function BannerImg({ text }: BannerImgProps) {
  return (
    <>
      <div className="banner-main">
        <div className="text-container">{text}</div>
        <Image src={BannerImgPath} alt="" loading="lazy" />
      </div>
    </>
  );
}
