import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { GlassPanel } from '../ui/GlassPanel';

export function About() {
  const { t } = useI18n();

  return (
    <section id="about" className="section-alt relative py-12 md:py-16">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-12">
        <AnimateOnScroll>
          <div className="mb-10">
            <span className="industrial-label mb-4 block">{t.about.label}</span>
            <h2 className="whitespace-pre-line text-3xl font-black uppercase leading-tight tracking-wide text-voltix-900 md:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
              {t.about.description}
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mb-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {t.about.stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 0.05}>
              <GlassPanel className="h-full p-5 md:p-6">
                <div className="font-mono text-2xl font-bold text-voltix-600 md:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-widest text-voltix-500">
                  {stat.label}
                </div>
              </GlassPanel>
            </AnimateOnScroll>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {t.about.pillars.map((pillar, i) => (
            <AnimateOnScroll key={pillar.title} delay={i * 0.06}>
              <GlassPanel strong className="group h-full p-6 md:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-xs text-voltix-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-voltix-200 transition-colors group-hover:bg-voltix-600" />
                </div>
                <h3 className="mb-2 text-base font-black uppercase tracking-wide text-voltix-900 md:text-lg">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-voltix-500">
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
