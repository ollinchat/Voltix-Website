import { usePathname } from './hooks/usePathname';
import { SiteMetadata } from './components/layout/SiteMetadata';
import { getProjectIdFromPath } from './lib/navigation';
import { HomePage } from './pages/HomePage';
import { AcademyPage } from './pages/AcademyPage';
import { LegalPage } from './pages/LegalPage';
import { ProjectPage } from './pages/ProjectPage';

export default function App() {
  const pathname = usePathname();
  const projectId = getProjectIdFromPath(pathname);

  return (
    <>
      <SiteMetadata />
      {projectId ? (
        <ProjectPage id={projectId} />
      ) : pathname === '/academy' ? (
        <AcademyPage />
      ) : pathname === '/legal' || pathname === '/terms' ? (
        <LegalPage />
      ) : (
        <HomePage />
      )}
    </>
  );
}
