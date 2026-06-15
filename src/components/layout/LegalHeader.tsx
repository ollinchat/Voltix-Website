import { motion, useScroll, useTransform } from 'framer-motion';
import { useI18n } from '../../i18n';
import { getLegalDocument } from '../../i18n/legal';
import { navigate } from '../../lib/navigation';
import { LanguageToggle } from '../ui/LanguageToggle';
import { Logo } from '../ui/Logo';

export function LegalHeader() {
  const { locale } = useI18n();
  const legalDoc = getLegalDocument(locale);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 60], ['rgba(255,255,255,0.95)', 'rgba(255,255,255,0.98)']);
  const headerBorder = useTransform(
    scrollY,
    [0, 60],
    ['rgba(26,45,74,0.08)', 'rgba(26,45,74,0.12)'],
  );

  return (
    <motion.header
      style={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20">
        <button onClick={() => navigate('/')} className="focus-ring" aria-label="Home">
          <Logo size="sm" />
        </button>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <button
            onClick={() => navigate('/')}
            className="focus-ring border border-voltix-200 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-widest text-voltix-600 transition-colors hover:border-voltix-600 hover:bg-voltix-50"
          >
            ← {legalDoc.meta.backToSite}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
