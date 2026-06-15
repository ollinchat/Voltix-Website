import { useI18n } from '../../i18n';
import { synergyVideo, synergyVideoPoster } from '../../data/videos';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';

export function Synergy() {
  const { t } = useI18n();

  return (
    <section id="synergy" className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <AnimateOnScroll>
          <header className="mb-12 text-center md:mb-16">
            <span className="industrial-label mb-4 block">{t.synergy.label}</span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-4xl">
              {t.synergy.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              {t.synergy.subtitle}
            </p>
          </header>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.08}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-900 shadow-xl">
                <video
                  className="aspect-video w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={synergyVideoPoster}
                  preload="metadata"
                >
                  <source src={synergyVideo} type="video/mp4" />
                </video>
              </div>
              <div
                className="pointer-events-none absolute -bottom-4 -end-4 hidden h-24 w-24 border border-slate-200 bg-white/80 lg:block"
                aria-hidden
              />
            </div>

            <div className="relative border border-slate-100 border-s-4 border-s-[#1a2d4a] bg-white p-8 shadow-md md:p-10 lg:order-2">
              <span className="industrial-label mb-5 block">Strategic Alliance</span>
              <h3 className="text-2xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-3xl">
                {t.synergy.alliance.heading}
              </h3>
              <div className="my-6 h-px w-16 bg-[#1a2d4a]" />
              <p className="text-sm leading-relaxed text-slate-600 md:text-base md:leading-[1.85]">
                {t.synergy.alliance.body}
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
