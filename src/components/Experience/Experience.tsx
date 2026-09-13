"use client";

import { useEffect, useRef } from "react";
import styles from "./Experience.module.css";

interface TimelineItem {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements?: string[];
}

const experienceData: TimelineItem[] = [
  {
    title: "Senior Software Engineer",
    company: "EPAM Systems",
    period: "Aug 2020 – Dec 2025",
    description:
      "Built and maintained client-facing React and TypeScript applications, with emphasis on component architecture, UI performance, automated Cypress coverage, accessibility, and design-system consistency.",
    achievements: [
      "Developed reusable components for an enterprise design system used across product surfaces.",
      "Built and maintained automated Cypress tests for critical user flows and shared UI components.",
      "Contributed to accessibility mentoring and technical reviews for junior developers.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Usetech",
    period: "Jun 2019 – Jul 2020",
    description:
      "Developed and tested customer-facing web applications for banking products, with responsibility for advanced CSS implementation, SEO improvements, UI consistency, test coverage, and cross-team quality work.",
    achievements: [
      "Improved test coverage through structured unit-testing and code-review practices.",
      "Delivered complex responsive UI work while maintaining product performance and design consistency.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "EPAM Systems",
    period: "2017 - 2019",
    description:
      "Worked on user-facing web applications, legacy-system improvement, front-end performance, analytics instrumentation, and conversion-focused UI implementation.",
    achievements: [
      "Optimized SVG and font delivery to improve application performance.",
      "Built JavaScript analytics tooling used to investigate conversion behavior and user interactions.",
    ],
  },
  {
    title: "Bachelor of Instrumentation Technology",
    company: "Saint Petersburg State Electrotechnical University (LETI)",
    period: "2012–2017",
    description:
      "Foundation in C/C++, microcontrollers, measurement systems, sensor/display interfaces, constrained-memory programming, and hardware/software debugging.",
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    timelineRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className={`${styles.section} py-32`}>
      <div className="max-w-8xl mx-auto px-5 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            Experience Record
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
                <span className={styles.recordNumber}>
                  Record - 00{index + 1}
                </span>

                <header>
                  <h3 className="font-heading text-2xl text-blue mb-2 mt-5 drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)]">
                    {item.title}
                  </h3>
                  <p className="font-accent text-green-light text-lg mb-1 font-medium">
                    {item.company}{" "}
                    <time className="font-accent text-pink text-sm mb-5 tracking-wider">
                      {item.period}
                    </time>
                  </p>
                </header>
                <div className="mb-5 leading-relaxed">
                  <p>{item.description}</p>
                  <ul
                    className="flex flex-col gap-2 mt-4"
                    role="list"
                    aria-label="Key achievements"
                  >
                    {item.achievements && <h3>Selected work:</h3>}
                    {item.achievements &&
                      item.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="font-accent text-sm opacity-80"
                        >
                          {achievement}
                        </li>
                      ))}
                  </ul>
                </div>
                <div
                  className="flex flex-wrap gap-2.5"
                  role="list"
                  aria-label="Technologies used"
                ></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
