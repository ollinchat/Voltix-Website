import { CREDIBILITY_PROFILES, type CredibilityPartnerId } from '../../data/credibility';
import { images } from '../../data/images';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';

const PARTNER_ORDER: CredibilityPartnerId[] = ['najami', 'zatout'];

function RankingBadges() {
  return (
    <div className="mb-4 inline-flex items-center gap-3 self-start rounded-lg border border-slate-200/60 bg-slate-50 px-3 py-2">
      <img
        src={images.credibility.duns100}
        alt="DUNS 100 — The Standard of Achievement"
        className="h-9 w-auto object-contain object-left"
      />
      <img
        src={images.credibility.bdiCode2026}
        alt="BDi CODE 2026 — Leading Companies"
        className="h-9 w-auto object-contain object-left"
      />
    </div>
  );
}

const profileButtonBase =
  'focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-center font-mono text-[10px] font-semibold uppercase tracking-widest transition-colors md:text-xs';

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
            const profiles = CREDIBILITY_PROFILES[partnerId];

            return (
              <AnimateOnScroll key={partnerId} delay={i * 0.1}>
                <article className="flex h-full flex-col border border-slate-100 border-s-4 border-s-[#1a2d4a] bg-white p-8 shadow-md">
                  <RankingBadges />
                  <h3 className="mb-4 text-xl font-black uppercase tracking-wide text-[#1a2d4a] md:text-2xl">
                    {partner.name}
                  </h3>
                  <p className="mb-8 flex-1 text-sm leading-relaxed text-slate-600 md:text-base">
                    {partner.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href={profiles.duns}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${profileButtonBase} bg-[#1a2d4a] text-white hover:bg-[#152238]`}
                    >
                      {t.credibility.dunsProfile}
                      <span aria-hidden className="[dir=rtl]:rotate-180">
                        &rarr;
                      </span>
                    </a>
                    <a
                      href={profiles.bdi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${profileButtonBase} border border-slate-200 bg-white text-[#1a2d4a] hover:border-[#1a2d4a] hover:bg-slate-50`}
                    >
                      {t.credibility.bdiProfile}
                      <span aria-hidden className="[dir=rtl]:rotate-180">
                        &rarr;
                      </span>
                    </a>
                  </div>
                </article>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
