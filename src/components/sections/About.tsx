import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { GlassPanel } from '../ui/GlassPanel';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="relative section-padding section-alt">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-[1600px]">
        <AnimateOnScroll>
          <div className="mb-16 max-w-5xl lg:mb-20">
            <span className="industrial-label mb-6 block">{t.about.label}</span>
            <h2 className="mb-8 whitespace-pre-line text-5xl font-black uppercase leading-[0.92] tracking-wide text-voltix-900 sm:text-6xl md:text-7xl lg:text-8xl">
              {t.about.title}
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-voltix-500 md:text-xl">
              {t.about.subtitle}
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.08}>
          <div className="blueprint-frame mb-16 max-w-4xl border border-voltix-200 bg-white p-8 shadow-panel md:mb-20 md:p-10 lg:p-12">
            <p className="mb-6 text-lg leading-relaxed text-voltix-800 md:text-xl">
              {t.about.description}
            </p>
            <p className="border-s-2 border-voltix-600 ps-6 text-sm leading-relaxed text-voltix-500 md:text-base">
              {t.about.narrative}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mb-16 grid grid-cols-2 gap-4 md:mb-20 lg:grid-cols-4">
          {t.about.stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.06}>
              <GlassPanel className="h-full p-6 md:p-8">
                <div className="font-mono text-3xl font-bold text-voltix-600 md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-voltix-500">
                  {stat.label}
                </div>
              </GlassPanel>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {t.about.pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 0.08}>
              <GlassPanel strong className="group h-full p-8 transition-shadow hover:shadow-card md:p-10">
                <div className="mb-5 flex items-center gap-4">
                  <span className="font-mono text-xs text-voltix-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-voltix-200 transition-colors group-hover:bg-voltix-600" />
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
    </section>
  );
}
