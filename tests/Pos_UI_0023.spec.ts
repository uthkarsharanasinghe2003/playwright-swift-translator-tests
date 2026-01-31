import { test, expect } from '@playwright/test';

test('Pos_UI_0023 - UI responsive under repeated input', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');
  await expect(inputField).toBeVisible();

  const outputField = page
    .locator('.card')
    .filter({ hasText: 'Sinhala' })
    .locator('div.whitespace-pre-wrap');

  const repeatedInputs = [
    'mama gedhara yanavaa',
    'oyata kohomadha?',
    'suba udhaeesanak',
    'hari hari api ehema karamu',
    'mata podi udhavvak karanna puluvandha?'
  ];

  for (const text of repeatedInputs) {
    // Clear input
    await inputField.fill('');

    // Type slowly to avoid UI freeze
    await inputField.type(text, { delay: 50 });

    // Wait for translation to appear
    await expect(outputField).toBeVisible({ timeout: 10000 });

    // Small pause before next iteration
    await page.waitForTimeout(800);
  }

  // Final assertion: input still usable
  await inputField.fill('test again');
  await expect(inputField).toHaveValue('test again');
});
