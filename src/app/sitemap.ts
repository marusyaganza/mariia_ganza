import type { MetadataRoute } from "next";
import { caseSlugs, caseStudyPath } from "@/content/cases";
import { SITE_URL } from "@/utils/site";

// Every published case study is listed automatically
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, priority: 1 },
    ...caseSlugs.map((slug) => ({
      url: `${SITE_URL}${caseStudyPath(slug)}`,
      priority: 0.8,
    })),
  ];
}
