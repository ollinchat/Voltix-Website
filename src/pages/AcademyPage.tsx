import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Footer } from '../components/layout/Footer';
import { Header } from '../components/layout/Header';
import { images } from '../data/images';
import { navigate } from '../lib/navigation';

const onboardingSteps = [
  {
    title: 'Step 1: Welcome Guide',
    description:
      'Onboarding into Voltix work ethics, execution discipline, and client delivery standards from day one.',
  },
  {
    title: 'Step 2: Video Training',
    description:
      'Comprehensive safety protocol simulations covering hazards identification, controls, and operational response.',
  },
  {
    title: 'Step 3: Professional Certification Training',
    description:
      'Rigorous internal testing and re-professionalization pathways aligned to company certification requirements.',
  },
  {
    title: 'Step 4: External Technical Training',
    description:
      'National and regional compliance certifications for every site assignment and legal operating framework.',
  },
  {
    title: 'Step 5: Daily Toolbox Insights',
    description:
      'Morning safety alignment briefs with weekly technical summaries and executive management directives.',
  },
  {
    title: 'Step 6: Mentoring and Knowledge Support',
    description:
      'Structured video-based reinforcement and direct field support to accelerate competency for each role.',
  },
  {
    title: 'Step 7: Knowledge Validation',
    description:
      'Mandatory weekly American-style proficiency checks to map strengths, close gaps, and certify readiness.',
  },
  {
    title: 'Step 8: One-on-One Mentorship Integration',
    description:
      'Automated mentor matching links specialists with any personnel requiring targeted active support.',
  },
] as const;

const honors = [
  'Safety Week Excellence recognition',
  'Project Distinction awards across strategic mandates',
  'Monthly performance stars and yearly achievement honors',
] as const;

const compliance = ['ISO 9001', 'ISO 14001', 'ISO 27001'] as const;

const languages = ['English', 'Hebrew', 'Arabic', 'Russian'] as const;

export function AcademyPage() {
  useEffect(() => {
    window.document.title = 'VOLTIX Academy — Industrial Training Infrastructure';
    window.scrollTo(0, 0);

    return () => {
      window.document.title = 'VOLTIX — Industrial EPC Joint Venture';
    };
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white pt-24">
        <div className="absolute inset-0 blueprint-grid opacity-45" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
          <div className="mb-8 md:mb-12">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="focus-ring inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-slate-500 transition-colors hover:text-[#1a2d4a]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to Home
            </button>
          </div>

          <motion.section
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mb-12 border border-slate-100 bg-slate-50 p-8 shadow-md md:mb-16 md:p-12"
          >
            <span className="industrial-label mb-4 block">03 - Academy</span>
            <h1 className="text-3xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-5xl">
              Voltix Academy
            </h1>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-600 md:text-lg">
              We recruit capabilities across all technical fields, molding new recruits into elite
              infrastructure professionals operating at international industrial standards.
            </p>
          </motion.section>

          <section className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3 md:mb-16">
            {onboardingSteps.map((step, index) => (
              <article
                key={step.title}
                className="border border-slate-100 border-s-4 border-s-[#1a2d4a] bg-white p-6 shadow-md md:p-7"
              >
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Module {String(index + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-3 text-lg font-black uppercase leading-tight tracking-wide text-[#1a2d4a]">
                  {step.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  {step.description}
                </p>
              </article>
            ))}
          </section>

          <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <article className="border border-slate-100 bg-white p-8 shadow-md md:p-10">
              <h2 className="text-2xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-3xl">
                Safety, Honors, and Compliance
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base md:leading-[1.85]">
                Voltix Academy sustains a disciplined safety culture through recurring audits,
                recognition frameworks, and measurable capability progression aligned with
                international management standards.
              </p>

              <ul className="mt-6 space-y-3">
                {honors.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-600 md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 bg-[#1a2d4a]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                {compliance.map((standard) => (
                  <span
                    key={standard}
                    className="border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#1a2d4a]"
                  >
                    {standard}
                  </span>
                ))}
              </div>
            </article>

            <article className="border border-slate-100 bg-white p-8 shadow-md md:p-10">
              <div className="overflow-hidden border border-slate-100 bg-slate-100">
                <img
                  src={images.about}
                  alt="Voltix Academy workforce development"
                  className="h-48 w-full object-cover md:h-56"
                />
              </div>

              <h2 className="mt-7 text-xl font-black uppercase tracking-wide text-[#1a2d4a] md:text-2xl">
                Workplace Diversity Framework
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base md:leading-[1.85]">
                Global integration is embedded into academy operations through multilingual manuals
                and communication protocols that support every worker at the point of execution.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {languages.map((language) => (
                  <div
                    key={language}
                    className="border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600"
                  >
                    {language}
                  </div>
                ))}
              </div>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
