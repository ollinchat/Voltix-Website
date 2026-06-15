import { images } from '../../data/images';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
}

const heights = {
  sm: 'h-9',
  md: 'h-11',
  lg: 'h-16',
  hero: 'h-24 md:h-28',
};

/**
 * Original VOLTIX logo — high-res transparent PNG, no wrapper or tint.
 */
export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <img
      src={images.logo}
      alt="VOLTIX"
      width={1024}
      height={1024}
      className={`${heights[size]} w-auto object-contain object-left ${className}`}
    />
  );
}
