import { Locator, Page } from '@playwright/test';

export class AjaxPage {
  readonly triggerButton: Locator;
  readonly spinner: Locator;
  readonly message: Locator;
  readonly alertContent: Locator;

  constructor(private readonly page: Page) {
    this.triggerButton = page.getByRole('button', { name: 'Button Triggering AJAX Request' });
    this.spinner = page.locator('#spinner');
    this.alertContent = page.locator('#content');
    this.message = this.alertContent.getByRole('paragraph');
  }

  async goto() {
    await this.page.goto('/ajax');
  }

  async triggerRequest() {
    await this.triggerButton.click();
  }

  async waitForData() {
    await this.spinner.waitFor({ state: 'visible' });
    await this.message.waitFor({ state: 'visible', timeout: 20000 });
  }

  getLoadedMessageText() {
    return this.message.innerText();
  }

  async clickLoadedMessage() {
    await this.message.click();
  }
}

