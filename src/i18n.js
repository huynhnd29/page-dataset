import i18n from "i18next";

import en from "./translations/en";
import vn from "./translations/vn";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

const Language = {
  VN: "vi",
  EN: "en",
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    fallbackLng: Language.EN,
    // initImmediate: false,
    // returnObjects: true,
    // interpolation: {
    //   escapeValue: false,
    // },
    resources: {
      en: {
        translation: en,
      },
      vi: {
        translation: vn,
      },
    },
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "asset/locales/{{lng}}/translation.js",
    },
    react: {
      useSuspense: false,
    },
  });

i18n.ifExists = (key) => (i18n.exists(key) ? i18n.t(key) : "");

i18n.tf = (key, fallbackKey) =>
  i18n.exists(key) ? i18n.t(key) : i18n.ifExists(fallbackKey);

export { Language };
export default i18n;
