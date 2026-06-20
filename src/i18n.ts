import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enCommon from './locales/en/common.json';
import frCommon from './locales/fr/common.json';
import enFooter from './locales/en/footer.json';
import frFooter from './locales/fr/footer.json';
import enHome from './locales/en/home.json';
import frHome from './locales/fr/home.json';
import enShop from './locales/en/shop.json';
import frShop from './locales/fr/shop.json';
import enProduct from './locales/en/product.json';
import frProduct from './locales/fr/product.json';
import enCart from './locales/en/cart.json';
import frCart from './locales/fr/cart.json';
import enCheckout from './locales/en/checkout.json';
import frCheckout from './locales/fr/checkout.json';
import enAbout from './locales/en/about.json';
import frAbout from './locales/fr/about.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        footer: enFooter,
        home: enHome,
        shop: enShop,
        product: enProduct,
        cart: enCart,
        checkout: enCheckout,
        about: enAbout,
      },
      fr: {
        common: frCommon,
        footer: frFooter,
        home: frHome,
        shop: frShop,
        product: frProduct,
        cart: frCart,
        checkout: frCheckout,
        about: frAbout,
      },
    },
    fallbackLng: 'en',
    ns: ['common', 'footer', 'home', 'shop', 'product', 'cart', 'checkout', 'about'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
