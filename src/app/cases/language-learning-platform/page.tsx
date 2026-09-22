import type { Metadata } from "next";
import LanguageLearningCaseStudy from "@/components/CaseStudy/LanguageLearningCaseStudy";

export const metadata: Metadata = {
  title: "Case File 001 — Language Learning Platform",
  description:
    "A multi-iteration, authenticated language-learning application. Current implementation: Python/FastAPI backend with PostgreSQL, SQLAlchemy, Redis, session-based authentication, and a React client.",
  alternates: {
    canonical: "/cases/language-learning-platform",
  },
};

export default function LanguageLearningPlatformPage() {
  return <LanguageLearningCaseStudy />;
}
