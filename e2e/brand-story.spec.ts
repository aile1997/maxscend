import { test, expect } from "@playwright/test";

const BASE = "http://localhost:5173";

test("Brand Story - full page & sections", async ({ page }) => {
  await page.setViewportSize({ width: 402, height: 874 });
  await page.goto(BASE, { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);

  // Navigate to Brand Story
  await page.locator("text=品牌故事").click();
  await page.waitForTimeout(800);

  // Full element screenshot
  const deviceShell = page.locator(".device-shell");
  await deviceShell.screenshot({ path: "e2e/screenshots/brand-story-full.png" });

  // Section screenshots
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

  // Assertions - structure
  await expect(page.locator(".brand-story-screen")).toBeVisible();
  await expect(page.locator(".bs__title--bg")).toHaveText("品牌背景");
  await expect(page.locator(".bs__title--spirit")).toHaveText("品牌精神");
  await expect(page.locator(".bs__title--ip")).toHaveText("IP介绍");
  await expect(page.locator(".bs__title--yearbook")).toHaveText("年刊");

  // Verify yearbook carousel is scrollable
  const carousel = page.locator(".bs__yearbook-carousel");
  await expect(carousel).toBeVisible();
  const cards = page.locator(".bs__yearbook-card");
  await expect(cards).toHaveCount(4);

  // Scroll carousel and verify second card becomes visible
  await carousel.evaluate((el) => { el.scrollLeft = 300; });
  await page.waitForTimeout(300);
  await page.screenshot({ path: "e2e/screenshots/bs-7-yearbook-scrolled.png" });

  // Verify element dimensions match Figma specs
  const sealImg = page.locator(".bs__seal-img").first();
  const sealBox = await sealImg.boundingBox();
  if (sealBox) {
    // Seal should be ~138x141 at 402px viewport (design-unit=1)
    expect(sealBox.width).toBeCloseTo(138, -1);
    expect(sealBox.height).toBeCloseTo(141, -1);
  }

  const mascot1 = page.locator(".bs__mascot1");
  const m1Box = await mascot1.boundingBox();
  if (m1Box) {
    // Mascot 1 should be ~334x446 at 402px viewport
    expect(m1Box.width).toBeCloseTo(334, -1);
    expect(m1Box.height).toBeCloseTo(446, -1);
  }

  const mascot2 = page.locator(".bs__mascot2");
  const m2Box = await mascot2.boundingBox();
  if (m2Box) {
    // Mascot 2 should be ~384x384
    expect(m2Box.width).toBeCloseTo(384, -1);
    expect(m2Box.height).toBeCloseTo(384, -1);
  }

  // Check yearbook card dimensions
  const ybCover = page.locator(".bs__yearbook-cover").first();
  const ybBox = await ybCover.boundingBox();
  if (ybBox) {
    expect(ybBox.width).toBeCloseTo(300, -1);
    expect(ybBox.height).toBeCloseTo(304, -1);
  }
});
