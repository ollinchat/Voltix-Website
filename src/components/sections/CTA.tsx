import { FormEvent, useState } from 'react';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { Toast } from '../ui/Toast';

function MapPinIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

const inputClass =
  'focus-ring w-full rounded-xl border-0 border-b-2 border-transparent bg-slate-50 px-4 py-3.5 text-sm text-slate-800 transition-colors placeholder:text-slate-400 focus:border-[#1a2d4a] focus:bg-white focus:outline-none';

export function CTA() {
  const { t } = useI18n();
  const [toastVisible, setToastVisible] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setForm({ name: '', email: '', company: '', message: '' });
    setToastVisible(true);
  };

  return (
    <>
      <Toast
        visible={toastVisible}
        title={t.footer.toast.title}
        message={t.footer.toast.message}
        onDismiss={() => setToastVisible(false)}
      />

      <section id="contact" className="relative bg-slate-50 py-16 md:py-20">
        <div className="absolute inset-0 blueprint-grid opacity-40" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <AnimateOnScroll>
            <header className="mb-10 text-center md:mb-12">
              <span className="industrial-label mb-4 block">{t.cta.label}</span>
              <h2 className="whitespace-pre-line text-3xl font-bold uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-4xl">
                {t.cta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
                {t.cta.subtitle}
              </p>
            </header>
          </AnimateOnScroll>

          <AnimateOnScroll delay={0.08}>
            <div className="rounded-2xl border border-slate-100 bg-white p-10 shadow-xl md:p-12">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
                <div>
                  <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1a2d4a]">
                    {t.footer.columns.headquarters}
                  </h3>

                  <ul className="space-y-8">
                    <li className="flex gap-4">
                      <span className="mt-0.5 text-[#1a2d4a]">
                        <MapPinIcon />
                      </span>
                      <div>
                        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                          {t.footer.columns.headquarters}
                        </p>
                        <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 md:text-base">
                          {t.footer.columns.address}
                        </p>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="mt-0.5 text-[#1a2d4a]">
                        <MailIcon />
                      </span>
                      <div>
                        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                          {t.footer.form.email}
                        </p>
                        <a
                          href={`mailto:${t.footer.columns.email}`}
                          className="text-sm text-slate-700 transition-colors hover:text-[#1a2d4a] md:text-base"
                        >
                          {t.footer.columns.email}
                        </a>
                      </div>
                    </li>

                    <li className="flex gap-4">
                      <span className="mt-0.5 text-[#1a2d4a]">
                        <PhoneIcon />
                      </span>
                      <div>
                        <p className="mb-1 font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                          {t.footer.columns.phoneLabel}
                        </p>
                        <a
                          href={`tel:${t.footer.columns.phone.replace(/\s/g, '')}`}
                          className="font-mono text-sm text-slate-700 transition-colors hover:text-[#1a2d4a] md:text-base"
                        >
                          {t.footer.columns.phone}
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1a2d4a]">
                    {t.footer.form.title}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500">
                          {t.footer.form.name}
                        </span>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={inputClass}
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500">
                          {t.footer.form.email}
                        </span>
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
                      <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        {t.footer.form.company}
                      </span>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500">
                        {t.footer.form.message}
                      </span>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${inputClass} resize-none`}
                      />
                    </label>
                    <button
                      type="submit"
                      className="focus-ring w-full rounded-xl bg-[#1a2d4a] px-6 py-4 font-mono text-xs font-semibold uppercase tracking-widest text-white transition-colors hover:bg-[#152238]"
                    >
                      {t.footer.form.submit}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
