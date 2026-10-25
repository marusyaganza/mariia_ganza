import ArchitectureDiagram from "@/components/CaseStudy/ArchitectureDiagram";
import CaseBlock from "@/components/CaseStudy/CaseBlock";
import DecisionCard from "@/components/CaseStudy/DecisionCard";
import EvidenceGrid from "@/components/CaseStudy/EvidenceGrid";
import SnapshotTable from "@/components/CaseStudy/SnapshotTable";
import styles from "@/components/CaseStudy/CaseStudy.module.css";
import {
  decisions,
  evidenceItems,
  evidenceLinks,
  nextItems,
  nonGoals,
  snapshotRows,
  verificationItems,
} from "./data";

// Section ids must match meta.toc
const LanguageLearningBody = () => {
  return (
    <>
      <CaseBlock id="snapshot" label="Evidence" title="Project Snapshot">
        <SnapshotTable rows={snapshotRows} />
      </CaseBlock>

      <CaseBlock id="scope" label="Investigation" title="Problem & Scope">
        <p>
          The platform is a private personal language-learning system
          designed around vocabulary review, configurable spaced repetition,
          and a workflow that works for short study sessions. The app is
          intentionally authentication-first because vocabulary, study
          history, and review data are personal.
        </p>
        <p>
          The scope is not to reproduce Anki or build a public social
          platform. The goal is to explore a focused study workflow and use
          the system as a long-running engineering project across several
          technology generations.
        </p>
        <div className={styles.noteBox}>
          The scheduling logic is a simplified implementation inspired by
          the Anki settings and review behavior I personally prefer. It is
          not a reimplementation of Anki&apos;s full algorithm.
        </div>
        <p className={styles.kicker}>Non-goals</p>
        <ul className={styles.dashList}>
          {nonGoals.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseBlock>

      <CaseBlock
        id="architecture"
        label="Evidence"
        title="System at a Glance"
      >
        <ArchitectureDiagram
          description="[ Architecture diagram placeholder — replace with exported image ]

React client → HTTPS/REST → FastAPI (auth · review domain · dictionary adapters · config)
→ PostgreSQL · Redis · External dictionary APIs"
          caption=" — reflects the v4 Python/FastAPI backend as of 2026."
        />
        <p className="mt-6">
          The backend is the source of truth for domain state and
          cross-client configuration. The frontend consumes REST contracts
          rather than shared application types, allowing the client and
          server to evolve and deploy independently.
        </p>
      </CaseBlock>

      <CaseBlock
        id="decisions"
        label="Investigation"
        title="Key Engineering Decisions"
      >
        {decisions.map((decision) => (
          <DecisionCard
            key={decision.number}
            number={decision.number}
            title={decision.title}
            rows={decision.rows}
          />
        ))}
        <p className="mt-6 text-[0.9rem] text-text-dim">
          Additional decisions — backend-owned feature configuration and
          dictionary-provider adapters — documented in the full write-up.
        </p>
      </CaseBlock>

      <CaseBlock
        id="evidence"
        label="Evidence"
        title="Implementation Highlights"
      >
        <EvidenceGrid items={evidenceItems} />
        <p className="mt-6">
          The dictionary-provider interface defines a stable contract for
          lookups; each language/provider module handles API-specific
          parsing and normalization behind that boundary, so a provider
          change affects one adapter rather than the core domain.
        </p>
      </CaseBlock>

      <CaseBlock
        id="quality"
        label="Findings"
        title="Quality, Privacy & Constraints"
      >
        <p>
          The live system is intentionally not available as a public
          anonymous demo. Study history, vocabulary data, and account
          workflows are protected behind authentication. A case-study
          walkthrough, screenshots, architecture documentation, and selected
          public code provide portfolio evidence without publishing personal
          user data or maintaining a permanently open free-tier environment.
        </p>
        <p className={styles.kicker}>Verification in place</p>
        <ul className={`${styles.arrowList} ${styles.arrowListBlue}`}>
          {verificationItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseBlock>

      <CaseBlock
        id="next"
        label="Findings"
        title="What Changed & What Comes Next"
      >
        <p>
          The current version intentionally favors independently deployable
          modules, server-owned configuration, relational data modeling, and
          Python backend depth over retaining every convenience of the
          earlier shared-type monorepo.
        </p>
        <ul
          className={`${styles.arrowList} ${styles.arrowListGreen} mt-5`}
        >
          {nextItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CaseBlock>

      <CaseBlock id="links" label="Close the Case" title="Links & Evidence">
        <div className="mt-2 flex flex-wrap gap-3.5">
          {evidenceLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.linkChip}
              {...("external" in link && link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </div>
      </CaseBlock>
    </>
  );
};

export default LanguageLearningBody;
