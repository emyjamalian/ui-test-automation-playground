import { Locator, Page } from '@playwright/test';

export class TextInputPage {
  readonly input: Locator;
  readonly button: Locator;

  constructor(private readonly page: Page) {
    this.input = page.getByLabel('Set New Button Name');
    this.button = page.locator('#updatingButton');
  }

  async goto() {
    await this.page.goto('/textinput');
  }

  async updateButtonLabel(newLabel: string) {
    await this.input.fill(newLabel);
    await this.input.dispatchEvent('change');
    await this.button.click();
  }

  async getButtonText() {
    return this.button.innerText();
  }
}


