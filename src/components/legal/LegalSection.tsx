import { motion } from 'framer-motion';
import type { LegalSection as LegalSectionType } from '../../i18n/legal';

interface LegalSectionProps {
  section: LegalSectionType;
  index: number;
}

export function LegalSection({ section, index }: LegalSectionProps) {
  return (
    <motion.section
      id={section.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="scroll-mt-32 border-b border-voltix-200 pb-12 last:border-b-0"
    >
      <div className="mb-6 flex items-center gap-4">
        <span className="font-mono text-xs text-voltix-600">{section.number}</span>
        <div className="h-px flex-1 bg-voltix-200" />
      </div>

      <h2 className="mb-6 text-2xl font-black uppercase tracking-wide text-voltix-900 md:text-3xl">
        {section.title}
      </h2>

      <div className="space-y-4">
        {section.paragraphs.map((paragraph, i) => (
          <p key={i} className="text-sm leading-[1.85] text-voltix-800 md:text-base">
            {paragraph}
          </p>
        ))}
      </div>

      {section.clauses && section.clauses.length > 0 && (
        <div className="mt-8 space-y-6 border-s-2 border-voltix-600/20 ps-6 md:ps-8">
          {section.clauses.map((clause) => (
            <div key={clause.label}>
              <h3 className="mb-2 font-mono text-[11px] font-semibold uppercase tracking-widest text-voltix-600">
                {clause.label}
              </h3>
              <p className="text-sm leading-[1.85] text-voltix-700 md:text-[15px]">
                {clause.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
