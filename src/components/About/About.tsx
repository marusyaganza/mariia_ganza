import { Fragment } from "react";
import styles from "./About.module.css";

const skillsData = [
  {
    title: "BACKEND & DATA",
    skills: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "Redis",
      "REST APIs",
    ],
  },
  {
    title: "WEB APPLICATION EXPERIENCE",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "GraphQL",
    ],
  },
  {
    title: "TESTING & DELIVERY",
    skills: ["Automated testing", "Cypress", "Docker", "GitHub Actions"],
  },
];

const About = () => {
  return (
    <section id="about" className={`${styles.section} py-32`}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            Investigation method
          </h2>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <article
            className={`${styles.aboutText} text-lg leading-relaxed p-8 max-lg:p-6`}
          >
            <span className="text-pink font-accent text-sm uppercase tracking-wider mb-5 block">
              ENGINEERING BACKGROUND:
            </span>
            <p>
              My programming foundation began with C/C++ microcontroller work
              during engineering training. Reading device documentation, working
              within limited memory, and separating software faults from wiring
              or component problems taught me to investigate systems rather than
              assume where a failure belongs.
            </p>
            <p>
              I later moved into Java/JSP web development and professional
              frontend roles. My work has included React/TypeScript
              applications, reusable components, accessibility, and automated
              testing, alongside independent fullstack projects.
            </p>
            <p>
              I especially enjoy bugs whose ownership is unclear at first. I
              like following a user-visible problem through the browser, API,
              and data layer, identifying the cause, and fixing it at the
              appropriate boundary.
            </p>
            <p>
              My current projects use Python, FastAPI, PostgreSQL, SQLAlchemy,
              and Redis. I am looking for remote Python backend or
              backend-leaning fullstack work where that frontend experience
              remains useful.
            </p>
          </article>
          <article>
            <h2 className={styles.skillsGridTitle}>EVIDENCE LOCKER</h2>
            {skillsData.map((item) => (
              <Fragment key={item.title}>
                <h3 className="text-pink font-accent text-sm uppercase tracking-wider mb-3 mt-9 block">
                  {item.title}
                </h3>
                <section
                  className={`${styles.skillsGrid} grid grid-cols-2 sm:grid-cols-3 gap-5`}
                >
                  {item.skills.map((skill) => (
                    <div
                      key={skill}
                      className={`skill-item ${styles.skillItem} p-4 text-center font-accent text-sm`}
                    >
                      {skill}
                    </div>
                  ))}
                </section>
              </Fragment>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
