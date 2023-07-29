/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";

interface ApartmentItemProps {
  heading: string;
  description: string;
  imgPath: any;
  beds: number;
  extraBeds: number;
  wifi: boolean;
  parking: boolean;
  apartmentPath: string;
  apartmentColor: string;
}

export default function ApartmentItem({
  heading,
  description,
  imgPath,
  beds,
  extraBeds,
  wifi,
  parking,
  apartmentPath,
  apartmentColor,
}: ApartmentItemProps) {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;
  function getColorCSSClass(color: string): string[] {
    let borderClassName: string;
    let buttonClassName: string;

    switch (color) {
      case "red":
        borderClassName = "red-box";
        buttonClassName = "red-button";
        break;
      case "green":
        borderClassName = "green-box";
        buttonClassName = "green-button";
        break;
      case "blue":
        borderClassName = "blue-box";
        buttonClassName = "blue-button";
        break;
      case "yellow":
        borderClassName = "yellow-box";
        buttonClassName = "yellow-button";
        break;
      default:
        borderClassName = ""; // Black color for unknown colors
        buttonClassName = "";
        break;
    }

    return [borderClassName, buttonClassName];
  }

  const [colorClass, buttonClass] = getColorCSSClass(apartmentColor);

  return (
    <>
      <div className={`apartman-box ${colorClass}`}>
        <div className="apartman-main">
          <div className="apartman-top">
            <h2>{heading}</h2>
            <Image
              src={imgPath}
              alt=""
              width={200}
              height={200}
              loading="lazy"
            />
            <h3>{description}</h3>
            <br />
          </div>
          <div className="apartman-bottom">
            <div>
              <p>
                <b>{t.ApartmentItemBeds}:</b>
              </p>
              <p>{beds}</p>
            </div>
            <div>
              <p>
                <b>{t.ApartmentItemExtraBeds}:</b>
              </p>
              <p>{extraBeds}</p>
            </div>
            <div>
              <p>
                <b>{t.ApartmentItemWifi}:</b>
              </p>
              <p>{wifi ? t.ApartmentItemYes : t.ApartmentItemNo}</p>
            </div>
            <div>
              <p>
                <b>{t.ApartmentItemParking}:</b>
              </p>
              <p>{parking ? t.ApartmentItemYes : t.ApartmentItemNo}</p>
            </div>

            <Link
              className={`apartman-button ${buttonClass}`}
              href={apartmentPath}
            >
              {t.ApartmentItemMoreInformations}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
