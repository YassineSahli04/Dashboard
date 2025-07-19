import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          dashboard: "DASHBOARD",
          welcome: "Welcome to your dashboard!",
          french: "French",
          english: "English"
        },
      },
      fr: {
        translation: {
          dashboard: "TABLEAU DE BORD",
          welcome: "Bienvenue sur votre tableau de bord !",
          french: "Français",
          english: "Anglais"
        },
      },
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });


export default i18n;