import { test, expect } from '@playwright/test';

test('Pos_UI_0021 - Cursor remains in input box', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Locate the input field
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');

  // Ensure input is visible and enabled
  await expect(inputField).toBeVisible();
  await expect(inputField).toBeEnabled();

  // Click inside input field
  await inputField.click();

  // Type text
  await inputField.fill('mama gedhara yanawa');

  // Verify cursor (focus) remains in the input field
  await expect(inputField).toBeFocused();

  // Optional: type another character to confirm cursor still active
  await inputField.type('a');

  // Final confirmation – input contains typed text
  await expect(inputField).toHaveValue(/mama gedhara yanawaa/i);
});

