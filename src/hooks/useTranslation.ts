/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";
import * as translations from "../translations";

type Translations = typeof translations;

export default function useTranslation() {
  const [language, setLanguage] = useState<keyof Translations>("sk");
  const [fallbackLanguage, setFallbackLanguage] =
    useState<keyof Translations>("sk");

  const translate = (key: string) => {
    const keys = key.split(".");

    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    getTranslatedText: translate,
  };
}

function getNestedTranslation(language: keyof Translations, keys: any[]) {
  return keys.reduce((obj, key) => {
    return obj?.[key];
  }, translations[language]);
}
