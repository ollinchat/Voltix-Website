import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { images } from '../../data/images';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { IndustrialImage } from '../ui/IndustrialImage';

type SynergyTab = 'all' | 'najami' | 'zatout';

const TAB_ORDER: SynergyTab[] = ['all', 'najami', 'zatout'];

const PARTNER_IMAGES: Record<'najami' | 'zatout', string> = {
  najami: images.synergy.najami,
  zatout: images.synergy.zatout,
};

const PARTNER_INITIALS: Record<'najami' | 'zatout', string> = {
  najami: 'SN',
  zatout: 'CZ',
};

const tabTransition = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] as const },
};

export function Synergy() {
  const { t } = useI18n();
  const [activeTab, setActiveTab] = useState<SynergyTab>('all');

  const tabLabels: Record<SynergyTab, string> = {
    all: t.synergy.tabs.all,
    najami: t.synergy.tabs.najami,
    zatout: t.synergy.tabs.zatout,
  };

  const najami = t.synergy.partners[0];
  const zatout = t.synergy.partners[1];

  return (
    <section id="synergy" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <AnimateOnScroll>
          <header className="mb-10 text-center md:mb-12">
            <span className="industrial-label mb-4 block">{t.synergy.label}</span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-4xl">
              {t.synergy.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              {t.synergy.subtitle}
            </p>
          </header>
        </AnimateOnScroll>

        <nav
          className="mb-10 flex flex-wrap items-center justify-center gap-2 md:mb-12 md:gap-3"
          aria-label="Synergy tabs"
        >
          {TAB_ORDER.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`focus-ring relative rounded-full px-4 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-colors md:px-5 md:text-xs ${
                  isActive
                    ? 'bg-slate-100 font-semibold text-[#1a2d4a]'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {tabLabels[tab]}
                {isActive && (
                  <motion.span
                    layoutId="synergy-tab-indicator"
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 bg-[#1a2d4a] md:inset-x-5"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <AnimatePresence mode="wait">
          {activeTab === 'all' && (
            <motion.div key="all" {...tabTransition}>
              <p className="industrial-label mb-8 text-center">{t.synergy.combinedPower}</p>

              <div className="grid gap-5 md:grid-cols-3 md:gap-6">
                {t.synergy.metrics.map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="border border-slate-100 border-s-4 border-s-[#1a2d4a] bg-white p-8 text-center shadow-md md:p-10"
                  >
                    <div className="mb-2 flex items-baseline justify-center gap-2">
                      <span className="font-mono text-4xl font-black text-[#1a2d4a] md:text-5xl">
                        {metric.value}
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 md:text-sm">
                        {metric.unit}
                      </span>
                    </div>
                    <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'najami' && (
            <motion.div key="najami" {...tabTransition} className="mx-auto max-w-3xl">
              <PartnerCard
                partner={najami}
                imageSrc={PARTNER_IMAGES.najami}
                initials={PARTNER_INITIALS.najami}
              />
            </motion.div>
          )}

          {activeTab === 'zatout' && (
            <motion.div key="zatout" {...tabTransition} className="mx-auto max-w-3xl">
              <PartnerCard
                partner={zatout}
                imageSrc={PARTNER_IMAGES.zatout}
                initials={PARTNER_INITIALS.zatout}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

interface PartnerCardProps {
  partner: {
    name: string;
    role: string;
    expertise: string;
    description: string;
  };
  imageSrc: string;
  initials: string;
}

function PartnerCard({ partner, imageSrc, initials }: PartnerCardProps) {
  return (
    <article className="overflow-hidden border border-slate-100 border-s-4 border-s-[#1a2d4a] bg-white shadow-md">
      <IndustrialImage
        src={imageSrc}
        alt={partner.name}
        overlay="light"
        className="h-48 md:h-56"
      />
      <div className="p-8 md:p-10">
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-100 bg-slate-50 font-mono text-lg font-black text-[#1a2d4a]">
            {initials}
          </div>
          <div>
            <span className="industrial-label block">{partner.name}</span>
            <h3 className="text-base font-black uppercase tracking-wide text-voltix-900 md:text-lg">
              {partner.role}
            </h3>
          </div>
        </div>
        <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-[#1a2d4a]">
          {partner.expertise}
        </p>
        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
          {partner.description}
        </p>
      </div>
    </article>
  );
}
