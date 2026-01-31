import { test, expect } from '@playwright/test';

test('Pos_Fun_0009 - Convert informal phrasing', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Input field
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  await inputField.fill('ehema karanavako');

  // Sinhala output field
  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  // Wait for translation
  await expect(outputField).toContainText('එහෙම', { timeout: 10000 });

  const actualText = (await outputField.innerText()).trim();

  console.log('Actual Output:', actualText);

  // Assertion
  expect(actualText).toContain('එහෙම කරනවකො');
});

