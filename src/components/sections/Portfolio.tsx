import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useI18n } from '../../i18n';
import type { PortfolioCategory } from '../../i18n/types';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { IndustrialImage } from '../ui/IndustrialImage';

const SECTOR_TABS: PortfolioCategory[] = ['energy', 'steel', 'water'];

const SECTOR_IMAGES: Record<PortfolioCategory, string> = {
  energy:
    'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=1600&q=85',
  steel:
    'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=85',
  water:
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85',
};

interface SectorShowcaseProps {
  category: PortfolioCategory;
  imageFirst?: boolean;
}

function SectorShowcase({ category, imageFirst = true }: SectorShowcaseProps) {
  const { t } = useI18n();
  const sector = t.portfolio.sectors[category];
  const title = t.portfolio.filters[category];

  const visual = (
    <div className="overflow-hidden border border-slate-100 border-s-4 border-s-[#1a2d4a] shadow-md">
      <IndustrialImage
        src={SECTOR_IMAGES[category]}
        alt={title}
        overlay="light"
        className="aspect-[4/3] w-full md:aspect-auto md:min-h-[420px]"
      />
    </div>
  );

  const content = (
    <div>
      <h3 className="mb-5 text-2xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-3xl">
        {title}
      </h3>
      <p className="mb-8 text-base leading-relaxed text-slate-600 md:text-lg">
        {sector.summary}
      </p>
      <span className="industrial-label mb-5 block">{t.portfolio.coreExpertise}</span>
      <ul className="space-y-3">
        {sector.expertise.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 border-s-2 border-[#1a2d4a]/20 ps-4 text-sm leading-relaxed text-slate-700 md:text-base"
          >
            <span className="mt-2 h-1 w-1 shrink-0 bg-[#1a2d4a]" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      {imageFirst ? (
        <>
          {visual}
          {content}
        </>
      ) : (
        <>
          {content}
          {visual}
        </>
      )}
    </div>
  );
}

export function Portfolio() {
  const { t } = useI18n();
  const [activeSector, setActiveSector] = useState<PortfolioCategory>('energy');

  return (
    <section id="portfolio" className="relative bg-white py-12 md:py-16">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <AnimateOnScroll>
          <header className="mb-10 text-center md:mb-12">
            <span className="industrial-label mb-4 block">{t.portfolio.label}</span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-4xl">
              {t.portfolio.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              {t.portfolio.subtitle}
            </p>
          </header>
        </AnimateOnScroll>

        <nav className="mb-12 flex flex-wrap justify-center gap-2 md:mb-14 md:gap-3">
          {SECTOR_TABS.map((sector) => {
            const isActive = activeSector === sector;
            return (
              <button
                key={sector}
                type="button"
                onClick={() => setActiveSector(sector)}
                className={`focus-ring relative rounded-full px-5 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-colors md:text-xs ${
                  isActive
                    ? 'bg-slate-100 font-semibold text-[#1a2d4a]'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {t.portfolio.filters[sector]}
                {isActive && (
                  <motion.span
                    layoutId="portfolio-tab-indicator"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-[#1a2d4a] md:inset-x-5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <SectorShowcase
              category={activeSector}
              imageFirst={SECTOR_TABS.indexOf(activeSector) % 2 === 0}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
