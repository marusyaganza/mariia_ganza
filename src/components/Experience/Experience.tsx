"use client";

import { useEffect, useRef } from "react";
import { TechTag } from "@/components/Effects/TechTag";
import styles from "./Experience.module.css";

interface TimelineItem {
  badge: string;
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
}

const experienceData: TimelineItem[] = [
  {
    badge: "CURRENT ASSIGNMENT",
    title: "Senior Full-Stack Developer",
    company: "EPAM Systems",
    period: "2020 - Present",
    description:
      "Built client-facing applications focusing on seamless user experience and performance optimization. Served as a mentor and contributor in the company’s Accessibility Mentoring Program. Held mock technical interviews to help trainees prepare for junior developer roles, and took part in interviewing colleagues for internal promotions.",
    achievements: [
      "Developed reusable Design System components",
      "Presented technical results and mentored junior developers",
      "Maintained strong test coverage with Cypress",
    ],
    tech: [
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo",
      "Cypress",
      "Accessibility",
    ],
  },
  {
    badge: "FIELD ASSIGNMENT",
    title: "Senior Software Engineer",
    company: "Usetech",
    period: "2019 - 2020",
    description:
      "Engineered secure, accessible interfaces for a leading bank’s flagship platform. Crafted reusable React components for complex financial instruments, prioritizing usability and compliance. ",
    achievements: [
      "Boosted test coverage to 80% by implementing comprehensive Jest test suites and leading cross-team code reviews",
      "Implemented SEO optimizations to boost discoverability without sacrificing design fidelity",
      "Partnered with multiple product squads to enhance performance, streamline workflows, and fortify error monitoring",
    ],
    tech: ["React", "TypeScript", "Node.js", "Jest", "Webpack", "Storybook"],
  },
  {
    badge: "ROOKIE YEARS",
    title: "Frontend Developer",
    company: "EPAM Systems",
    period: "2017 - 2019",
    description:
      "Dived into e-commerce and enterprise app development, building user-facing features and analytics tools for HR and retail clients. Translated UI/UX prototypes into scalable React interfaces, optimized performance, and helped modernize legacy systems.",
    achievements: [
      "Completed EPAM training program",
      "Optimized SVG images and fonts",
      "Translated UI/UX design prototypes into actual code",
    ],
    tech: ["HTML/CSS", "JavaScript", "jQuery", "RxJS", "React"],
  },
];

const Experience = () => {
  const timelineRefs = useRef<(HTMLElement | null)[]>([]);

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

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className={`${styles.section} py-32`}>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            Service Record
          </h2>
        </header>
        <div
          className={styles.experienceTimeline}
          role="list"
          aria-label="Work experience timeline"
        >
          {experienceData.map((item, index) => (
            <article
              key={index}
              className={`${styles.timelineItem} ${styles.fadeIn}`}
              ref={(el) => {
                timelineRefs.current[index] = el;
              }}
              role="listitem"
            >
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <div className={styles.jobBadge}>{item.badge}</div>
                <header>
                  <h3 className="font-heading text-2xl text-blue mb-2 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
                    {item.title}
                  </h3>
                  <div className="font-accent text-green-light text-lg mb-1 font-medium">
                    {item.company}
                  </div>
                  <time className="font-accent text-pink text-sm mb-5 tracking-wider">
                    {item.period}
                  </time>
                </header>
                <div className="mb-5 leading-relaxed">
                  <p>{item.description}</p>
                  <ul
                    className="flex flex-col gap-2 mt-4"
                    role="list"
                    aria-label="Key achievements"
                  >
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="font-accent text-sm opacity-80">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className="flex flex-wrap gap-2.5"
                  role="list"
                  aria-label="Technologies used"
                >
                  {item.tech.map((tech, idx) => (
                    <TechTag key={idx} className={styles.techBadge}>
                      {tech}
                    </TechTag>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
