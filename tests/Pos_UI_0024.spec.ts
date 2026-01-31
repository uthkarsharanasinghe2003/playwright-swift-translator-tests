import { test, expect } from '@playwright/test';

test('Pos_UI_0024 - Scroll works for large input', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#input-text', 'long text '.repeat(200));
  await page.mouse.wheel(0, 500);
  await expect(page.locator('#output-text')).toBeVisible();
});
