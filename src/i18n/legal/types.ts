export interface LegalSection {
  id: string;
  number: string;
  title: string;
  paragraphs: string[];
  clauses?: Array<{ label: string; text: string }>;
}

export interface LegalDocument {
  meta: {
    pageTitle: string;
    documentTitle: string;
    lastUpdated: string;
    effectiveDate: string;
    backToSite: string;
    tableOfContents: string;
    disclaimer: string;
  };
  preamble: {
    title: string;
    paragraphs: string[];
  };
  sections: LegalSection[];
}
