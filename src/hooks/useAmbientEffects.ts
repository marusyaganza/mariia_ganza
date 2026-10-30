"use client";

import { useEffect } from "react";
import { prefersReducedMotion } from "@/utils/motion";

// Elements that randomly flicker over time and glow while the user types
const AMBIENT_SELECTOR = ".tech-tag, .skill-item";

const FLICKER_INTERVAL_MS = 8000;
const FLICKER_CHANCE = 0.05;
const FLICKER_DURATION_MS = 300;

const GLOW_DEBOUNCE_MS = 200;
const GLOW_CHANCE = 0.15;
const GLOW_DURATION_MS = 200;

const pickRandomElement = () => {
  const elements = document.querySelectorAll<HTMLElement>(AMBIENT_SELECTOR);
  return elements.length > 0
    ? elements[Math.floor(Math.random() * elements.length)]
    : null;
};

/**
 * Occasional "faulty neon" flicker on tags and skills, plus a brief glow
 * on a random one after keypresses. Disabled for reduced-motion users.
 */
export const useAmbientEffects = () => {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const timeouts = new Set<ReturnType<typeof setTimeout>>();
    const later = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        timeouts.delete(id);
        fn();
      }, ms);
      timeouts.add(id);
      return id;
    };

    const flickerInterval = setInterval(() => {
      if (Math.random() >= FLICKER_CHANCE) return;
      const element = pickRandomElement();
      if (!element) return;
      element.style.animation = `flicker ${FLICKER_DURATION_MS}ms ease-in-out`;
      later(() => {
        element.style.animation = "";
      }, FLICKER_DURATION_MS);
    }, FLICKER_INTERVAL_MS);

    let glowDebounce: ReturnType<typeof setTimeout> | null = null;
    const handleKeydown = () => {
      if (glowDebounce) clearTimeout(glowDebounce);
      glowDebounce = setTimeout(() => {
        if (Math.random() >= GLOW_CHANCE) return;
        const element = pickRandomElement();
        if (!element) return;
        element.style.boxShadow = "0 0 15px var(--yellow)";
        later(() => {
          element.style.boxShadow = "";
        }, GLOW_DURATION_MS);
      }, GLOW_DEBOUNCE_MS);
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      clearInterval(flickerInterval);
      if (glowDebounce) clearTimeout(glowDebounce);
      timeouts.forEach(clearTimeout);
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);
};
