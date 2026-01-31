import { test, expect } from '@playwright/test';

test.describe('Negative UI Test – Copy button feedback issue', () => {

  test('Neg_UI_0033: Copy button displays incorrect feedback on full page', async ({ page }) => {

    // Open the Sinhala-English translator site
    await page.goto('https://www.swifttranslator.com/');

    // Enter sample text
    await page.locator('textarea').first().fill('mama gedhara yanavaa');

    // Wait for translation output
    await page.waitForTimeout(2000);

    // Click the Copy button
    await page.getByRole('button', { name: /copy/i }).click();

    // ❌ NEGATIVE EXPECTATION:
    // The UI SHOULD show a small toast/snackbar
    // BUT currently it shows feedback across the entire page

    // Check if a full-page element appears (incorrect behavior)
    const fullPageFeedback = await page.locator('body').innerText();

    expect(fullPageFeedback).toContain('copied');

    // This assertion documents the failure
    // Marking test as expected to fail for negative scenario
    test.fail(true, 'Copy feedback is displayed across the full page instead of a toast/snackbar');
  });

});
