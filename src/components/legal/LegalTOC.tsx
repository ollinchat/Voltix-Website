import type { LegalDocument } from '../../i18n/legal';

interface LegalTOCProps {
  legalDoc: LegalDocument;
  activeId: string;
}

export function LegalTOC({ legalDoc, activeId }: LegalTOCProps) {
  const scrollTo = (id: string) => {
    window.document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="sticky top-28 hidden lg:block"
      aria-label={legalDoc.meta.tableOfContents}
    >
      <span className="industrial-label mb-6 block">{legalDoc.meta.tableOfContents}</span>
      <ul className="space-y-1 border border-voltix-200 bg-white shadow-panel">
        <li>
          <button
            onClick={() => scrollTo('preamble')}
            className={`focus-ring block w-full border-b border-voltix-100 px-4 py-3 text-start font-mono text-[10px] uppercase tracking-widest transition-colors ${
              activeId === 'preamble'
                ? 'bg-voltix-50 text-voltix-600'
                : 'text-voltix-500 hover:bg-voltix-50 hover:text-voltix-700'
            }`}
          >
            {legalDoc.preamble.title}
          </button>
        </li>
        {legalDoc.sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollTo(section.id)}
              className={`focus-ring block w-full border-b border-voltix-100 px-4 py-3 text-start transition-colors last:border-b-0 ${
                activeId === section.id
                  ? 'bg-voltix-50 text-voltix-600'
                  : 'text-voltix-500 hover:bg-voltix-50 hover:text-voltix-700'
              }`}
            >
              <span className="font-mono text-[9px] text-voltix-400">{section.number}</span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-wide">
                {section.title}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
