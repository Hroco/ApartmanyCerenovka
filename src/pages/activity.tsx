/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { promises as fs } from "fs";
import BannerImg from "../components/BannerImg";
import ImageGallery from "../components/ImageGallery";
import path from "path";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import en from "../locales/en";
import sk from "../locales/sk";
import pl from "../locales/pl";
import Head from "next/head";
import Script from "next/script";

export default function Activity() {
  const [imageFilenames1, setImageFilenames1] = useState<string[]>([]);
  const [imageFilenames2, setImageFilenames2] = useState<string[]>([]);
  const [imageFilenames3, setImageFilenames3] = useState<string[]>([]);
  const router = useRouter();
  const { locale } = router;
  const t = locale === "sk" ? sk : locale === "en" ? en : pl;

  useEffect(() => {
    const fetchImages1 = async () => {
      try {
        const response = await fetch(
          `/api/loadImages?folderPath=${"public/activityGallery/gallery1"}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image filenames");
        }
        const data = await response.json();
        // console.log("data", data);
        setImageFilenames1(
          data.map(
            (imageName: string) => "/activityGallery/gallery1/" + imageName
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    const fetchImages2 = async () => {
      try {
        const response = await fetch(
          `/api/loadImages?folderPath=${"public/activityGallery/gallery2"}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image filenames");
        }
        const data = await response.json();
        // console.log("data", data);
        setImageFilenames2(
          data.map(
            (imageName: string) => "/activityGallery/gallery2/" + imageName
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    const fetchImages3 = async () => {
      try {
        const response = await fetch(
          `/api/loadImages?folderPath=${"public/activityGallery/gallery3"}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch image filenames");
        }
        const data = await response.json();
        // console.log("data", data);
        setImageFilenames3(
          data.map(
            (imageName: string) => "/activityGallery/gallery3/" + imageName
          )
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages1();
    fetchImages2();
    fetchImages3();
  }, []);

  return (
    <>
      <Head>
        <title>{t.ActivitiesTitle}</title>
        <meta name="description" content={t.ActivitiesMetaDescription}></meta>
        <link rel="canonical" href="https://cerenovka.sk/activity" />
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
        <BannerImg text={t.ActivityPageBanner} />
        <div className="main-panel-inside container">
          <div className="apartman-large-content">
            <p className="p-subsite">{t.ActivityPageText1}</p>
            <hr></hr>
            <div className="apartmentActivities">
              <div>
                <h3>{t.ActivitiesTableHeading1}</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>-</td>
                      <td>{t.ActivitiesTableItem1}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ActivitiesTableItem3}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ActivitiesTableItem4}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ActivitiesTableItem5}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ActivitiesTableItem6}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ActivitiesTableItem7}</td>
                    </tr>
                    <tr>
                      <td>-</td>
                      <td>{t.ActivitiesTableItem9}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <hr></hr>
            <p className="p-subsite">{t.ActivityPageText12}</p>
            <hr></hr>
            <ImageGallery imageList={imageFilenames1} />
            <hr></hr>
            <p className="p-subsite">{t.ActivityPageText2}</p>
            <hr></hr>
            <ImageGallery imageList={imageFilenames2} />
            <hr></hr>
            <p className="p-subsite">{t.ActivityPageText3}</p>
            <hr></hr>
            <ImageGallery imageList={imageFilenames3} />
            <hr></hr>
            <p className="p-subsite">{t.ActivityPageText4}</p>
          </div>
        </div>
      </div>
    </>
  );
}
