import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Create Next App/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Click the get started link.
await expect(page.getByText('Get started', {  exact: false })).toBeVisible();
await expect(page.getByText('Save and see', {  exact: false })).toBeVisible();
});
