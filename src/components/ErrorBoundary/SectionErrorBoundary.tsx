"use client";

import React from "react";
import ErrorBoundary from "./ErrorBoundary";
import styles from "./SectionErrorBoundary.module.css";
import { SentryErrorContext } from "@/utils/sentryErrorHandler";

interface SectionErrorBoundaryProps {
  children: React.ReactNode;
  sectionName: string;
  fallback?: React.ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
  sentryContext?: SentryErrorContext;
  enableSentry?: boolean;
}

const SectionErrorBoundary: React.FC<SectionErrorBoundaryProps> = ({
  children,
  sectionName,
  fallback,
  onError,
  sentryContext,
  enableSentry,
}) => {
  const defaultFallback = (
    <div
      className={`py-12 px-8 my-8 relative overflow-hidden ${styles.sectionError}`}
    >
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <span className="font-accent text-xs text-yellow tracking-wider uppercase block mb-2 opacity-80">
            SECTION MALFUNCTION
          </span>
          <h3 className="font-heading text-3xl font-bold text-pink drop-shadow-lg m-0 leading-tight">
            {sectionName} - System Offline
          </h3>
        </div>

        <div className="mb-8">
          <p className="text-base leading-relaxed text-text-color m-0 opacity-90">
            The {sectionName.toLowerCase()} section has encountered a critical
            error. This section is temporarily unavailable while the digital
            detective investigates the anomaly.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => window.location.reload()}
            className={`font-accent text-sm px-5 py-2.5 border border-blue bg-transparent text-blue cursor-pointer transition-all duration-300 uppercase tracking-wider relative overflow-hidden hover:bg-blue hover:text-bg-color hover:shadow-lg hover:shadow-blue hover:shadow-opacity-30 ${styles.sectionRetryButton}`}
          >
            Reload Investigation
          </button>
        </div>
      </div>
    </div>
  );

  const sectionSentryContext: SentryErrorContext = {
    ...sentryContext,
    sectionName,
    componentName: `SectionErrorBoundary-${sectionName}`,
  };

  return (
    <ErrorBoundary
      fallback={fallback || defaultFallback}
      onError={onError}
      sentryContext={sectionSentryContext}
      enableSentry={enableSentry}
    >
      {children}
    </ErrorBoundary>
  );
};

export default SectionErrorBoundary;
