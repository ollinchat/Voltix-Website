export interface Project {
  id: string;
  title: string;
  dates: string;
  location: string;
  client: string;
  clientLogo: string;
  images: string[];
  fullDetails: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'intel-production-line',
    title: 'Intel Production Line Upgrade',
    dates: 'Jan 2025 — May 2026',
    location: 'Kiryat Gat, Southern District, Israel',
    client: 'Intel Corporation',
    clientLogo:
      'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581092160562-40aa08ad7880?auto=format&fit=crop&w=1200&q=85',
    ],
    fullDetails:
      'Full-scope EPC upgrade of semiconductor production infrastructure including structural steel modifications, process piping reroutes, clean-room-adjacent mechanical works, and phased commissioning with zero unplanned production downtime. Delivered under ISO-aligned QA/QC with continuous client engineering liaison.',
  },
  {
    id: 'israel-railways-infrastructure',
    title: 'Israel Railways Structural Infrastructure',
    dates: 'Mar 2024 — Dec 2025',
    location: 'Central & Coastal Corridor, Israel',
    client: 'Israel Railways Ltd.',
    clientLogo:
      'https://upload.wikimedia.org/wikipedia/he/5/5e/Israel_Railways_logo.svg',
    images: [
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=1200&q=85',
    ],
    fullDetails:
      'Design-build delivery of structural steel bridge approaches, platform canopies, and ancillary rail infrastructure across multiple corridor segments. Scope includes fabrication of heavy truss assemblies, on-track erection sequencing, and EN 1090-certified welding with third-party structural inspection at every milestone.',
  },
  {
    id: 'municipal-engineering-development',
    title: 'Municipal Engineering Development',
    dates: 'Jun 2023 — Feb 2025',
    location: 'Haifa Metropolitan Region, Israel',
    client: 'Haifa Municipality — Engineering Division',
    clientLogo: '',
    images: [
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85',
    ],
    fullDetails:
      'Integrated civil and mechanical engineering package for municipal infrastructure renewal — underground utility coordination, structural retrofits, industrial piping for municipal energy systems, and public-sector compliance documentation. Single-contract accountability from detailed design through final handover.',
  },
];

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((p) => p.id === id);
}
