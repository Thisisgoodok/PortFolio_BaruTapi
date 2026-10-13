import { ExternalLink, Code2 } from "lucide-react";
import { motion } from "motion/react";
import Section from "./Section";
import ImageFrame from "./ImageFrame";
import { useMotionPreset } from "./motion";

/**
 * Portofolio / Project — 3–6 terbaik.
 * projects: [{
 *   title, year, problem, solution, tech: string[],
 *   image?: { src?, label? }, demoHref?, githubHref?
 * }]
 */
function Projects({ projects = [] }) {
  const { fadeUp, stagger, inView, hoverY, initial } = useMotionPreset();

  return (
    <Section
      id="projects"
      eyebrow="Portofolio"
      title="Project pilihan"
      subtitle="Bukan semua — hanya yang paling mewakili kualitas kerja saya."
      className="bg-base-200/50"
    >
      <motion.div
        variants={stagger}
        initial={initial}
        whileInView="show"
        viewport={inView}
        className="grid gap-8 md:grid-cols-2"
      >
        {projects.map((project) => (
          <motion.article
            key={project.title}
            variants={fadeUp}
            whileHover={hoverY(-4)}
            className="card overflow-hidden border border-teal-500/20 bg-base-100 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.12)] transition-all hover:border-teal-500/40 dark:border-teal-500/10 dark:hover:border-teal-500/30"
          >
            <ImageFrame
              src={project.image?.src}
              alt={project.image?.alt ?? project.title}
              label={project.image?.label ?? `Thumbnail: ${project.title}`}
              ratio="video"
              className="rounded-none border-0 border-b border-dashed border-teal-500/20 dark:border-teal-500/10"
            />
            <div className="card-body gap-3">
              <div className="flex items-start justify-between gap-3">
                <h3 className="card-title text-xl">{project.title}</h3>
                <span className="badge border-0 bg-teal-500/10 text-teal-700 dark:text-teal-300 shrink-0 font-medium">
                  {project.year}
                </span>
              </div>

              <p className="text-sm text-base-content/70">
                <span className="font-semibold text-base-content">
                  Masalah:{" "}
                </span>
                {project.problem}
              </p>
              <p className="text-sm text-base-content/70">
                <span className="font-semibold text-base-content">
                  Solusi:{" "}
                </span>
                {project.solution}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.tech?.map((t) => (
                  <span key={t} className="badge badge-sm border-teal-500/20 bg-teal-500/5 text-teal-700 dark:border-teal-400/20 dark:text-teal-300">
                    {t}
                  </span>
                ))}
              </div>

              <div className="card-actions mt-2 justify-start gap-2">
                {project.demoHref && (
                  <a
                    href={project.demoHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm rounded-full bg-teal-600 border-teal-600 text-white hover:bg-teal-700 hover:border-teal-700 dark:bg-teal-400 dark:border-teal-400 dark:text-slate-950 dark:hover:bg-teal-300 font-medium"
                  >
                    <ExternalLink className="size-3.5" />
                    Live Demo
                  </a>
                )}
                {project.githubHref && (
                  <a
                    href={project.githubHref}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-sm rounded-full border-teal-500/30 text-teal-700 hover:bg-teal-500/10 hover:border-teal-500/50 dark:border-teal-400/30 dark:text-teal-300 dark:hover:bg-teal-400/10"
                  >
                    <Code2 className="size-3.5 text-teal-600 dark:text-teal-400" />
                    Lihat Kode
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}

export default Projects;