import Link from "next/link";
import Reveal from "@/components/Reveal/Reveal";
import styles from "./Projects.module.css";

interface Project {
  number: string;
  title: string;
  status: string;
  description: string;
  text: string;
  tech: string[];
  // Omit until the case-study page exists
  caseLink?: string;
}

const projects: Project[] = [
  {
    number: "CASE #001",
    title: "Language Learning Platform",
    status: "Active development",
    description:
      "A multi-iteration language-learning application developed across Node.js, GraphQL, TypeScript, React, Next.js, and Python/FastAPI.",
    text: "The current system focuses on FastAPI, PostgreSQL, SQLAlchemy, Redis, session-based authentication, and a React client. Earlier iterations include a Dockerized GraphQL monorepo with generated types, a Storybook design system, GitHub Actions, unit tests, and Cypress end-to-end tests.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "React",
      "GraphQL",
      "TypeScript",
      "Docker",
      "GitHub Actions",
      "Cypress",
      "Storybook",
    ],
    caseLink: "/cases/language-learning-platform",
  },
  {
    number: "CASE #002",
    title: "Star Travel Platform",
    status: "Platform rebuild",
    description:
      "A fictional travel-booking product used to explore fullstack product architecture, API integrations, authenticated workflows, and interface design.",
    text: "The existing version uses Next.js, TypeScript, PostgreSQL, Prisma, Redis, rate limiting, image optimization, and external media generation. The next iteration will retain the client experience while introducing a Python backend focused on booking workflows, scheduling, user/admin access, and realistic travel-domain data.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "OpenAI API",
      "Playwright",
      "Vitest",
      "API Design",
      "Auth",
    ],
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
                <div
                  className="flex flex-wrap gap-3 mb-6"
                  role="list"
                  aria-label="Technologies used"
                >
                  {project.tech.map((tech) => (
                    <span key={tech} className={`tech-tag ${styles.techTag}`}>
                      {tech}
                    </span>
                  ))}
                </div>
                {project.caseLink && (
                  <nav className="flex gap-5" aria-label="Project links">
                    <Link
                      className={styles.projectLink}
                      href={project.caseLink}
                    >
                      Open case study
                    </Link>
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
