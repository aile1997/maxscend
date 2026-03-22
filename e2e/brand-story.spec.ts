import { test, expect } from "@playwright/test";

const BASE = "http://localhost:5173";

test("Brand Story page screenshots", async ({ page }) => {
  await page.setViewportSize({ width: 402, height: 874 });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  // Navigate to Brand Story
  await page.locator("text=品牌故事").click();
  await page.waitForTimeout(800);

  // Full element screenshot
  const deviceShell = page.locator(".device-shell");
  await deviceShell.screenshot({ path: "e2e/screenshots/brand-story-full.png" });

  // Section screenshots via window scroll
  await page.screenshot({ path: "e2e/screenshots/bs-1-top.png" });

  await page.evaluate(() => window.scrollTo(0, 500));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-2-seals.png" });

  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-3-ip.png" });

  await page.evaluate(() => window.scrollTo(0, 1500));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-4-mascot.png" });

  await page.evaluate(() => window.scrollTo(0, 2200));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-5-traits.png" });

  await page.evaluate(() => window.scrollTo(0, 2700));
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-6-yearbook.png" });

  // Assertions
  await expect(page.locator(".brand-story-screen")).toBeVisible();
  await expect(page.locator(".bs__title--bg")).toHaveText("品牌背景");
  await expect(page.locator(".bs__title--spirit")).toHaveText("品牌精神");
  await expect(page.locator(".bs__title--ip")).toHaveText("IP介绍");
  await expect(page.locator(".bs__title--yearbook")).toHaveText("年刊");
});
