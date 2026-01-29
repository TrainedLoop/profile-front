import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from '@/locales/en/translation.json';
import ptTranslation from '@/locales/pt/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  pt: {
    translation: ptTranslation,
  },
};

// Detectar idioma salvo no localStorage ou usar o padrão do navegador
const getInitialLanguage = (): string => {
  if (typeof window !== 'undefined') {
    const savedLanguage = localStorage.getItem('i18nextLng');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      return savedLanguage;
    }
    // Detectar idioma do navegador
    const browserLang = navigator.language.split('-')[0];
    if (browserLang === 'pt') return 'pt';
  }
  return 'en';
};

i18n.on('initialized', () => {
  if (typeof window !== 'undefined') {
    document.documentElement.lang = i18n.language;
  }
});

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React já faz escape por padrão
  },
  react: {
    useSuspense: false, // Desabilitar suspense para evitar problemas com Vite
  },
});

// Salvar idioma no localStorage quando mudar
i18n.on('languageChanged', lng => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('i18nextLng', lng);
    // Keep <html lang=""> in sync for accessibility/SEO
    document.documentElement.lang = lng;
  }
});

export default i18n;
