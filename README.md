# Mariia Ganza Portfolio

My personal portfolio site: a single page with my background, skills, projects, work history and contact links, plus long-form case studies of individual projects. It is built with Next.js, TypeScript and Tailwind CSS, in a noir detective theme: projects are "case files", the skills panel is the "evidence locker", and the work history is an "experience record".

**Live site: [mariia-ganza.vercel.app](https://mariia-ganza.vercel.app)**

![Home page: "I'm Mariia Ganza, Backend-leaning Fullstack Engineer" hero in the dark noir theme, with the case-file navigation](docs/screenshots/home-desktop.webp)

![Case Files section: project cards for the Language Learning Platform and Stars Travel](docs/screenshots/case-files-desktop.webp)

<p align="center">
  <img src="docs/screenshots/mobile.webp" width="600" alt="Mobile layout: the home page next to the open Case Index menu" />
</p>

## Status

- In active development
- Deployed on Vercel at [mariia-ganza.vercel.app](https://mariia-ganza.vercel.app) (`SITE_URL` in `src/utils/site.ts`)
- One published case study, the [Language Learning Platform](#case-studies). Stars Travel has a project card that links to its repository

## Features

- Home page sections: hero, about and skills, project cards, experience timeline and contact, each wrapped in its own error boundary
- Case study pages at `/cases/<slug>`, with a table of contents, architecture diagram, screenshots that open full size, and links to the evidence
- Every page is prerendered as static HTML at build time
- Generated Open Graph images for the home page and for each case study, a sitemap that lists every published case, `robots.txt` and JSON-LD structured data
- Downloadable CV (`public/Mariia_Ganza_CV.pdf`)
- Theme effects: film grain, venetian-blind shadows, spotlights (one follows the cursor), a blinking caret under the hero title, and an occasional "faulty neon" flicker on skill and tech tags
- Sound effects on navigation clicks, loaded only on the first play
- With reduced motion turned on in the OS, animations jump to their end state and the random effects are off

## Tech stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript (strict)
- Tailwind CSS 3, together with CSS modules for the theme effects
- Fonts from Google Fonts through `next/font`: Courier Prime (headings), Inter (body text), Fira Mono (labels)
- Sentry 11 (`@sentry/nextjs`) for error reporting
- Playwright for visual regression tests
- ESLint 10 (flat config, `eslint-config-next`)
- Volta with Node `24.19.0` and Yarn `4.18.1`

## Project structure

| Path | Responsibility |
| --- | --- |
| `src/app` | Routes: home page, `cases/[slug]`, error and 404 screens, Open Graph images, sitemap and robots |
| `src/components` | One folder per home page section (`Hero`, `About`, `Projects`, `Experience`, `Contact`), plus `Navigation`, `Footer`, `Layout` (theme effects), `Reveal` (fade-in on scroll) and `ErrorBoundary` |
| `src/components/CaseStudy` | Page shell and building blocks shared by every case study: header, side rail, table of contents, decision cards, timeline, screenshots |
| `src/content/cases` | The case studies. Each one is a folder with `meta.ts`, `Body.tsx`, its data and images, registered in `index.ts` |
| `src/hooks` | Sound effects and the ambient flicker |
| `src/utils` | Site URL and description, scrolling, reduced-motion check, Open Graph image helpers, Sentry options |
| `src/instrumentation*.ts`, `sentry.*.config.ts` | Sentry setup for the browser, server and edge runtimes |
| `public` | CV, icons, web manifest and sound files |
| `tests` | Playwright visual tests and their baseline screenshots |
| `docs/screenshots` | Screenshots used in this README |

## Requirements

- [Volta](https://volta.sh/)
- Node.js `24.19.0`
- Yarn `4.18.1`
- Google Chrome, for the visual tests only

Both versions are pinned in the `volta` field of `package.json`, so Volta selects them automatically inside the project directory. Without Volta, install Node 24 another way and run `corepack enable`, which picks up Yarn from the `packageManager` field.

## Local development

1. Install [Volta](https://volta.sh/).
2. Install dependencies from the lockfile:

   ```bash
   yarn install --immutable
   ```

3. Start the dev server:

   ```bash
   yarn dev
   ```

   The site runs on `http://localhost:3000`. No environment variables are needed: without a Sentry DSN, error reporting is simply off.

To check a production build locally, run `yarn build` and then `yarn start`.

## Content

The home page content lives in the section components:

| What | Where |
| --- | --- |
| Hero title and introduction | `src/components/Hero/Hero.tsx` |
| About text and skills | `src/components/About/About.tsx` |
| Project cards | `src/components/Projects/Projects.tsx` |
| Work history and education | `src/components/Experience/Experience.tsx` |
| Contact links | `src/components/Contact/Contact.tsx` |
| Site URL and description (metadata, share images) | `src/utils/site.ts` |
| CV | `public/Mariia_Ganza_CV.pdf` |

### Case studies

A case study is a folder in `src/content/cases`:

- `meta.ts`: title, summary, status, stack, table of contents, demo and repository links (typed by `CaseStudyMeta` in `types.ts`)
- `Body.tsx`: the sections, built from the components in `src/components/CaseStudy`. Each section's `id` must match an entry in `meta.toc`
- `data.ts` and images: the content the sections render

To publish one, add it to the registry in `src/content/cases/index.ts`. Its key becomes the URL slug. The page, its Open Graph image and its sitemap entry follow from the registry. To link a project card to it, set `caseSlug` on the card in `Projects.tsx`. Only registered slugs type-check, so a card can't point at a case that doesn't exist. A card without a case study can set `repositoryUrl` instead.

Published so far:

- [`language-learning-platform`](src/content/cases/languageLearningPlatform): how a private vocabulary app evolved from Node.js and MongoDB to FastAPI, PostgreSQL and React

## Error reporting

Errors are reported to [Sentry](https://sentry.io) when a DSN is set. Without one (local development, tests) the SDK isn't started.

- Uncaught errors, the route error screens and the section error boundaries report to Sentry
- 10% of visits are sampled for performance tracing. There is no session replay
- No IP addresses, user info, cookie values or request bodies are collected
- Events are sent through the site's own `/monitoring` route, so ad blockers don't drop them
- Source maps are uploaded at build time, only when `SENTRY_AUTH_TOKEN` is set

| Variable | Exposed to the browser | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SENTRY_DSN` | Yes | Turns reporting on, in the browser and, as a fallback, on the server |
| `SENTRY_DSN` | No | Optional separate DSN for the server and edge runtimes |
| `SENTRY_ORG`, `SENTRY_PROJECT` | No | Build only. Where the source maps go |
| `SENTRY_AUTH_TOKEN` | No | Build only, secret. Uploads the source maps |

`.env.example` lists them with placeholder values. Put real ones in `.env.local` (gitignored) locally, and in the project's environment settings on Vercel. Restart `yarn dev` after changing them.

## Scripts

| Script | Description |
| --- | --- |
| `yarn dev` | Start the dev server |
| `yarn build` | Production build |
| `yarn start` | Serve the production build |
| `yarn lint` | Run ESLint |
| `yarn type-check` | Run TypeScript checks (`tsc --noEmit`) |
| `yarn test:visual` | Build the site and compare it with the baseline screenshots |
| `yarn test:visual:update` | Accept the current rendering as the new baseline |

## Testing

The visual tests screenshot the home page, the case study and the 404 page on a desktop viewport (1440 × 900) and on a mobile one (Pixel 7), plus the open mobile menu, and compare them with the baseline in `tests/visual.spec.ts-snapshots`.

- They run against a production build on port 3100, started by Playwright
- They use the installed Chrome, so no Playwright browser download is needed
- Reduced motion is on, so the random effects don't make the screenshots differ
- Sentry is turned off for test runs

I run them before and after dependency upgrades and styling refactors. The baseline images are specific to Linux and Chrome. On another OS, record your own baseline first with `yarn test:visual:update`.

There are no unit tests. The site has almost no logic of its own, so lint, type checks and the visual tests cover it.

## Deployment

The site is deployed on Vercel. Every page is static, and the Sentry route and source map upload work through the Next.js build, so Vercel needs no extra configuration beyond the Sentry variables. `next.config.ts` adds `X-Frame-Options`, `X-Content-Type-Options` and `Referrer-Policy` headers to every response.

## Limitations

- No CI. Lint, type checks and the visual tests are run by hand
- The visual baseline only matches on Linux with Chrome
- Content is written in the components and case study files; there is no CMS
- One case study so far
