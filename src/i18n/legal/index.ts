import type { Locale } from '../types';
import { legalEn } from './en';
import { legalHe } from './he';
import type { LegalDocument } from './types';

const legalDocs: Record<Locale, LegalDocument> = {
  en: legalEn,
  he: legalHe,
};

export function getLegalDocument(locale: Locale): LegalDocument {
  return legalDocs[locale];
}

export type { LegalDocument, LegalSection } from './types';
