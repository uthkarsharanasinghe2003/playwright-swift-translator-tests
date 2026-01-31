import { test, expect } from '@playwright/test';

test('Neg_Fun_0032: Sinhala words before ID are not converted', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').first().fill('mage ID number eka liyaganna.');
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').nth(1).inputValue();

  expect(output.startsWith('mage'));
  test.fail(true, 'Sinhala words before "ID" remain unconverted');
});
