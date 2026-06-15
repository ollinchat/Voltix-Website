import { FormEvent, useState } from 'react';
import { useI18n } from '../../i18n';
import { navigate } from '../../lib/navigation';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';
import { Toast } from '../ui/Toast';

export function Footer() {
  const { t } = useI18n();
  const [toastVisible, setToastVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setForm({ name: '', email: '', company: '', message: '' });
    setToastVisible(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'about', label: t.nav.about },
    { id: 'synergy', label: t.nav.synergy },
    { id: 'services', label: t.nav.services },
    { id: 'portfolio', label: t.nav.portfolio },
  ];

  const inputClass =
    'focus-ring w-full border border-voltix-200 bg-white px-4 py-3 text-sm text-voltix-900 transition-colors focus:border-voltix-600';

  return (
    <>
      <Toast
        visible={toastVisible}
        title={t.footer.toast.title}
        message={t.footer.toast.message}
        onDismiss={() => setToastVisible(false)}
      />

      <footer id="contact" className="relative border-t border-voltix-200 bg-slate-50">
        <div className="absolute inset-0 blueprint-grid opacity-50" />
        <div className="section-padding relative pb-8 pt-16">
          <div className="mx-auto max-w-[1600px]">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <Logo className="mb-8" />
                <p className="mb-10 max-w-sm text-sm leading-relaxed text-voltix-600">
                  {t.footer.tagline}
                </p>

                <div className="space-y-6">
                  <div>
                    <h4 className="industrial-label mb-2">{t.footer.columns.headquarters}</h4>
                    <p className="whitespace-pre-line text-sm text-voltix-700">
                      {t.footer.columns.address}
                    </p>
                  </div>
                  <div>
                    <a
                      href={`tel:${t.footer.columns.phone.replace(/\s/g, '')}`}
                      className="block font-mono text-sm text-voltix-700 transition-colors hover:text-voltix-600"
                    >
                      {t.footer.columns.phone}
                    </a>
                    <a
                      href={`mailto:${t.footer.columns.email}`}
                      className="mt-1 block font-mono text-sm text-voltix-700 transition-colors hover:text-voltix-600"
                    >
                      {t.footer.columns.email}
                    </a>
                  </div>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="industrial-label mb-4">{t.footer.columns.navigation}</h4>
                    <ul className="space-y-2">
                      {navLinks.map((link) => (
                        <li key={link.id}>
                          <button
                            onClick={() => scrollTo(link.id)}
                            className="focus-ring text-sm text-voltix-600 transition-colors hover:text-voltix-900"
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
                        <span className="cursor-pointer text-sm text-voltix-600 transition-colors hover:text-voltix-900">
                          {t.footer.columns.privacy}
                        </span>
                      </li>
                      <li>
                        <button
                          onClick={() => navigate('/legal')}
                          className="focus-ring text-sm text-voltix-600 transition-colors hover:text-voltix-900"
                        >
                          {t.footer.columns.terms}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="glass-panel-strong p-8 md:p-10">
                <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-industrial text-voltix-600">
                  {t.footer.form.title}
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="industrial-label mb-2 block">{t.footer.form.name}</span>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className="industrial-label mb-2 block">{t.footer.form.email}</span>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="industrial-label mb-2 block">{t.footer.form.company}</span>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={inputClass}
                    />
                  </label>
                  <label className="block">
                    <span className="industrial-label mb-2 block">{t.footer.form.message}</span>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </label>
                  <Button type="submit" fullWidth>
                    {t.footer.form.submit}
                  </Button>
                </form>
              </div>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-voltix-200 pt-8 md:flex-row">
              <p className="font-mono text-[10px] uppercase tracking-widest text-voltix-500">
                {t.footer.copyright}
              </p>
              <div className="flex gap-1">
                {['82K', '15K', 'EPC'].map((tag) => (
                  <span
                    key={tag}
                    className="border border-voltix-200 bg-white px-2 py-0.5 font-mono text-[9px] text-voltix-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
