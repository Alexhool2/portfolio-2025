import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import translations from "./translations/translations.json"

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translations.en,
    },
    ja: {
      translation: translations.ja,
    },
  },
  lng: "en", // idioma padrão
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // não é necessário para React
  },
})

export default i18n
