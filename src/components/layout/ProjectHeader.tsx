import { motion, useScroll, useTransform } from 'framer-motion';
import { useI18n } from '../../i18n';
import { navigate, navigateToProjects } from '../../lib/navigation';
import { LanguageToggle } from '../ui/LanguageToggle';
import { Logo } from '../ui/Logo';

export function ProjectHeader() {
  const { t } = useI18n();
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
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <button onClick={() => navigate('/')} className="focus-ring" aria-label="Home">
          <Logo size="sm" />
        </button>

        <div className="flex items-center gap-4">
          <LanguageToggle />
          <button
            onClick={navigateToProjects}
            className="focus-ring border border-slate-200 px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-widest text-[#1a2d4a] transition-colors hover:border-[#1a2d4a] hover:bg-slate-50"
          >
            {t.projects.backToProjects}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
