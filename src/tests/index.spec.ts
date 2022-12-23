import { test, expect } from "@playwright/test";

test("page title is correct", async ({ page }) => {
  await page.goto("http://localhost:3000/new-entry");

  await expect(page).toHaveTitle(/Create New Entry/i);
});
