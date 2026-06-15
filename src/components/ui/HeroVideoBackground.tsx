import { motion } from 'framer-motion';
import { useEffect, useRef, useState, type ReactNode } from 'react';

interface HeroVideoBackgroundProps {
  src: string;
  poster: string;
  active: boolean;
}

export function HeroVideoBackground({ src, poster, active }: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [usePoster, setUsePoster] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      setUsePoster(false);
      video.currentTime = 0;
      video.play().catch(() => setUsePoster(true));
    } else {
      video.pause();
    }
  }, [active, src]);

  if (usePoster) {
    return (
      <img
        src={poster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
    );
  }

  return (
    <video
      ref={videoRef}
      key={src}
      autoPlay
      loop
      muted
      playsInline
      poster={poster}
      preload="auto"
      onError={() => setUsePoster(true)}
      className="absolute inset-0 h-full w-full object-cover"
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

interface HeroVideoOverlayProps {
  className?: string;
}

export function HeroVideoOverlay({ className = '' }: HeroVideoOverlayProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`} aria-hidden>
      {/* Subtle VOLTIX brand tint */}
      <div className="absolute inset-0 bg-[#1a2d4a]/[0.05]" />
      {/* Radial light wash for heading readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.75)_45%,rgba(248,250,252,0.55)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/30" />
    </div>
  );
}

/** Fade wrapper for slide transitions */
export function HeroVideoSlide({
  children,
  visible,
}: {
  children: ReactNode;
  visible: boolean;
}) {
  return (
    <motion.div
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}
