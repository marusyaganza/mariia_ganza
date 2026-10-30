import { defineConfig, devices } from "@playwright/test";

const PORT = 3100;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  // A real visual change fails both attempts; a one-off rendering glitch
  // passes on retry and is reported as "flaky" instead of failing the run
  retries: 1,
  reporter: "list",
  use: {
    baseURL: `http://localhost:${PORT}`,
    // Use the locally installed Chrome; no Playwright browser download needed
    channel: "chrome",
    // Animations jump to their end state and the random/ambient effects are off,
    // which keeps screenshots deterministic
    reducedMotion: "reduce",
  },
  expect: {
    // Stricter per-pixel colour tolerance than the default (0.2), so subtle
    // palette shifts are caught, not just layout changes
    toHaveScreenshot: { threshold: 0.05 },
  },
  projects: [
    { name: "desktop", use: { viewport: { width: 1440, height: 900 } } },
    { name: "mobile", use: { ...devices["Pixel 7"] } },
  ],
  webServer: {
    // Screenshots are taken against a production build
    command: `yarn build && yarn start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    timeout: 300_000,
    reuseExistingServer: false,
    env: {
      // Keep test runs out of Sentry: no events sent, no source map upload
      NEXT_PUBLIC_SENTRY_DSN: "",
      SENTRY_DSN: "",
      SENTRY_AUTH_TOKEN: "",
      NEXT_TELEMETRY_DISABLED: "1",
    },
  },
});
