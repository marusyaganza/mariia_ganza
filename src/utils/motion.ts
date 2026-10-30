/**
 * True when the user has asked the OS to minimise non-essential motion.
 * Always false during server rendering.
 */
export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
