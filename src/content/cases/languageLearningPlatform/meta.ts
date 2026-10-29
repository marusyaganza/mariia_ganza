import type { CaseStudyMeta } from "../types";

export const meta: CaseStudyMeta = {
  number: "001",
  title: "Language Learning Platform",
  headline:
    "Evolving a private language-learning platform from Node.js to FastAPI",
  summary:
    "A private vocabulary application for saving words in context and practicing them through configurable spaced repetition. Built and redesigned since 2019, it now uses a Python/FastAPI backend and React client. This case study follows the product constraints, data-model decisions, and architectural trade-offs behind that evolution.",
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
    { id: "motive", label: "Why It Exists" },
    { id: "principles", label: "Product Principles" },
    { id: "evolution", label: "Evolution" },
    { id: "data-model", label: "Data Model" },
    { id: "verification", label: "Verification" },
    { id: "architecture", label: "System at a Glance" },
    { id: "decisions", label: "Key Decisions" },
    { id: "evidence", label: "Implementation" },
    { id: "links", label: "Links & Evidence" },
  ],
  demoUrl: "https://language-power.netlify.app",
  // Several repositories (v1–v3), so the rail points at the links section
  repositoryUrl: "#links",
};
