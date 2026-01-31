import { test, expect } from '@playwright/test';

test('Pos_UI_0022 - Language toggle button visible and clickable', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const toggle = page.locator('#language-toggle');
  await expect(toggle).toBeVisible();
  await toggle.click();
});
