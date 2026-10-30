import { expect, test, type Page } from "@playwright/test";

/**
 * Visual baseline for the portfolio. Run before and after dependency upgrades
 * or styling refactors; any pixel change in the design shows up as a diff.
 *
 *   yarn test:visual          compare against the committed screenshots
 *   yarn test:visual:update   accept the current rendering as the new baseline
 */

const PAGES = [
  { name: "home", path: "/" },
  { name: "case-study", path: "/cases/language-learning-platform" },
  { name: "not-found", path: "/this-page-does-not-exist" },
];

// Scroll-reveal sections (components/Reveal) stay hidden until they've been
// in view once, so bring each into view and wait for it to appear before
// taking a full-page screenshot. Waiting per element also covers the case
// where React hasn't hydrated yet when the test starts scrolling.
const revealWholePage = async (page: Page) => {
  await page.evaluate(() => document.fonts.ready);
  for (const element of await page.locator('[class*="fadeIn"]').all()) {
    await element.scrollIntoViewIfNeeded();
    await expect(element).toHaveClass(/visible/);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
};

for (const { name, path } of PAGES) {
  test(name, async ({ page }) => {
    await page.goto(path, { waitUntil: "networkidle" });
    await revealWholePage(page);
    await expect(page).toHaveScreenshot(`${name}.png`, { fullPage: true });
  });
}

test("mobile menu", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "menu toggle is mobile-only");

  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.getByRole("button", { name: "Open case index" }).click();
  await expect(page).toHaveScreenshot("mobile-menu.png");
});
