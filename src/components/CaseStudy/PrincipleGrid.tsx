import styles from "./CaseStudy.module.css";

interface Principle {
  title: string;
  product: string;
  technical: string;
}

interface PrincipleGridProps {
  items: readonly Principle[];
}

// Numbered P01, P02… so later sections can refer back to a principle
const PrincipleGrid = ({ items }: PrincipleGridProps) => {
  return (
    <ol className={styles.principleGrid}>
      {items.map((item, index) => (
        <li key={item.title} className={styles.principleCard}>
          <span className="mb-2 block font-accent text-[0.8rem] tracking-[1px] text-green-light">
            P{String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mb-3.5 font-heading text-[1.05rem]">{item.title}</h3>
          <span className={styles.decisionKey}>Product</span>
          {/* .block p already spaces this from the next label */}
          <p className="mt-1 text-[0.92rem]">{item.product}</p>
          <span className={styles.decisionKey}>Technical</span>
          <p className="mt-1 text-[0.92rem]">{item.technical}</p>
        </li>
      ))}
    </ol>
  );
};

export default PrincipleGrid;
