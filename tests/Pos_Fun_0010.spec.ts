import { test, expect } from '@playwright/test';

test('Pos_Fun_0010 - Convert large conversational content', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const input = `mama gedhara innee. mata baya naee...`;
  const output = `මම ගෙදර ඉන්නේ. මට බය නෑ...`;

  await page.fill('#input-text', input);
  await expect(page.locator('#output-text')).toHaveText(output);
});
