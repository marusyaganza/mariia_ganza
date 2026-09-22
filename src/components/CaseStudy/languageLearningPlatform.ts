export const tocItems = [
  { id: "snapshot", label: "Project Snapshot" },
  { id: "scope", label: "Problem & Scope" },
  { id: "architecture", label: "System at a Glance" },
  { id: "decisions", label: "Key Decisions" },
  { id: "evidence", label: "Implementation" },
  { id: "quality", label: "Quality & Constraints" },
  { id: "next", label: "What's Next" },
  { id: "links", label: "Links & Evidence" },
] as const;

export const snapshotRows = [
  {
    label: "Goal",
    value: "Support private vocabulary review and spaced-repetition practice",
  },
  { label: "Role", value: "Independent fullstack developer" },
  {
    label: "Timeframe",
    value: "2019 – present · current Python iteration in 2026",
  },
  {
    label: "Stack",
    value: "FastAPI, PostgreSQL, SQLAlchemy, Redis, React",
  },
  {
    label: "Focus",
    value: "API design, authentication, domain logic, modular boundaries",
  },
  {
    label: "Demo policy",
    value: "Protected by login to avoid exposing user data",
  },
] as const;

export const nonGoals = [
  "Not a public social or community platform",
  "Not a commercial or monetized product",
  "Not a full reimplementation of an existing spaced-repetition algorithm",
] as const;

export const decisions = [
  {
    number: "DECISION 01",
    title: "Four architectural iterations as deliberate evolution",
    rows: [
      {
        key: "Context",
        value:
          "The same product domain was rebuilt across four stacks: REST/Node/React/MongoDB → GraphQL monorepo/TypeScript → Next.js/PostgreSQL/Prisma/Redis → FastAPI/PostgreSQL/SQLAlchemy/Redis (current).",
      },
      {
        key: "Choice",
        value:
          "Use one consistent domain to evaluate different stacks over time rather than starting a new idea each time.",
      },
      {
        key: "Result",
        value:
          "A comparable body of evidence across ecosystems, and a clear technical narrative of growth.",
      },
    ],
  },
  {
    number: "DECISION 02",
    title: "Move from a GraphQL monorepo to modular backend boundaries",
    rows: [
      {
        key: "Context",
        value:
          "The v2 monorepo held server, client, design system, and shared packages, with generated types shared across boundaries.",
      },
      {
        key: "Trade-off",
        value:
          "Shared types gave atomic changes and coordination, but coupled type generation and build tooling made independent migration harder.",
      },
      {
        key: "Result",
        value:
          "Current system uses a REST contract and modular provider interfaces instead of shared frontend/backend types.",
      },
    ],
  },
  {
    number: "DECISION 03",
    title: "Session-based authentication over JWT",
    rows: [
      {
        key: "Context",
        value: "Prior versions used JWT for authentication.",
      },
      {
        key: "Choice",
        value: "Moved to server-side session state, backed by Redis.",
      },
      {
        key: "Trade-off",
        value:
          "Neither approach is universally better — the choice changes invalidation, state ownership, cookie handling, and infrastructure requirements.",
      },
    ],
  },
] as const;

export const evidenceItems = [
  {
    placeholder: "[ Screenshot placeholder ]\nReview flow",
    caption: "Vocabulary review session, protected route",
  },
  {
    placeholder: "[ Screenshot placeholder ]\nOpenAPI docs",
    caption: "FastAPI-generated API documentation",
  },
  {
    placeholder: "[ Diagram placeholder ]\nScheduling state",
    caption: "Simplified spaced-repetition state transitions",
  },
] as const;

export const verificationItems = [
  "Unit tests for scheduling and domain logic",
  "API tests for protected routes and validation",
  "Selected frontend tests for critical flows",
  "Static analysis, lint, and type checks",
] as const;

export const nextItems = [
  "Expand selected automated tests around session auth and review scheduling",
  "Document query and indexing decisions as the PostgreSQL model develops",
  "Decide which stable server components, if any, to release publicly",
] as const;

export const stackTags = [
  "FastAPI",
  "PostgreSQL",
  "SQLAlchemy",
  "Redis",
  "React",
] as const;

export const evidenceLinks = [
  { href: "#", label: "Public v2 Repository ↗" },
  { href: "#", label: "Walkthrough Video ↗" },
  { href: "#architecture", label: "Architecture Diagram ↗" },
  { href: "/cv.pdf", label: "Download CV ↗", external: true },
  {
    href: "https://www.linkedin.com/in/mariia-ganza",
    label: "LinkedIn ↗",
    external: true,
  },
] as const;
