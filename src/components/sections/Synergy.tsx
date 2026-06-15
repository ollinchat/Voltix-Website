import { motion } from 'framer-motion';
import { images } from '../../data/images';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { GlassPanel } from '../ui/GlassPanel';
import { IndustrialImage } from '../ui/IndustrialImage';
import { SectionHeading } from '../ui/SectionHeading';

const PARTNER_IMAGES = [images.synergy.najami, images.synergy.zatout];

export function Synergy() {
  const { t } = useI18n();

  return (
    <section id="synergy" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading
          label={t.synergy.label}
          title={t.synergy.title}
          subtitle={t.synergy.subtitle}
        />

        <AnimateOnScroll>
          <div className="relative mb-16 border border-voltix-200 bg-slate-50 p-8 shadow-panel md:p-12">
            <span className="industrial-label relative mb-10 block text-center">
              {t.synergy.combinedPower}
            </span>

            <div className="relative grid gap-4 md:grid-cols-3">
              {t.synergy.metrics.map((metric, i) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="group border border-voltix-200 bg-white p-8 text-center shadow-panel md:p-10"
                >
                  <div className="mb-2 flex items-baseline justify-center gap-2">
                    <span className="font-mono text-4xl font-black text-voltix-600 md:text-5xl lg:text-6xl">
                      {metric.value}
                    </span>
                    <span className="font-mono text-sm font-bold uppercase tracking-widest text-voltix-500">
                      {metric.unit}
                    </span>
                  </div>
                  <div className="mx-auto mt-4 h-px w-12 bg-voltix-300 group-hover:w-24 group-hover:bg-voltix-600 transition-all duration-500" />
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-voltix-500">
                    {metric.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        <div className="relative grid gap-8 lg:grid-cols-2">
          <div className="pointer-events-none absolute start-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block [dir=rtl]:translate-x-1/2">
            <GlassPanel strong className="flex h-20 w-20 flex-col items-center justify-center">
              <span className="font-mono text-[8px] uppercase tracking-widest text-voltix-500">JV</span>
              <span className="font-mono text-xl font-black text-voltix-600">+</span>
            </GlassPanel>
          </div>

          {t.synergy.partners.map((partner, i) => (
            <AnimateOnScroll
              key={partner.name}
              delay={i * 0.12}
              direction={i === 0 ? 'right' : 'left'}
            >
              <GlassPanel strong className="relative h-full overflow-hidden p-0">
                <IndustrialImage
                  src={PARTNER_IMAGES[i]}
                  alt={partner.name}
                  overlay="light"
                  className="h-48"
                />
                <div className="relative p-8 md:p-10">
                  <div className="absolute start-0 top-0 h-1 w-20 bg-voltix-600" />
                  <div className="mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center border border-voltix-200 bg-voltix-50 font-mono text-xl font-black text-voltix-600">
                      {i === 0 ? 'SN' : 'CZ'}
                    </div>
                    <div>
                      <span className="industrial-label block">{partner.name}</span>
                      <h3 className="text-lg font-black uppercase tracking-wide text-voltix-900">
                        {partner.role}
                      </h3>
                    </div>
                  </div>
                  <p className="mb-5 font-mono text-[10px] uppercase tracking-widest text-voltix-500">
                    {partner.expertise}
                  </p>
                  <p className="text-sm leading-relaxed text-voltix-600 md:text-base">
                    {partner.description}
                  </p>
                </div>
              </GlassPanel>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={0.25}>
          <div className="mt-12 border border-voltix-200 bg-voltix-600 p-6 text-center md:p-8">
            <p className="font-mono text-sm uppercase tracking-industrial text-white md:text-base">
              {t.synergy.equation}
            </p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
