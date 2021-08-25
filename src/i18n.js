import i18n from "i18next";

import en from "./translations/en";
import vn from "./translations/vn";

const Language = {
  VN: "vi",
  EN: "en",
};

i18n.init({
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
});

i18n.ifExists = (key) => (i18n.exists(key) ? i18n.t(key) : "");

i18n.tf = (key, fallbackKey) =>
  i18n.exists(key) ? i18n.t(key) : i18n.ifExists(fallbackKey);

export { Language };
export default i18n;
