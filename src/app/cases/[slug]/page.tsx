import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudy/CaseStudyPage";
import {
  caseSlugs,
  caseStudyPath,
  getCaseStudy,
  type CaseSlug,
} from "@/content/cases";

interface CasePageProps {
  params: Promise<{ slug: string }>;
}

// Only published case studies exist; anything else under /cases is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return caseSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  const { meta } = caseStudy;
  return {
    title: `Case File ${meta.number} — ${meta.title}`,
    description: meta.description,
    alternates: {
      // getCaseStudy found it, so slug is a known CaseSlug
      canonical: caseStudyPath(slug as CaseSlug),
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return <CaseStudyPage caseStudy={caseStudy} />;
}
