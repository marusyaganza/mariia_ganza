import * as Sentry from "@sentry/nextjs";
import { ErrorInfo } from "react";

export interface SentryErrorContext {
  sectionName?: string;
  componentName?: string;
  userId?: string;
  userAgent?: string;
  url?: string;
  timestamp?: string;
}

/**
 * Enhanced error handler that integrates with Sentry for comprehensive error tracking
 */
export const sentryErrorHandler = (
  error: Error,
  errorInfo: ErrorInfo,
  context: SentryErrorContext = {}
) => {
  // Set Sentry context with additional information
  Sentry.withScope((scope) => {
    // Set error level
    scope.setLevel("error");

    // Add tags for better filtering in Sentry
    scope.setTag("errorBoundary", true);
    scope.setTag("errorType", "react-error-boundary");

    if (context.sectionName) {
      scope.setTag("section", context.sectionName);
    }

    if (context.componentName) {
      scope.setTag("component", context.componentName);
    }

    // Add context information
    if (context.userId) {
      scope.setUser({ id: context.userId });
    }

    if (context.userAgent) {
      scope.setContext("browser", { userAgent: context.userAgent });
    }

    if (context.url) {
      scope.setContext("page", { url: context.url });
    }

    // Add React-specific context
    scope.setContext("react", {
      componentStack: errorInfo.componentStack,
      errorBoundary: true,
    });

    // Add error details
    scope.setContext("errorDetails", {
      message: error.message,
      stack: error.stack,
      name: error.name,
      timestamp: context.timestamp || new Date().toISOString(),
    });

    // Add breadcrumb for better debugging
    scope.addBreadcrumb({
      message: "React Error Boundary caught an error",
      level: "error",
      category: "error-boundary",
      data: {
        sectionName: context.sectionName,
        componentName: context.componentName,
        errorMessage: error.message,
      },
    });

    // Capture the exception
    Sentry.captureException(error);
  });

  // Also log to console in development for debugging
  if (process.env.NODE_ENV === "development") {
    console.group("🚨 Error Boundary - Sentry Integration");
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
    console.log("Context:", context);
    console.log("Error has been reported to Sentry");
    console.groupEnd();
  }
};
