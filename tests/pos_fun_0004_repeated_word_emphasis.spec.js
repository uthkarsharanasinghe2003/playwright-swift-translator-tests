import { test, expect } from '@playwright/test';

test('Pos_Fun_0004 - Convert repeated word expressions used for emphasis', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.fill('textarea', 'hari hari api ehema karamu');

  await page.click('button:has-text("Translate")');

  const output = await page.locator('textarea').nth(1).inputValue();

  expect(output).toBe('හරි හරි අපි එහෙම කරමු');
});
