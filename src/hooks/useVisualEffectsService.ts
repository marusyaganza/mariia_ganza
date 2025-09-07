"use client";

import { useEffect, useRef, useCallback } from "react";
import { visualEffectsService } from "@/services/VisualEffectsService";

/**
 * Hook for registering elements with the visual effects service
 * This provides a clean, decoupled way to register elements without hardcoded dependencies
 */
export const useVisualEffectsService = (
  elementType: "tech-tag" | "skill-item" | "project-card"
) => {
  const elementRef = useRef<HTMLElement>(null);
  const registrationIdRef = useRef<string | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Register the element with the service
    const id = visualEffectsService.registerElement(element, elementType);
    registrationIdRef.current = id;

    // Cleanup function
    return () => {
      if (registrationIdRef.current) {
        visualEffectsService.unregisterElement(registrationIdRef.current);
        registrationIdRef.current = null;
      }
    };
  }, [elementType]);

  return elementRef;
};

/**
 * Hook for managing visual effects without DOM queries
 * This provides a clean abstraction for triggering effects
 */
export const useVisualEffectsManager = () => {
  const flickerIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const keydownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const startFlickerEffect = useCallback(() => {
    flickerIntervalRef.current = setInterval(() => {
      const flickerableElements = visualEffectsService.getFlickerableElements();

      if (flickerableElements.length > 0 && Math.random() < 0.05) {
        const randomElement =
          flickerableElements[
            Math.floor(Math.random() * flickerableElements.length)
          ];
        visualEffectsService.applyFlickerEffect(randomElement);
      }
    }, 8000);
  }, []);

  const handleKeydown = useCallback(() => {
    if (keydownTimeoutRef.current) {
      clearTimeout(keydownTimeoutRef.current);
    }

    keydownTimeoutRef.current = setTimeout(() => {
      const glowableElements = visualEffectsService.getGlowableElements();

      if (glowableElements.length > 0 && Math.random() < 0.15) {
        const randomElement =
          glowableElements[Math.floor(Math.random() * glowableElements.length)];
        visualEffectsService.applyGlowEffect(randomElement);
      }
    }, 200);
  }, []);

  const handleProjectCardMouseEnter = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
    if (target && typeof target.closest === "function") {
      const projectCard = target.closest(".project-card") as HTMLElement;
      if (projectCard) {
        visualEffectsService.applyProjectCardHoverEffect(projectCard);
      }
    }
  }, []);

  const handleProjectCardMouseLeave = useCallback(() => {
    visualEffectsService.applyProjectCardHoverEffect(null);
  }, []);

  useEffect(() => {
    // Start flicker effect
    startFlickerEffect();

    // Add event listeners
    document.addEventListener("keydown", handleKeydown);
    document.addEventListener("mouseenter", handleProjectCardMouseEnter, true);
    document.addEventListener("mouseleave", handleProjectCardMouseLeave, true);

    return () => {
      // Cleanup intervals and timeouts
      if (flickerIntervalRef.current) {
        clearInterval(flickerIntervalRef.current);
      }
      if (keydownTimeoutRef.current) {
        clearTimeout(keydownTimeoutRef.current);
      }

      // Remove event listeners
      document.removeEventListener("keydown", handleKeydown);
      document.removeEventListener(
        "mouseenter",
        handleProjectCardMouseEnter,
        true
      );
      document.removeEventListener(
        "mouseleave",
        handleProjectCardMouseLeave,
        true
      );
    };
  }, [
    startFlickerEffect,
    handleKeydown,
    handleProjectCardMouseEnter,
    handleProjectCardMouseLeave,
  ]);

  return {};
};
