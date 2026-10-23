"use client";

import { useEffect, useRef, useState, type HTMLAttributes } from "react";
import styles from "./Reveal.module.css";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: "div" | "article";
}

/**
 * Fades its content in the first time it scrolls into view.
 * Keeps the reveal transform on its own element so children can use
 * transform for hover effects without conflicts.
 */
const Reveal = ({
  as: Tag = "div",
  className = "",
  children,
  ...rest
}: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`${styles.fadeIn} ${visible ? styles.visible : ""} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
