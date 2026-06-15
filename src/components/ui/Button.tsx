import { motion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    'bg-voltix-600 text-white border border-voltix-600 hover:bg-voltix-hover hover:border-voltix-hover',
  secondary:
    'bg-white text-voltix-600 border border-voltix-200 hover:bg-voltix-50 hover:border-voltix-hover',
  ghost: 'bg-transparent text-voltix-600 hover:text-voltix-hover hover:bg-voltix-50',
  outline:
    'bg-transparent text-voltix-600 border border-voltix-600 hover:bg-voltix-50',
};

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      className={`
        focus-ring inline-flex items-center justify-center gap-2
        px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wide
        transition-colors duration-300
        ${variants[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
}
