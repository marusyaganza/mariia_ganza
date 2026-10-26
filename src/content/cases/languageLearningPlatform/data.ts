// Content shown in the case's sections (see Body.tsx)
import { meta } from "./meta";
import editExampleScreen from "./screens/edit-example.png";
import gameFeedbackScreen from "./screens/game-feedback.png";
import spacedRepetitionSettingsScreen from "./screens/spaced-repetition-settings.png";
import vocabularyScreen from "./screens/vocabulary.png";

export const snapshotRows = [
  {
    label: "Product",
    value: "Private vocabulary and spaced-repetition application",
  },
  { label: "Role", value: "Sole designer and full-stack developer" },
  {
    label: "Timeline",
    value: "2019 – present · current Python version started in 2026",
  },
  {
    label: "Current stack",
    value:
      "FastAPI, SQLAlchemy 2.0 (async), Alembic, PostgreSQL, Redis · React 19, TypeScript, TanStack Query",
  },
  {
    label: "Previous stacks",
    value:
      "v1: Node.js/Express REST, MongoDB, React · v2: TypeScript GraphQL monorepo, MongoDB · Next.js/Prisma/PostgreSQL experiment",
  },
  {
    label: "Demo policy",
    value:
      "Separate demo deployment with mock dictionary data, so search covers a fixed set of words. Demo accounts last one week, then the account and all its data are deleted. The personal deployment stays private, with signup closed.",
  },
] as const;

export const productPrinciples = [
  {
    title: "Private by default",
    product:
      "A learner’s vocabulary, review history, and study patterns are not visible to other users.",
    technical:
      "Authentication and authorization are foundational; server-side ownership checks matter.",
  },
  {
    title: "Learner-owned words",
    product:
      "A user may edit their own vocabulary but never another learner’s.",
    technical:
      "Clear data ownership model: user → word / card / review history; authorization must be enforced in the backend.",
  },
  {
    title: "Controlled vocabulary quality",
    product:
      "Definitions and spelling should not silently become unreliable through uncontrolled shared edits.",
    technical:
      "Separate canonical dictionary-derived data from a learner’s personal notes, examples, and custom entries.",
  },
  {
    title: "Spelling-first learning",
    product: "Orthography is a core learning outcome, not a secondary detail.",
    technical:
      "Input normalization, answer comparison rules, typo policy, and test cases need explicit design.",
  },
  {
    title: "Capture in context",
    product:
      "Users should add a word from a real encounter, preserving an example and optional image.",
    technical:
      "Data model supports source context, examples, images, and user-created entries—not only a global word list.",
  },
  {
    title: "Audio-assisted recall",
    product: "Hearing a word aids recognition and memory.",
    technical:
      "Audio plays automatically at key moments in each game, except where hearing the word would give away the answer; v3 added a mute mode.",
  },
  {
    title: "Focused visual learning",
    product:
      "The UI should support concentration rather than compete for attention.",
    technical:
      "Restrained interaction design, limited visual effects, predictable game layout, accessibility-minded presentation.",
  },
  {
    title: "Efficient client–server exchange",
    product:
      "The system should not move redundant data merely because a route exists.",
    technical:
      "Deliberate API response shapes, pagination/selective fields, caching, and frontend-informed backend design.",
  },
] as const;

export const evolution = [
  {
    version: "v1",
    period: "2019 – 2020",
    title: "REST API and React client",
    status: "Historical",
    stage: "historical",
    summary:
      "An English-only vocabulary trainer: Merriam-Webster lookups, personal word cards, and four practice games behind JWT authentication.",
    experiment: "Building the first complete web product and REST API",
    stack: ["Node.js", "Express", "MongoDB", "React"],
    transition:
      "Wanted stronger typing, generated contracts, GraphQL, testing, and reusable UI.",
  },
  {
    version: "v2",
    period: "2022 – 2026",
    title: "TypeScript GraphQL monorepo",
    status: "Historical",
    stage: "historical",
    summary:
      "Added Spanish, four more games (eight in total), custom words with examples and images, and a first simplified spaced-repetition schedule. Client, server, and a Storybook design system shared one GraphQL schema.",
    experiment: "Shared types, GraphQL, monorepo tooling, tests, CI/CD",
    stack: [
      "Node.js",
      "GraphQL",
      "React",
      "TypeScript",
      "MongoDB",
      "Storybook",
      "Cypress",
      "Docker",
      "GitHub Actions",
      "Lerna",
    ],
    transition:
      "Wanted PostgreSQL, Prisma, Redis, Next.js, and external-service integration.",
  },
  {
    version: "Experiment",
    period: "2025",
    title: "Next.js full-stack rewrite",
    status: "Abandoned",
    stage: "abandoned",
    summary:
      "A move to relational data inside a single Next.js app. Never published, and no longer maintained once work switched to the current stack.",
    experiment:
      "Relational data, caching, generated audio, rate limiting, image optimization",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Redis"],
    transition:
      "Wanted deeper Python backend experience, and a client and server that build and deploy independently. Owning the backend also gives more control over security and leaves room for dedicated services, such as image optimization and audio generation.",
  },
  {
    version: "v3",
    period: "2026 – present",
    title: "FastAPI backend and React client",
    status: "Current · private beta",
    stage: "current",
    summary:
      "Separate repositories joined by REST contracts: server-side sessions, configurable spaced repetition, and a private deployment on Cloud Run and Netlify. Six games so far: all four from v1 and two from v2, with the remaining two from v2 being reworked.",
    experiment:
      "Python backend development, sessions, REST contracts, replaceable adapters",
    stack: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis", "React"],
  },
] as const;

export const dataModelTree = `users
├── words              personal copy · MW uuid links the source, null = custom word
│   ├── word_examples  editable list
│   ├── word_progress  current schedule · one row per game type
│   └── review_logs    one row per answer · append-only
└── game_settings      the learner's spaced-repetition settings

games, game_languages  shared catalogue
Redis: game sessions   temporary · deleted 20 minutes after the last answer`;

export const copyReasons = [
  "The learner can edit their words freely",
  "A dictionary entry changing or disappearing can't change a saved word",
  "Free API limits never affect saved vocabulary",
] as const;

export const decisions = [
  {
    number: "DECISION 01",
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
    // TODO: real article URL
    link: { href: "#", label: "Read the article →" },
  },
] as const;

export const captureStory = [
  {
    title: "Capture the encounter",
    text: "While reading The Hobbit, the learner meets “stork”, saves it from the dictionary, and adds the line from the book as their own example.",
    image: editExampleScreen,
    alt: "Edit dialog for “stork”: the dictionary definition, an example from The Hobbit being typed, and the pronunciation audio and image URLs.",
  },
  {
    title: "Keep it with the word",
    text: "The example is saved on the learner’s own copy of the word, next to the dictionary definition, pronunciation, and illustration.",
    image: vocabularyScreen,
    alt: "Vocabulary page listing saved English words; the “stork” card shows its definition, the Hobbit example, and an illustration.",
  },
  {
    title: "Recall it in practice",
    text: "After an answer, the game’s feedback screen shows the example, so the learner remembers where they first met the word.",
    image: gameFeedbackScreen,
    alt: "Pick the Word game after a wrong answer: “stork” is marked correct, and the Hobbit example appears below the Continue button.",
  },
] as const;

export const settingsScreen = {
  image: spacedRepetitionSettingsScreen,
  alt: "Spaced repetition settings dialog: the Recommended preset with learning steps of 15 minutes, 1 day and 6 days, and a preview of when a new word comes back.",
} as const;

export const evidenceLinks = [
  {
    href: "https://github.com/marusyaganza/language-power-backend",
    label: "v1 · Express REST API →",
    external: true,
  },
  {
    href: "https://github.com/marusyaganza/lp-monorepo",
    label: "v2 · GraphQL Monorepo →",
    external: true,
  },
  { href: meta.repositoryUrl, label: "v3 · FastAPI Backend →", external: true },
  { href: meta.demoUrl, label: "Live Demo →", external: true },
  { href: "#", label: "Walkthrough Video →" },
  { href: "#architecture", label: "Architecture Diagram →" },
  { href: "/cv.pdf", label: "Download CV →", external: true },
  {
    href: "https://www.linkedin.com/in/mariia-ganza",
    label: "LinkedIn →",
    external: true,
  },
] as const;
