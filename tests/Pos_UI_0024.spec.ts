import { test, expect } from '@playwright/test';

test('Pos_UI_0024 - Scroll works for large input', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  // Large input (UI stress)
  const largeInput = 'mama gedhara yanavaa '.repeat(300);

  await inputField.fill(largeInput);

  // Wait for layout to adjust
  await page.waitForTimeout(1000);

  // Get scroll position before scrolling
  const scrollBefore = await page.evaluate(() => window.scrollY);

  // Force scroll
  await page.mouse.wheel(0, 1000);

  // Wait for scroll effect
  await page.waitForTimeout(1000);

  // Get scroll position after scrolling
  const scrollAfter = await page.evaluate(() => window.scrollY);

  console.log(`Scroll before: ${scrollBefore}`);
  console.log(`Scroll after: ${scrollAfter}`);

  // Assertion: page must scroll
  expect(scrollAfter).toBeGreaterThan(scrollBefore);
});
