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
    services: 'Services',
    portfolio: 'Portfolio',
    blog: 'Insights',
    contact: 'Contact',
    joinUs: 'Join Us',
  },
  hero: {
    slides: [
      {
        tag: 'IRON · STEEL · PIPELINE',
        title: 'HEAVY INDUSTRIAL\nMASTERY AT\nGLOBAL SCALE',
        subtitle:
          'A joint venture forged by Sami Najami and C. Zatout — uniting 82,000 square meters of fabrication capacity with 15,000 tons of annual steel output and full-spectrum EPC execution.',
        cta: 'Explore Combined Power',
      },
      {
        tag: 'EPC COMMAND',
        title: 'ENGINEERED.\nPROCURED.\nCONSTRUCTED.',
        subtitle:
          'From structural steel erection to cross-country pipeline installation — integrated delivery under a single industrial command structure with zero interface gaps.',
        cta: 'View Capabilities',
      },
      {
        tag: 'JOINT VENTURE',
        title: 'TWO FORGES.\nONE FORCE.',
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
    subtitle: 'Heavy industrial luxury — where iron mastery meets engineering discipline.',
    description:
      'Najami · Zatout is a strategic joint venture between two of the region\'s most formidable industrial operators. Together, they command one of the largest privately held steel fabrication and EPC platforms in the Eastern Mediterranean — engineered for projects that demand structural certainty at scale.',
    narrative:
      'Where others subcontract risk, we internalize it. Our 82,000 square meter manufacturing campus operates continuous-flow production lines for structural steel, pressure vessels, and pipeline components. Fifteen thousand tons of steel pass through our facilities annually — each weld traceable, each beam load-certified, each spool hydro-tested before it leaves the yard. This is not consulting. This is industrial execution at the weight class that moves economies.',
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
    title: 'Combined Power',
    subtitle:
      'Sami Najami and C. Zatout — two industrial principals whose combined assets create an EPC platform without parallel in the region.',
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
        role: 'Principal — Pipeline & EPC',
        expertise: 'Pipeline Engineering · Civil Works · EPC Management',
        description:
          'Veteran EPC director with command authority over cross-country pipeline projects, pump station construction, and industrial civil infrastructure. Zatout brings ASME-compliant pipeline installation capability and a proven record of on-schedule commissioning on water, energy, and petrochemical networks.',
      },
    ],
    equation: 'Najami Fabrication + Zatout Pipeline = Unmatched EPC Force',
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
  services: {
    label: '04 — Services',
    title: 'Industrial Disciplines',
    subtitle: 'Three core execution verticals — each backed by in-house capacity, not outsourced promise.',
    items: [
      {
        code: 'SVC-EPC',
        title: 'EPC',
        description:
          'Full Engineering, Procurement, and Construction under a single contract framework. Our EPC division manages multi-disciplinary design teams, global equipment sourcing, subcontractor governance, and commissioning — delivering turnkey industrial facilities from concept to energization.',
        capabilities: [
          'FEED & Detailed Engineering',
          'Equipment Procurement & Expediting',
          'Construction Management',
          'Pre-Commissioning & Handover',
        ],
      },
      {
        code: 'SVC-STL',
        title: 'Iron Construction',
        description:
          'Structural steel fabrication and erection at industrial scale. Our 82,000 sqm factory complex produces beams, trusses, pipe racks, pressure vessels, and modular skids — with 15,000 tons of annual throughput capacity and EN 1090 EXC3 certification.',
        capabilities: [
          'Structural Steel Fabrication',
          'Heavy Plate & Vessel Work',
          'On-Site Steel Erection',
          'Coating & Corrosion Protection',
        ],
      },
      {
        code: 'SVC-PLN',
        title: 'Pipeline Works',
        description:
          'Design, supply, and installation of pipeline networks for water transmission, oil and gas distribution, and industrial process lines. From route survey and HDD bore to welded tie-ins and hydrostatic testing — full ASME B31 and API 1104 compliance.',
        capabilities: [
          'Cross-Country Pipeline Installation',
          'HDD & Trenchless Methods',
          'Pump & Valve Stations',
          'Hydrostatic Testing & Commissioning',
        ],
      },
    ],
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
    all: 'All Sectors',
    projects: [
      {
        category: 'energy',
        sector: 'POWER GENERATION',
        title: '400MW CCGT Steel Superstructure',
        location: 'Northern Industrial Zone',
        capacity: '12,400 tons structural steel',
      },
      {
        category: 'energy',
        sector: 'REFINERY',
        title: 'Crude Pipeline & Pipe Rack Network',
        location: 'Coastal Refinery Complex',
        capacity: '48 km / 24" diameter',
      },
      {
        category: 'steel',
        sector: 'HEAVY FABRICATION',
        title: 'Pressure Vessel Farm — Phase II',
        location: 'Najami Manufacturing Campus',
        capacity: '86 vessels / 3,200 tons',
      },
      {
        category: 'steel',
        sector: 'COMMERCIAL CORE',
        title: 'High-Rise Structural Steel Package',
        location: 'Metropolitan District',
        capacity: '64 floors / 8,600 tons',
      },
      {
        category: 'water',
        sector: 'TRANSMISSION',
        title: 'National Water Carrier — Segment 7',
        location: 'Central Highlands',
        capacity: '32 km / 1,200mm dia.',
      },
      {
        category: 'water',
        sector: 'DESALINATION',
        title: 'RO Plant Pipeline & Pump Station',
        location: 'Mediterranean Coast',
        capacity: '150,000 m³/day',
      },
    ],
    viewAll: 'Request Full Project Dossier',
  },
  blog: {
    label: '06 — Technical Intelligence',
    title: 'Engineering Reports',
    subtitle: 'Field-tested analysis from the fabrication floor and pipeline trench.',
    posts: [
      {
        date: '2026.05.28',
        category: 'STEEL',
        title: 'EN 1090 EXC3 Execution: Weld Procedure Qualification at 15,000-Ton Scale',
        excerpt:
          'How our fabrication yards maintain WPS compliance across multi-shift production — from material traceability through NDT acceptance criteria on structural nodes exceeding 80mm plate thickness.',
        readTime: '12 min',
      },
      {
        date: '2026.04.14',
        category: 'PIPELINE',
        title: 'HDD Crossing Design for 36" Transmission Lines in Karst Geology',
        excerpt:
          'Engineering methodology for horizontal directional drills beneath unstable limestone formations — bore path optimization, pullback stress analysis, and post-installation integrity verification.',
        readTime: '18 min',
      },
      {
        date: '2026.03.02',
        category: 'EPC',
        title: 'Interface Management Between Fabrication Yards and Pipeline Corridors',
        excerpt:
          'Lessons from integrated EPC delivery where structural steel pipe racks and buried pipeline networks share the same corridor — coordination protocols that eliminated 340 rework hours on a live refinery expansion.',
        readTime: '9 min',
      },
    ],
    readMore: 'Read Full Report',
  },
  cta: {
    label: '07 — Engage',
    title: 'Commission\nIndustrial Execution',
    subtitle:
      'Steel structures, pipeline networks, or full EPC mandates — transmit your project brief and our command team will respond within one business day.',
    primary: 'Transmit Project Brief',
    secondary: 'Download JV Capabilities Dossier',
  },
  footer: {
    tagline: 'Najami · Zatout — Iron. Steel. Pipeline. EPC.',
    form: {
      title: 'Contact Command',
      name: 'Full Name',
      email: 'Email Address',
      company: 'Organization',
      message: 'Project Brief / Inquiry',
      submit: 'Transmit',
    },
    toast: {
      title: 'Transmission Confirmed',
      message: 'Your inquiry has been logged. A project director will respond within 24 hours.',
    },
    columns: {
      headquarters: 'JV Headquarters',
      address: 'Industrial Zone 4, Plot 17-A\nHaifa Bay, Israel 3109001',
      phone: '+972 4 855 2200',
      email: 'command@najami-zatout.com',
      navigation: 'Navigation',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Engagement',
    },
    copyright: '© 2026 Najami · Zatout Joint Venture. All rights reserved.',
  },
};
