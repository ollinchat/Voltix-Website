import { useEffect } from 'react';
import { usePathname } from '../../hooks/usePathname';
import { absoluteUrl } from '../../lib/site';

const SITE_DESCRIPTION =
  'VOLTIX — Industrial EPC joint venture. Najami · Zatout. 82,000 sqm fabrication, 15,000 tons steel, full pipeline and EPC execution.';

function setMetaContent(selector: string, content: string) {
  document.querySelector(selector)?.setAttribute('content', content);
}

export function SiteMetadata() {
  const pathname = usePathname();

  useEffect(() => {
    const pageUrl = absoluteUrl(pathname);

    document.querySelector('link[rel="canonical"]')?.setAttribute('href', pageUrl);
    setMetaContent('meta[property="og:url"]', pageUrl);
    setMetaContent('meta[name="twitter:url"]', pageUrl);
    setMetaContent('meta[property="og:description"]', SITE_DESCRIPTION);
    setMetaContent('meta[name="description"]', SITE_DESCRIPTION);
    setMetaContent('meta[name="twitter:description"]', SITE_DESCRIPTION);
  }, [pathname]);

  return null;
}
