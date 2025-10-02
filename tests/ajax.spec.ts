import { expect, test } from '@playwright/test';
import { AjaxPage } from './pages/ajaxPage';

test.describe('AJAX Data', () => {
  test('waits for label to load after AJAX request', async ({ page }) => {
    const ajaxPage = new AjaxPage(page);
    await ajaxPage.goto();
    await ajaxPage.triggerRequest();
    await ajaxPage.waitForData();
    await expect(await ajaxPage.getLoadedMessageText()).toBe('Data loaded with AJAX get request.');
    await ajaxPage.clickLoadedMessage();
  });
});




