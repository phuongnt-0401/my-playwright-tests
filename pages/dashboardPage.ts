import { Page, expect } from '@playwright/test';

export class DashboardPage {

  constructor(private page: Page) {}

  async verifyLoginSuccess() {
    //await expect(this.page).toHaveURL(/dashboard/);
    await expect(this.page).toHaveURL(/inventory/);
  }

}