import { test, expect } from '@playwright/test';

test('Pos_Fun_0008 - Convert a polite phrase', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.fill('#input-text', 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?');
  await expect(page.locator('#output-text'))
    .toHaveText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?');
});
