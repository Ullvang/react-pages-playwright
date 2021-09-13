const { test, expect } = require("@playwright/test");

test("local", async ({ page }) => {
  page.goto("/");
  const title = page.locator("#title");
  await expect(title).toHaveText("Playwright testing");
});

test("basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Playwright");
});

test("another basic test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  const title = page.locator(".navbar__inner .navbar__title");
  await expect(title).toHaveText("Playwright");
});

// test("basic failing test", async ({ page }) => {
//   await page.goto("https://playwright.dev/");
//   const title = page.locator(".navbar__inner .navbar__title");
//   await expect(title).toHaveText("Playwright22");
// });
