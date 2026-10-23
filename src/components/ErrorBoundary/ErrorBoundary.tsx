"use client";

import { Component, ErrorInfo, ReactNode } from "react";
import {
  sentryErrorHandler,
  SentryErrorContext,
} from "@/utils/sentryErrorHandler";

interface Props {
  children: ReactNode;
  // Rendered instead of children after an error; may be null to render nothing
  fallback: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  sentryContext?: SentryErrorContext;
  enableSentry?: boolean;
}

interface State {
  hasError: boolean;
}

/**
 * Page-level errors are handled by app/error.tsx and app/global-error.tsx;
 * this boundary is for isolating individual sections (see SectionErrorBoundary).
 */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Report to Sentry if enabled (default: true)
    if (this.props.enableSentry !== false) {
      sentryErrorHandler(error, errorInfo, this.props.sentryContext);
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

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
