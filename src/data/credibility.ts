/** DUNS 100 profile URLs (percent-encoded, ASCII-only) */
export const DUNS_PROFILE_URLS = {
  najami:
    'https://www.duns100.co.il/%D7%A7%D7%91%D7%95%D7%A6%D7%AA_%D7%A1%D7%9E%D7%99_%D7%A0%D7%92%D7%9E%D7%99_%D7%94%D7%A0%D7%93%D7%A1%D7%94_%D7%95%D7%A4%D7%A8%D7%95%D7%99%D7%A7%D7%98%D7%99%D7%9D',
  zatout: 'https://www.duns100.co.il/%D7%A7%D7%91%D7%95%D7%A6%D7%AA_%D7%96%D7%A2%D7%98%D7%95%D7%98',
} as const;

export type CredibilityPartnerId = keyof typeof DUNS_PROFILE_URLS;
