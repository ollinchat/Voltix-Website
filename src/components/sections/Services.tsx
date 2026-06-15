import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../../data/images';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { IndustrialImage } from '../ui/IndustrialImage';
import { SectionHeading } from '../ui/SectionHeading';

const serviceIcons = ['EPC', 'STL', 'PLN'];
const serviceImages = [images.services.epc, images.services.steel, images.services.pipeline];

export function Services() {
  const { t } = useI18n();
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="relative section-padding section-alt">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading
          label={t.services.label}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {t.services.items.map((item, i) => (
            <AnimateOnScroll key={item.code} delay={i * 0.1}>
              <motion.button
                onClick={() => setActive(i)}
                className={`focus-ring group relative w-full overflow-hidden border text-start shadow-panel transition-all ${
                  active === i
                    ? 'border-voltix-600 bg-white shadow-card'
                    : 'border-voltix-200 bg-white hover:border-voltix-hover'
                }`}
                whileHover={{ y: active === i ? 0 : -2 }}
                transition={{ duration: 0.25 }}
              >
                <IndustrialImage
                  src={serviceImages[i]}
                  alt={item.title}
                  overlay="light"
                  className="h-32"
                />
                <div className="p-6 md:p-8">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-widest text-voltix-500">
                      {item.code}
                    </span>
                    <span
                      className={`font-mono text-xs font-bold ${
                        active === i ? 'text-voltix-600' : 'text-voltix-300'
                      }`}
                    >
                      {serviceIcons[i]}
                    </span>
                  </div>
                  <h3
                    className={`mb-3 text-2xl font-black uppercase tracking-wide transition-colors ${
                      active === i ? 'text-voltix-900' : 'text-voltix-600'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div
                    className={`h-px w-full transition-colors ${
                      active === i ? 'bg-voltix-600' : 'bg-voltix-200'
                    }`}
                  />
                  {active === i && (
                    <motion.div
                      layoutId="service-active-bar"
                      className="absolute inset-x-0 top-0 h-1 bg-voltix-600"
                    />
                  )}
                </div>
              </motion.button>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.15}>
          <div className="mt-8 border border-voltix-200 bg-white shadow-card">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                className="grid gap-8 p-8 md:grid-cols-2 md:p-12"
              >
                <div>
                  <span className="industrial-label mb-4 block">
                    {t.services.items[active].code}
                  </span>
                  <h3 className="mb-4 text-3xl font-black uppercase tracking-wide text-voltix-900">
                    {t.services.items[active].title}
                  </h3>
                  <p className="text-base leading-relaxed text-voltix-600">
                    {t.services.items[active].description}
                  </p>
                </div>
                <div className="border border-voltix-200 bg-slate-50 p-6">
                  <span className="industrial-label mb-4 block">CAPABILITIES</span>
                  <ul className="space-y-3">
                    {t.services.items[active].capabilities.map((cap, ci) => (
                      <motion.li
                        key={cap}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: ci * 0.06 }}
                        className="flex items-center gap-3 font-mono text-xs text-voltix-700"
                      >
                        <span className="h-1 w-1 bg-voltix-600" />
                        {cap}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
