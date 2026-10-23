import * as Sentry from "@sentry/nextjs";
import { ErrorInfo } from "react";

export interface SentryErrorContext {
  sectionName?: string;
  componentName?: string;
}

/**
 * Reports an error caught by a React error boundary.
 * Sentry already records URL, browser, stack trace and time; this only adds
 * which part of the page failed and the React component stack.
 */
export const sentryErrorHandler = (
  error: Error,
  errorInfo: ErrorInfo,
  context: SentryErrorContext = {},
) => {
  Sentry.withScope((scope) => {
    scope.setTag("errorBoundary", true);

    if (context.sectionName) {
      scope.setTag("section", context.sectionName);
    }

    if (context.componentName) {
      scope.setTag("component", context.componentName);
    }

    Sentry.captureReactException(error, errorInfo);
  });
};
