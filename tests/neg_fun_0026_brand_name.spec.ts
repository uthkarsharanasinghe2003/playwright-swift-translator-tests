import { test, expect } from '@playwright/test';

test('Neg_Fun_0026: Brand name incorrectly translated', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputText =
    'mama dhavasak Sunquick bothalayak aragena apee ehaa gedharata giyaa.';

  await page.locator('textarea').first().fill(inputText);
  await page.waitForTimeout(2000);

  const output = await page.locator('textarea').nth(1).inputValue();

  expect(output).not.toContain('Sunquick');
  test.fail(true, 'Brand name should remain unchanged but is incorrectly converted');
});
