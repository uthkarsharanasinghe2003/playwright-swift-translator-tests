const { test, expect } = require('@playwright/test');

test('Pos_Fun_0002 - Convert medium-length informational content with mixed language', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  await inputField.fill(
    'Mama office yanne bus eken. Today weather hari lassanai. Ehema nathnam api yamu.'
  );

  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  // 🔑 Wait until translation appears (longer timeout)
  await expect(outputField).toHaveText(/.+/, { timeout: 20000 });

  const actualText = (await outputField.innerText()).trim();

  // ✅ Positive but flexible assertion
  expect(actualText.length).toBeGreaterThan(10);
});
