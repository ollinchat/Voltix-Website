import { images } from '../../data/images';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { GlassPanel } from '../ui/GlassPanel';
import { IndustrialImage } from '../ui/IndustrialImage';
import { SectionHeading } from '../ui/SectionHeading';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative section-padding section-alt">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading
          label={t.about.label}
          title={t.about.title}
          subtitle={t.about.subtitle}
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <AnimateOnScroll>
            <IndustrialImage
              src={images.about}
              alt="VOLTIX manufacturing facility"
              overlay="light"
              className="mb-10 h-64 border border-voltix-200 shadow-card md:h-80"
            />

            <div className="blueprint-frame mb-10 border border-voltix-200 bg-white p-8 shadow-panel md:p-10">
              <p className="mb-6 text-lg leading-relaxed text-voltix-800 md:text-xl">
                {t.about.description}
              </p>
              <p className="border-s-2 border-voltix-600 ps-6 text-sm leading-relaxed text-voltix-500 md:text-base">
                {t.about.narrative}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {t.about.stats.map((stat, i) => (
                <GlassPanel
                  key={stat.label}
                  className="p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <div className="font-mono text-3xl font-bold text-voltix-600 md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-voltix-500">
                    {stat.label}
                  </div>
                </GlassPanel>
              ))}
            </div>
          </AnimateOnScroll>

          <div className="flex flex-col gap-4">
            {t.about.pillars.map((pillar, i) => (
              <AnimateOnScroll key={pillar.title} delay={i * 0.1}>
                <GlassPanel strong className="group p-8 transition-shadow hover:shadow-card md:p-10">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="font-mono text-xs text-voltix-600">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-voltix-200 group-hover:bg-voltix-600 transition-colors" />
                  </div>
                  <h3 className="mb-3 text-xl font-black uppercase tracking-wide text-voltix-900">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-voltix-500 md:text-base">
                    {pillar.description}
                  </p>
                </GlassPanel>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
