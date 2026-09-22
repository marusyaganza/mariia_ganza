import styles from "./CaseStudy.module.css";
import CaseTableOfContents from "./CaseTableOfContents";
import { stackTags } from "./languageLearningPlatform";

const CaseSideRail = () => {
  return (
    <aside className={styles.sideRail}>
      <div>
        <div className={styles.railTitle}>Case Details</div>
        <div className={styles.railMetaRow}>
          <span className="font-accent text-[0.78rem] text-text-dim">Role</span>
          <span className="text-right">Fullstack Developer</span>
        </div>
        <div className={styles.railMetaRow}>
          <span className="font-accent text-[0.78rem] text-text-dim">
            Timeframe
          </span>
          <span className="text-right">2019 – present</span>
        </div>
        <div className={styles.railMetaRow}>
          <span className="font-accent text-[0.78rem] text-text-dim">
            Status
          </span>
          <span className="text-right text-green-light">Active</span>
        </div>
      </div>

      <div>
        <div className={styles.railTitle}>Stack</div>
        <div className="flex flex-wrap gap-2">
          {stackTags.map((tag) => (
            <span key={tag} className={styles.stackTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className={styles.railTitle}>On This Page</div>
        <CaseTableOfContents />
      </div>

      <a href="#" className={styles.railCta}>
        View Repository →
      </a>
    </aside>
  );
};

export default CaseSideRail;
