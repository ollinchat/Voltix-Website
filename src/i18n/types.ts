export type Locale = 'en' | 'he' | 'ru' | 'ar';

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
    credibility: string;
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
    alliance: {
      heading: string;
      body: string;
    };
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
    backToProjects: string;
    detail: {
      datasheet: string;
      projectName: string;
      client: string;
      timeline: string;
      location: string;
      scope: string;
    };
  };
  portfolio: {
    label: string;
    title: string;
    subtitle: string;
    filters: Record<PortfolioCategory, string>;
    coreExpertise: string;
    sectors: Record<
      PortfolioCategory,
      {
        summary: string;
        expertise: string[];
      }
    >;
  };
  credibility: {
    label: string;
    title: string;
    subtitle: string;
    dunsProfile: string;
    bdiProfile: string;
    partners: Record<
      'najami' | 'zatout',
      {
        name: string;
        description: string;
      }
    >;
  };
  cta: {
    label: string;
    title: string;
    subtitle: string;
    primary: string;
    secondary: string;
    wazeNavigate: string;
  };
  footer: {
    brandDescription: string;
    form: {
      title: string;
      name: string;
      email: string;
      mobilePhone: string;
      company: string;
      message: string;
      attachment: string;
      attachmentDrop: string;
      attachmentSelected: string;
      preferredTime: string;
      meetingPlaceholder: string;
      meetingSlots: string[];
      submit: string;
    };
    toast: {
      title: string;
      message: string;
    };
    columns: {
      headquarters: string;
      addressLine1: string;
      addressLine2: string;
      address: string;
      commercial: string;
      telLabel: string;
      emailLabel: string;
      phone: string;
      phoneLabel: string;
      email: string;
      navigation: string;
      legal: string;
      privacy: string;
      terms: string;
    };
    copyright: string;
  };
}
