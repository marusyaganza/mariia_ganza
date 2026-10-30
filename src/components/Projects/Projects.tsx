import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import { caseStudyPath, type CaseSlug } from "@/content/cases";
import styles from "./Projects.module.css";

interface Project {
  number: string;
  title: string;
  status: string;
  description: string;
  text: string;
  tech: string[];
  // Links the card to its case study; only published cases are valid
  // (see src/content/cases/index.ts). Omit while there's no case study.
  caseSlug?: CaseSlug;
  // Used when there's no case study: link to the documented repository
  repositoryUrl?: string;
}

const projects: Project[] = [
  {
    number: "CASE #001",
    title: "Language Learning Platform",
    status: "Active development",
    description:
      "A private vocabulary and spaced-repetition application, evolved from Node.js to a Python/FastAPI backend.",
    text: "The current implementation uses PostgreSQL, SQLAlchemy, Redis, session-based authentication, and a React client. The case study examines learner-owned data, review scheduling, API boundaries, and the trade-offs behind successive architectures.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "React"],
    caseSlug: "language-learning-platform",
  },
  {
    number: "CASE #002",
    title: "Stars Travel",
    status: "Independent portfolio project",
    description:
      "A fictional travel-agency application exploring Next.js fullstack development and AI chatbot integration.",
    text: "Built with TypeScript, PostgreSQL, Prisma, and Redis. The project documents the existing implementation and its limitations, including external-service integration and the boundary between a portfolio simulation and a real booking service.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "OpenAI API",
    ],
    repositoryUrl: "https://github.com/marusyaganza/stars-travel",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={`${styles.section} py-32`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            Case Files
          </h2>
        </header>
        <div
          className={styles.projectsGrid}
          role="list"
          aria-label="Project portfolio"
        >
          {projects.map((project) => (
            <Reveal key={project.number} role="listitem">
              <article
                className={`project-card ${styles.projectCard} h-full`}
              >
                <div className={styles.projectNumber}>{project.number}</div>
                <p className="mb-6 text-xs opacity-90 italic uppercase">
                  status: {project.status}
                </p>
                <header>
                  <h3 className="font-heading text-2xl mb-5 text-blue drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
                    {project.title}
                  </h3>
                </header>
                <blockquote className="mb-6 opacity-90 italic">
                  {project.description}
                </blockquote>
                <p className="mb-6 opacity-90">{project.text}</p>
                {/* role="list" keeps list semantics in Safari, which drops them when list-style is none */}
                <ul
                  className="flex flex-wrap gap-3 mb-6"
                  role="list"
                  aria-label="Technologies used"
                >
                  {project.tech.map((tech) => (
                    <li key={tech} className={`tech-tag ${styles.techTag}`}>
                      {tech}
                    </li>
                  ))}
                </ul>
                {(project.caseSlug || project.repositoryUrl) && (
                  <nav className="flex gap-5" aria-label="Project links">
                    {project.caseSlug ? (
                      <Link
                        className={styles.projectLink}
                        href={caseStudyPath(project.caseSlug)}
                      >
                        Read case study
                      </Link>
                    ) : (
                      <a
                        className={styles.projectLink}
                        href={project.repositoryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Explore project: ${project.title} on GitHub`}
                      >
                        Explore project
                      </a>
                    )}
                  </nav>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
