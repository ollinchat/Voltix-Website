import { motion } from 'framer-motion';
import { useI18n } from '../../i18n';
import { AnimateOnScroll } from '../ui/AnimateOnScroll';
import { GlassPanel } from '../ui/GlassPanel';
import { SectionHeading } from '../ui/SectionHeading';

export function Team() {
  const { t } = useI18n();

  return (
    <section id="team" className="relative section-padding bg-white">
      <div className="absolute inset-0 command-grid opacity-40" />
      <div className="relative mx-auto max-w-[1600px]">
        <SectionHeading label={t.team.label} title={t.team.title} subtitle={t.team.subtitle} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.team.members.map((member, i) => (
            <AnimateOnScroll key={member.name} delay={i * 0.07}>
              <GlassPanel
                className={`group h-full p-6 transition-shadow hover:shadow-card md:p-8 ${
                  i < 2 ? 'border-voltix-300' : ''
                }`}
              >
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center border font-mono text-sm font-bold ${
                      i < 2
                        ? 'border-voltix-600 bg-voltix-50 text-voltix-600'
                        : 'border-voltix-200 bg-slate-50 text-voltix-500'
                    }`}
                  >
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <span className="font-mono text-[10px] text-voltix-400">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-voltix-900">{member.name}</h3>
                <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-voltix-600">
                  {member.role}
                </p>
                <motion.div
                  className="h-px w-8 bg-voltix-200 group-hover:w-full group-hover:bg-voltix-600"
                  transition={{ duration: 0.4 }}
                />
                <p className="mt-3 text-xs text-voltix-500">{member.specialty}</p>
              </GlassPanel>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
