import { test, expect } from '@playwright/test';

test("Search on W3Schools", async ({ page }) => {
// goto trang web
await page.goto('https://www.w3schools.com');
// locate search textbox
const searchInput = page.locator('#tnb-google-search-input');

// nhập giá trị tìm kiếm
await searchInput.fill('HTML');

});