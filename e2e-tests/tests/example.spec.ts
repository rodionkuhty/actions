import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Expect a title "to contain" a substring.
  const firstPoint = await page.getByText('Get started by editing src/pages/index.tsx', { exact: false })
  const secondPoint = await page.getByText('Save and see your changes instantly', { exact: false })
  await expect(firstPoint).toBeVisible();
  await expect(secondPoint).toBeVisible();
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000');

  // Click the get started link.
  await expect(await page.getByRole('link', { name: 'Deploy now' })).toBeVisible()
  await expect(await page.getByRole('link', { name: 'Read our docs' })).toBeVisible()
  // await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
