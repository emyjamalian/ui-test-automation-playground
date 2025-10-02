import { Locator, Page } from '@playwright/test';

export class VisibilityPage {
  constructor(private readonly page: Page) {}

  async goto() {
    await this.page.goto('/visibility');
  }

  async hideButtons() {
    await this.hideButton().click();
  }

  hideButton(): Locator {
    return this.page.getByRole('button', { name: 'Hide' });
  }

  removedButton(): Locator {
    return this.page.locator('#removedButton');
  }

  zeroWidthButton(): Locator {
    return this.page.locator('#zeroWidthButton');
  }

  overlappedButton(): Locator {
    return this.page.locator('#overlappedButton');
  }

  overlay(): Locator {
    return this.page.locator('#hidingLayer');
  }

  transparentButton(): Locator {
    return this.page.locator('#transparentButton');
  }

  invisibleButton(): Locator {
    return this.page.locator('#invisibleButton');
  }

  notDisplayedButton(): Locator {
    return this.page.locator('#notdisplayedButton');
  }

  offscreenButton(): Locator {
    return this.page.locator('#offscreenButton');
  }

  async isOverlappedButtonCovered(): Promise<boolean> {
    return this.overlappedButton().evaluate(() => {
      const element = document.getElementById('overlappedButton');
      if (!element) {
        return false;
      }
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const elementAtPoint = document.elementFromPoint(centerX, centerY);
      return elementAtPoint?.id === 'hidingLayer';
    });
  }
}


