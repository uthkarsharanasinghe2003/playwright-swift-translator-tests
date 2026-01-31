import { test, expect } from '@playwright/test';

test('Pos_Fun_0006 - Convert a large paragraph', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputText =
    'mema BhaaShaava vasara dhahas gaNanaka ithihaasayak aethi, anuraaDhapura yugayee sita aKaNdava vikaashanaya vuuvaki.';

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
  await expect(outputField).toContainText('භාෂාව', { timeout: 10000 });

  const actualOutput = (await outputField.innerText()).trim();

  console.log('Translated Output:', actualOutput);

  // Partial assertion for long content (SAFE)
  expect(actualOutput).toContain('මෙම භාෂාව');
  expect(actualOutput).toContain('ඉතිහාසයක්');
});

