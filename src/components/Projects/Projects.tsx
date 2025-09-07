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
    title: "The Commerce Conspiracy",
    description:
      '"A web of transactions needed untangling. Built a full-stack e-commerce platform that solved the mystery of seamless online shopping. The case involved user authentication, payment processing, and a sophisticated admin dashboard."',
    tech: ["React", "Node.js", "MongoDB", "Stripe API"],
    evidenceLink: "#",
    liveLink: "#",
  },
  {
    number: "CASE #002",
    title: "The Collaboration Caper",
    description:
      '"Teams were scattered, productivity was down. I cracked the case with a real-time task management system featuring drag-and-drop functionality and seamless team collaboration tools."',
    tech: ["TypeScript", "React", "Socket.io", "PostgreSQL"],
    evidenceLink: "#",
    liveLink: "#",
  },
  {
    number: "CASE #003",
    title: "The Weather Report Mystery",
    description:
      '"Citizens needed reliable weather intelligence. I solved it with a responsive dashboard featuring location-based forecasts, interactive maps, and detailed analytics. The forecast was clear: success."',
    tech: ["JavaScript", "API Integration", "Chart.js", "CSS Grid"],
    evidenceLink: "#",
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
                  <a href={project.evidenceLink} className={styles.projectLink}>
                    Evidence
                  </a>
                  <a href={project.liveLink} className={styles.projectLink}>
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
