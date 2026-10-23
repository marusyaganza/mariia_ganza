"use client";

import { useEffect, useRef } from "react";
import { useAmbientEffects } from "@/hooks/useAmbientEffects";
import { prefersReducedMotion } from "@/utils/motion";
import styles from "./Layout.module.css";

export const VisualEffects = () => {
  const mouseSpotlightRef = useRef<HTMLDivElement>(null);

  useAmbientEffects();

  // The spotlight follows the cursor via transform (compositor-only) and is
  // updated at most once per frame, without re-rendering React.
  useEffect(() => {
    const spotlight = mouseSpotlightRef.current;
    if (!spotlight || prefersReducedMotion()) return;
    if (!window.matchMedia("(hover: hover)").matches) return;

    let frame: number | null = null;
    let x = 0;
    let y = 0;

    const handleMouseMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        spotlight.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.effectsLayer} aria-hidden="true">
      <div className={styles.blindsOverlay}></div>
      <div className={`${styles.spotlight} ${styles.spotlight1}`}></div>
      <div className={`${styles.spotlight} ${styles.spotlight2}`}></div>
      <div ref={mouseSpotlightRef} className={styles.mouseSpotlight} />
    </div>
  );
};
