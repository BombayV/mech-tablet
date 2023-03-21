import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locale/en.json';
import es from './locale/es.json';
import config from '../public/config.json';

const resources = {
  en,
  es,
};

const missingKeyHandler = (lngs: Readonly<string[]>, ns: string, key: string) => {
  // @ts-ignore
  if (process.env.NODE_ENV === 'development') {
    console.warn(`Missing translation for key ${key} in namespace ${ns} for languages ${lngs}`);
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    missingKeyHandler,
    debug: true,
    lng: config.language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  })
  .then((r) => console.log('i18n initialized'));

export default i18n;
