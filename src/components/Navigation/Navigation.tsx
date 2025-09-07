"use client";

import { useEffect, useState, useCallback } from "react";
import { useAudio } from "../../hooks/useAudio";
import { scrollToSection } from "../../utils/scrollUtils";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { play: playPaperSlide } = useAudio("/sound/paper-slide.wav", {
    volume: 0.3,
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.pageYOffset > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = useCallback(
    (sectionId: string) => {
      scrollToSection(sectionId, playPaperSlide);
    },
    [playPaperSlide]
  );

  return (
    <nav
      id="navbar"
      className={`${styles.nav} ${
        scrolled ? styles.navScrolled : styles.navNotScrolled
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center py-5">
        <div className={styles.logo} role="banner">
          Y.N.
        </div>
        <ul className={styles.navLinks} role="menubar">
          <li role="none">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("home");
              }}
              data-number="01."
              className={styles.navLink}
              role="menuitem"
            >
              Home
            </a>
          </li>
          <li role="none">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("about");
              }}
              data-number="02."
              className={styles.navLink}
              role="menuitem"
            >
              About
            </a>
          </li>
          <li role="none">
            <a
              href="#experience"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("experience");
              }}
              data-number="03."
              className={styles.navLink}
              role="menuitem"
            >
              Service Record
            </a>
          </li>
          <li role="none">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("projects");
              }}
              data-number="04."
              className={styles.navLink}
              role="menuitem"
            >
              Cases
            </a>
          </li>
          <li role="none">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("contact");
              }}
              data-number="05."
              className={styles.navLink}
              role="menuitem"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
