import { test, expect } from '@playwright/test';

test('Pos_UI_0023 - UI responsive under repeated input', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#input-text', 'hari '.repeat(100));
  await expect(page.locator('#output-text')).toBeVisible();
});
