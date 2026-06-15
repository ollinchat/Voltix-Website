/** Brand & section imagery — paths relative to /public */
export const images = {
  logo: '/images/logo-voltix.png',
  logoMark: '/images/logo-voltix.png',
  hero: [
    '/images/hero-steel.jpg',
    '/images/hero-factory.jpg',
    '/images/hero-pipeline.jpg',
  ],
  about: '/images/about-industrial.jpg',
  /** Remote fallback if the local about image is missing or fails to load */
  aboutFallback:
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=85',
  synergy: {
    najami: '/images/synergy-steel.jpg',
    zatout: '/images/synergy-pipeline.jpg',
  },
  portfolio: {
    energy: '/images/portfolio-energy.jpg',
    steel: '/images/portfolio-steel.jpg',
    water: '/images/portfolio-water.jpg',
  },
  credibility: {
    duns100: '/images/badge-duns100.png',
    bdiCode2026: '/images/badge-bdi-code-2026.png',
  },
  services: {
    epc: '/images/hero-factory.jpg',
    steel: '/images/hero-steel.jpg',
    pipeline: '/images/hero-pipeline.jpg',
  },
} as const;
