import { expect, test } from '@playwright/test';
import { VisibilityPage } from './pages/visibilityPage';

test.describe('Visibility', () => {
  test('identifies hidden and visible buttons correctly', async ({ page }) => {
    const visibilityPage = new VisibilityPage(page);
    await visibilityPage.goto();
    await visibilityPage.hideButtons();
    await expect(visibilityPage.removedButton()).toHaveCount(0);
    await expect(visibilityPage.zeroWidthButton()).not.toBeVisible();
    await expect(visibilityPage.overlappedButton()).toBeVisible();
    await expect(visibilityPage.overlay()).toBeVisible();
    expect(await visibilityPage.isOverlappedButtonCovered()).toBe(true);
    await expect(visibilityPage.transparentButton()).toHaveCSS('opacity', '0');
    await expect(visibilityPage.invisibleButton()).not.toBeVisible();
    await expect(visibilityPage.notDisplayedButton()).toBeHidden();
    const offscreenBox = await visibilityPage.offscreenButton().boundingBox();
    expect(offscreenBox).not.toBeNull();
    expect(offscreenBox!.y + offscreenBox!.height).toBeLessThan(0);
  });
});




