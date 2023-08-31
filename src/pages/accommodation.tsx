/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useRef, useEffect } from "react";
import BannerImg from "../components/BannerImg";
import ApartmanItem from "../components/ApartmanItem";
import Slider from "react-slick";
import NextSVG from "../assets/icons/next.svg";
import PrevSVG from "../assets/icons/prev.svg";
import imgBlue from "../assets/apartmanIcons/blue.jpg";
import imgRed from "../assets/apartmanIcons/red.jpg";
import imgGreen from "../assets/apartmanIcons/green.jpg";
import imgYellow from "../assets/apartmanIcons/yellow.jpg";
import imgGreenBig from "../assets/apartmanIcons/greenBig.jpg";
import LogoPath from "../assets/logo.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRouter } from "next/router";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import Head from "next/head";
import Script from "next/script";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  return (
    <div
      className={`${className} arrowStyleRight`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        className="svg-small"
        priority
        src={NextSVG}
        alt={t.SliderIconNextAlt}
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  return (
    <div
      className={`${className} arrowStyleLeft`}
      style={{ ...style }}
      onClick={onClick}
    >
      <Image
        className="svg-small"
        priority
        src={PrevSVG}
        alt={t.SliderIconPrevAlt}
      />
    </div>
  );
}

export default function Accommodation() {
  const sliderRef = useRef<Slider | null>(null);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;

  useEffect(() => {
    if (sliderRef.current) {
      const slideElements =
        sliderRef.current.innerSlider?.list?.querySelectorAll(".slick-slide");
      let maxHeight = 0;

      // Find the maximum height among the slide elements
      if (slideElements) {
        Array.from(slideElements).forEach((slideElement) => {
          const slideHeight = (slideElement as HTMLElement).offsetHeight;
          maxHeight = Math.max(maxHeight, slideHeight);
        });

        // Set the height of all slide elements to the maximum height
        Array.from(slideElements).forEach((slideElement) => {
          (slideElement as HTMLElement).style.height = `${maxHeight}px`;
          (
            slideElement.firstChild as HTMLElement
          ).style.height = `${maxHeight}px`;
        });
      }
    }
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  return (
    <>
      <Head>
        <title>{t.AccommodationTitle}</title>
        <meta
          name="description"
          content={t.AccommodationMetaDescription}
        ></meta>
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
        <BannerImg text={t.AccommodationBanner} />
        <div className="main-panel-inside container">
          <section className="main-panel-down">
            <p className="p-subsite">{t.AccommodationPageText1}</p>
          </section>
          <p>&nbsp;</p>
          <section className="apartment-container">
            <p>&nbsp;</p>
            <ApartmanItem
              heading={t.ApartmentBlueName}
              description={t.ApartmentBlueDescription}
              imgPath={imgBlue}
              beds={2}
              extraBeds={0}
              wifi={true}
              parking={true}
              apartmentPath="/apartman/blue"
              apartmentColor="blue"
              alt={t.ApartmentBlueAlt}
            />
            <ApartmanItem
              heading={t.ApartmentGreenName}
              description={t.ApartmentGreenDescription}
              imgPath={imgGreen}
              beds={4}
              extraBeds={2}
              wifi={true}
              parking={true}
              apartmentPath="/apartman/green"
              apartmentColor="green"
              alt={t.ApartmentGreenAlt}
            />
            <ApartmanItem
              heading={t.ApartmentRedName}
              description={t.ApartmentRedDescription}
              imgPath={imgRed}
              beds={3}
              extraBeds={0}
              wifi={true}
              parking={true}
              apartmentPath="/apartman/red"
              apartmentColor="red"
              alt={t.ApartmentRedAlt}
            />
            <ApartmanItem
              heading={t.ApartmentYellowName}
              description={t.ApartmentYellowDescription}
              imgPath={imgYellow}
              beds={7}
              extraBeds={2}
              wifi={true}
              parking={true}
              apartmentPath="/apartman/yellow"
              apartmentColor="yellow"
              alt={t.ApartmentYellowAlt}
            />
            <ApartmanItem
              heading={t.ApartmentGreenBigName}
              description={t.ApartmentGreenBigDescription}
              imgPath={imgGreenBig}
              beds={4}
              extraBeds={2}
              wifi={true}
              parking={true}
              apartmentPath="/apartman/greenBig"
              apartmentColor="green"
              alt={t.ApartmentGreenBigAlt}
            />
          </section>
          <p>&nbsp;</p>

          <section className="main-panel-down">
            <p className="p-subsite">{t.AccommodationPageText2}</p>
          </section>
          <p>&nbsp;</p>
          <section className="main-panel-down">
            <p className="p-subsite">{t.AccommodationPageText3}</p>
          </section>
          <p>&nbsp;</p>
        </div>
      </div>
    </>
  );
}
