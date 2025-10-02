import { expect, test } from '@playwright/test';
import { TextInputPage } from './pages/textInputPage';

test.describe('Text Input', () => {
  test('updates button label based on input value', async ({ page }) => {
    const textInputPage = new TextInputPage(page);
    await textInputPage.goto();
    await textInputPage.updateButtonLabel('Playwright FTW');
    await expect(await textInputPage.getButtonText()).toBe('Playwright FTW');
  });
});




