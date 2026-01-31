import { test, expect } from '@playwright/test';

test('Pos_Fun_0010 - Convert large conversational content', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputText =
    'mama gedhara innee. mata baya naee. hari hari api passe kathaa karamu.';

  // Input field
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  await inputField.fill(inputText);

  // Sinhala output field
  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  // Wait until translation appears
  await expect(outputField).toContainText('මම', { timeout: 10000 });

  const actualOutput = (await outputField.innerText()).trim();

  console.log('Translated Output:', actualOutput);

  // Partial assertion (SAFE for real UI)
  expect(actualOutput).toContain('මම ගෙදර');
});

