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
        console.log("data", data);
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
        console.log("data", data);
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
        console.log("data", data);
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
      <div className="main-panel">
        <BannerImg text={t.ActivityPageBanner} />
        <div className="main-panel-inside container">
          <div className="apartman-large-content">
            <p className="p-subsite">
              Apartmány Čereňovka sa nachádzajú v krásnom okolí Liptovského
              Mikuláša na Slovensku! U nás si môžete vychutnať množstvo zábavy a
              aktivít, ktoré určite spríjemnia Váš pobyt. Jednou z našich
              hlavných atrakcií je letná kuchynka, ktorá je súčasťou nášho
              penziónu. V tejto útulnej letnej kuchynke nájdete veľkú murovanú
              pec, kde si môžete upiecť chutné jedlá. Okrem toho tu nájdete aj
              veľký televízor a dostatok miesta na posedenie pre 15 ľudí.
            </p>
            <hr></hr>
            <ImageGallery imageList={imageFilenames1} />
            <hr></hr>
            <p className="p-subsite">
              Pre tých, ktorí sa radi pohybujú, máme množstvo aktivít vonku. Na
              našom dvore môžete vyskúšať trampolínu a využiť detské ihrisko,
              ktoré obsahuje šmýkačku a húpačky. Deti si tu rozhodne nájdu svoje
              miesto na hrátky. Okrem toho máme aj veľký dvor, kde môžete hrať
              rôzne hry, ako napríklad futbalový tenis, kroket alebo badminton.
            </p>
            <hr></hr>
            <ImageGallery imageList={imageFilenames2} />
            <hr></hr>
            <p className="p-subsite">
              Okrem týchto aktivít ponúkame aj možnosť turistiky na nedaleký
              kopec Čereňova, po ktorom sú naše apartmány pomenované. Z vrcholu
              tohto kopca môžete obdivovať nádherný výhľad na Liptovskú Maru a
              Liptovský Mikuláš. Ďalšou možnosťou je navštíviť turistický raj
              Prosiecka dolina, kde si môžete vychutnať prechádzku po úchvatnej
              prírode.
            </p>
            <hr></hr>
            <ImageGallery imageList={imageFilenames3} />
            <hr></hr>
            <p className="p-subsite">
              Takže, či už si prajete oddýchnuť si pri grilovaní a sledovaní
              obľúbeného televízneho programu v našej letnej kuchynke, využiť
              vonkajšie aktivity ako skákanie na trampolíne, hranie na detskom
              ihrisku, rôzne športové hry na našom dvore, alebo objavovať krásy
              Čereňovej a Prosieckej doliny, Apartmány Čereňovka sú ideálnym
              miestom pre zábavu, relaxáciu a turistiku. Tešíme sa na Vašu
              návštevu!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
