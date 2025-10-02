import { Locator, Page } from '@playwright/test';

export class SampleAppPage {
  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly status: Locator;

  constructor(private readonly page: Page) {
    this.username = page.getByPlaceholder('User Name');
    this.password = page.getByPlaceholder('********');
    this.loginButton = page.getByRole('button', { name: /^Log/ });
    this.status = page.locator('#loginstatus');
  }

  async goto() {
    await this.page.goto('/sampleapp');
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();
  }

  async logout() {
    await this.loginButton.click();
  }

  async getStatusText() {
    return this.status.innerText();
  }

  async getLoginButtonText() {
    return this.loginButton.innerText();
  }
}


