import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';

export function LanguageToggle() {
  const { locale, toggleLocale } = useI18n();

  return (
    <button
      onClick={toggleLocale}
      className="focus-ring flex items-center gap-1 border border-voltix-200 bg-white px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-widest text-voltix-600 transition-colors hover:border-voltix-600 hover:bg-voltix-50"
      aria-label={locale === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
    >
      <motion.span
        key={locale}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {locale === 'en' ? 'HE' : 'EN'}
      </motion.span>
    </button>
  );
}
