import { test, expect } from '@playwright/test';

test('Pos_Fun_0007 - Convert complex phrase', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#input-text', 'praakRUtha yugaya saha mul shilaa leeKana.');
  await expect(page.locator('#output-text'))
    .toHaveText('ප්‍රාකෘත යුගය සහ මුල් ශිලා ලේඛන.');
});
