import { useI18n } from '../../i18n';
import { navigate } from '../../lib/navigation';
import { Logo } from '../ui/Logo';

export function Footer() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'synergy', label: t.nav.synergy },
    { id: 'projects', label: t.nav.projects },
    { id: 'portfolio', label: t.nav.portfolio },
  ];

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-12 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr] md:gap-16">
          <div>
            <Logo className="mb-6" />
            <p className="max-w-xs text-sm leading-relaxed text-slate-600">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="industrial-label mb-4">{t.footer.columns.navigation}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.id)}
                    className="focus-ring text-sm text-slate-600 transition-colors hover:text-[#1a2d4a]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="industrial-label mb-4">{t.footer.columns.legal}</h4>
            <ul className="space-y-2">
              <li>
                <span className="cursor-pointer text-sm text-slate-600 transition-colors hover:text-[#1a2d4a]">
                  {t.footer.columns.privacy}
                </span>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => navigate('/legal')}
                  className="focus-ring text-sm text-slate-600 transition-colors hover:text-[#1a2d4a]"
                >
                  {t.footer.columns.terms}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 md:flex-row">
          <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
            {t.footer.copyright}
          </p>
          <div className="flex gap-1">
            {['82K', '15K', 'EPC'].map((tag) => (
              <span
                key={tag}
                className="rounded border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[9px] text-[#1a2d4a]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
