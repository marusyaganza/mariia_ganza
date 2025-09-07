"use client";

import { useVisualEffectsManager } from "@/hooks/useVisualEffectsService";
import { VisualEffectsLayout } from "./VisualEffectsLayout";
import { SectionErrorBoundary } from "@/components/ErrorBoundary";

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutContent = ({ children }: LayoutProps) => {
  // Initialize effects manager using the new service-based approach
  useVisualEffectsManager();

  return <VisualEffectsLayout>{children}</VisualEffectsLayout>;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <SectionErrorBoundary sectionName="Visual Effects">
      <LayoutContent>{children}</LayoutContent>
    </SectionErrorBoundary>
  );
};

export default Layout;
