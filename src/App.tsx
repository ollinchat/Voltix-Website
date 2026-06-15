import { usePathname } from './hooks/usePathname';
import { getProjectIdFromPath } from './lib/navigation';
import { HomePage } from './pages/HomePage';
import { LegalPage } from './pages/LegalPage';
import { ProjectPage } from './pages/ProjectPage';

export default function App() {
  const pathname = usePathname();
  const projectId = getProjectIdFromPath(pathname);

  if (projectId) {
    return <ProjectPage id={projectId} />;
  }

  if (pathname === '/legal' || pathname === '/terms') {
    return <LegalPage />;
  }

  return <HomePage />;
}
