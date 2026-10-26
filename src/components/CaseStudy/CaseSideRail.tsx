import type { CaseStudyMeta } from "@/content/cases/types";
import styles from "./CaseStudy.module.css";
import CaseTableOfContents from "./CaseTableOfContents";

interface CaseSideRailProps {
  meta: CaseStudyMeta;
}

const CaseSideRail = ({ meta }: CaseSideRailProps) => {
  return (
    <aside className={styles.sideRail}>
      <div>
        <div className={styles.railTitle}>Case Details</div>
        <div className={styles.railMetaRow}>
          <span className="font-accent text-[0.78rem] text-text-dim">Role</span>
          <span className="text-right">{meta.details.role}</span>
        </div>
        <div className={styles.railMetaRow}>
          <span className="font-accent text-[0.78rem] text-text-dim">
            Timeframe
          </span>
          <span className="text-right">{meta.details.timeframe}</span>
        </div>
        <div className={styles.railMetaRow}>
          <span className="font-accent text-[0.78rem] text-text-dim">
            Status
          </span>
          <span className="text-right text-green-light">
            {meta.details.status}
          </span>
        </div>
      </div>

      <div>
        <div className={styles.railTitle}>Stack</div>
        <div className="flex flex-wrap gap-2">
          {meta.stack.map((tag) => (
            <span key={tag} className={styles.stackTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div>
        <div className={styles.railTitle}>On This Page</div>
        <CaseTableOfContents items={meta.toc} />
      </div>

      <div className="flex flex-col gap-3">
        {meta.demoUrl && (
          <a
            href={meta.demoUrl}
            className={styles.railCta}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Live Demo →
          </a>
        )}
        <a
          href={meta.repositoryUrl}
          className={meta.demoUrl ? styles.railCtaSecondary : styles.railCta}
        >
          View Repository →
        </a>
      </div>
    </aside>
  );
};

export default CaseSideRail;
