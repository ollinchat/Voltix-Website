import { motion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const directionOffset = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export function AnimateOnScroll({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView();

  const variants: Variants = {
    hidden: { opacity: 0, ...directionOffset[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}
