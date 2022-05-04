import i18n, { Module } from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import English from "./locale/en/en.json";
import 简体中文 from "./locale/cn/cn.json";
import 繁体中文 from "./locale/zh/zh.json";

const resources = {
  English,
  简体中文,
  繁体中文,
}

export const availableLanguages = Object.keys(resources)

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: 'English', // default language
    // defaultNS: "common",
    fallbackLng: "en",
  });

// export default i18n;
