import styles from "./CaseStudy.module.css";

interface CaseStudyFooterProps {
  caseNumber: string;
  title: string;
}

const CaseStudyFooter = ({ caseNumber, title }: CaseStudyFooterProps) => {
  return (
    <footer className={styles.caseFooter}>
      {/* One string, not several JSX text nodes, so it renders as a single text run */}
      {`Case File ${caseNumber} — ${title} · Part of the ongoing case files`}
    </footer>
  );
};

export default CaseStudyFooter;
