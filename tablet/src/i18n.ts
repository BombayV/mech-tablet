import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "Welcome to React": "Welcome to React and react-i18next"
    }
  },
  fr: {
    translation: {
      "Welcome to React": "Bienvenue à React et react-i18next"
    }
  }
};

const missingKeyHandler = (lngs: Readonly<string[]>, ns: string, key: string, fallbackValue: string) => {
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    console.warn(`Missing translation for key ${key} in namespace ${ns} for languages ${lngs}`);
  }
}

i18n
.use(initReactI18next)
.init({
  resources,
  missingKeyHandler,
  debug: true,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false // not needed for react!!
  }
});

export default i18n;