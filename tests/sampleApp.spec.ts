import { expect, test } from '@playwright/test';
import { SampleAppPage } from './pages/sampleAppPage';

test.describe('Sample App', () => {
  test('logs in and logs out with valid credentials', async ({ page }) => {
    const sampleAppPage = new SampleAppPage(page);
    await sampleAppPage.goto();
    await sampleAppPage.login('playwright', 'pwd');
    await expect(await sampleAppPage.getStatusText()).toBe('Welcome, playwright!');
    await expect(await sampleAppPage.getLoginButtonText()).toBe('Log Out');
    await sampleAppPage.logout();
    await expect(await sampleAppPage.getStatusText()).toBe('User logged out.');
    await expect(await sampleAppPage.getLoginButtonText()).toBe('Log In');
  });
});




