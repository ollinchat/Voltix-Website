import { useEffect, useRef, useState } from 'react';
import { LOCALE_LABELS, LOCALES } from '../../i18n/config';
import { useI18n } from '../../i18n';
import type { Locale } from '../../i18n/types';

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const otherLocales = LOCALES.filter((code) => code !== locale);

  const selectLocale = (code: Locale) => {
    setLocale(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="focus-ring inline-flex min-w-[3.25rem] items-center justify-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-2 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#1a2d4a] shadow-sm transition-colors hover:border-slate-300 hover:bg-slate-50"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
      >
        {LOCALE_LABELS[locale]}
        <svg
          className={`h-3 w-3 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          aria-label="Language options"
          className="absolute end-0 z-50 mt-2 min-w-[4.5rem] overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg"
        >
          {otherLocales.map((code) => (
            <button
              key={code}
              type="button"
              role="option"
              onClick={() => selectLocale(code)}
              className="focus-ring block w-full px-4 py-2.5 text-start font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-600 transition-colors hover:bg-slate-50 hover:text-[#1a2d4a]"
            >
              {LOCALE_LABELS[code]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
