import type { CaseStudy } from "./types";
import { meta as languageLearningMeta } from "./languageLearningPlatform/meta";
import LanguageLearningBody from "./languageLearningPlatform/Body";

/**
 * Every published case study, keyed by URL slug (/cases/<slug>).
 * A case gets a page, and a project card can link to it, only once it's
 * listed here.
 */
const caseStudies = {
  "language-learning-platform": {
    meta: languageLearningMeta,
    Body: LanguageLearningBody,
  },
} satisfies Record<string, CaseStudy>;

export type CaseSlug = keyof typeof caseStudies;

export const caseSlugs = Object.keys(caseStudies) as CaseSlug[];

export const getCaseStudy = (slug: string): CaseStudy | undefined =>
  Object.hasOwn(caseStudies, slug) ? caseStudies[slug as CaseSlug] : undefined;

export const caseStudyPath = (slug: CaseSlug) => `/cases/${slug}`;
