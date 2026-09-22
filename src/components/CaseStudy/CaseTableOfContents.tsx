"use client";

import { useEffect, useState } from "react";
import styles from "./CaseStudy.module.css";
import { tocItems } from "./languageLearningPlatform";

const CaseTableOfContents = () => {
  const [activeId, setActiveId] = useState<string>(tocItems[0].id);

  useEffect(() => {
    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.toc} aria-label="On this page">
      {tocItems.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`${styles.tocLink} ${
            activeId === item.id ? styles.tocLinkActive : ""
          }`}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default CaseTableOfContents;
