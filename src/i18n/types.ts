export type Locale = 'en' | 'he';

export type PortfolioCategory = 'energy' | 'steel' | 'water';

export interface Translation {
  brand: {
    name: string;
    tagline: string;
  };
  nav: {
    about: string;
    synergy: string;
    team: string;
    projects: string;
    portfolio: string;
    blog: string;
    contact: string;
    joinUs: string;
  };
  hero: {
    slides: Array<{
      tag: string;
      title: string;
      subtitle: string;
      cta: string;
    }>;
    scroll: string;
  };
  about: {
    label: string;
    title: string;
    description: string;
    stats: Array<{ value: string; label: string }>;
    pillars: Array<{ title: string; description: string }>;
  };
  synergy: {
    label: string;
    title: string;
    subtitle: string;
    tabs: {
      all: string;
      najami: string;
      zatout: string;
    };
    combinedPower: string;
    metrics: Array<{ value: string; unit: string; label: string }>;
    partners: Array<{
      name: string;
      role: string;
      expertise: string;
      description: string;
    }>;
  };
  team: {
    label: string;
    title: string;
    subtitle: string;
    members: Array<{
      name: string;
      role: string;
      specialty: string;
    }>;
  };
  projects: {
    label: string;
    title: string;
    modal: {
      datasheet: string;
      projectName: string;
      client: string;
      timeline: string;
      location: string;
      scope: string;
      close: string;
    };
  };
  portfolio: {
    label: string;
    title: string;
    subtitle: string;
    filters: Record<PortfolioCategory, string>;
    all: string;
    projects: Array<{
      category: PortfolioCategory;
      sector: string;
      title: string;
      location: string;
      capacity: string;
    }>;
    viewAll: string;
  };
  blog: {
    label: string;
    title: string;
    subtitle: string;
    posts: Array<{
      date: string;
      category: string;
      title: string;
      excerpt: string;
      readTime: string;
    }>;
    readMore: string;
  };
  cta: {
    label: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
  };
  footer: {
    tagline: string;
    form: {
      title: string;
      name: string;
      email: string;
      company: string;
      message: string;
      submit: string;
    };
    toast: {
      title: string;
      message: string;
    };
    columns: {
      headquarters: string;
      address: string;
      phone: string;
      email: string;
      navigation: string;
      legal: string;
      privacy: string;
      terms: string;
    };
    copyright: string;
  };
}
