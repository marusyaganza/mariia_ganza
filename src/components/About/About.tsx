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
      "SQL",
      "REST APIs",
      "GraphQL",
      "Node.js",
      "Express.js",
      "Apollo Server",
    ],
  },
  {
    title: "FRONTEND",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Apollo Client",
      "HTML",
      "CSS",
      "Storybook",
    ],
  },
  {
    title: "ENGINEERING PRACTICES",
    skills: ["Docker", "GitHub", "Cypress", "Unit testing", "API design"],
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
              WITNESS STATEMENT:
            </span>
            <p>
              The name&apos;s{" "}
              <span className="text-green-light font-heading">
                Mariia Ganza{" "}
              </span>
              I work best on systems where the problem is not immediately
              assigned to one layer. My background spans frontend development,
              fullstack web applications, API design, automated testing, design
              systems, and an earlier C/C++ foundation in microcontroller
              programming. I enjoy tracing a user-visible failure through the
              browser, API contract, database, cache, and deployment environment
              until the root cause is clear
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
              I am currently extending that experience through Python, FastAPI,
              PostgreSQL, SQLAlchemy, Redis, and deeper SQL/database study.
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
