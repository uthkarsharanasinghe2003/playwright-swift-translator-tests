import { test, expect } from '@playwright/test';

test('Neg_UI_0034: Enter key does not move cursor correctly on repeated press', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea').first();

  await inputBox.type('mama gedhara yanavaa');
  await inputBox.press('Enter');
  await inputBox.press('Enter');

  const value = await inputBox.inputValue();

  expect(value.split('\n').length).toBeLessThan(3);
  test.fail(true, 'Repeated Enter key presses are not handled correctly');
});
