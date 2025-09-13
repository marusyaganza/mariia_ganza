"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useAudio } from "../../hooks/useAudio";
import { scrollToSection } from "../../utils/scrollUtils";
import styles from "./Hero.module.css";

const Hero = () => {
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const typewriterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const cursorIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const initialDelayRef = useRef<NodeJS.Timeout | null>(null);
  const { play: playTypewriter } = useAudio("/sound/typewriter.wav", {
    volume: 0.3,
  });

  useEffect(() => {
    const subtitle = subtitleRef.current;
    if (subtitle) {
      const text = subtitle.textContent || "";
      // Keep the text content but set width to 0 to hide it initially
      subtitle.style.width = "0";
      subtitle.style.borderRight = "3px solid var(--green-light)";

      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          subtitle.textContent = text.substring(0, i + 1);
          subtitle.style.width = (i + 1) * 0.6 + "em";
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
    [playTypewriter]
  );

  return (
    <section id="home" className={styles.hero}>
      <div className="max-w-6xl mx-auto px-5 relative z-10">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <span className={styles.caseNumber}>CASE FILE: 2025-001</span>
            <h1>
              I&apos;m{" "}
              <span className={styles.highlightName}>Mariia Ganza</span>
            </h1>
            <h2 ref={subtitleRef} className={styles.typewriterText}>
              Digital Detective
            </h2>
            <p className={styles.subtitle}>Solving Problems Through Code</p>
            <p>
              &ldquo;In the shadows of the digital world, I hunt bugs, craft
              solutions, and bring ideas to life. Every line of code tells a
              story, every project solves a mystery.&rdquo;
            </p>
            <button
              onClick={() => handleScrollToSection("experience")}
              className={styles.ctaButton}
            >
              View Service Record
            </button>
          </div>
          <div className={styles.profilePhoto}>
            <Image
              priority={true}
              src="/avatar.webp"
              alt="Profile Photo"
              width={220}
              height={220}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
