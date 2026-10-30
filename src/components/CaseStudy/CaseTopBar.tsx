import Link from "next/link";
import styles from "./CaseStudy.module.css";

interface CaseTopBarProps {
  caseNumber: string;
}

const CaseTopBar = ({ caseNumber }: CaseTopBarProps) => {
  return (
    <header className={styles.topbar}>
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[18px]">
        <Link href="/" className={styles.backLink}>
          ← Back to portfolio
        </Link>
        <span className="font-accent text-[0.8rem] tracking-[1px] text-yellow">
          {`CASE FILE — ${caseNumber}`}
        </span>
      </div>
    </header>
  );
};

export default CaseTopBar;
