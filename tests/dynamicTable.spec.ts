import { expect, test } from '@playwright/test';
import { DynamicTablePage } from './pages/dynamicTablePage';

test.describe('Dynamic Table', () => {
  test('shows Chrome CPU value matching highlight', async ({ page }) => {
    const dynamicTablePage = new DynamicTablePage(page);
    await dynamicTablePage.goto();
    const chromeCpuFromTable = await dynamicTablePage.getChromeCPUFromTable();
    await expect(await dynamicTablePage.getChromeLabelText()).toContain(chromeCpuFromTable);
  });
});




