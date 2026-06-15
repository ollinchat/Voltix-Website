import type { Locale } from './types';

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALES: Locale[] = ['en', 'he', 'ru', 'ar'];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  he: 'HE',
  ru: 'RU',
  ar: 'AR',
};

export const RTL_LOCALES: Locale[] = ['he', 'ar'];

export function isRtlLocale(locale: Locale): boolean {
  return RTL_LOCALES.includes(locale);
}

export function isValidLocale(value: string | null): value is Locale {
  return value !== null && LOCALES.includes(value as Locale);
}
