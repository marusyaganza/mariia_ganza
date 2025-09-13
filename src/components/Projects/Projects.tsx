"use client";

import { useEffect, useRef } from "react";
import { ProjectCard } from "@/components/Effects/ProjectCard";
import { TechTag } from "@/components/Effects/TechTag";
import styles from "./Projects.module.css";

interface Project {
  number: string;
  title: string;
  description: string;
  tech: string[];
  evidenceLink: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    number: "CASE #001",
    title: "Language Power Unlocked",
    description:
      '"A vault of vocabulary craving discovery. Engineered a unified TypeScript monorepo that streamlines word addition, enrichment, and practice. The case tackled seamless GraphQL workflows, shareable UI components, and robust media integration to make learning both immersive and efficient."',
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "GraphQL",
      "Docker",
      "Storybook",
    ],
    evidenceLink: "https://github.com/marusyaganza/lp-monorepo",
    liveLink: "https://lp-monorepo-1.onrender.com",
  },
  {
    number: "CASE #002",
    title: "Stars Travel Saga",
    description:
      '"A galaxy’s most secure flight network awaited command. Engineered a Star Wars–themed booking platform with AI-driven droid assistants and enterprise-grade defenses. The mission encompassed interplanetary reservations, real-time caching, and saga-worthy chatbot interactions."',
    tech: [
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "OpenAI API",
      "Playwright",
      "Vitest",
    ],
    evidenceLink: "https://github.com/marusyaganza/stars-travel",
    liveLink: "https://stars-travel.vercel.app/",
  },
  {
    number: "CASE #003",
    title: "Digital Detective Divinations",
    description:
      '"A modern, noir-themed portfolio revealed hidden web-dev clues. Crafted a Next.js and TypeScript showcase with bespoke Tailwind CSS styling to deliver immersive spotlight animations and typewriter effects. The build featured dynamic content components, dramatic lighting gradients, and film-grain overlays for a true detective experience."',
    tech: ["JavaScript", "API Integration", "Chart.js", "CSS Grid"],
    evidenceLink: "https://github.com/marusyaganza/mariia_ganza",
    liveLink: "#",
  },
];

const Projects = () => {
  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className={`${styles.section} py-32`}>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
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
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              className={`${styles.projectCard} ${styles.fadeIn}`}
            >
              <article
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                role="listitem"
              >
                <div className={styles.projectNumber}>{project.number}</div>
                <header>
                  <h3 className="font-heading text-2xl mb-5 text-blue drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
                    {project.title}
                  </h3>
                </header>
                <blockquote className="mb-6 opacity-90 italic">
                  {project.description}
                </blockquote>
                <div
                  className="flex flex-wrap gap-3 mb-6"
                  role="list"
                  aria-label="Technologies used"
                >
                  {project.tech.map((tech, idx) => (
                    <TechTag key={idx} className={styles.techTag}>
                      {tech}
                    </TechTag>
                  ))}
                </div>
                <nav className="flex gap-5" aria-label="Project links">
                  <a
                    target="_blank"
                    href={project.evidenceLink}
                    className={styles.projectLink}
                  >
                    Evidence
                  </a>
                  <a
                    target="_blank"
                    href={project.liveLink}
                    className={styles.projectLink}
                  >
                    Live Scene
                  </a>
                </nav>
              </article>
            </ProjectCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
