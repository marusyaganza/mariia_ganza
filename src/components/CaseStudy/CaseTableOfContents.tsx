"use client";

import { useEffect, useState } from "react";
import type { TocItem } from "@/content/cases/types";
import styles from "./CaseStudy.module.css";

interface CaseTableOfContentsProps {
  items: readonly TocItem[];
}

const CaseTableOfContents = ({ items }: CaseTableOfContentsProps) => {
  const [activeId, setActiveId] = useState<string>(items[0]?.id);

  useEffect(() => {
    const sections = items
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
  }, [items]);

  return (
    <nav className={styles.toc} aria-label="On this page">
      {items.map((item) => (
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
