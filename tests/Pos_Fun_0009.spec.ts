import { test, expect } from '@playwright/test';

test('Pos_Fun_0009 - Convert informal phrasing', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#input-text', 'ehema karanavako');
  await expect(page.locator('#output-text'))
    .toHaveText('එහෙම කරනවකො');
});
