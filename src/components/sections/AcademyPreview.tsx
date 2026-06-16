import { images } from '../../data/images';
import { navigate } from '../../lib/navigation';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';

const previewMilestones = [
  'Welcome and ethics alignment',
  'Safety video simulation track',
  'Certification and compliance labs',
  'Mentorship and validation cycle',
];

export function AcademyPreview() {
  return (
    <section id="academy" className="relative overflow-hidden bg-slate-50 py-16 md:py-20">
      <div className="absolute inset-0 blueprint-grid opacity-50" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <AnimateOnScroll>
          <header className="mb-10 md:mb-12">
            <span className="industrial-label mb-4 block">03 - Academy</span>
            <h2 className="text-3xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-4xl">
              Voltix Academy
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
              We recruit capabilities across all technical fields, molding new recruits into elite
              infrastructure professionals operating at international industrial standards.
            </p>
          </header>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.08}>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="border border-slate-100 border-s-4 border-s-[#1a2d4a] bg-white p-8 shadow-md md:p-10">
              <div className="mb-7 flex items-end justify-between gap-6 border-b border-slate-100 pb-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                    Core Metric
                  </p>
                  <p className="mt-2 text-3xl font-black text-[#1a2d4a] md:text-4xl">
                    600+ Certified Professionals
                  </p>
                </div>
                <img
                  src={images.about}
                  alt="Voltix Academy training facility"
                  className="h-20 w-28 border border-slate-200 object-cover"
                />
              </div>

              <p className="mb-4 font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Operational Timeline
              </p>
              <ul className="space-y-3">
                {previewMilestones.map((item, index) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#1a2d4a]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-100 bg-white p-8 shadow-md md:p-10">
              <h3 className="text-2xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-3xl">
                Build Industrial Excellence at Scale
              </h3>
              <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base md:leading-[1.85]">
                Voltix Academy is the human capital engine behind every execution mandate. From
                onboarding and technical qualification to compliance validation and live mentoring,
                the academy framework turns workforce readiness into measurable delivery certainty.
              </p>
              <button
                type="button"
                onClick={() => navigate('/academy')}
                className="focus-ring mt-8 inline-flex items-center gap-2 border border-[#1a2d4a] bg-[#1a2d4a] px-5 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#152238]"
              >
                Explore Academy Infrastructure
                <span aria-hidden>&rarr;</span>
              </button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
