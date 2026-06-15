import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { useI18n } from '../../i18n';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { LanguageToggle } from '../ui/LanguageToggle';
import { Logo } from '../ui/Logo';

const SECTION_IDS = ['about', 'synergy', 'projects', 'team', 'portfolio', 'credibility', 'contact'];

export function Header() {
  const { t } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);
  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 80], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)']);
  const headerBorder = useTransform(
    scrollY,
    [0, 80],
    ['rgba(26,45,74,0)', 'rgba(26,45,74,0.1)'],
  );

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'synergy', label: t.nav.synergy },
    { id: 'projects', label: t.nav.projects },
    { id: 'team', label: t.nav.team },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'credibility', label: t.nav.credibility },
  ];

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      style={{ backgroundColor: headerBg, borderBottomColor: headerBorder }}
      className="fixed inset-x-0 top-0 z-50 border-b border-transparent backdrop-blur-md"
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20">
        <button onClick={() => scrollTo('hero')} className="focus-ring" aria-label="Home">
          <Logo size="sm" />
        </button>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`focus-ring relative px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-widest transition-colors ${
                activeId === item.id
                  ? 'text-voltix-600'
                  : 'text-voltix-500 hover:text-voltix-800'
              }`}
            >
              {item.label}
              {activeId === item.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-3 -bottom-px h-px bg-voltix-600"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <button
            onClick={() => scrollTo('contact')}
            className="focus-ring border border-voltix-600 bg-voltix-600 px-5 py-2.5 font-mono text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:border-voltix-hover hover:bg-voltix-hover"
          >
            {t.nav.joinUs}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus-ring flex flex-col gap-1.5 p-2 xl:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block h-px w-6 bg-voltix-600 transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-voltix-600 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-voltix-600 transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <motion.nav
        initial={false}
        animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
        className="overflow-hidden border-t border-voltix-200 bg-white xl:hidden"
      >
        <div className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="focus-ring border-b border-voltix-100 py-4 text-start font-mono text-xs uppercase tracking-widest text-voltix-600 hover:text-voltix-900"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('contact')}
            className="focus-ring mt-4 border border-voltix-600 bg-voltix-600 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white"
          >
            {t.nav.joinUs}
          </button>
        </div>
      </motion.nav>
    </motion.header>
  );
}
