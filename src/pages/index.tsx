/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import HomePageImage from "~/components/HomePageImage";
import Image from "next/image";
import img1Path from "../../public/activityGallery/gallery3/cerenova-skala-©simona-paverova-2___large_1024_768-min.jpeg";
import img2Path from "../assets/homepage/cerenova.jpg";
import img3Path from "../assets/homepage/komplex.jpg";
import img4Path from "../assets/homepage/pec.jpg";
import imgBlue from "../assets/apartmanIcons/blue.jpg";
import imgRed from "../assets/apartmanIcons/red.jpg";
import imgGreen from "../assets/apartmanIcons/green.jpg";
import imgYellow from "../assets/apartmanIcons/yellow.jpg";
import imgGreenBig from "../assets/apartmanIcons/greenBig.jpg";
import NextSVG from "../assets/icons/next.svg";
import PrevSVG from "../assets/icons/prev.svg";
import ApartmanItem from "../components/ApartmanItem";
import Slider from "react-slick";
import { useRef } from "react";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";

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

export default function Home() {
  const sliderRef = useRef<Slider | null>(null);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  return (
    <>
      <div className="main-panel">
        <HomePageImage />
        <div className="main-panel-inside container">
          <h1>{t.HomePageHeading}</h1>
          <h2>{t.HomePageSubHeading}</h2>
          <p>&nbsp;</p>
          <section className="main-panel-right">
            <Image
              src={img1Path}
              alt={t.HomePageImg1Alt}
              width={300}
              height={300}
              loading="lazy"
            />
            <div>
              <p className="p-subsite">{t.HomePageLocationHeading}</p>
              <p className="p-subsite">{t.HomePageLocationText}</p>
            </div>
          </section>

          <p>&nbsp;</p>

          <section className="main-panel-left">
            <div>
              <p className="p-subsite">{t.HomePageOccupancyHeading}</p>
              <p className="p-subsite">{t.HomePageOccupancyText}</p>
            </div>
            <Image
              src={img3Path}
              alt={t.HomePageImg2Alt}
              width={400}
              height={300}
              loading="lazy"
            />
          </section>

          <p>&nbsp;</p>

          <section className="main-panel-right">
            <Image
              src={img4Path}
              alt={t.HomePageImg3Alt}
              width={300}
              height={300}
              loading="lazy"
            />
            <div>
              <p className="p-subsite">{t.HomePageOrganisationHeading}</p>
              <p className="p-subsite">{t.HomePageOrganisationText}</p>
            </div>
          </section>

          <p>&nbsp;</p>

          <section className="main-panel-left">
            <div>
              <p className="p-subsite">{t.HomePageBottomText}</p>
            </div>
            <Image
              src={img2Path}
              alt={t.HomePageImg4Alt}
              width={300}
              height={300}
              loading="lazy"
            />
          </section>
          <p>&nbsp;</p>
          <section className="slider-container">
            <Slider ref={sliderRef} {...settings}>
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
            </Slider>
            <p>&nbsp;</p>
            <h2>{t.HomePageBottomHeading}</h2>
            <p>&nbsp;</p>
          </section>
        </div>
      </div>
    </>
  );
}
