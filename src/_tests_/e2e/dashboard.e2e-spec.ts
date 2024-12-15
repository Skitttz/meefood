import { AppRoutesEnum } from '@/routes/routes';
import { test, expect } from '@playwright/test';


test('display day orders amount', async ({ page }) => {
  await page.goto(AppRoutesEnum.BASE, {waitUntil: 'networkidle'});
  await expect(page.getByText('20', {exact: true} )).toBeVisible();
  await expect(page.getByText('+20% in relation to yesterday', {exact: true} )).toBeVisible();
});


test('display month orders amount', async ({ page }) => {
  await page.goto(AppRoutesEnum.BASE, {waitUntil: 'networkidle'});
  await expect(page.getByText('150', {exact: true} )).toBeVisible();
  await expect(page.getByText('+7% in relation to last month', {exact: true} )).toBeVisible();
});

test('display month canceled orders amount', async ({ page }) => {
  await page.goto(AppRoutesEnum.BASE, {waitUntil: 'networkidle'});
  await expect(page.getByText('3', {exact: true} )).toBeVisible();
  await expect(page.getByText('+5% in relation to last month', {exact: true} )).toBeVisible();
});

test('display month revenue', async ({ page }) => {
  await page.goto(AppRoutesEnum.BASE, {waitUntil: 'networkidle'});
  await expect(page.getByText('US$ 320,00', {exact: true} )).toBeVisible();
  await expect(page.getByText('+5% in relation to last month', {exact: true} )).toBeVisible();
});


