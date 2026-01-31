import { test, expect } from '@playwright/test';

test('Pos_UI_0020 - Real-time Sinhala output update', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await page.type('#input-text', 'mama oyaata gedhara giyaama kiyannam');
  await expect(page.locator('#output-text'))
    .toHaveText('මම ඔයාට ගෙදර ගියාම කියන්නම්');
});
