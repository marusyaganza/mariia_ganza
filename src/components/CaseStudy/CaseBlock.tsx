import type { ReactNode } from "react";
import styles from "./CaseStudy.module.css";

interface CaseBlockProps {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
}

const CaseBlock = ({ id, label, title, children }: CaseBlockProps) => {
  return (
    <section className={styles.block} id={id}>
      <span className={styles.blockLabel}>{label}</span>
      <h2 className="mb-5 font-heading text-2xl text-blue">{title}</h2>
      {children}
    </section>
  );
};

export default CaseBlock;
