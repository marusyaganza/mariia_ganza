import type { ComponentType } from "react";

export interface TocItem {
  // Must match the `id` of a CaseBlock in the case's Body
  id: string;
  label: string;
}

// The case's URL slug is its key in the registry (src/content/cases/index.ts)
export interface CaseStudyMeta {
  // Case file number, e.g. "001"
  number: string;
  title: string;
  // Main heading on the case-study page
  headline: string;
  summary: string;
  // Badge under the header, e.g. "Private Beta · In Daily Use"
  statusLabel: string;
  // <meta name="description">
  description: string;
  details: {
    role: string;
    timeframe: string;
    status: string;
  };
  stack: readonly string[];
  toc: readonly TocItem[];
  // Public demo deployment, if the case has one
  demoUrl?: string;
  repositoryUrl: string;
}

export interface CaseStudy {
  meta: CaseStudyMeta;
  // The case's sections, rendered between the header and the footer
  Body: ComponentType;
}
