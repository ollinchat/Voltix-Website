const DEFAULT_SITE_URL = 'https://voltix-website-psi.vercel.app';

/** Official production site origin (no trailing slash). */
export const SITE_URL = normalizeSiteUrl(
  import.meta.env.VITE_SITE_URL ?? DEFAULT_SITE_URL,
);

export function normalizeSiteUrl(url: string): string {
  return url.trim().replace(/\/+$/, '');
}

/** Build an absolute URL for the live site (path must start with /). */
export function absoluteUrl(path = '/'): string {
  if (path === '/' || path === '') {
    return `${SITE_URL}/`;
  }

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

/** Resolve a public asset path to an absolute production URL. */
export function absoluteAssetUrl(assetPath: string): string {
  const normalizedAsset = assetPath.startsWith('/') ? assetPath : `/${assetPath}`;
  return `${SITE_URL}${normalizedAsset}`;
}
