import { images } from '../../data/images';

interface LogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'nav' | 'md' | 'lg' | 'hero';
}

const heights = {
  xs: 'h-8 max-w-[140px]',
  sm: 'h-9',
  nav: 'h-12 max-w-[180px] md:h-14 md:max-w-[220px]',
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
