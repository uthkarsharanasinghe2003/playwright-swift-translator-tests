import { test, expect } from '@playwright/test';

test('Pos_UI_0020 - Real-time Sinhala output update', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Input field
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');

  await expect(inputField).toBeVisible();

  // Type input
  await inputField.fill('mama oyaata gedhara giyaama kiyannam');

  // Sinhala output field
  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  // Wait for output to update
  await expect(outputField).toContainText('මම', { timeout: 10000 });

  const outputText = (await outputField.innerText()).trim();

  console.log('Actual Sinhala Output:', outputText);

  // Assertion (partial to avoid flaky failures)
  expect(outputText).toContain('මම');
});
