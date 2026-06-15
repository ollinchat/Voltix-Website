import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

interface ToastProps {
  visible: boolean;
  title: string;
  message: string;
  onDismiss: () => void;
  duration?: number;
}

export function Toast({ visible, title, message, onDismiss, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer);
  }, [visible, duration, onDismiss]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          exit={{ opacity: 0, y: 12, x: 20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-8 end-8 z-[100] w-full max-w-sm"
          role="alert"
          aria-live="polite"
        >
          <div className="glass-panel-strong border-voltix-600 p-5 shadow-card">
            <div className="mb-3 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center border border-voltix-600 bg-voltix-50">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M2 7.5 L5.5 11 L12 3"
                      stroke="#1a2d4a"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                    />
                  </svg>
                </div>
                <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-voltix-600">
                  {title}
                </span>
              </div>
              <button
                onClick={onDismiss}
                className="focus-ring font-mono text-xs text-voltix-400 transition-colors hover:text-voltix-600"
                aria-label="Dismiss"
              >
                ✕
              </button>
            </div>
            <p className="text-sm leading-relaxed text-voltix-700">{message}</p>
            <motion.div
              className="mt-4 h-px origin-left bg-voltix-600"
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
