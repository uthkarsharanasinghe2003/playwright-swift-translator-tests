import { test, expect } from '@playwright/test';

test('Pos_Fun_0004 - Convert repeated word expressions used for emphasis', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Input field
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  await inputField.fill('hari hari api ehema karamu');

  // Sinhala output field
  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  // Wait for translation
  await expect(outputField).toContainText('හරි හරි', { timeout: 10000 });

  const actualOutput = (await outputField.innerText()).trim();

  console.log('Actual Output:', actualOutput);

  // Safe assertion
  expect(actualOutput).toContain('හරි හරි අපි එහෙම කරමු');
});
