import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  inverted?: boolean;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  inverted = false,
}: SectionHeadingProps) {
  const { ref, isInView } = useInView();

  const alignClass = align === 'center' ? 'text-center items-center' : 'text-start items-start';

  return (
    <div ref={ref} className={`mb-16 flex flex-col gap-4 ${alignClass}`}>
      <motion.div
        initial={{ opacity: 0, x: align === 'center' ? 0 : -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="flex items-center gap-4"
      >
        <span className={`industrial-label ${inverted ? 'text-voltix-300' : ''}`}>{label}</span>
        <span className={`h-px flex-1 max-w-[80px] ${inverted ? 'bg-white/40' : 'bg-voltix-600'}`} />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`whitespace-pre-line text-4xl font-black uppercase leading-[1.05] tracking-wide md:text-5xl lg:text-6xl ${
          inverted ? 'text-white' : 'text-voltix-900'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${
            inverted ? 'text-voltix-100' : 'text-voltix-500'
          } ${align === 'center' ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
