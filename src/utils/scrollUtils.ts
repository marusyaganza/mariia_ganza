import { prefersReducedMotion } from "./motion";

/**
 * Utility function for smooth scrolling to a section with optional sound effect
 * @param sectionId - The ID of the section to scroll to
 * @param playSound - Optional function to play a sound effect before scrolling
 */
export const scrollToSection = (sectionId: string, playSound?: () => void) => {
  // Play sound effect if provided
  if (playSound) {
    playSound();
  }

  // Find the target element and scroll to it
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }
};
