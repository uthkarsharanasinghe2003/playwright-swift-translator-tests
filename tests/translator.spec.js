const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

test('Pos_Fun_0001 - Simple greeting', async ({ page }) => {
  const input = page.locator('textarea');
  await input.fill('oyaata kohomadha?');
});
