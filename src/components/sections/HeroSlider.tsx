import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { heroPosters, heroVideos } from '../../data/videos';
import { useI18n } from '../../i18n';
import { Button } from '../ui/Button';
import {
  HeroVideoBackground,
  HeroVideoOverlay,
  HeroVideoSlide,
} from '../ui/HeroVideoBackground';
import { Logo } from '../ui/Logo';

const SLIDE_DURATION = 8000;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '3%' : '-3%',
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({
    x: direction > 0 ? '-3%' : '3%',
    opacity: 0,
  }),
};

export function HeroSlider() {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const slides = t.hero.slides;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
    },
    [current],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white"
    >
      {/* Looping background videos */}
      <div className="absolute inset-0">
        {heroVideos.map((src, i) => (
          <HeroVideoSlide key={src} visible={i === current}>
            <HeroVideoBackground
              src={src}
              poster={heroPosters[i]}
              active={i === current}
            />
          </HeroVideoSlide>
        ))}
        <HeroVideoOverlay />
      </div>

      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 section-padding pb-16 pt-32">
        <div className="mx-auto max-w-[1600px]">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mb-12"
          >
            <Logo size="hero" />
          </motion.div>

          <div className="max-w-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="industrial-label mb-6 block">{slides[current].tag}</span>
                <h1 className="mb-8 whitespace-pre-line text-5xl font-black uppercase leading-[0.92] tracking-wide text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
                  {slides[current].title}
                </h1>
                <p className="mb-10 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
                  {slides[current].subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button onClick={() => scrollTo(current === 2 ? 'synergy' : 'contact')}>
                    {slides[current].cta}
                  </Button>
                  <Button variant="secondary" onClick={() => scrollTo('projects')}>
                    {t.nav.projects}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-14 flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="focus-ring group flex-1"
                  aria-label={`Slide ${i + 1}`}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-mono text-[9px] text-slate-400 group-hover:text-slate-600">
                      {slides[i].tag}
                    </span>
                  </div>
                  <div className="relative h-1 overflow-hidden bg-slate-200">
                    {i === current ? (
                      <motion.div
                        key={`progress-${current}`}
                        className="absolute inset-y-0 start-0 bg-slate-800"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                      />
                    ) : (
                      <div
                        className={`absolute inset-y-0 start-0 ${i < current ? 'w-full bg-slate-400' : 'w-0'}`}
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="focus-ring absolute bottom-8 start-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 [dir=rtl]:translate-x-1/2"
        aria-label={t.hero.scroll}
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-slate-500">
          {t.hero.scroll}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1"
        >
          <div className="h-6 w-px bg-slate-400" />
          <div className="h-1 w-1 bg-slate-800" />
        </motion.div>
      </motion.button>
    </section>
  );
}
