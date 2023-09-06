/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from "react";
import BannerImg from "../../components/BannerImg";
import ImageGallery from "../../components/ImageGallery";
import Key from "../../assets/icons/key.svg";
import Pets from "../../assets/icons/pets.svg";
import Smoke from "../../assets/icons/smoke.svg";
import apartments from "../../assets/apartmentData.json";
import { useRouter } from "next/router";
import Image from "next/image";
import { usePathname } from "next/navigation";

import en from "../../locales/en";
import sk from "../../locales/sk";
import pl from "../../locales/pl";
import Head from "next/head";
import Script from "next/script";

interface ApartmentData {
  apartments: Record<
    string,
    {
      priceWinter: string;
      priceEaster: string;
      priceSummer: string;
      priceRest: string;
      priceNewYear: string;
      size: string;
    }
  >;
}

function getPath(color: string) {
  return `/apartmentsGallery/${color}Gallery/`;
}

export default function ApartmentSite() {
  const [imageFilenames1, setImageFilenames1] = useState<string[]>([]);
  const router = useRouter();
  const pathname = usePathname();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;

  const apartman = "green";

  const data = apartments as ApartmentData;
  const apartmentData = data.apartments[apartman as string];

  useEffect(() => {
    const fetchImages1 = async () => {
      try {
        const response = await fetch(
          `/api/loadImages?folderPath=${"public" + getPath(apartman as string)}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image filenames");
        }
        const data = await response.json();

        const dataArray = data.map(
          (imageName: string) => getPath(apartman as string) + imageName
        );

        setImageFilenames1(dataArray);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImages1();
  }, []);

  return (
    <>
      <Head>
        <title>{t.AccommodationTitle + " - " + t.BannerGreen}</title>
        <meta
          name="description"
          content={t.AccommodationMetaDescription}
        ></meta>
        <link rel="canonical" href={`https://cerenovka.sk${pathname}`} />
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
        <BannerImg text={`${t.BannerGreen}`} />
        <div className="main-panel-inside container">
          <div className="apartman-large-content">
            <div className="apartmentEquipment">
              <div>
                <h3>{t.ApartmentSiteEquipmentBedroomHeading}</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentBedroomItem1}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentBedroomItem2}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentBedroomItem3}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentBedroomItem4}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentBedroomItem5}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentBedroomItem6}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3>{t.ApartmentSiteEquipmentKitchenHeading}</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentKitchenItem1}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentKitchenItem2}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentKitchenItem3}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentKitchenItem4}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentKitchenItem5}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentKitchenItem6}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <h3>{t.ApartmentSiteEquipmentOtherHeading}</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentOtherItem1}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentOtherItem2}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentOtherItem3}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentOtherItem4}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentOtherItem5}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentOtherItem6}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ApartmentSiteEquipmentOtherItem7}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="apartmentInfo">
              <div className="apartmentInfoItem">
                <Image
                  className="svg-big"
                  priority
                  src={Key}
                  alt={t.ApartmentItemKeyIconAlt}
                />
                <div className="infoContent">
                  <p>{t.ApartmentSiteCheckInOut}</p>
                </div>
              </div>
              <div className="apartmentInfoItem">
                <Image
                  className="svg-big"
                  priority
                  src={Pets}
                  alt={t.ApartmentItemPetIconAlt}
                />
                <div className="infoContent">
                  <p>{t.ApartmentSitePets}</p>
                </div>
              </div>
              <div className="apartmentInfoItem">
                <Image
                  className="svg-big"
                  priority
                  src={Smoke}
                  alt={t.ApartmentItemSmokeIconAlt}
                />
                <div className="infoContent">
                  <p>{t.ApartmentSiteSmoke}</p>
                </div>
              </div>
            </div>
            <h2>{t.ApartmentSitePricingHeading}</h2>
            <table className="pricing">
              <tbody>
                <tr>
                  <th>{t.ApartmentSitePricingTableHeaderSeason}</th>
                  <th>{t.ApartmentSitePricingTableHeaderDateRange}</th>
                  <th>{t.ApartmentSitePricingTableHeaderPrice}</th>
                  <th>{t.ApartmentSitePricingTableHeaderNightLimit}</th>
                  <th>{t.ApartmentSitePricingTableHeaderInfo}</th>
                </tr>
                <tr>
                  <td>{t.ApartmentSitePricingTableWinterSeason}</td>
                  <td>15.12 - 31.03</td>
                  <td>
                    {apartmentData?.priceWinter}/
                    {t.ApartmentSitePricingTableNight}
                  </td>
                  <td>{t.ApartmentSitePricingTableMinimum} 3</td>
                  <td>{t.ApartmentSitePricingTablePriceInfo}</td>
                </tr>
                <tr>
                  <td>{t.ApartmentSitePricingTableEaster}</td>
                  <td>01.04 - 07.04</td>
                  <td>
                    {apartmentData?.priceEaster}/
                    {t.ApartmentSitePricingTableNight}
                  </td>
                  <td>{t.ApartmentSitePricingTableMinimum} 4</td>
                  <td>{t.ApartmentSitePricingTablePriceInfo}</td>
                </tr>
                <tr>
                  <td>{t.ApartmentSitePricingTableSummerSeason}</td>
                  <td>01.07 - 31.08</td>
                  <td>
                    {apartmentData?.priceSummer}/
                    {t.ApartmentSitePricingTableNight}
                  </td>
                  <td>{t.ApartmentSitePricingTableMinimum} 3</td>
                  <td>{t.ApartmentSitePricingTablePriceInfo}</td>
                </tr>
                <tr>
                  <td>{t.ApartmentSitePricingTableOutOfSeason}</td>
                  <td>x</td>
                  <td>
                    {apartmentData?.priceRest}/
                    {t.ApartmentSitePricingTableNight}
                  </td>
                  <td>{t.ApartmentSitePricingTableMinimum} 3</td>
                  <td>{t.ApartmentSitePricingTablePriceInfo}</td>
                </tr>
                <tr>
                  <td>{t.ApartmentSitePricingTableNewYear}</td>
                  <td>23.12 - 03.01</td>
                  <td>
                    {apartmentData?.priceNewYear}/
                    {t.ApartmentSitePricingTableNight}
                  </td>
                  <td>{t.ApartmentSitePricingTableMinimum} 4</td>
                  <td>{t.ApartmentSitePricingTablePriceInfo}</td>
                </tr>
              </tbody>
            </table>
            <br />
            <p>{t.ApartmentSitePricingTablePriceInfo2}</p>
          </div>
          <ImageGallery imageList={imageFilenames1} />
        </div>
      </div>
    </>
  );
}
