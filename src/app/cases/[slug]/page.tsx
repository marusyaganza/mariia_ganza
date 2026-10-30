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
  const title = `Case File ${meta.number} · ${meta.title}`;
  // getCaseStudy found it, so slug is a known CaseSlug
  const path = caseStudyPath(slug as CaseSlug);
  const ogImage = {
    url: meta.ogImage.image.src,
    width: meta.ogImage.image.width,
    height: meta.ogImage.image.height,
    alt: meta.ogImage.alt,
  };
  return {
    title,
    description: meta.description,
    alternates: { canonical: path },
    // Set in full: a page's openGraph replaces the layout's instead of
    // merging with it
    openGraph: {
      type: "article",
      locale: "en_US",
      url: path,
      siteName: "Mariia Ganza Portfolio",
      title,
      description: meta.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
      images: [ogImage],
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return <CaseStudyPage caseStudy={caseStudy} />;
}
