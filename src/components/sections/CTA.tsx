import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export function CTA() {
  const { t } = useI18n();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative section-padding bg-voltix-600 overflow-hidden">
      <div className="absolute inset-0 blueprint-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-r from-voltix-700/50 via-transparent to-voltix-700/50" />

      <div className="relative mx-auto max-w-[1600px]">
        <AnimateOnScroll>
          <div className="relative text-center">
            <SectionHeading
              label={t.cta.label}
              title={t.cta.title}
              subtitle={t.cta.subtitle}
              align="center"
              inverted
            />
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                onClick={scrollToContact}
                className="border-white bg-white text-voltix-600 hover:bg-voltix-50 hover:border-voltix-50"
              >
                {t.cta.primary}
              </Button>
              <Button
                variant="secondary"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white"
              >
                {t.cta.secondary}
              </Button>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
