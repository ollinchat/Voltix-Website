import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ar } from './ar';
import {
  DEFAULT_LOCALE,
  isRtlLocale,
  isValidLocale,
} from './config';
import { en } from './en';
import { he } from './he';
import { ru } from './ru';
import type { Locale, Translation } from './types';

const translations: Record<Locale, Translation> = { en, he, ru, ar };

interface I18nContextValue {
  locale: Locale;
  t: Translation;
  isRtl: boolean;
  setLocale: (locale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function readStoredLocale(): Locale {
  const stored = localStorage.getItem('voltix-locale');
  return isValidLocale(stored) ? stored : DEFAULT_LOCALE;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  const isRtl = isRtlLocale(locale);
  const t = translations[locale];

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem('voltix-locale', next);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  }, [locale, isRtl]);

  const value = useMemo(
    () => ({ locale, t, isRtl, setLocale }),
    [locale, t, isRtl, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
