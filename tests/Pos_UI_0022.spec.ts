import { test, expect } from '@playwright/test';

test('Pos_UI_0022 - Language toggle button visible and clickable', async ({ page }) => {

  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  /**
   * SwiftTranslator language toggle appears as a button/text
   * We locate it using text instead of fragile CSS selectors
   */
  const languageToggle = page.getByRole('button', { name: /language|sinhala|english/i });

  // Ensure toggle exists
  await expect(languageToggle).toBeVisible({ timeout: 10000 });

  // Ensure toggle is enabled
  await expect(languageToggle).toBeEnabled();

  // Click the toggle
  await languageToggle.click();

  // Small wait to allow UI reaction
  await page.waitForTimeout(500);

  // Verify page did NOT crash after click
  await expect(page.locator('body')).toBeVisible();
});
