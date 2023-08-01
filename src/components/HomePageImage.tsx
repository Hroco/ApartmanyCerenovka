import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import img1Path from "../../public/mainPhoto1.jpg";
import img2Path from "../../public/mainPhoto2.jpg";
import img3Path from "../../public/mainPhoto3.jpg";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import { useRouter } from "next/router";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePageImage = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <div className="mainImg">
        <h1>{t.HomePageImageHeading}</h1>
        <Slider {...settings}>
          <Image
            src={img1Path}
            alt={t.HomePageTitleImg1Alt}
            placeholder="blur"
          />
          <Image
            src={img2Path}
            alt={t.HomePageTitleImg2Alt}
            placeholder="blur"
          />
          <Image
            src={img3Path}
            alt={t.HomePageTitleImg3Alt}
            placeholder="blur"
          />
        </Slider>
      </div>
    </>
  );
};

export default HomePageImage;
