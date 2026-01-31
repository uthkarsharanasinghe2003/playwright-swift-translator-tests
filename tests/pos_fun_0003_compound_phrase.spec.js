import { test, expect } from '@playwright/test';

test('Pos_Fun_0003 - Convert a compound phrase', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.fill(
    'textarea',
    'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.'
  );

  await page.click('button:has-text("Translate")');

  const output = await page.locator('textarea').nth(1).inputValue();

  expect(output).toBe(
    'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.'
  );
});
