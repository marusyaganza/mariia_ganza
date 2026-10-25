import type { CaseStudyMeta } from "../types";

export const meta: CaseStudyMeta = {
  number: "001",
  title: "Language Learning Platform",
  headline: "A multi-iteration, authenticated language-learning application",
  summary:
    "Current implementation: Python/FastAPI backend with PostgreSQL, SQLAlchemy, Redis, session-based authentication, and a React client. Independently designed and built across four architectural generations.",
  statusLabel: "Active · Portfolio Release",
  description:
    "A multi-iteration, authenticated language-learning application. Current implementation: Python/FastAPI backend with PostgreSQL, SQLAlchemy, Redis, session-based authentication, and a React client.",
  details: {
    role: "Fullstack Developer",
    timeframe: "2019 – present",
    status: "Active",
  },
  stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "React"],
  toc: [
    { id: "snapshot", label: "Project Snapshot" },
    { id: "scope", label: "Problem & Scope" },
    { id: "architecture", label: "System at a Glance" },
    { id: "decisions", label: "Key Decisions" },
    { id: "evidence", label: "Implementation" },
    { id: "quality", label: "Quality & Constraints" },
    { id: "next", label: "What's Next" },
    { id: "links", label: "Links & Evidence" },
  ],
  // TODO: real repository URL
  repositoryUrl: "#",
};
