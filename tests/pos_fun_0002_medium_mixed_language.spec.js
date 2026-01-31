import { test, expect } from '@playwright/test';

test('Pos_Fun_0002 - Convert medium-length informational content with mixed language', async ({ page }) => {
  // Navigate to the Swift Translator application
  await page.goto('https://www.swifttranslator.com/');

  // Medium-length mixed-language input (Sinhlish + English terms)
  const inputText =
    'suba udhaeesanak! , siyalu thorathuru esaeNin genenne obage vishvaasaniiya naalikaava svaadhiina ruupavaahiNiyayi.' +
    'adhath edhaa medhaa thula sidhuvu thorathuru esaenin saenin apagen dhaena gaeniimata apage youtube chaenalaya subscribe kara thaba ganna.';

  await page.fill('textarea', inputText);

  // Click Translate button (if required by UI)
  await page.click('button:has-text("Translate")');

  // Capture translated output
  const translatedText = await page.locator('textarea').nth(1).inputValue();

  // ✅ Expected Sinhala output (mixed language preserved where applicable)
  const expectedOutput =
    'සුබ උදෑසනක්! , සියලු තොරතුරු එසැණින් ගෙනෙන්නෙ ඔබගෙ විශ්වාසනීය නාලිකාව ස්වාදීන රූපවාහිණියයි.' +
    'අදත් එදා මෙදා තුල සිදුවු තොරතුරු එසැනින් සැනින් අපගෙන් දැන ගැනීමට අපගෙ youtube චැනලය subscribe කර තබ ගන්න.';

  // Assertion: verify correct conversion, spelling, punctuation, and mixed-language handling
  expect(translatedText).toBe(expectedOutput);
});
