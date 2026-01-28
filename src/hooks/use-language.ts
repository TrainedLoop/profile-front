import { useTranslation } from 'react-i18next';

export type Language = 'en' | 'pt';

export function useLanguage() {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language as Language;
  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang);
  };

  return {
    language: currentLanguage,
    changeLanguage,
    isEnglish: currentLanguage === 'en',
    isPortuguese: currentLanguage === 'pt',
  };
}
