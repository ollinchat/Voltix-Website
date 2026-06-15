import { DragEvent, FormEvent, useRef, useState } from 'react';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { Toast } from '../ui/Toast';

const HAIFA_BAY_MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53558.2!2d34.965!3d32.819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151dba3e825f6917%3A0x90042566917c75!2sHaifa%20Bay%2C%20Israel!5e0!3m2!1sen!2sil!4v1710000000000!5m2!1sen!2sil';

const WAZE_DESTINATION = 'Industrial Zone 4, Haifa Bay, Israel';
const WAZE_NAVIGATION_URL = `https://waze.com/ul?q=${encodeURIComponent(WAZE_DESTINATION)}&navigate=yes`;

const ACCEPTED_FILE_TYPES = '.pdf,.dwg,.zip,application/pdf,application/zip';

interface ContactFormState {
  name: string;
  email: string;
  mobilePhone: string;
  company: string;
  message: string;
  meetingTime: string;
  attachment: File | null;
}

const emptyForm = (): ContactFormState => ({
  name: '',
  email: '',
  mobilePhone: '',
  company: '',
  message: '',
  meetingTime: '',
  attachment: null,
});

function UploadIcon() {
  return (
    <svg className="mx-auto mb-2 h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
    </svg>
  );
}

const fieldClass =
  'focus-ring w-full rounded-xl border-0 border-b-2 border-transparent bg-slate-50 px-4 py-3.5 text-sm text-slate-800 transition-colors placeholder:text-slate-400 focus:border-[#1a2d4a] focus:bg-white focus:outline-none';

const labelClass = 'mb-2 block font-mono text-[10px] uppercase tracking-widest text-slate-500';

export function CTA() {
  const { t } = useI18n();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [toastVisible, setToastVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [form, setForm] = useState<ContactFormState>(emptyForm);

  const setFile = (file: File | null) => {
    setForm((prev) => ({ ...prev, attachment: file }));
  };

  const handleFileInput = (files: FileList | null) => {
    if (!files?.length) return;
    setFile(files[0]);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileInput(e.dataTransfer.files);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setForm(emptyForm());
    if (fileInputRef.current) fileInputRef.current.value = '';
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
              <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch lg:gap-16 xl:gap-20">
                <div className="flex flex-col gap-4">
                  <div className="flex min-h-[350px] flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 shadow-sm lg:min-h-0">
                    <iframe
                      title="Haifa Bay Industrial Zone map"
                      src={HAIFA_BAY_MAP_EMBED}
                      className="h-full min-h-[350px] w-full flex-1 border-0 grayscale contrast-125 invert-[5%] lg:min-h-[400px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      allowFullScreen
                    />
                  </div>
                  <a
                    href={WAZE_NAVIGATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-widest text-[#1a2d4a] transition-colors hover:border-[#1a2d4a] hover:bg-white"
                  >
                    {t.cta.wazeNavigate}
                    <span aria-hidden className="[dir=rtl]:rotate-180">
                      &rarr;
                    </span>
                  </a>
                </div>

                <div>
                  <h3 className="mb-8 font-mono text-xs font-semibold uppercase tracking-[0.25em] text-[#1a2d4a]">
                    {t.footer.form.title}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className={labelClass}>{t.footer.form.name}</span>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className={fieldClass}
                        />
                      </label>
                      <label className="block">
                        <span className={labelClass}>{t.footer.form.mobilePhone}</span>
                        <input
                          type="tel"
                          value={form.mobilePhone}
                          onChange={(e) => setForm({ ...form, mobilePhone: e.target.value })}
                          className={fieldClass}
                          placeholder="+972"
                        />
                      </label>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <label className="block">
                        <span className={labelClass}>{t.footer.form.email}</span>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className={fieldClass}
                        />
                      </label>
                      <label className="block">
                        <span className={labelClass}>{t.footer.form.company}</span>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          className={fieldClass}
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className={labelClass}>{t.footer.form.preferredTime}</span>
                      <select
                        value={form.meetingTime}
                        onChange={(e) => setForm({ ...form, meetingTime: e.target.value })}
                        className={`${fieldClass} cursor-pointer appearance-none`}
                      >
                        <option value="">{t.footer.form.meetingPlaceholder}</option>
                        {t.footer.form.meetingSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className={labelClass}>{t.footer.form.message}</span>
                      <textarea
                        required
                        rows={8}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className={`${fieldClass} min-h-[12rem] resize-y`}
                      />
                    </label>

                    <div>
                      <span className={labelClass}>{t.footer.form.attachment}</span>
                      <div
                        role="button"
                        tabIndex={0}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            fileInputRef.current?.click();
                          }
                        }}
                        className={`focus-ring cursor-pointer rounded-xl border-2 border-dashed p-4 text-center transition-colors md:p-5 ${
                          isDragging
                            ? 'border-[#1a2d4a] bg-white'
                            : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white'
                        }`}
                      >
                        <UploadIcon />
                        <p className="text-sm text-slate-500">
                          {form.attachment
                            ? `${t.footer.form.attachmentSelected}: ${form.attachment.name}`
                            : t.footer.form.attachmentDrop}
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept={ACCEPTED_FILE_TYPES}
                          className="sr-only"
                          onChange={(e) => handleFileInput(e.target.files)}
                        />
                      </div>
                    </div>

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
