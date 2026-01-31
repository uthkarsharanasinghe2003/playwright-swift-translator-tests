import { test, expect } from '@playwright/test';

test('Pos_UI_0021 - Cursor remains in input box', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const input = page.locator('#input-text');
  await input.fill('hari hari');
  await expect(input).toBeFocused();
});
