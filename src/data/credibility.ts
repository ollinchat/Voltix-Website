/** External ranking profile URLs (percent-encoded, ASCII-only) */
export const CREDIBILITY_PROFILES = {
  najami: {
    duns:
      'https://www.duns100.co.il/%D7%A7%D7%91%D7%95%D7%A6%D7%AA_%D7%A1%D7%9E%D7%99_%D7%A0%D7%92%D7%9E%D7%99_%D7%94%D7%A0%D7%93%D7%A1%D7%94_%D7%95%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%D7%99%D7%9D',
    bdi:
      'https://www.bdicode.co.il/company/%D7%A1%D7%9E%D7%99-%D7%A0%D7%92%D7%9E%D7%99-%D7%94%D7%A0%D7%93%D7%A1%D7%94-%D7%95%D7%A4%D7%A8%D7%95%D7%99%D7%99%D7%A7%D7%98%D7%99%D7%9D/',
  },
  zatout: {
    duns: 'https://www.duns100.co.il/%D7%A7%D7%91%D7%95%D7%A6%D7%AA_%D7%96%D7%A2%D7%98%D7%95%D7%98',
    bdi:
      'https://www.bdicode.co.il/company/%D7%A1%D7%9E%D7%99-%D7%96%D7%A2%D7%98%D7%95%D7%98-%D7%A2%D7%91%D7%95%D7%93%D7%95%D7%AA-%D7%9E%D7%AA%D7%9B%D7%AA/',
  },
} as const;

export type CredibilityPartnerId = keyof typeof CREDIBILITY_PROFILES;
