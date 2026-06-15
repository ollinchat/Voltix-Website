import { useEffect, useRef, useState, type ReactNode } from 'react';

interface HeroVideoBackgroundProps {
  src: string;
  poster: string;
  active: boolean;
  loop?: boolean;
  onEnded?: () => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  onMediaFallback?: () => void;
}

export function HeroVideoBackground({
  src,
  poster,
  active,
  loop = true,
  onEnded,
  onTimeUpdate,
  onMediaFallback,
}: HeroVideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [usePoster, setUsePoster] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (active) {
      setUsePoster(false);
      video.currentTime = 0;
      video.play().catch(() => {
        setUsePoster(true);
        onMediaFallback?.();
      });
    } else {
      video.pause();
    }
  }, [active, src, onMediaFallback]);

  useEffect(() => {
    if (usePoster && active) {
      onMediaFallback?.();
    }
  }, [usePoster, active, onMediaFallback]);

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
      loop={loop}
      muted
      playsInline
      poster={poster}
      preload="auto"
      onError={() => {
        setUsePoster(true);
        onMediaFallback?.();
      }}
      onEnded={() => {
        if (active) onEnded?.();
      }}
      onTimeUpdate={() => {
        const video = videoRef.current;
        if (!video || !active) return;
        onTimeUpdate?.(video.currentTime, video.duration || 0);
      }}
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
      <div className="absolute inset-0 bg-[#1a2d4a]/[0.05]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.75)_45%,rgba(248,250,252,0.55)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-white/30" />
    </div>
  );
}

export function HeroVideoSlide({
  children,
  visible,
}: {
  children: ReactNode;
  visible: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
}
