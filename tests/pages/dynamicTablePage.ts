import { Locator, Page } from '@playwright/test';

export class DynamicTablePage {
  readonly headerCells: Locator;
  readonly dataRows: Locator;
  readonly chromeLabel: Locator;

  constructor(private readonly page: Page) {
    const table = page.getByRole('table');
    this.headerCells = table.getByRole('rowgroup').first().getByRole('columnheader');
    this.dataRows = table.getByRole('rowgroup').nth(1).getByRole('row');
    this.chromeLabel = page.locator('p.bg-warning');
  }

  async goto() {
    await this.page.goto('/dynamictable');
  }

  async getChromeCPUFromTable() {
    const headers = await this.headerCells.allInnerTexts();
    const trimmedHeaders = headers.map((header) => header.trim());
    const cpuIndex = trimmedHeaders.indexOf('CPU');
    if (cpuIndex === -1) {
      throw new Error('CPU column not found in dynamic table');
    }

    const rowCount = await this.dataRows.count();
    for (let i = 0; i < rowCount; i += 1) {
      const row = this.dataRows.nth(i);
      const name = (await row.getByRole('cell').first().innerText()).trim();
      if (name === 'Chrome') {
        return (await row.getByRole('cell').nth(cpuIndex).innerText()).trim();
      }
    }
    throw new Error('Chrome row not found in dynamic table');
  }

  async getChromeLabelText() {
    return this.chromeLabel.innerText();
  }
}


