import { SectionErrorBoundary } from "@/components/ErrorBoundary";
import { VisualEffects } from "./VisualEffects";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {/* If the decorative layer fails, drop it silently and keep the page */}
      <SectionErrorBoundary sectionName="Visual Effects" fallback={null}>
        <VisualEffects />
      </SectionErrorBoundary>
      {children}
    </>
  );
};

export default Layout;
