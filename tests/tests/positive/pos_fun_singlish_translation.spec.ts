import { test, expect } from '@playwright/test';
const scenarios = [
  {
    id: 'Pos_Fun_0001',
    input: 'oyaa dhavalta monavadha kaeevee?',
    expected: 'ඔයා දවල්ට මොනවද කෑවේ?'
  },
  {
    id: 'Pos_Fun_0002',
    input: 'suba udhaeesanak! , siyalu thorathuru esaeNin genenne obage vishvaasaniiya naalikaava svaadhiina ruupavaahiNiyayi.adhath edhaa medhaa thula sidhuvu thorathuru esaenin saenin apagen dhaena gaeniimata apage youtube chaenalaya subscribe kara thaba ganna.',
    expected: 'සුබ උදෑසනක්! , සියලු තොරතුරු එසැණින් ගෙනෙන්නෙ ඔබගෙ විශ්වාසනීය නාලිකාව ස්වාදීන රූපවාහිණියයි.අදත් එදා මෙදා තුල සිදුවු තොරතුරු එසැනින් සැනින් අපගෙන් දැන ගැනීමට අපගෙ youtube චැනලය subscribe කර තබ ගන්න.'
  },
  {
    id: 'Pos_Fun_0003',
    input: 'mama gedhara yanavaa, haebaeyi vahina nisaa dhaenma yannee naee.',
    expected: 'මම ගෙදර යනවා, හැබැයි වහින නිසා දැන්ම යන්නේ නෑ.'
  },
  {
    id: 'Pos_Fun_0004',
    input: 'hari hari api ehema karamu',
    expected: 'හරි හරි අපි එහෙම කරමු'
  },
  {
    id: 'Pos_Fun_0005',
    input: 'poddak inna mata hariyata vaeda',
    expected: 'පොඩ්ඩක් ඉන්න මට හරියට වැඩ'
  },
  {
    id: 'Pos_Fun_0006',
    input: 'mema BhaaShaava vasara dhahas gaNanaka ithihaasayak aethi, anuraaDhapura yugayee sita aKaNdava vikaashanaya vuuvaki.',
    expected: 'මෙම භාෂාව වසර දහස් ගණනක ඉතිහාසයක් ඇති, අනුරාධපුර යුගයේ සිට අඛණ්ඩව විකාශනය වූවකි.'
  },
  {
    id: 'Pos_Fun_0007',
    input: 'praakRUtha yugaya saha mul shilaa leeKana.',
    expected: 'ප්‍රාකෘත යුගය සහ මුල් ශිලා ලේඛන.'
  },
  {
    id: 'Pos_Fun_0008',
    input: 'karuNaakaralaa mata podi udhavvak karanna puLuvandha?',
    expected: 'කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?'
  },
  {
    id: 'Pos_Fun_0009',
    input: 'ehema karanavako',
    expected: 'එහෙම කරනවකො'
  },
  {
    id: 'Pos_Fun_0010',
    input: 'mama gedhara innee. mata baya naee. hari hari api passe kathaa karamu.',
    expected: 'මම ගෙදර ඉන්නේ. මට බය නෑ. හරි හරි අපි පස්සෙ කතා කරමු.'
  },
  {
    id: 'Pos_Fun_0011',
    input: 'mata nidhimathayi',
    expected: 'මට නිදිමතයි'
  },
  {
    id: 'Pos_Fun_0012',
    input: 'anee Documents tika attach karalaa mata email ekak evanna, mama Kandy trip ekata yannavaa.',
    expected: 'අනේ Documents ටික attach කරලා මට email එකක් එවන්න, මම Kandy trip එකට යන්නවා.'
  },
  {
    id: 'Pos_Fun_0013',
    input: 'mama ATM ekata giyaa! Rs. 5343 withdraw karala, 7.30 AM office giyaa.',
    expected: 'මම ATM එකට ගියා! Rs. 5343 withdraw කරල, 7.30 AM office ගියා.'
  },
  {
    id: 'Pos_Fun_0014',
    input: 'December 25 mama 5kg rice gaththa, 250ml kiri gaththa.',
    expected: 'December 25 මම 5kg rice ගත්ත, 250ml කිරි ගත්ත.'
  },
  {
    id: 'Pos_Fun_0015',
    input: 'ID & NIC scan karalaa Email ekak evanna ASAP?',
    expected: 'ID & NIC scan කරලා Email එකක් එවන්න ASAP?'
  },
  {
    id: 'Pos_Fun_0016',
    input: 'mama gedhara yanavaa.    oyaa enavadha maath ekka yanna?',
    expected: 'මම ගෙදර යනවා. ඔයා එනවද මාත් එක්ක යන්න?'
  },
  {
    id: 'Pos_Fun_0017',
    input: 'mama Zoom meeting ekka hitiye, karuNaakara link eka email karanna',
    expected: 'මම Zoom meeting එක්ක හිටියෙ, කරුණාකර link එක email කරන්න.'
  },
  {
    id: 'Pos_Fun_0018',
    input: 'puLuvannam mata Colombo office meeting ekee Teams link eka WhatsApp karanna',
    expected: 'පුළුවන්නම් මට Colombo office meeting එකේ Teams link එක WhatsApp කරන්න'
  },
  {
    id: 'Pos_Fun_0019',
    input: 'hari mama karanam',
    expected: 'හරි මම කරන්නම්'
  }
];
test.describe('Singlish Translation – Positive Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });
  });

  for (const data of scenarios) {
    test(`${data.id} – ${data.input}`, async ({ page }) => {

      const inputField = page.getByPlaceholder('Input Your Singlish Text Here.');

      await expect(inputField).toBeVisible();
      await inputField.fill(data.input);

      // wait for translation to appear
      const outputField = page
        .locator('.card')
        .filter({ hasText: 'Sinhala' })
        .locator('div.whitespace-pre-wrap');

      await expect(outputField).toBeVisible({ timeout: 10000 });

      const actualText = (await outputField.innerText()).trim();

      console.log(
        `Test ID: ${data.id} | Input: ${data.input} | Expected: ${data.expected} | Actual: ${actualText}`
      );

      expect(actualText).toBe(data.expected);
    });
  }
});
