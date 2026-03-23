import { test, expect } from "@playwright/test";

const BASE = "http://localhost:5173";

test("Brand Story screenshots", async ({ page }) => {
  await page.setViewportSize({ width: 402, height: 874 });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  await page.locator("text=品牌故事").click();
  await page.waitForTimeout(800);

  // Full page
  const shell = page.locator(".device-shell");
  await shell.screenshot({ path: "e2e/screenshots/brand-story-full.png" });

  // Sections
  await page.screenshot({ path: "e2e/screenshots/bs-1-top.png" });
  await page.evaluate(() => window.scrollTo(0, 600));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-2-seals.png" });
  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-3-ip.png" });
  await page.evaluate(() => window.scrollTo(0, 1800));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-4-mascot.png" });
  await page.evaluate(() => window.scrollTo(0, 2500));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-5-traits.png" });
  await page.evaluate(() => window.scrollTo(0, 3000));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-6-yearbook.png" });

  // Verify basics
  await expect(page.locator(".brand-story-screen")).toBeVisible();
  await expect(page.locator("text=品牌背景")).toBeVisible();
  await expect(page.locator("text=年刊").first()).toBeVisible();

  // Verify carousel scrollable
  const carousel = page.locator(".bs-yb-carousel");
  if (await carousel.count() > 0) {
    await carousel.evaluate((el) => { el.scrollLeft = 300; });
    await page.waitForTimeout(300);
    await page.screenshot({ path: "e2e/screenshots/bs-7-yearbook-scrolled.png" });
  }
});
