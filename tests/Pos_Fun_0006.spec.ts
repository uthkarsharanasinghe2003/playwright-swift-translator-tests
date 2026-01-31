import { test, expect } from '@playwright/test';

test('Pos_Fun_0006 - Convert a large paragraph', async ({ page }) => {
  await page.goto('http://localhost:3000');

  const inputText = `mema BhaaShaava vasara dhahas gaNanaka ithihaasayak aethi, anuraaDhapura yugayee sita aKaNdava vikaashanaya vuuvaki...`;

  const expectedOutput = `මෙම භාෂාව වසර දහස් ගණනක ඉතිහාසයක් ඇති, අනුරාධපුර යුගයේ සිට අඛණ්ඩව විකාශනය වූවකි...`;

  await page.fill('#input-text', inputText);
  await expect(page.locator('#output-text')).toHaveText(expectedOutput);
});
