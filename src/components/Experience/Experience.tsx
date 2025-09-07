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
    title: "Senior Full-Stack Detective",
    company: "TechCorp Industries",
    period: "2023 - Present",
    description:
      "Leading complex digital investigations across multiple platforms. Specialized in React and Node.js operations with a focus on scalable architecture. Successfully closed 50+ high-priority cases involving performance optimization and security vulnerabilities.",
    achievements: [
      "Reduced system response time by 40%",
      "Led team of 6 junior detectives",
      "Implemented CI/CD pipeline investigation protocols",
    ],
    tech: ["React", "TypeScript", "AWS", "Docker"],
  },
  {
    badge: "FIELD ASSIGNMENT",
    title: "Digital Forensics Specialist",
    company: "StartupLab Solutions",
    period: "2021 - 2023",
    description:
      "Investigated and solved frontend mysteries for multiple clients. Specialized in JavaScript crimes and API integration cases. Built robust evidence-gathering systems and user authentication protocols.",
    achievements: [
      "Solved 30+ client cases successfully",
      "Developed company's first mobile app",
      "Mentored 3 junior investigators",
    ],
    tech: ["Vue.js", "Python", "MongoDB", "Firebase"],
  },
  {
    badge: "ROOKIE YEARS",
    title: "Junior Web Detective",
    company: "Digital Agency Co.",
    period: "2019 - 2021",
    description:
      "Started my career investigating small-scale web mysteries. Learned the fundamentals of digital forensics, responsive design cases, and client communication protocols.",
    achievements: [
      "Completed detective training program",
      "Solved first major e-commerce case",
      "Achieved 98% case closure rate",
    ],
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
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
