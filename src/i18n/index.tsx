import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { en } from './en';
import { he } from './he';
import type { Locale, Translation } from './types';

const translations: Record<Locale, Translation> = { en, he };

interface I18nContextValue {
  locale: Locale;
  t: Translation;
  isRtl: boolean;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem('voltix-locale');
    return stored === 'he' ? 'he' : 'en';
  });

  const isRtl = locale === 'he';
  const t = translations[locale];

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem('voltix-locale', next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'he' : 'en');
  }, [locale, setLocale]);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [locale, isRtl]);

  const value = useMemo(
    () => ({ locale, t, isRtl, setLocale, toggleLocale }),
    [locale, t, isRtl, setLocale, toggleLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
