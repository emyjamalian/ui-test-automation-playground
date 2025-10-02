import { Locator, Page } from '@playwright/test';

export class OverlappedPage {
  readonly nameInput: Locator;
  readonly subjectInput: Locator;

  constructor(private readonly page: Page) {
    this.nameInput = page.getByPlaceholder('Name');
    this.subjectInput = page.getByPlaceholder('Subject');
  }

  async goto() {
    await this.page.goto('/overlapped');
  }

  async enterName(name: string) {
    await this.subjectInput.scrollIntoViewIfNeeded();
    await this.nameInput.scrollIntoViewIfNeeded();
    await this.nameInput.fill(name);
  }

  async isNameEditable() {
    return this.nameInput.isEditable();
  }
}

