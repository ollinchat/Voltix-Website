import { motion } from 'framer-motion';
import { LOCALE_LABELS, LOCALES } from '../../i18n/config';
import { useI18n } from '../../i18n';
import type { Locale } from '../../i18n/types';

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-slate-200 bg-white p-0.5 shadow-sm"
      role="group"
      aria-label="Select language"
    >
      {LOCALES.map((code) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code as Locale)}
            className={`focus-ring relative rounded-full px-2.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-widest transition-colors sm:px-3 ${
              isActive
                ? 'bg-slate-100 text-[#1a2d4a]'
                : 'text-slate-500 hover:text-slate-700'
            }`}
            aria-pressed={isActive}
            aria-label={`Switch to ${LOCALE_LABELS[code]}`}
          >
            {LOCALE_LABELS[code]}
            {isActive && (
              <motion.span
                layoutId="locale-pill-indicator"
                className="absolute inset-x-2 -bottom-0.5 h-px bg-[#1a2d4a]"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
