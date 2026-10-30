"use client";

import Link from "next/link";
import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error, {
      tags: { errorBoundary: "app-error", digest: error.digest },
    });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,232,31,0.03)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(143,189,198,0.03)_0%,transparent_50%)] pointer-events-none z-10 mix-blend-overlay" />
      <div className="text-center z-20 relative max-w-2xl mx-auto px-5">
        <div className="mb-8">
          <span className="font-accent text-sm text-[var(--pink)] tracking-widest">
            CASE FILE: ERROR-500
          </span>
        </div>

        <div className="space-y-6">
          <h1 className="font-heading text-5xl text-[var(--text-color)] mb-4">
            System Compromised
          </h1>

          <h2 className="font-heading text-2xl text-[var(--pink)] mb-4">
            Digital Investigation Failed
          </h2>

          <p className="font-body text-lg text-[var(--text-color)] opacity-80 mb-8">
            &ldquo;Something has gone wrong in the code, and the investigation
            has been temporarily suspended. The case remains unsolved, but
            we&apos;re working on it.&rdquo;
          </p>

          <div className="bg-gradient-to-br from-[rgba(229,87,106,0.1)] to-[rgba(229,87,106,0.05)] border border-[rgba(229,87,106,0.3)] p-6 rounded-none relative overflow-hidden shadow-[var(--shadow-noir)] mb-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--pink)] to-[var(--yellow)]"></div>
            <div className="absolute top-4 right-4 font-accent text-xs text-[var(--yellow)] tracking-widest opacity-60">
              ERROR REPORT
            </div>

            <div className="space-y-4">
              <h3 className="font-heading text-xl text-[var(--pink)]">
                Error Details:
              </h3>
              <div className="font-accent text-sm text-[var(--text-color)] bg-[rgba(0,0,0,0.3)] p-3 border border-[rgba(229,87,106,0.2)]">
                {error.message || "An unexpected error occurred"}
              </div>
              {error.digest && (
                <div className="text-xs text-[var(--text-color)] opacity-60">
                  Error ID: {error.digest}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="bg-[var(--green-light)] hover:bg-[var(--green-dark)] text-[var(--bg-color)] font-heading px-8 py-3 transition-all duration-300 hover:shadow-[var(--glow-green)] hover:transform hover:-translate-y-1"
            >
              Retry Investigation
            </button>
            <Link
              href="/"
              className="border border-[var(--blue)] text-[var(--blue)] hover:bg-[var(--blue)] hover:text-[var(--bg-color)] font-heading px-8 py-3 transition-all duration-300 text-center"
            >
              Return to Base
            </Link>
          </div>

          <div className="mt-8 p-4 bg-[rgba(143,189,198,0.1)] border border-[rgba(143,189,198,0.2)]">
            <p className="font-body text-sm text-[var(--text-color)] opacity-80">
              If this error persists, consider refreshing the page or returning
              to the main case files.
            </p>
          </div>
        </div>

        <div className="mt-12 text-xs text-[var(--text-color)] opacity-50 font-accent">
          Error 500 - System investigation failed
        </div>
      </div>
    </div>
  );
}
