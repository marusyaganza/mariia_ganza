"use client";

import React from "react";
import { useVisualEffectsService } from "@/hooks/useVisualEffectsService";

interface ProjectCardProps {
  children: React.ReactNode;
  className?: string;
}

export const ProjectCard = React.memo<ProjectCardProps>(
  ({ children, className = "" }) => {
    const elementRef = useVisualEffectsService("project-card");

    return (
      <div
        ref={elementRef as React.RefObject<HTMLDivElement>}
        className={`project-card ${className}`}
      >
        {children}
      </div>
    );
  }
);

ProjectCard.displayName = "ProjectCard";
