"use client";

import React from "react";
import { useVisualEffectsService } from "@/hooks/useVisualEffectsService";

interface SkillItemProps {
  children: React.ReactNode;
  className?: string;
}

export const SkillItem = React.memo<SkillItemProps>(
  ({ children, className = "" }) => {
    const elementRef = useVisualEffectsService("skill-item");

    return (
      <div
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={`skill-item ${className}`}
      >
        {children}
      </div>
    );
  }
);

SkillItem.displayName = "SkillItem";
