import { test, expect } from '@playwright/test';

test('Neg_Fun_0027: Incorrect rendering of slang phrase "easy peasy"', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.locator('textarea').first().fill('eka harima easy peasy vaedakne.');
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').nth(1).inputValue();

  expect(output).toContain('easy');
  test.fail(true, 'Slang phrase "easy peasy" is incorrectly converted');
});
