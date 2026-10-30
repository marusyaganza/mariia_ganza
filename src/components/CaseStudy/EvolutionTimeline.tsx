import styles from "./CaseStudy.module.css";

interface TimelineEntry {
  // "v1", "v2"… or a label like "Experiment" for an unnumbered branch
  version: string;
  period: string;
  title: string;
  status: string;
  stage: "historical" | "abandoned" | "current";
  summary: string;
  experiment: string;
  stack: readonly string[];
  // Why the project moved on to the next entry
  transition?: string;
}

interface EvolutionTimelineProps {
  entries: readonly TimelineEntry[];
}

const stageClass = {
  historical: "",
  abandoned: styles.timelineAbandoned,
  current: styles.timelineCurrent,
};

const EvolutionTimeline = ({ entries }: EvolutionTimelineProps) => {
  return (
    <ol className={styles.timeline}>
      {entries.map((entry) => (
        <li
          key={entry.title}
          className={`${styles.timelineEntry} ${stageClass[entry.stage]}`}
        >
          <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-accent text-[0.8rem] tracking-[1px]">
            <span
              className={
                entry.stage === "abandoned"
                  ? "text-text-dim"
                  : "text-green-text"
              }
            >
              {entry.version.toUpperCase()}
            </span>
            <span className="text-text-dim">{entry.period}</span>
            <span className={styles.timelineStatus}>{entry.status}</span>
          </div>
          <h3 className="mb-3 font-heading text-[1.15rem]">{entry.title}</h3>
          <p>{entry.summary}</p>
          <div className={styles.decisionRow}>
            <span className={styles.decisionKey}>Experiment</span>
            <span>{entry.experiment}</span>
          </div>
          <div className="mt-3.5 flex flex-wrap gap-2">
            {entry.stack.map((tag) => (
              <span key={tag} className={styles.stackTag}>
                {tag}
              </span>
            ))}
          </div>
          {entry.transition && (
            <div className={styles.timelineTransition}>
              <span className={styles.decisionKey}>Why it moved on</span>
              <p className="mt-1">{entry.transition}</p>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};

export default EvolutionTimeline;
