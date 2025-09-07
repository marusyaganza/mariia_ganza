"use client";

/**
 * VisualEffectsService - A decoupled service for managing visual effects
 * This service provides a clean abstraction layer that doesn't depend on DOM structure
 * or hardcoded class names, promoting loose coupling between components.
 */

export interface VisualEffectElement {
  element: HTMLElement;
  type: "tech-tag" | "skill-item" | "project-card";
  id: string;
}

export interface VisualEffectOptions {
  duration?: number;
  intensity?: number;
  color?: string;
}

export class VisualEffectsService {
  private elements: Map<string, VisualEffectElement> = new Map();
  private elementTypes: Map<
    "tech-tag" | "skill-item" | "project-card",
    Set<string>
  > = new Map();

  /**
   * Register an element for visual effects
   */
  registerElement(
    element: HTMLElement,
    type: "tech-tag" | "skill-item" | "project-card"
  ): string {
    const id = this.generateId();
    const visualElement: VisualEffectElement = { element, type, id };

    this.elements.set(id, visualElement);

    if (!this.elementTypes.has(type)) {
      this.elementTypes.set(type, new Set());
    }
    this.elementTypes.get(type)!.add(id);

    return id;
  }

  /**
   * Unregister an element from visual effects
   */
  unregisterElement(id: string): void {
    const visualElement = this.elements.get(id);
    if (visualElement) {
      this.elements.delete(id);
      this.elementTypes.get(visualElement.type)?.delete(id);
    }
  }

  /**
   * Get all elements of a specific type
   */
  getElementsByType(
    type: "tech-tag" | "skill-item" | "project-card"
  ): HTMLElement[] {
    const ids = this.elementTypes.get(type);
    if (!ids) return [];

    return Array.from(ids)
      .map((id) => this.elements.get(id))
      .filter(
        (element): element is VisualEffectElement => element !== undefined
      )
      .map((element) => element.element);
  }

  /**
   * Get all elements that can have flicker effects
   */
  getFlickerableElements(): HTMLElement[] {
    return [
      ...this.getElementsByType("tech-tag"),
      ...this.getElementsByType("skill-item"),
    ];
  }

  /**
   * Get all elements that can have glow effects
   */
  getGlowableElements(): HTMLElement[] {
    return [
      ...this.getElementsByType("tech-tag"),
      ...this.getElementsByType("skill-item"),
    ];
  }

  /**
   * Get all project cards
   */
  getProjectCards(): HTMLElement[] {
    return this.getElementsByType("project-card");
  }

  /**
   * Apply flicker effect to an element
   */
  applyFlickerEffect(
    element: HTMLElement,
    options: VisualEffectOptions = {}
  ): void {
    const duration = options.duration || 300;
    element.style.animation = `flicker ${duration}ms ease-in-out`;

    setTimeout(() => {
      element.style.animation = "";
    }, duration);
  }

  /**
   * Apply glow effect to an element
   */
  applyGlowEffect(
    element: HTMLElement,
    options: VisualEffectOptions = {}
  ): void {
    const duration = options.duration || 200;
    const color = options.color || "var(--yellow)";
    const intensity = options.intensity || 15;

    element.style.boxShadow = `0 0 ${intensity}px ${color}`;

    setTimeout(() => {
      element.style.boxShadow = "";
    }, duration);
  }

  /**
   * Apply project card hover effect
   */
  applyProjectCardHoverEffect(hoveredCard: HTMLElement | null): void {
    const projectCards = this.getProjectCards();

    projectCards.forEach((card) => {
      if (card !== hoveredCard) {
        card.style.opacity = "0.7";
        card.style.transform = "scale(0.98)";
      } else {
        card.style.opacity = "1";
        card.style.transform = "scale(1)";
      }
    });
  }

  /**
   * Generate a unique ID for an element
   */
  private generateId(): string {
    return `visual-effect-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)}`;
  }
}

// Export a singleton instance
export const visualEffectsService = new VisualEffectsService();
