import type { CaseStudy } from "@/content/cases/types";
import CaseHeader from "./CaseHeader";
import CaseSideRail from "./CaseSideRail";
import CaseStudyFooter from "./CaseStudyFooter";
import CaseTopBar from "./CaseTopBar";
import styles from "./CaseStudy.module.css";

interface CaseStudyPageProps {
  caseStudy: CaseStudy;
}

/** Shared frame for every case study: top bar, header, side rail, footer. */
const CaseStudyPage = ({ caseStudy: { meta, Body } }: CaseStudyPageProps) => {
  return (
    <>
      <CaseTopBar caseNumber={meta.number} />
      <div className={styles.page}>
        <div className={styles.content}>
          <CaseHeader
            caseId={`CASE FILE ${meta.number} · ${meta.title.toUpperCase()}`}
            title={meta.headline}
            summary={meta.summary}
            status={meta.statusLabel}
          />
          <Body />
        </div>

        <CaseSideRail meta={meta} />
      </div>
      <CaseStudyFooter caseNumber={meta.number} title={meta.title} />
    </>
  );
};

export default CaseStudyPage;
