"use client";

import React from "react";
import { useVisualEffectsService } from "@/hooks/useVisualEffectsService";

interface TechTagProps {
  children: React.ReactNode;
  className?: string;
}

export const TechTag = React.memo<TechTagProps>(
  ({ children, className = "" }) => {
    const elementRef = useVisualEffectsService("tech-tag");

    return (
      <span
        ref={elementRef as React.RefObject<HTMLSpanElement>}
        className={`tech-tag ${className}`}
      >
        {children}
      </span>
    );
  }
);

TechTag.displayName = "TechTag";
