import ArchitectureDiagram from "@/components/CaseStudy/ArchitectureDiagram";
import CaseBlock from "@/components/CaseStudy/CaseBlock";
import DecisionCard from "@/components/CaseStudy/DecisionCard";
import EvolutionTimeline from "@/components/CaseStudy/EvolutionTimeline";
import PrincipleGrid from "@/components/CaseStudy/PrincipleGrid";
import ScreenStory, { ScreenShot } from "@/components/CaseStudy/ScreenStory";
import ZoomableImage from "@/components/CaseStudy/ZoomableImage";
import SnapshotTable from "@/components/CaseStudy/SnapshotTable";
import styles from "@/components/CaseStudy/CaseStudy.module.css";
import {
  captureStory,
  copyReasons,
  dataModelTree,
  decisions,
  evidenceLinks,
  evolution,
  productPrinciples,
  productScreen,
  settingsScreen,
  snapshotRows,
  verificationItems,
  apiCiUrl,
} from "./data";
import architectureDiagram from "./architecture.png";

// Section ids must match meta.toc
const LanguageLearningBody = () => {
  return (
    <>
      <CaseBlock id="snapshot" label="Evidence" title="Project Snapshot">
        <SnapshotTable rows={snapshotRows} />
        <figure className="mt-8 max-w-[760px]">
          <ZoomableImage
            image={productScreen.image}
            alt={productScreen.alt}
            sizes="(max-width: 760px) 100vw, 760px"
            className={styles.screenShot}
          />
          <figcaption className={styles.diagramCaption}>
            Dictionary search in the current client: each result can be saved as
            the learner&apos;s own copy.
          </figcaption>
        </figure>
      </CaseBlock>

      <CaseBlock id="motive" label="Motive" title="Why This Project Exists">
        <p>
          The Language Learning Platform began as a personal response to
          limitations I repeatedly encountered in vocabulary apps. I wanted a
          private space for learning: no public profile, social feed, rankings,
          shared editing, or pressure to study someone else&apos;s word list.
          Vocabulary is personal—what a learner captures, why it matters, and
          the context in which it was encountered are part of the learning
          record.
        </p>
        <p>
          I originally learned English primarily through textbooks, with limited
          access to online media. The app&apos;s small game-like exercises,
          constrained visual treatment, examples, and images deliberately
          preserve the focused feeling of working through a good language
          textbook rather than recreating a crowded, gamified social platform.
        </p>
      </CaseBlock>

      <CaseBlock
        id="principles"
        label="Constants"
        title="Stable Product Principles"
      >
        <p>
          These principles have held across every version, v1 to v3. Each one
          carries a technical consequence that later decisions refer back to.
        </p>
        <PrincipleGrid items={productPrinciples} />
      </CaseBlock>

      <CaseBlock
        id="evolution"
        label="Timeline"
        title="How the Platform Evolved"
      >
        <p>
          One product domain, rebuilt as the stack I wanted to learn changed.
          Each version kept the principles above and tested a different
          architecture.
        </p>
        <EvolutionTimeline entries={evolution} />
      </CaseBlock>

      <CaseBlock
        id="data-model"
        label="Investigation"
        title="Modeling Personal Vocabulary"
      >
        <p>
          The app treats a word as a personal learning object, not a row in a
          shared dictionary. Vocabulary is private, contextual, precise, and
          owned by the learner, so the data model starts from one question:
        </p>
        <div className={styles.noteBox}>
          Which information is canonical and reusable, which is personally
          owned, and which represents time-based review history?
        </div>
        <p>
          v1 and v2 used MongoDB, where a document per word made it easy to keep
          adding fields as the product grew. In PostgreSQL, the word is split on
          purpose: the personal copy, its current schedule, and its review
          history each have their own lifetime and their own rules.
        </p>
        <p className={styles.kicker}>Where each piece lives</p>
        <pre className={styles.schemaTree}>{dataModelTree}</pre>
        <p className={styles.diagramCaption}>
          Logical ownership and relationships, not physical table nesting.
        </p>
        <p className={styles.kicker}>Why copy instead of reference</p>
        <ul className={styles.dashList}>
          {copyReasons.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-5">
          This duplicates dictionary-derived content, but lets saved vocabulary
          remain editable and independent of later provider changes. Personal
          context lives in the learner&apos;s copy: editable definitions,
          examples with translations, and their own image and caption.
        </p>
      </CaseBlock>

      <CaseBlock
        id="verification"
        label="Evidence"
        title="How These Boundaries Are Verified"
      >
        <p>
          Each rule above is checked by an automated API test in the v3 backend.
          The tests call the app over HTTP against real PostgreSQL and Redis,
          and{" "}
          <a
            href={apiCiUrl}
            className={styles.inlineLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            run in CI on every push
          </a>
          .
        </p>
        <ul className={`${styles.arrowList} ${styles.arrowListBlue}`}>
          {verificationItems.map((item) => (
            <li key={item.claim}>
              <strong className="block font-medium">{item.claim}</strong>
              <span className="block text-[0.92rem] text-text-dim">
                {item.evidence}
              </span>
              <span className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                {item.tests.map((test) => (
                  <a
                    key={test.name}
                    href={test.href}
                    className={styles.testLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {test.name} →
                  </a>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </CaseBlock>

      <CaseBlock id="architecture" label="Evidence" title="System at a Glance">
        <ArchitectureDiagram
          image={architectureDiagram}
          alt="System architecture: the React client talks to the FastAPI backend over HTTPS/JSON with a session cookie. The backend uses PostgreSQL for users, words and learning progress, Redis for auth and game sessions, and the Merriam-Webster Dictionary API (made-up entries in tests and local development)."
          caption=" — reflects the v3 Python/FastAPI backend as of 2026."
        />
        <p className="mt-6">
          The React client talks to FastAPI over HTTPS with a session cookie.
          FastAPI keeps users, words, and learning progress in PostgreSQL, auth
          and game sessions in Redis, and looks words up in the Merriam-Webster
          API. The backend is the source of truth for domain state and
          cross-client configuration.
        </p>
        <p>
          The client and server have separate build and deployment pipelines and
          communicate through a documented REST API. Changes still require
          coordination when the API contract changes.
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
      </CaseBlock>

      <CaseBlock
        id="evidence"
        label="Evidence"
        title="Implementation Highlights"
      >
        <p>
          Capture words in context (P02) end to end: a word met in a book stays
          tied to that moment, from editing it to practicing it.
        </p>
        <ScreenStory steps={captureStory} />
        <p className={styles.kicker}>Behind the games</p>
        <p>
          Settings change how the next review is scheduled: a change applies to
          each word the next time it is answered, while reviews already
          scheduled keep their dates.
        </p>
        <div className="max-w-[760px]">
          <ScreenShot {...settingsScreen} />
        </div>
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
