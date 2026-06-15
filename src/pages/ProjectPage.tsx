import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ProjectHeader } from '../components/layout/ProjectHeader';
import { getProjectById } from '../data/projects';
import { useI18n } from '../i18n';
import { navigateToProjects } from '../lib/navigation';

interface ProjectPageProps {
  id: string;
}

export function ProjectPage({ id }: ProjectPageProps) {
  const { t } = useI18n();
  const project = getProjectById(id);

  useEffect(() => {
    if (project) {
      window.document.title = `${project.title} — VOLTIX`;
    }
    window.scrollTo(0, 0);
    return () => {
      window.document.title = 'VOLTIX — Industrial EPC Joint Venture';
    };
  }, [project]);

  if (!project) {
    return (
      <>
        <ProjectHeader />
        <main className="flex min-h-screen items-center justify-center bg-white px-6 pt-20">
          <div className="text-center">
            <p className="mb-6 font-mono text-sm uppercase tracking-widest text-slate-500">
              Project not found
            </p>
            <button
              type="button"
              onClick={navigateToProjects}
              className="focus-ring font-mono text-xs uppercase tracking-widest text-[#1a2d4a]"
            >
              {t.projects.backToProjects}
            </button>
          </div>
        </main>
      </>
    );
  }

  const rows = [
    { label: t.projects.detail.projectName, value: project.title },
    { label: t.projects.detail.client, value: project.client },
    { label: t.projects.detail.timeline, value: project.dates },
    { label: t.projects.detail.location, value: project.location },
    { label: t.projects.detail.scope, value: project.fullDetails },
  ];

  const [hero, ...gallery] = project.images;

  return (
    <>
      <ProjectHeader />

      <main className="min-h-screen bg-white pt-20">
        <div className="absolute inset-0 blueprint-grid opacity-50" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="py-8 md:py-10"
          >
            <button
              type="button"
              onClick={navigateToProjects}
              className="focus-ring mb-8 font-mono text-[10px] uppercase tracking-widest text-slate-500 transition hover:text-[#1a2d4a]"
            >
              {t.projects.backToProjects}
            </button>

            <span className="industrial-label mb-4 block">{t.projects.label}</span>
            <h1 className="text-3xl font-black uppercase leading-tight tracking-wide text-[#1a2d4a] md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mb-12 md:mb-16"
          >
            <div className="grid gap-3 md:gap-4">
              <div className="overflow-hidden border border-slate-100 bg-slate-100 shadow-md">
                <img
                  src={hero}
                  alt={project.title}
                  className="aspect-[21/9] w-full object-cover"
                />
              </div>
              {gallery.length > 0 && (
                <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
                  {gallery.map((src) => (
                    <div
                      key={src}
                      className="overflow-hidden border border-slate-100 bg-slate-100 shadow-md"
                    >
                      <img
                        src={src}
                        alt={project.title}
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="border border-slate-100 border-s-4 border-s-[#1a2d4a] bg-white p-6 shadow-md md:p-10"
          >
            <span className="industrial-label mb-6 block">{t.projects.detail.datasheet}</span>

            <table className="w-full border-collapse text-start">
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 last:border-0">
                    <th className="w-[34%] py-5 pe-6 align-top font-mono text-[10px] font-semibold uppercase tracking-widest text-slate-500 md:w-[30%] md:text-xs">
                      {row.label}
                    </th>
                    <td className="py-5 text-sm leading-relaxed text-slate-800 md:text-base">
                      {row.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </main>
    </>
  );
}
