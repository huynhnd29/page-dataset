import i18n from "i18next";

import en from "./translations/en";
import vn from "./translations/vn";
import { initReactI18next } from "react-i18next";

const Language = {
  VN: "vi",
  EN: "en",
};

i18n.use(initReactI18next).init({
  fallbackLng: Language.EN,
  initImmediate: false,
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    vi: {
      translation: vn,
    },
  },
  react: {
    bindI18n: "languageChanged", // i am changing this as I dont wanna any flickering on language change
  },
});

i18n.ifExists = (key) => (i18n.exists(key) ? i18n.t(key) : "");

i18n.tf = (key, fallbackKey) =>
  i18n.exists(key) ? i18n.t(key) : i18n.ifExists(fallbackKey);

export { Language };
export default i18n;
