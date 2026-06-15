import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../data/images';
import { useI18n } from '../../i18n';
import type { PortfolioCategory } from '../../i18n/types';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { Button } from '../ui/Button';
import { IndustrialImage } from '../ui/IndustrialImage';
import { SectionHeading } from '../ui/SectionHeading';

const categoryImages: Record<PortfolioCategory, string> = {
  energy: images.portfolio.energy,
  steel: images.portfolio.steel,
  water: images.portfolio.water,
};

export function Portfolio() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<PortfolioCategory | 'all'>('all');
  const [hovered, setHovered] = useState<string | null>(null);

  const filters: Array<{ key: PortfolioCategory | 'all'; label: string }> = [
    { key: 'all', label: t.portfolio.all },
    { key: 'energy', label: t.portfolio.filters.energy },
    { key: 'steel', label: t.portfolio.filters.steel },
    { key: 'water', label: t.portfolio.filters.water },
  ];

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? t.portfolio.projects
        : t.portfolio.projects.filter((p) => p.category === filter),
    [filter, t.portfolio.projects],
  );

  return (
    <section id="portfolio" className="relative section-padding bg-white">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading
          label={t.portfolio.label}
          title={t.portfolio.title}
          subtitle={t.portfolio.subtitle}
        />

        <div className="mb-12 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`focus-ring relative border px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest transition-colors sm:px-8 ${
                filter === f.key
                  ? 'border-voltix-600 bg-voltix-600 text-white'
                  : 'border-voltix-200 bg-white text-voltix-600 hover:border-voltix-hover hover:bg-voltix-50'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                onHoverStart={() => setHovered(project.title)}
                onHoverEnd={() => setHovered(null)}
                className="group relative min-h-[300px] overflow-hidden border border-voltix-200 bg-white shadow-panel"
              >
                <motion.div
                  className="absolute inset-0"
                  animate={{ scale: hovered === project.title ? 1.03 : 1 }}
                  transition={{ duration: 0.7 }}
                >
                  <IndustrialImage
                    src={categoryImages[project.category]}
                    alt={project.title}
                    overlay="light"
                    className="h-full w-full"
                  />
                </motion.div>

                <div className="relative flex h-full min-h-[300px] flex-col justify-between bg-gradient-to-t from-white via-white/90 to-white/60 p-8">
                  <div>
                    <span className="industrial-label mb-3 block">{project.sector}</span>
                    <h3 className="text-xl font-black uppercase tracking-wide text-voltix-900 md:text-2xl">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-voltix-500">
                        {project.location}
                      </p>
                      <p className="mt-1 font-mono text-sm font-semibold text-voltix-600">
                        {project.capacity}
                      </p>
                    </div>
                    <motion.div
                      className="flex h-10 w-10 items-center justify-center border border-voltix-600 text-voltix-600 [dir=rtl]:rotate-180"
                      animate={{ x: hovered === project.title ? 4 : 0 }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-0 start-0 h-1 bg-voltix-600"
                  initial={{ width: '0%' }}
                  animate={{ width: hovered === project.title ? '100%' : '0%' }}
                  transition={{ duration: 0.45 }}
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimateOnScroll delay={0.2}>
          <div className="mt-12 flex justify-center">
            <Button variant="outline">{t.portfolio.viewAll}</Button>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
