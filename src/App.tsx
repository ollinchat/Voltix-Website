import { usePathname } from './hooks/usePathname';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const pathname = usePathname();

  if (pathname === '/legal' || pathname === '/terms') {
    return <LegalPage />;
  }

  return <HomePage />;
}
