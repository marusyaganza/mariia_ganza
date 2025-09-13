"use client";

import { useEffect, useRef } from "react";
import { SkillItem } from "@/components/Effects/SkillItem";
import styles from "./About.module.css";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Cypress",
  "Playwright",
  "Vitest",
  "Jest",
  "Storybook",
  "Figma",
  "Git",
  "Accessibility",
];

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={`${styles.section} py-32`}>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            The Investigation
          </h2>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <article
            ref={aboutRef}
            className={`${styles.aboutText} ${styles.fadeIn} text-lg leading-relaxed p-8`}
          >
            <span className="text-pink font-accent text-sm uppercase tracking-wider mb-5 block">
              WITNESS STATEMENT:
            </span>
            <p>
              The name&apos;s{" "}
              <span className="text-green-light font-heading">
                Mariia Ganza{" "}
              </span>
              and since 2017, I’ve been piecing together clues in the world of
              web technology. What started out as modest e-commerce code soon
              led to deeper cases—involving smart home apps, slick design
              systems, and robust infrastructure in fast-paced environments. I’m
              endlessly curious about AI and constantly experiment with
              integrating new technologies into projects to level up user
              experiences.
            </p>
            <p>
              For years, I have investigated everything from banking platforms
              to enterprise design systems, making sure teams deliver reliable,
              accessible, and easy-to-use interfaces. React and Node.js are my
              trusted partners, and I leave no detail unchecked—whether building
              reusable components or locking down quality with Cypress tests.
              Collaboration isn’t just part of the process; it’s how I uncover
              the best solutions. Agile teams, sprint rituals, mentoring new
              devs, or running accessibility workshops — if it strengthens the
              squad, I’m in.
            </p>

            <p>
              <span className="text-pink">EXHIBIT A:</span> Technologies
              currently under investigation:
            </p>
          </article>
          <aside
            ref={skillsRef}
            className={`${styles.skillsGrid} ${styles.fadeIn} grid grid-cols-2 sm:grid-cols-3 gap-5`}
            aria-label="Technical skills"
          >
            {skills.map((skill, index) => (
              <SkillItem
                key={index}
                className={`${styles.skillItem} p-4 text-center font-accent text-sm`}
              >
                {skill}
              </SkillItem>
            ))}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default About;
