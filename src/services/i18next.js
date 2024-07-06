import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../Languages/en.json';
import hi from '../Languages/hi.json';
import kn from '../Languages/kn.json';
import bn from '../Languages/bn.json';

export const languageResources = {
  en: {translation: en},
  hi: {translation: hi},
  kn: {translation: kn},
  bn: {translation: bn},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
