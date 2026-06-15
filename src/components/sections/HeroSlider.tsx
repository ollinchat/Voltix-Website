import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { heroPosters, heroVideos } from '../../data/videos';
import { useI18n } from '../../i18n';
import {
  HeroVideoBackground,
  HeroVideoOverlay,
  HeroVideoSlide,
} from '../ui/HeroVideoBackground';

const SLIDE_DURATION = 8000;
const FIRST_SLIDE_INDEX = 0;

const heroTitleClass =
  'mb-8 whitespace-pre-line text-5xl font-black uppercase leading-[0.92] tracking-wide text-[#1a2d4a] md:text-6xl lg:text-7xl';

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
  const [videoProgress, setVideoProgress] = useState(0);
  const [slide0UseTimer, setSlide0UseTimer] = useState(false);
  const slides = t.hero.slides;

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > current ? 1 : -1);
      setCurrent(index);
      setVideoProgress(0);
      setSlide0UseTimer(false);
    },
    [current],
  );

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
    setVideoProgress(0);
    setSlide0UseTimer(false);
  }, [slides.length]);

  const handleVideoEnded = useCallback(() => {
    if (current === FIRST_SLIDE_INDEX) {
      next();
    }
  }, [current, next]);

  const handleVideoTimeUpdate = useCallback((currentTime: number, duration: number) => {
    if (duration > 0) {
      setVideoProgress(Math.min(currentTime / duration, 1));
    }
  }, []);

  const handleVideoFallback = useCallback(() => {
    setSlide0UseTimer(true);
  }, []);

  useEffect(() => {
    if (current === FIRST_SLIDE_INDEX && !slide0UseTimer) {
      return;
    }

    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [current, next, slide0UseTimer]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white"
    >
      <div className="absolute inset-0">
        {heroVideos.map((src, i) => (
          <HeroVideoSlide key={src} visible={i === current}>
            <HeroVideoBackground
              src={src}
              poster={heroPosters[i]}
              active={i === current}
              loop={i !== FIRST_SLIDE_INDEX}
              onEnded={i === FIRST_SLIDE_INDEX ? handleVideoEnded : undefined}
              onTimeUpdate={i === FIRST_SLIDE_INDEX ? handleVideoTimeUpdate : undefined}
              onMediaFallback={i === FIRST_SLIDE_INDEX ? handleVideoFallback : undefined}
            />
          </HeroVideoSlide>
        ))}
        <HeroVideoOverlay />
      </div>

      <div className="absolute inset-0 blueprint-grid opacity-30" />

      <div className="relative z-10 section-padding pb-16 pt-32">
        <div className="mx-auto max-w-[1600px]">
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
                <h1 className={heroTitleClass}>{slides[current].title}</h1>
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
                  <div className="mb-2">
                    <span className="font-mono text-[10px] text-slate-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="relative h-1 overflow-hidden bg-slate-200">
                    {i === current ? (
                      i === FIRST_SLIDE_INDEX && !slide0UseTimer ? (
                        <div
                          className="absolute inset-y-0 start-0 bg-[#1a2d4a] transition-[width] duration-150 ease-linear"
                          style={{ width: `${videoProgress * 100}%` }}
                        />
                      ) : (
                        <motion.div
                          key={`progress-${current}-${slide0UseTimer}`}
                          className="absolute inset-y-0 start-0 bg-[#1a2d4a]"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: SLIDE_DURATION / 1000, ease: 'linear' }}
                        />
                      )
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
