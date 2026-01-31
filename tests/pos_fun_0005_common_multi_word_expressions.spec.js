import { test, expect } from '@playwright/test';

test('Pos_Fun_0005 - Convert common multi-word expressions', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Input field
  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  await inputField.fill('poddak inna mata hariyata vaeda');

  // Sinhala output field
  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  // Wait for translation
  await expect(outputField).toContainText('පොඩ්ඩක්', { timeout: 10000 });

  const actualOutput = (await outputField.innerText()).trim();

  console.log('Actual Output:', actualOutput);

  // Safe assertion
  expect(actualOutput).toContain('පොඩ්ඩක් ඉන්න මට හරියට වැඩ');
});

