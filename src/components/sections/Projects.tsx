import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState, type MouseEvent } from 'react';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';

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

const PROJECTS: Project[] = [
  {
    id: 'intel-production-line',
    title: 'Intel Production Line Upgrade',
    dates: 'Jan 2025 — May 2026',
    location: 'Kiryat Gat, Southern District, Israel',
    client: 'Intel Corporation',
    clientLogo:
      'https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg',
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581092160562-40aa08ad7880?auto=format&fit=crop&w=900&q=80',
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
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1541976590-713941681591?auto=format&fit=crop&w=900&q=80',
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
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    ],
    fullDetails:
      'Integrated civil and mechanical engineering package for municipal infrastructure renewal — underground utility coordination, structural retrofits, industrial piping for municipal energy systems, and public-sector compliance documentation. Single-contract accountability from detailed design through final handover.',
  },
];

function ClientLogo({ client, logoUrl }: { client: string; logoUrl: string }) {
  const [failed, setFailed] = useState(!logoUrl);
  const initials = client
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  if (failed) {
    return (
      <div className="flex h-10 w-10 items-center justify-center border border-slate-100 bg-slate-50 font-mono text-[10px] font-bold text-[#1a2d4a]">
        {initials}
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center overflow-hidden border border-slate-100 bg-white p-1.5">
      <img
        src={logoUrl}
        alt={client}
        className="max-h-full max-w-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function ProjectImageSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);

  const go = (e: MouseEvent, direction: -1 | 1) => {
    e.stopPropagation();
    setIndex((prev) => (prev + direction + images.length) % images.length);
  };

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-slate-100">
      <AnimatePresence mode="wait">
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => go(e, -1)}
            className="focus-ring absolute start-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/90 text-[#1a2d4a] shadow-sm transition hover:bg-white"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => go(e, 1)}
            className="focus-ring absolute end-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/90 text-[#1a2d4a] shadow-sm transition hover:bg-white"
            aria-label="Next image"
          >
            ›
          </button>
          <div className="absolute bottom-3 start-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1 w-1 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { t } = useI18n();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const rows = [
    { label: t.projects.modal.projectName, value: project.title },
    { label: t.projects.modal.client, value: project.client },
    { label: t.projects.modal.timeline, value: project.dates },
    { label: t.projects.modal.location, value: project.location },
    { label: t.projects.modal.scope, value: project.fullDetails },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        onClick={onClose}
        aria-label={t.projects.modal.close}
      />
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-slate-100 bg-white shadow-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-6 py-4 md:px-8">
          <span className="industrial-label">{t.projects.modal.datasheet}</span>
          <button
            type="button"
            onClick={onClose}
            className="focus-ring font-mono text-xs uppercase tracking-widest text-slate-500 transition hover:text-[#1a2d4a]"
          >
            {t.projects.modal.close}
          </button>
        </div>

        <div className="px-6 py-6 md:px-8 md:py-8">
          <h3 id="project-modal-title" className="mb-6 text-xl font-black uppercase tracking-wide text-[#1a2d4a] md:text-2xl">
            {project.title}
          </h3>

          <table className="w-full border-collapse text-start">
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-b border-slate-100 last:border-0">
                  <th className="w-[38%] py-4 pe-6 align-top font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 md:text-xs">
                    {row.label}
                  </th>
                  <td className="py-4 text-sm leading-relaxed text-slate-800 md:text-base">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const { t } = useI18n();
  const [selected, setSelected] = useState<Project | null>(null);

  const openProject = useCallback((project: Project) => {
    setSelected(project);
  }, []);

  const closeModal = useCallback(() => {
    setSelected(null);
  }, []);

  return (
    <section id="projects" className="section-alt relative py-16 md:py-20">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <AnimateOnScroll>
          <header className="mb-12 text-center md:mb-14">
            <span className="industrial-label mb-4 block">{t.projects.label}</span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-4xl">
              {t.projects.title}
            </h2>
          </header>
        </AnimateOnScroll>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <AnimateOnScroll key={project.id} delay={i * 0.08}>
              <motion.button
                type="button"
                onClick={() => openProject(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25 }}
                className="focus-ring group w-full overflow-hidden border border-slate-100 bg-white text-start shadow-md transition-shadow hover:shadow-lg"
              >
                <ProjectImageSlider images={project.images} alt={project.title} />
                <div className="p-5 md:p-6">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 text-sm font-black uppercase leading-snug tracking-wide text-voltix-900 md:text-base">
                        {project.title}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        {project.dates}
                      </p>
                    </div>
                    <ClientLogo client={project.client} logoUrl={project.clientLogo} />
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    {project.location}
                  </p>
                </div>
              </motion.button>
            </AnimateOnScroll>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={closeModal} />}
      </AnimatePresence>
    </section>
  );
}
