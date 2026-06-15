export function getPathname() {
  return window.location.pathname;
}

export function getProjectIdFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/projects\/([^/]+)\/?$/);
  return match?.[1] ?? null;
}

export function navigate(path: string) {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export { absoluteAssetUrl, absoluteUrl, SITE_URL } from './site';

export function navigateToProjects() {
  navigate('/#projects');
}

export function subscribeToPath(callback: () => void) {
  window.addEventListener('popstate', callback);
  return () => window.removeEventListener('popstate', callback);
}
