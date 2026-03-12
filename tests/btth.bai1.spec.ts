import { test, expect } from '@playwright/test';

test('btth.bai1', async ({ page }) => {
  //go to page  
  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

  //nhap du lieu
  await page.locator('#username').fill('phuongnt');
  await page.locator('#email').fill('phuongnt@abc.com');
  await page.locator('input[type="radio"][value="female"]').check();
  await page.locator('input[type="checkbox"][value="reading"]').check();
  await page.selectOption('#interests', 'art');
  await page.selectOption('#country', 'australia');
  await page.locator('#dob').fill('1988-07-18');

  //xac nhan trang thai
  await expect(page.locator('input[value="female"]')).toBeChecked();
  await expect(page.locator('input[value="reading"]')).toBeChecked();

  //register
  await page.locator('button[type="submit"]').click();

  //xac nhan trang thai sau register
  await expect(page.locator('#userTable tbody tr').first().locator('td').nth(1)).toHaveText('phuongnt');

  await page.waitForTimeout(5000);

});