export interface Project {
  id: string;
  title: string;
  category: string;
  dates: string;
  location: string;
  client: string;
  clientLogo: string;
  images: string[];
  fullDetails: string;
  phases?: string[];
  materials?: string[];
  keyPartners?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'intel-sparrow-base-build-process-piping',
    title: 'INTEL SPARROW — BASE BUILD PROCESS PIPING',
    category: 'Industrial Piping',
    dates: '2025 — 2026',
    location: 'Intel, Kiryat Gat, Israel',
    client: 'Intel',
    clientLogo:
      'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg',
    images: [
      '/images/hero-factory.jpg',
      '/images/hero-pipeline.jpg',
      '/images/synergy-pipeline.jpg',
    ],
    fullDetails:
      'Fabrication and installation of 8,000 tons of primary structural steel and technical process piping spanning more than two kilometers for Intel Israel Sparrow base-build execution.',
    phases: [
      'Phase 01: Isometry Generation — Exact isometric extraction after trench excavation.',
      'Phase 02: Geodetic Surveying — Field layout marking of line grades and exits.',
      'Phase 03: Precision Welding — Electrically mapped line installation and certified joint welding.',
      'Phase 04: Integrity Testing — 12-hour hydrostatic water test to verify zero leakage.',
      'Phase 05: Regulatory Approval — As-made geodetic mapping and Standards Institution certification.',
      'Phase 06: Backfilling and Completion — Heavy soil coverage and final accessory integration.',
    ],
    materials: ['Grout EG75', 'Preprufe 300R Plus', 'Bituthene LM'],
  },
  {
    id: 'airport-baggage-conveyor-reinforcement',
    title: 'AIRPORT BAGGAGE CONVEYOR REINFORCEMENT',
    category: 'Aviation Logistics',
    dates: '2025',
    location: 'Israel Airports Authority Facilities',
    client: 'Israel Airports Authority',
    clientLogo: '',
    images: [
      '/images/hero-steel.jpg',
      '/images/about-industrial.jpg',
      '/images/portfolio-energy.jpg',
    ],
    fullDetails:
      'Complex structural execution for automated inbound and outbound baggage logistics lines, including support frameworks, technical stairs, safety railings, and heavy-duty shock absorption assemblies.',
    keyPartners: ['Beumer Group'],
  },
  {
    id: 'four-story-modular-structural-assembly',
    title: '4-STORY MODULAR STRUCTURAL ASSEMBLY',
    category: 'Modular Fabrication',
    dates: '2025',
    location: 'Israel',
    client: 'Shikun and Binui',
    clientLogo: '',
    images: [
      '/images/synergy-steel.jpg',
      '/images/hero-factory.jpg',
      '/images/portfolio-steel.jpg',
    ],
    fullDetails:
      'Off-site precision fabrication and transport of an 80-ton modular four-story structural staircase package, engineered for rapid on-site assembly with reduced installation risk.',
  },
  {
    id: 'kiryat-gat-stadium-pedestrian-bridge',
    title: 'KIRYAT GAT STADIUM PEDESTRIAN BRIDGE',
    category: 'Infrastructure Bridges',
    dates: '2024 — 2025',
    location: 'Kiryat Gat, Israel',
    client: 'Municipal Engineering Sector',
    clientLogo: '',
    images: [
      '/images/portfolio-water.jpg',
      '/images/about-industrial.jpg',
      '/images/hero-pipeline.jpg',
    ],
    fullDetails:
      'Complete design-build execution of a heavy structural steel pedestrian bridge supporting stadium access infrastructure, from engineering definition to fabrication and final erection.',
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
