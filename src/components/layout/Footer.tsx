import { useI18n } from '../../i18n';
import { navigate } from '../../lib/navigation';
import { Logo } from '../ui/Logo';

const columnHeading =
  'mb-4 text-xs font-semibold uppercase tracking-wider text-slate-900';

export function Footer() {
  const { t } = useI18n();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo size="xs" />
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-slate-500">
              {t.footer.brandDescription}
            </p>
          </div>

          <div>
            <h4 className={columnHeading}>{t.footer.columns.headquarters}</h4>
            <address className="space-y-1 text-sm not-italic leading-relaxed text-slate-600">
              <p>{t.footer.columns.addressLine1}</p>
              <p>{t.footer.columns.addressLine2}</p>
            </address>
          </div>

          <div>
            <h4 className={columnHeading}>{t.footer.columns.commercial}</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {t.footer.columns.telLabel}:{' '}
                </span>
                <a
                  href={`tel:${t.footer.columns.phone.replace(/\s/g, '')}`}
                  className="transition-colors hover:text-[#1a2d4a]"
                >
                  {t.footer.columns.phone}
                </a>
              </li>
              <li>
                <span className="text-xs font-medium uppercase tracking-wide text-slate-500">
                  {t.footer.columns.emailLabel}:{' '}
                </span>
                <a
                  href={`mailto:${t.footer.columns.email}`}
                  className="transition-colors hover:text-[#1a2d4a]"
                >
                  {t.footer.columns.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={columnHeading}>{t.footer.columns.navigation}</h4>
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
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 pb-8 text-xs text-slate-400 md:flex-row">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate('/legal')}
              className="focus-ring transition-colors hover:text-slate-600"
            >
              {t.footer.columns.privacy}
            </button>
            <span aria-hidden="true" className="text-slate-300">
              |
            </span>
            <button
              type="button"
              onClick={() => navigate('/terms')}
              className="focus-ring transition-colors hover:text-slate-600"
            >
              {t.footer.columns.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
