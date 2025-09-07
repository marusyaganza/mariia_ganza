"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import styles from "./ErrorBoundary.module.css";
import {
  sentryErrorHandler,
  SentryErrorContext,
} from "@/utils/sentryErrorHandler";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  sentryContext?: SentryErrorContext;
  enableSentry?: boolean;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });

    // Prepare Sentry context with additional information
    const sentryContext: SentryErrorContext = {
      ...this.props.sentryContext,
      url: typeof window !== "undefined" ? window.location.href : undefined,
      userAgent:
        typeof window !== "undefined" ? window.navigator.userAgent : undefined,
      timestamp: new Date().toISOString(),
    };

    // Report to Sentry if enabled (default: true)
    if (this.props.enableSentry !== false) {
      sentryErrorHandler(error, errorInfo, sentryContext);
    }

    // Call custom error handler if provided
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default error UI matching the detective theme
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-color text-text-color font-body p-8 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay"
            style={{
              background: `radial-gradient(circle at 20% 80%, rgba(255, 232, 31, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(143, 189, 198, 0.05) 0%, transparent 50%), url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cfilter id='noise'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='1'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div
            className={`max-w-4xl w-full relative z-20 ${styles.errorContent}`}
          >
            <div className="text-center mb-8">
              <span className="font-accent text-xs text-yellow tracking-wider uppercase block mb-4 opacity-80">
                CASE FILE: ERROR-001
              </span>
              <h1 className="font-heading text-4xl font-bold text-pink drop-shadow-lg m-0 leading-tight">
                SYSTEM MALFUNCTION DETECTED
              </h1>
            </div>

            <div className="mb-8">
              <div className="mb-8">
                <span className="font-accent text-sm text-blue uppercase tracking-wider block mb-2 font-medium">
                  INCIDENT REPORT:
                </span>
                <p className="text-lg leading-relaxed text-text-color m-0">
                  The digital detective has encountered an unexpected anomaly in
                  the system. This could be due to corrupted data, network
                  interference, or an unknown variable in the code matrix.
                </p>
              </div>

              {process.env.NODE_ENV === "development" && this.state.error && (
                <div className="mb-8 p-6 bg-black bg-opacity-30 border border-blue border-opacity-20">
                  <span className="font-accent text-sm text-blue uppercase tracking-wider block mb-2 font-medium">
                    TECHNICAL EVIDENCE:
                  </span>
                  <details className="mt-4">
                    <summary className="font-accent text-sm text-green-light cursor-pointer py-2 border-b border-green-light border-opacity-30 transition-colors duration-300 hover:text-blue">
                      Click to examine error details
                    </summary>
                    <div className="mt-4 font-accent text-sm leading-relaxed text-text-color">
                      <strong>Error:</strong> {this.state.error.message}
                      {this.state.errorInfo && (
                        <>
                          <br />
                          <strong>Component Stack:</strong>
                          <pre className="bg-black bg-opacity-50 p-4 mt-2 border border-blue border-opacity-20 overflow-x-auto whitespace-pre-wrap text-xs text-blue">
                            {this.state.errorInfo.componentStack}
                          </pre>
                        </>
                      )}
                    </div>
                  </details>
                </div>
              )}

              <div className="flex gap-4 justify-center flex-wrap mb-8">
                <button
                  onClick={this.handleRetry}
                  className={`font-accent text-sm px-6 py-3 border border-green-light bg-transparent text-green-light cursor-pointer transition-all duration-300 uppercase tracking-wider relative overflow-hidden hover:bg-green-light hover:text-bg-color hover:shadow-lg hover:shadow-green-light hover:shadow-opacity-30 ${styles.retryButton}`}
                >
                  Reinitialize System
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className={`font-accent text-sm px-6 py-3 border border-pink bg-transparent text-pink cursor-pointer transition-all duration-300 uppercase tracking-wider relative overflow-hidden hover:bg-pink hover:text-bg-color hover:shadow-lg hover:shadow-pink hover:shadow-opacity-30 ${styles.reloadButton}`}
                >
                  Full System Reboot
                </button>
              </div>
            </div>

            <div className="text-center pt-8 border-t border-text-color border-opacity-20">
              <p className="text-sm text-text-color opacity-80 m-0 italic">
                If this anomaly persists, please contact the digital detective
                for further investigation.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
