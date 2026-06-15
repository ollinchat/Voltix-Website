import { useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LegalSection } from '../components/legal/LegalSection';
import { LegalTOC } from '../components/legal/LegalTOC';
import { LegalHeader } from '../components/layout/LegalHeader';
import { useI18n } from '../i18n';
import { getLegalDocument } from '../i18n/legal';
import { useLegalScrollSpy } from '../hooks/useLegalScrollSpy';

export function LegalPage() {
  const { locale } = useI18n();
  const legalDoc = getLegalDocument(locale);

  const sectionIds = useMemo(
    () => ['preamble', ...legalDoc.sections.map((s) => s.id)],
    [legalDoc.sections],
  );

  const activeId = useLegalScrollSpy(sectionIds);

  useEffect(() => {
    window.document.title = `${legalDoc.meta.pageTitle} — VOLTIX`;
    return () => {
      window.document.title = 'VOLTIX — Industrial EPC Joint Venture';
    };
  }, [legalDoc.meta.pageTitle]);

  return (
    <>
      <LegalHeader />

      <main className="min-h-screen bg-white pt-20">
        <div className="absolute inset-0 blueprint-grid opacity-50" />

        <div className="relative section-padding">
          <div className="mx-auto max-w-[1600px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 border border-voltix-200 bg-slate-50 p-8 shadow-panel md:p-12"
            >
              <span className="industrial-label mb-4 block">LEGAL / DOC-001</span>
              <h1 className="mb-4 text-3xl font-black uppercase tracking-wide text-voltix-900 md:text-4xl lg:text-5xl">
                {legalDoc.meta.documentTitle}
              </h1>
              <div className="flex flex-wrap gap-6 font-mono text-[10px] uppercase tracking-widest text-voltix-500">
                <span>{legalDoc.meta.lastUpdated}</span>
                <span>{legalDoc.meta.effectiveDate}</span>
              </div>
            </motion.div>

            <div className="mb-12 border border-voltix-200 bg-voltix-50 p-6 md:p-8">
              <p className="text-sm leading-[1.85] text-voltix-700 md:text-[15px]">
                {legalDoc.meta.disclaimer}
              </p>
            </div>

            <div className="mb-8 flex gap-2 overflow-x-auto border border-voltix-200 bg-white p-2 lg:hidden">
              <button
                onClick={() =>
                  window.document.getElementById('preamble')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="focus-ring shrink-0 px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-voltix-600"
              >
                {legalDoc.preamble.title}
              </button>
              {legalDoc.sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() =>
                    window.document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className={`focus-ring shrink-0 px-3 py-2 font-mono text-[9px] uppercase tracking-widest ${
                    activeId === s.id ? 'bg-voltix-50 text-voltix-600' : 'text-voltix-500'
                  }`}
                >
                  {s.number} {s.title}
                </button>
              ))}
            </div>

            <div className="grid gap-12 lg:grid-cols-[280px_1fr] lg:gap-16">
              <LegalTOC legalDoc={legalDoc} activeId={activeId} />

              <div className="min-w-0">
                <section
                  id="preamble"
                  className="scroll-mt-32 mb-12 border-b border-voltix-200 pb-12"
                >
                  <h2 className="mb-6 text-2xl font-black uppercase tracking-wide text-voltix-900">
                    {legalDoc.preamble.title}
                  </h2>
                  <div className="space-y-4">
                    {legalDoc.preamble.paragraphs.map((paragraph, i) => (
                      <p key={i} className="text-sm leading-[1.85] text-voltix-800 md:text-base">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>

                {legalDoc.sections.map((section, index) => (
                  <LegalSection key={section.id} section={section} index={index} />
                ))}

                <div className="mt-16 border border-voltix-200 bg-slate-50 p-6 text-center md:p-8">
                  <p className="font-mono text-[10px] uppercase tracking-industrial text-voltix-600">
                    VOLTIX — Najami · Zatout Joint Venture — Legal Directorate
                  </p>
                  <p className="mt-2 font-mono text-[10px] text-voltix-500">
                    {legalDoc.meta.effectiveDate}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
