import { motion } from 'framer-motion';

interface IndustrialImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: 'heavy' | 'medium' | 'light';
  animate?: boolean;
}

const overlays = {
  heavy: 'from-white/70 via-white/30 to-white/10',
  medium: 'from-white/50 via-white/20 to-transparent',
  light: 'from-white/30 via-transparent to-transparent',
};

export function IndustrialImage({
  src,
  alt,
  className = '',
  overlay = 'medium',
  animate = false,
}: IndustrialImageProps) {
  const Img = animate ? motion.img : 'img';
  const animProps = animate
    ? {
        initial: { scale: 1.05 },
        animate: { scale: 1 },
        transition: { duration: 8, ease: 'linear' as const },
      }
    : {};

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      <Img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover brightness-105 saturate-[0.9]"
        {...animProps}
      />
      {/* Subtle VOLTIX brand tint */}
      <div className="absolute inset-0 bg-voltix-600/8 mix-blend-multiply" />
      <div className={`absolute inset-0 bg-gradient-to-t ${overlays[overlay]}`} />
      <div className="absolute inset-0 blueprint-grid opacity-40" />
    </div>
  );
}
