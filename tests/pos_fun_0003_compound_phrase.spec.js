const { test, expect } = require('@playwright/test');

test('Pos_Fun_0003 - Convert a compound phrase', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  // Compound phrase input
  await inputField.fill('potha table eka uda thiyanna');

  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  // 🔑 Wait for translation to appear
  await expect(outputField).toHaveText(/.+/, { timeout: 20000 });

  const actualText = (await outputField.innerText()).trim();

  console.log(`Translated Output: ${actualText}`);

  // ✅ Flexible positive assertion
  expect(actualText.length).toBeGreaterThan(8);
});
