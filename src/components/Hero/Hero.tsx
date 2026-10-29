"use client";

import { useCallback } from "react";
import { useAudio } from "../../hooks/useAudio";
import { scrollToSection } from "../../utils/scrollUtils";
import styles from "./Hero.module.css";

const Hero = () => {
  const { play: playTypewriter } = useAudio("/sound/typewriter.mp3", {
    volume: 0.3,
  });

  const handleScrollToSection = useCallback(
    (sectionId: string) => {
      scrollToSection(sectionId, playTypewriter);
    },
    [playTypewriter],
  );

  return (
    <section id="home" className={styles.hero}>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.caseNumber}>CASE FILE: 2026-001</span>
            <h1>
              I&apos;m{" "}
              <span className={styles.highlightName}>Mariia Ganza</span>
            </h1>
            <h2 className={styles.roleTitle}>
              Backend-leaning Fullstack Engineer
            </h2>
            <p className={styles.subtitle}>
              Python · FastAPI · PostgreSQL · TypeScript · React
            </p>
            <p>
              I build and investigate web applications across the UI, API,
              database, and deployment boundary. My current focus is Python
              backend development, data-intensive systems, and making complex
              product behavior easier to reason about.
            </p>
            <section className={styles.buttons}>
              <button
                onClick={() => handleScrollToSection("projects")}
                className={styles.ctaButton}
              >
                View Case Files
              </button>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvLink}
                aria-label="Download CV to start investigation"
              >
                Download CV
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
