// Content shown in the case's sections (see Body.tsx)
import { meta } from "./meta";
import editExampleScreen from "./screens/edit-example.png";
import gameFeedbackScreen from "./screens/game-feedback.png";
import searchScreen from "./screens/search.png";
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
      "Public demo runs the same code against the live Merriam-Webster API, with a small search allowance per account. Demo accounts and their application records are deleted after 24 hours. The personal deployment stays private, with signup closed.",
  },
] as const;

export const productPrinciples = [
  {
    title: "Private, learner-owned vocabulary",
    product:
      "A learner’s words, review history, and study patterns are visible only to them, and only they can edit them.",
    technical:
      "Every query is scoped to the signed-in user; another learner’s word or game session is reported exactly like one that does not exist.",
  },
  {
    title: "Capture words in context",
    product:
      "Words come from real encounters and keep the learner’s own examples, translations, and image.",
    technical:
      "Each learner keeps a personal copy of a dictionary entry, with editable definitions, examples, and images, alongside fully custom words.",
  },
  {
    title: "Deliberate recall practice",
    product:
      "Spelling is a core learning outcome, hearing a word supports recall, and words come back on a schedule the learner controls.",
    technical:
      "Explicit answer-comparison rules, audio that plays automatically unless it would give the answer away, and spaced repetition per word and per game, with presets.",
  },
  {
    title: "Focused interaction",
    product:
      "The interface supports concentration rather than competing for attention.",
    technical:
      "Predictable game layouts, restrained visual effects, and accessibility-minded presentation.",
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
      "Wanted deeper Python backend experience, separate client and server deployments, and explicit control over session handling and backend service boundaries.",
  },
  {
    version: "v3",
    period: "2026 – present",
    title: "FastAPI backend and React client",
    status: "Current",
    stage: "current",
    summary:
      "Separate repositories joined by REST contracts: server-side sessions and configurable spaced repetition. The same build runs as a private deployment and a public demo, on Cloud Run and Netlify. Six games so far: all four from v1 and two from v2, with the remaining two from v2 being reworked.",
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
  "Reviewing already-saved vocabulary does not require another dictionary lookup",
] as const;

export const decisions = [
  {
    number: "DECISION 01",
    title: "Decoupling client and server builds",
    rows: [
      {
        key: "Context",
        value:
          "The v2 monorepo held the client, server, design system, and a shared GraphQL schema. Each package generated its TypeScript types from that schema, and Lerna ran builds across the packages.",
      },
      {
        key: "Trade-off",
        value:
          "Shared types made contract changes atomic, but every schema change meant regenerating types in each package before anything built, and moving one side to a new stack meant untangling it from the shared tooling.",
      },
      {
        key: "Result",
        value:
          "v3 keeps the client and server in separate repositories with their own build and deployment pipelines. They meet at a documented REST API, and the client validates every response at runtime, so contract changes still need coordination but no shared build step.",
      },
    ],
  },
  {
    number: "DECISION 02",
    title: "Shaping API responses around the client",
    rows: [
      {
        key: "Context",
        value:
          "The system should not move redundant data merely because a route exists.",
      },
      {
        key: "Choice",
        value:
          "Response shapes follow the screens that use them: the vocabulary is searched, sorted, and paginated on the server, and a game question carries only what the round needs, with the answer kept on the server.",
      },
      {
        key: "Result",
        value:
          "The client caches responses with TanStack Query and checks each one against its schema, so a contract mismatch fails loudly instead of surfacing deep in the UI.",
      },
    ],
  },
] as const;

export const captureStory = [
  {
    title: "Capture the encounter",
    text: "Selected dictionary data and the learner’s own example become one learner-owned record: a personal copy, linked to its source by the Merriam-Webster id.",
    image: editExampleScreen,
    alt: "Edit dialog for “stork”: the dictionary definition, an example from The Hobbit being typed, and the pronunciation audio and image URLs.",
  },
  {
    title: "Keep it with the word",
    text: "Definitions, examples, audio, image, and caption stay editable on the learner’s copy, independent of later changes at the provider.",
    image: vocabularyScreen,
    alt: "Vocabulary page listing saved English words; the “stork” card shows its definition, the Hobbit example, and an illustration.",
  },
  {
    title: "Recall it in practice",
    text: "The feedback screen reads the example from the saved copy, reconnecting the answer with where the learner first met the word.",
    image: gameFeedbackScreen,
    alt: "Pick the Word game after a wrong answer: “stork” is marked correct, and the Hobbit example appears below the Continue button.",
  },
] as const;

export const productScreen = {
  image: searchScreen,
  alt: "Dictionary search for “lever” in the current client: noun and verb entries with pronunciation, audio, definitions, an example, an illustration, word forms, and a save button.",
} as const;

// Pinned to a commit so the line ranges keep pointing at the described tests
const API_REPO = "https://github.com/marusyaganza/language-power-api";
const API_COMMIT = "25a4443e58417fcdc74f8c337839504ea6e70500";
const apiTest = (file: string, name: string, lines: string) => ({
  name,
  href: `${API_REPO}/blob/${API_COMMIT}/tests/api/${file}#${lines}`,
});

export const apiCiUrl = `${API_REPO}/actions/workflows/ci.yml`;

export const verificationItems = [
  {
    claim: "A learner cannot read or modify another learner’s vocabulary",
    evidence:
      "A second account gets 404 when editing or deleting the first account’s word and sees an empty vocabulary; the owner’s word is unchanged. Game sessions are checked the same way.",
    tests: [
      apiTest(
        "test_words.py",
        "test_other_users_words_are_invisible",
        "L130-L141",
      ),
      apiTest(
        "test_games.py",
        "test_other_user_cannot_use_a_session",
        "L174-L181",
      ),
    ],
  },
  {
    claim: "An answer updates the scheduling state and appends a review record",
    evidence:
      "Answering a question saves word_progress for that game type and exactly one review_logs row, before the response is returned.",
    tests: [
      apiTest(
        "test_games.py",
        "test_answer_is_graded_and_progress_saved",
        "L114-L128",
      ),
    ],
  },
  {
    claim: "Deleting an account removes everything it owns",
    evidence:
      "The demo’s cleanup relies on ON DELETE CASCADE: deleting a user through SQL or the ORM removes their words, examples, progress, review history, and settings, while another user’s data survives.",
    tests: [
      apiTest(
        "test_user_deletion.py",
        "test_sql_delete_removes_everything_the_user_owns",
        "L47-L62",
      ),
      apiTest(
        "test_user_deletion.py",
        "test_orm_delete_removes_everything_the_user_owns",
        "L65-L71",
      ),
    ],
  },
] as const;

export const settingsScreen = {
  image: spacedRepetitionSettingsScreen,
  alt: "Spaced repetition settings dialog: the Recommended preset with learning steps of 15 minutes, 1 day and 6 days, and a preview of when a new word comes back.",
} as const;

export const evidenceLinks = [
  {
    href: "https://github.com/marusyaganza/language-power-v1-api",
    label: "v1 · Express REST API →",
    external: true,
  },
  {
    href: "https://github.com/marusyaganza/language-power-v2",
    label: "v2 · GraphQL Monorepo →",
    external: true,
  },
  {
    href: "https://github.com/marusyaganza/language-power-api",
    label: "v3 · FastAPI Backend →",
    external: true,
  },
  { href: meta.demoUrl, label: "Live Demo →", external: true },
  {
    href: "https://lp-design-system.netlify.app/?path=/docs/design-system-colors--docs",
    label: "v2 · Playable Storybook →",
    external: true,
  },
  {
    href: "https://language-power.netlify.app/api/docs",
    label: "Live API Docs →",
    external: true,
  },
  { href: "#architecture", label: "Architecture Diagram →" },
  { href: "/Mariia_Ganza_CV.pdf", label: "Download CV →", external: true },
  {
    href: "https://www.linkedin.com/in/mariia-ganza",
    label: "LinkedIn →",
    external: true,
  },
] as const;
