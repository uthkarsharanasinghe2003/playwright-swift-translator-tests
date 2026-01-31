const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - Convert a short daily interrogative phrase', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  await inputField.fill('oyata kohomadha?');

  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  // 🔑 Wait until translation appears
  await expect(outputField).toHaveText(/.+/, { timeout: 15000 });

  const actualText = (await outputField.innerText()).trim();

  expect(actualText.length).toBeGreaterThan(0);
});

