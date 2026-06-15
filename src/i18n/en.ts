import type { Translation } from './types';

export const en: Translation = {
  brand: {
    name: 'VOLTIX',
    tagline: 'Najami · Zatout — Industrial EPC',
  },
  nav: {
    about: 'About',
    synergy: 'JV Synergy',
    team: 'Team',
    projects: 'Projects',
    portfolio: 'Portfolio',
    credibility: 'Credibility',
    contact: 'Contact',
    joinUs: 'Join Us',
  },
  hero: {
    slides: [
      {
        tag: 'IRON · STEEL · PIPELINE',
        title: 'HEAVY INDUSTRIAL\nMASTERY',
        subtitle:
          'A joint venture forged by Sami Najami and C. Zatout — uniting 82,000 square meters of fabrication capacity with 15,000 tons of annual steel output and full-spectrum EPC execution.',
        cta: 'Explore Combined Power',
      },
      {
        tag: 'EPC COMMAND',
        title: 'UNIFIED INDUSTRIAL COMMAND',
        subtitle:
          'From structural steel erection to cross-country pipeline installation — integrated delivery under a single industrial command structure with zero interface gaps.',
        cta: 'View Capabilities',
      },
      {
        tag: 'JOINT VENTURE',
        title: 'TWO FORGES. ONE FORCE.',
        subtitle:
          'Sami Najami\'s fabrication empire meets C. Zatout\'s pipeline and civil engineering authority. The result: an EPC platform built for national infrastructure mandates.',
        cta: 'Meet the Partners',
      },
    ],
    scroll: 'Descend to command floor',
  },
  about: {
    label: '01 — About',
    title: 'Built in Steel.\nDriven by Precision.',
    description:
      'Najami · Zatout is a strategic industrial joint venture built for projects that demand structural certainty at scale. We deliver top-tier steel fabrication and integrated EPC execution under one command — risk internalized, quality certified, delivery assured.',
    stats: [
      { value: '82K', label: 'Sqm Factory Footprint' },
      { value: '15K', label: 'Tons Steel / Year' },
      { value: '35+', label: 'Years Combined Experience' },
      { value: 'EPC', label: 'Full Lifecycle Delivery' },
    ],
    pillars: [
      {
        title: 'Fabrication Sovereignty',
        description:
          'In-house rolling, cutting, welding, and coating under ISO 3834 and EN 1090 certification — eliminating supply chain dependency on critical structural paths.',
      },
      {
        title: 'Pipeline Authority',
        description:
          'Cross-country and intra-plant pipeline networks from 4" to 56" diameter — HDD, welded tie-ins, hydrostatic testing, and ASME B31 compliance.',
      },
      {
        title: 'EPC Integration',
        description:
          'Single-contract accountability from FEED through commissioning. Engineering, procurement, and construction unified under one project directorate.',
      },
    ],
  },
  synergy: {
    label: '02 — JV Synergy',
    title: 'Unmatched EPC Force',
    subtitle:
      'Sami Najami and C. Zatout — two industrial principals whose combined assets create an EPC platform without parallel in the region.',
    tabs: {
      all: 'Joint Venture Capability',
      najami: 'Sami Najami',
      zatout: 'C. Zatout',
    },
    combinedPower: 'Aggregate JV Capability',
    metrics: [
      { value: '82,000', unit: 'SQM', label: 'Integrated Factory Complex' },
      { value: '15,000', unit: 'TONS', label: 'Annual Steel Production Capacity' },
      { value: 'FULL', unit: 'EPC', label: 'Engineering · Procurement · Construction' },
    ],
    partners: [
      {
        name: 'Sami Najami',
        role: 'Principal — Steel & Fabrication',
        expertise: 'Structural Steel · Pressure Vessels · Heavy Fabrication',
        description:
          'Architect of an 82,000 sqm industrial manufacturing complex with integrated rolling mills, CNC cutting bays, and automated welding lines. Najami\'s facilities have supplied structural steel for power plants, refineries, and high-rise cores across the Levant and Gulf regions for over two decades.',
      },
      {
        name: 'C. Zatout',
        role: 'Principal — Heavy Mechanical & Industrial Piping',
        expertise: 'Heavy Mechanical Works · Industrial Piping · Energy & Chemical Plant Infrastructure',
        description:
          'Veteran EPC principal specializing in heavy mechanical erection, industrial piping systems, and energy and chemical plant infrastructure. Zatout commands ASME-compliant pipeline networks, process piping for refineries and petrochemical facilities, and the civil-mechanical integration required for on-schedule plant commissioning.',
      },
    ],
  },
  team: {
    label: '03 — Leadership',
    title: 'Executive Command',
    subtitle: 'Senior principals directing every mandate from the command floor.',
    members: [
      { name: 'Sami Najami', role: 'Managing Principal', specialty: 'Steel Fabrication & JV Strategy' },
      { name: 'C. Zatout', role: 'Managing Principal', specialty: 'EPC & Pipeline Operations' },
      { name: 'Eng. R. Mansour', role: 'Chief Engineer', specialty: 'Structural & Mechanical Design' },
      { name: 'Eng. T. Khoury', role: 'Pipeline Director', specialty: 'Cross-Country Networks' },
      { name: 'A. Farhat', role: 'Production Director', specialty: 'Factory Operations & QA/QC' },
      { name: 'M. Sabbagh', role: 'Commercial Director', specialty: 'Procurement & Contracts' },
    ],
  },
  projects: {
    label: '04 — Projects',
    title: 'Industrial Proven Execution',
    backToProjects: '← Back to Projects',
    detail: {
      datasheet: 'Project Data Sheet',
      projectName: 'Project Name',
      client: 'Contracting Client',
      timeline: 'Exact Timeline',
      location: 'Location & Region',
      scope: 'Full Engineering Scope / Technical Description',
    },
  },
  portfolio: {
    label: '05 — Portfolio',
    title: 'Executed Mandates',
    subtitle: 'Proven delivery across energy, steel, and water infrastructure.',
    filters: {
      energy: 'Energy',
      steel: 'Steel',
      water: 'Water',
    },
    coreExpertise: 'Core Expertise',
    sectors: {
      energy: {
        summary:
          'The Najami · Zatout joint venture delivers integrated EPC execution across power generation, refining, and petrochemical infrastructure — combining 82,000 sqm of in-house fabrication with ASME-compliant process piping and a proven record of on-schedule energization at national scale.',
        expertise: [
          'High-pressure steam and process piping systems',
          'Power plant structural steel and pipe rack networks',
          'Refinery turnaround mechanical works',
          'Petrochemical facility EPC integration',
        ],
      },
      steel: {
        summary:
          'With 15,000 tons of annual structural steel throughput and EN 1090-certified fabrication lines, the JV commands end-to-end delivery of heavy steel packages — from rolling and CNC cutting through on-site erection — eliminating interface risk on mission-critical structural paths.',
        expertise: [
          'Structural steel fabrication at industrial scale',
          'Pressure vessels and heavy plate assemblies',
          'High-rise and industrial core steel erection',
          'ISO 3834 / EN 1090 certified welding & coating',
        ],
      },
      water: {
        summary:
          'Cross-country water transmission, desalination feed systems, and municipal pipeline networks form a core JV discipline — engineered, procured, and installed under single-contract accountability with full hydrostatic testing and commissioning protocols.',
        expertise: [
          'National water carrier transmission pipelines',
          'Desalination RO plant piping and pump stations',
          'Large-diameter welded network installation',
          'HDD, tie-ins, and hydrostatic commissioning',
        ],
      },
    },
  },
  credibility: {
    label: '06 — Credibility',
    title: 'Top-Tier Industry Rankings',
    subtitle:
      'Both joint venture partners are officially recognized among Israel\'s leading engineering and industrial enterprises by DUNS 100 and BDi CODE 2026.',
    dunsProfile: 'DUNS 100 Profile',
    bdiProfile: 'BDI CODE Profile',
    partners: {
      najami: {
        name: 'Sami Najami Engineering',
        description:
          'Ranked among Israel\'s foremost engineering and fabrication enterprises — recognized for large-scale structural steel execution, integrated project delivery, and proven industrial manufacturing capacity at national scale.',
      },
      zatout: {
        name: 'Zatout Group',
        description:
          'Officially ranked for excellence in industrial piping, heavy mechanical works, and energy infrastructure — delivering ASME-compliant process systems and EPC execution across refining, petrochemical, and municipal sectors.',
      },
    },
  },
  cta: {
    label: '07 — Engage',
    title: 'Commission\nIndustrial Execution',
    subtitle:
      'Steel structures, pipeline networks, or full EPC mandates — transmit your project brief and our command team will respond within one business day.',
    primary: 'Transmit Project Brief',
    secondary: 'Download JV Capabilities Dossier',
    wazeNavigate: 'Navigate via Waze',
  },
  footer: {
    brandDescription:
      'Strategic Joint Venture combining world-class industrial fabrication and massive energy/water infrastructure delivery.',
    form: {
      title: 'Contact Command',
      name: 'Full Name',
      email: 'Email Address',
      mobilePhone: 'Mobile Phone',
      company: 'Organization',
      message: 'Project Brief / Inquiry',
      attachment: 'Attach Project Brief / Specifications (PDF, DWG, ZIP)',
      attachmentDrop: 'Drag and drop files here, or click to browse',
      attachmentSelected: 'File attached',
      preferredTime: 'Preferred Time for Call / Meeting',
      meetingPlaceholder: 'Select a time window',
      meetingSlots: [
        '08:00 — 10:00',
        '10:00 — 12:00',
        '12:00 — 14:00',
        '14:00 — 16:00',
        '16:00 — 18:00',
      ],
      submit: 'Submit Request',
    },
    toast: {
      title: 'Transmission Confirmed',
      message: 'Your inquiry has been logged. A project director will respond within 24 hours.',
    },
    columns: {
      headquarters: 'Headquarters',
      addressLine1: 'Industrial Zone 4, Plot 17-A',
      addressLine2: 'Haifa Bay, Israel 3109001',
      address: 'Industrial Zone 4, Plot 17-A\nHaifa Bay, Israel 3109001',
      commercial: 'Commercial Inquiries',
      telLabel: 'Tel',
      emailLabel: 'Email',
      phone: '+972 4 855 2200',
      phoneLabel: 'Phone',
      email: 'command@najami-zatout.com',
      navigation: 'Navigation',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Execution',
    },
    copyright: '\u00a9 2026 Voltix Website. All Rights Reserved.',
  },
};
