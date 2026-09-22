import styles from "./CaseStudy.module.css";

interface DecisionRow {
  key: string;
  value: string;
}

interface DecisionCardProps {
  number: string;
  title: string;
  rows: readonly DecisionRow[];
}

const DecisionCard = ({ number, title, rows }: DecisionCardProps) => {
  return (
    <article className={styles.decisionCard}>
      <span className="mb-2 block font-accent text-[0.8rem] tracking-[1px] text-green-light">
        {number}
      </span>
      <h3 className="mb-3.5 font-heading text-[1.15rem]">{title}</h3>
      {rows.map((row) => (
        <div key={row.key} className={styles.decisionRow}>
          <span className={styles.decisionKey}>{row.key}</span>
          <span>{row.value}</span>
        </div>
      ))}
    </article>
  );
};

export default DecisionCard;
