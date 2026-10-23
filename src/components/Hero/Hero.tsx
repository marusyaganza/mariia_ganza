"use client";

import { useEffect, useRef, useCallback } from "react";
import { useAudio } from "../../hooks/useAudio";
import { scrollToSection } from "../../utils/scrollUtils";
import { prefersReducedMotion } from "../../utils/motion";
import styles from "./Hero.module.css";

const Hero = () => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const typewriterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const initialDelayRef = useRef<NodeJS.Timeout | null>(null);
  const { play: playTypewriter } = useAudio("/sound/typewriter.mp3", {
    volume: 0.3,
  });

  useEffect(() => {
    const subtitle = subtitleRef.current;
    // Reduced motion: leave the full subtitle in place, no typing
    if (subtitle && !prefersReducedMotion()) {
      const text = subtitle.textContent || "";
      // Keep the text content but set width to 0 to hide it initially
      subtitle.style.width = "0";
      subtitle.style.borderRight = "3px solid var(--green-light)";

      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          subtitle.textContent = text.substring(0, i + 1);
          subtitle.style.width = `min(${(i + 1) * 0.6}em, 100%)`;
          i++;
          typewriterTimeoutRef.current = setTimeout(typeWriter, 100);
        } else {
          cursorIntervalRef.current = setInterval(() => {
            subtitle.style.borderRightColor =
              subtitle.style.borderRightColor === "transparent"
                ? "var(--green-light)"
                : "transparent";
          }, 800);
        }
      };

      initialDelayRef.current = setTimeout(typeWriter, 2000);
    }

    return () => {
      if (typewriterTimeoutRef.current) {
        clearTimeout(typewriterTimeoutRef.current);
      }
      if (cursorIntervalRef.current) {
        clearInterval(cursorIntervalRef.current);
      }
      if (initialDelayRef.current) {
        clearTimeout(initialDelayRef.current);
      }
    };
  }, []);

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
            <h2 ref={subtitleRef} className={styles.typewriterText}>
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
