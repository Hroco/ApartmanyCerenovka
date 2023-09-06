/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import React, { useEffect, useState } from "react";
import ImageGallery from "../components/ImageGallery";
import BannerImg from "../components/BannerImg";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";
import Head from "next/head";
import Script from "next/script";

export default function Gallery() {
  const [imageFilenames1, setImageFilenames1] = useState<string[]>([]);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;

  useEffect(() => {
    const fetchImages1 = async () => {
      try {
        const response = await fetch(
          `/api/loadImages?folderPath=${"public/gallery"}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image filenames");
        }
        const data = await response.json();
        // console.log("data", data);
        setImageFilenames1(
          data.map((imageName: string) => "/gallery/" + imageName)
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages1();
  }, []);

  return (
    <>
      <Head>
        <title>{t.GalleryTitle}</title>
        <meta name="description" content={t.GalleryMetaDescription}></meta>
        <link rel="canonical" href="https://cerenovka.sk/gallery" />
      </Head>
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-FSCHP9Q3SL" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-FSCHP9Q3SL');
        `}
        </Script>
      </div>
      <div className="main-panel">
        <BannerImg text={t.GalleryBanner} />
        <div className="main-panel-inside container">
          <ImageGallery imageList={imageFilenames1} />
        </div>
      </div>
    </>
  );
}
