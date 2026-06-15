import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

interface GlassPanelProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  strong?: boolean;
}

export function GlassPanel({
  children,
  strong = false,
  className = '',
  ...props
}: GlassPanelProps) {
  return (
    <motion.div
      className={`${strong ? 'glass-panel-strong' : 'glass-panel'} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
