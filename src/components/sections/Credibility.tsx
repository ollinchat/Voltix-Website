import { useI18n } from '../../i18n';
import { DUNS_PROFILE_URLS, type CredibilityPartnerId } from '../../data/credibility';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';

const PARTNER_ORDER: CredibilityPartnerId[] = ['najami', 'zatout'];

function DunsBadge() {
  return (
    <div
      className="mb-6 inline-flex items-stretch overflow-hidden border border-[#003366] shadow-sm"
      aria-label="DUNS 100 ranked enterprise"
    >
      <div className="flex items-center bg-[#003366] px-3 py-2">
        <span className="font-serif text-lg font-bold leading-none tracking-tight text-[#C5A028]">
          D&amp;B
        </span>
      </div>
      <div className="flex flex-col justify-center bg-gradient-to-r from-[#003366] to-[#004C8C] px-3 py-1.5">
        <span className="font-mono text-[9px] font-semibold uppercase leading-tight tracking-[0.2em] text-white/90">
          DUNS
        </span>
        <span className="font-mono text-sm font-black leading-none tracking-wide text-[#C5A028]">
          100
        </span>
      </div>
    </div>
  );
}

export function Credibility() {
  const { t } = useI18n();

  return (
    <section id="credibility" className="section-alt relative py-12 md:py-16">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <AnimateOnScroll>
          <header className="mb-12 text-center md:mb-14">
            <span className="industrial-label mb-4 block">{t.credibility.label}</span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-4xl">
              {t.credibility.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              {t.credibility.subtitle}
            </p>
          </header>
        </AnimateOnScroll>

        <div className="grid gap-8 md:grid-cols-2">
          {PARTNER_ORDER.map((partnerId, i) => {
            const partner = t.credibility.partners[partnerId];
            return (
              <AnimateOnScroll key={partnerId} delay={i * 0.1}>
                <article className="flex h-full flex-col border border-slate-100 border-s-4 border-s-[#1a2d4a] bg-white p-8 shadow-md md:p-10">
                  <DunsBadge />
                  <h3 className="mb-4 text-xl font-black uppercase tracking-wide text-[#1a2d4a] md:text-2xl">
                    {partner.name}
                  </h3>
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                    {partner.description}
                  </p>
                  <a
                    href={DUNS_PROFILE_URLS[partnerId]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring inline-flex items-center gap-2 border border-slate-200 bg-slate-50 px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#1a2d4a] transition-colors hover:border-[#1a2d4a] hover:bg-white md:text-xs"
                  >
                    {t.credibility.viewProfile}
                    <span aria-hidden className="[dir=rtl]:rotate-180">
                      &rarr;
                    </span>
                  </a>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
