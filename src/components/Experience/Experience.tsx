import Reveal from "@/components/Reveal/Reveal";
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
      "Joined as a Frontend Engineer and was promoted to Senior Software Engineer in November 2021. For most of this time I worked on a smart-home service platform: a web app where technicians and other professionals manage their clients and the homes they service, plus an admin portal for managing users.",
    achievements: [
      "Worked through two changes in the platform's data layer, from Relay to Apollo Client and then from GraphQL to REST with React Query, as well as a build migration from Webpack to Vite.",
      "Built charts, data tables, and Auth0 authentication flows, and contributed components to the design system shared across the platform's portals.",
      "Kept Cypress coverage in place for both existing user flows and new features.",
      "Earlier projects included a Vue.js to React and TypeScript migration, where I worked with the backend developer on the application's REST API.",
      "Helped record EPAM's internal accessibility training course.",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "Usetech",
    period: "Jun 2019 – Jun 2020",
    description:
      "Worked on the frontend of a bank's main website, in a team of three developers alongside a designer, QA, and product roles.",
    achievements: [
      "Built components for the bank's company-wide design system and its Storybook library, which design and marketing teams used to prepare campaign pages.",
      "Contributed to the website's Node.js server-side rendering and to SEO improvements.",
      "Led Google Analytics tagging for the team's pages, checking that every page was tagged and reported data correctly.",
      "Took on most of the team's unit testing for shared components with Jest, which helped bring coverage to 80%.",
      "Implemented accessibility fixes on the team's pages based on audits by the bank's accessibility team.",
    ],
  },
  {
    title: "Software Engineer",
    company: "EPAM Systems",
    period: "Jul 2017 – Jun 2019",
    description:
      "Started as a trainee working in Java, then moved into frontend work on e-commerce sites. Promoted to Junior Software Engineer in April 2018 and Software Engineer in September 2018.",
    achievements: [
      "Refactored legacy frontend code and built conversion-focused UI.",
      "Wrote JavaScript analytics scripts that helped marketers see how page views and link clicks affected conversion.",
      "Optimized SVG and font delivery.",
    ],
  },
  {
    title: "Bachelor of Instrumentation Technology",
    company: "Saint Petersburg State Electrotechnical University (LETI)",
    period: "2012 – 2017",
    description:
      "Foundation in C/C++, microcontrollers, measurement systems, sensor/display interfaces, constrained-memory programming, and hardware/software debugging.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className={`${styles.section} py-32`}>
      <div className="max-w-8xl mx-auto px-6 relative z-10">
        <header>
          <h2 className="font-heading font-bold text-5xl mb-16 text-center relative drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
            Experience Record
          </h2>
        </header>
        <div className={styles.experienceTimeline}>
          {experienceData.map((item, index) => (
            <Reveal as="article" key={index} className={styles.timelineItem}>
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
                    <time className="font-accent text-pink text-sm mb-5 tracking-wider whitespace-nowrap">
                      {item.period}
                    </time>
                  </p>
                </header>
                <div className="mb-5 leading-relaxed">
                  <p>{item.description}</p>
                  {item.achievements && (
                    <div className="flex flex-col gap-2 mt-4">
                      <p id={`experience-${index}-achievements`}>
                        Selected work:
                      </p>
                      {/* role="list" keeps list semantics in Safari, which drops them when list-style is none */}
                      <ul
                        className="flex flex-col gap-2"
                        role="list"
                        aria-labelledby={`experience-${index}-achievements`}
                      >
                        {item.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="font-accent text-sm opacity-80"
                          >
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
