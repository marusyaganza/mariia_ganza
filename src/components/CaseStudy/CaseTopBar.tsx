import Link from "next/link";
import styles from "./CaseStudy.module.css";

const CaseTopBar = () => {
  return (
    <div className={styles.topbar}>
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-[18px]">
        <Link href="/" className={styles.backLink}>
          ← Back to portfolio
        </Link>
        <span className="font-accent text-[0.8rem] tracking-[1px] text-yellow">
          CASE FILE — 001
        </span>
      </div>
    </div>
  );
};

export default CaseTopBar;
