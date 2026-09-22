"use client";

import { useEffect, useState, useCallback } from "react";
import { useAudio } from "../../hooks/useAudio";
import { scrollToSection } from "../../utils/scrollUtils";
import styles from "./Navigation.module.css";

const NAV_ITEMS = [
  { id: "home", label: "Home", number: "01." },
  { id: "about", label: "About", number: "02." },
  { id: "projects", label: "Cases", number: "03." },
  { id: "experience", label: "Experience Record", number: "04." },
  { id: "contact", label: "Contact", number: "05." },
] as const;

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => !open);
    playPaperSlide();
  }, [playPaperSlide]);

  const handleScrollToSection = useCallback(
    (sectionId: string) => {
      closeMenu();
      scrollToSection(sectionId, playPaperSlide);
    },
    [closeMenu, playPaperSlide],
  );

  const links = NAV_ITEMS.map((item) => (
    <li key={item.id} role="none">
      <a
        href={`#${item.id}`}
        onClick={(e) => {
          e.preventDefault();
          handleScrollToSection(item.id);
        }}
        data-number={item.number}
        className={styles.navLink}
        role="menuitem"
      >
        {item.label}
      </a>
    </li>
  ));

  return (
    <>
      <nav
        id="navbar"
        className={`${styles.nav} ${
          scrolled ? styles.navScrolled : styles.navNotScrolled
        } ${menuOpen ? styles.navMenuOpen : ""}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.bar}>
          <div className={styles.logo} role="banner">
            M.G.
          </div>
          <ul className={styles.navLinks} role="menubar">
            {links}
          </ul>
          <button
            type="button"
            className={styles.menuToggle}
            aria-expanded={menuOpen}
            aria-controls="case-index"
            aria-label={menuOpen ? "Close case index" : "Open case index"}
            onClick={toggleMenu}
          >
            <span className={styles.menuToggleLabel}>
              {menuOpen ? "CLOSE" : "INDEX"}
            </span>
            <span
              className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
              aria-hidden="true"
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>
      <div
        id="case-index"
        className={`${styles.caseIndex} ${menuOpen ? styles.caseIndexOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.caseIndexPanel}>
          <p className={styles.caseIndexStamp}>CASE INDEX</p>
          <p className={styles.caseIndexFile}>FILE 2026-001 // CLASSIFIED</p>
          <ul className={styles.mobileLinks} role="menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.id} role="none">
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(item.id);
                  }}
                  data-number={item.number}
                  className={styles.mobileLink}
                  role="menuitem"
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
