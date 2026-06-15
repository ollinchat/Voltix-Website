import { AnimatePresence, motion } from 'framer-motion';
import { useState, type MouseEvent } from 'react';
import { PROJECTS } from '../../data/projects';
import { useI18n } from '../../i18n';
import { navigate } from '../../lib/navigation';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';

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

function ProjectImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);

  const go = (e: MouseEvent, direction: -1 | 1) => {
    e.preventDefault();
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
            className="focus-ring absolute start-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/90 text-[#1a2d4a] shadow-sm transition hover:bg-white"
            aria-label="Previous image"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={(e) => go(e, 1)}
            className="focus-ring absolute end-2 top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center bg-white/90 text-[#1a2d4a] shadow-sm transition hover:bg-white"
            aria-label="Next image"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

export function Projects() {
  const { t } = useI18n();

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
              <motion.a
                href={`/projects/${project.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/projects/${project.id}`);
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25 }}
                className="focus-ring group block w-full overflow-hidden border border-slate-100 bg-white text-start shadow-md transition-shadow hover:shadow-lg"
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
              </motion.a>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
