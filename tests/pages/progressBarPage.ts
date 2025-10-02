import { Locator, Page } from '@playwright/test';

export class ProgressBarPage {
  readonly startButton: Locator;
  readonly stopButton: Locator;
  readonly progressBar: Locator;
  readonly result: Locator;

  constructor(private readonly page: Page) {
    this.startButton = page.getByRole('button', { name: 'Start' });
    this.stopButton = page.getByRole('button', { name: 'Stop' });
    this.progressBar = page.getByRole('progressbar');
    this.result = page.locator('#result');
  }

  async goto() {
    await this.page.goto('/progressbar');
  }

  async reachSeventyFivePercent() {
    await this.startButton.click();
    await this.page.waitForFunction(() => {
      const value = document.querySelector('#progressBar')?.getAttribute('aria-valuenow');
      return value !== undefined && Number(value) >= 75;
    }, null, { timeout: 45000 });
    await this.stopButton.click();
  }

  async getResultDifference(): Promise<number> {
    const resultText = await this.result.innerText();
    const match = resultText.match(/Result: (-?\d+)/);
    if (!match) {
      throw new Error('Result difference not found');
    }
    return Number(match[1]);
  }
}


