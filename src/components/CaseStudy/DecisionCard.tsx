import styles from "./CaseStudy.module.css";

interface DecisionRow {
  key: string;
  value: string;
}

interface DecisionLink {
  href: string;
  label: string;
}

interface DecisionCardProps {
  number: string;
  title: string;
  rows: readonly DecisionRow[];
  link?: DecisionLink;
}

const DecisionCard = ({ number, title, rows, link }: DecisionCardProps) => {
  return (
    <article className={styles.decisionCard}>
      <span className="mb-2 block font-accent text-[0.8rem] tracking-[1px] text-green-text">
        {number}
      </span>
      <h3 className="mb-3.5 font-heading text-[1.15rem]">{title}</h3>
      {rows.map((row) => (
        <div key={row.key} className={styles.decisionRow}>
          <span className={styles.decisionKey}>{row.key}</span>
          <span>{row.value}</span>
        </div>
      ))}
      {link && (
        <a href={link.href} className={`${styles.linkChip} mt-4 inline-block`}>
          {link.label}
        </a>
      )}
    </article>
  );
};

export default DecisionCard;
