import { images } from './images';

/** Hero background videos — drop .mp4 files into /public/videos/ */
export const heroVideos = [
  '/videos/hero-forge.mp4',
  '/videos/hero-factory.mp4',
  '/videos/hero-pipeline.mp4',
] as const;

/** Poster fallbacks when video is loading or unavailable */
export const heroPosters = images.hero;

/** Synergy section featured video */
export const synergyVideo = '/videos/hero-forge.mp4';
export const synergyVideoPoster = '/images/synergy-steel.jpg';
