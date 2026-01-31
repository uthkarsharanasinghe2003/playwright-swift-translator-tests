import { test, expect } from '@playwright/test';

test('Neg_Fun_0025: Conversion failure for letter "W"', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').first().fill('mata wadhayak mea wada goda.');
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').nth(1).inputValue();

  expect(output).toContain('w'); // Incorrect behavior expected
  test.fail(true, 'Letter "W" is not correctly converted to Sinhala');
});
