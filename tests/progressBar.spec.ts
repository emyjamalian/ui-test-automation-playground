import { expect, test } from '@playwright/test';
import { ProgressBarPage } from './pages/progressBarPage';

test.describe('Progress Bar', () => {
  test('stops close to 75 percent', async ({ page }) => {
    const progressBarPage = new ProgressBarPage(page);
    await progressBarPage.goto();
    await progressBarPage.reachSeventyFivePercent();
    await expect(Math.abs(await progressBarPage.getResultDifference())).toBeLessThanOrEqual(1);
  });
});




