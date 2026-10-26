import type { CaseStudyMeta } from "../types";

export const meta: CaseStudyMeta = {
  number: "001",
  title: "Language Learning Platform",
  headline:
    "Evolving a private language-learning platform from Node.js to FastAPI",
  summary:
    "A private vocabulary and spaced-repetition application developed across three versions and one abandoned experiment: Node.js REST, a TypeScript GraphQL monorepo, an unfinished Next.js rewrite with PostgreSQL and Prisma, and the current Python/FastAPI backend. This case study examines what each version solved, where its architecture created friction, and why the current implementation uses PostgreSQL, SQLAlchemy, Redis, REST contracts, and modular provider adapters.",
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
    { id: "architecture", label: "System at a Glance" },
    { id: "decisions", label: "Key Decisions" },
    { id: "evidence", label: "Implementation" },
    { id: "links", label: "Links & Evidence" },
  ],
  // TODO: real demo URL
  demoUrl: "#",
  repositoryUrl: "https://github.com/marusyaganza/py-lp",
};
