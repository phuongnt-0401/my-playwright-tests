import { test, expect } from '@playwright/test';

test('Search on W3schools', async ({ page }) => {
// 1. Đi tới trang login
await page.goto('https://www.w3schools.com/');
// 2. Locate search textbox
const searchInput = page.locator('#tnb-google-search-input');
// 3. Nhập giá trị tìm kiếm
await searchInput.fill('HTML');
await page.waitForTimeout(10000);

});