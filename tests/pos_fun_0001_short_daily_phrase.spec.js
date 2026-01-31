import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Convert a short daily interrogative phrase', async ({ page }) => {
  // Navigate to the application
  await page.goto('https://www.swifttranslator.com/');

  // Enter short Singlish input (≤ 30 characters)
  await page.fill('textarea', 'oyaa dhavalta monavadha kaeevee?');

  // Click Translate button (if required by UI)
  await page.click('button:has-text("Translate")');

  // Capture translated output
  const translatedText = await page.locator('textarea').nth(1).inputValue();

  // ✅ Verify correct Sinhala translation and punctuation
  expect(translatedText).toBe('ඔයා දවල්ට මොනවද කෑවේ?');
});
