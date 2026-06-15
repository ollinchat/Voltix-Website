import { useSyncExternalStore } from 'react';
import { getPathname, subscribeToPath } from '../lib/navigation';

export function usePathname() {
  return useSyncExternalStore(subscribeToPath, getPathname, getPathname);
}
