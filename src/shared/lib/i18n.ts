import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import ptBRCommon from '@/shared/locales/pt-BR/common.json'
import enCommon from '@/shared/locales/en/common.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    defaultNS: 'common',
    resources: {
      'pt-BR': { common: ptBRCommon },
      en: { common: enCommon },
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
