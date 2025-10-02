import { expect, test } from '@playwright/test';
import { OverlappedPage } from './pages/overlappedPage';

test.describe('Overlapped Element', () => {
  test('allows entering text into the overlapped input', async ({ page }) => {
    const overlappedPage = new OverlappedPage(page);
    await overlappedPage.goto();
    await overlappedPage.enterName('John Doe');
    await expect(overlappedPage.nameInput).toHaveValue('John Doe');
    await expect(await overlappedPage.isNameEditable()).toBe(true);
  });
});




