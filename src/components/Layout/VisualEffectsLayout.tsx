"use client";

import { useMouseTracking } from "@/hooks/useMouseTracking";
import styles from "./Layout.module.css";

interface VisualEffectsLayoutProps {
  children: React.ReactNode;
}

export const VisualEffectsLayout = ({ children }: VisualEffectsLayoutProps) => {
  const mousePosition = useMouseTracking();

  return (
    <>
      <div className={styles.effectsLayer}>
        <div className={styles.blindsOverlay}></div>
        <div className={`${styles.spotlight} ${styles.spotlight1}`}></div>
        <div className={`${styles.spotlight} ${styles.spotlight2}`}></div>
        <div
          className={styles.mouseSpotlight}
          style={{
            left: mousePosition.x + "px",
            top: mousePosition.y + "px",
          }}
        />
      </div>

      {children}
    </>
  );
};
