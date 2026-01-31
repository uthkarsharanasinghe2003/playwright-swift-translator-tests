import { test, expect } from '@playwright/test';

test('Pos_Fun_0005 - Convert common multi-word expressions', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  await page.fill('textarea', 'poddak inna mata hariyata vaeda');

  await page.click('button:has-text("Translate")');

  const output = await page.locator('textarea').nth(1).inputValue();

  expect(output).toBe('පොඩ්ඩක් ඉන්න මට හරියට වැඩ');
});
