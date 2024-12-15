import { AppRoutesEnum } from '@/routes/routes';
import { test, expect } from '@playwright/test';

test('sign in correctly credential', async ({ page }) => {
  await page.goto(AppRoutesEnum.SIGN_IN, {waitUntil: 'networkidle'});

  await page.getByPlaceholder('Enter your email').fill('skittz@example.com')
  await page.getByRole('button', { name: 'Login' }).click();

  const toastMessageSucessfully = page.getByText('Successfully. Authentication link sent to your email');

  await expect(toastMessageSucessfully).toBeVisible()

});

test('sign in wrong credential', async ({ page }) => {
  await page.goto(AppRoutesEnum.SIGN_IN, {waitUntil: 'networkidle'});

  await page.getByPlaceholder('Enter your email').fill('random-email@example.com')
  await page.getByRole('button', { name: 'Login' }).click();

  const toastMessageError = page.getByText('Authentication failed. Please try again later.');

  await expect(toastMessageError).toBeVisible()

});


test('navigate to new restaurant page', async ({ page }) => {
  await page.goto(AppRoutesEnum.SIGN_IN, {waitUntil: 'networkidle'});

  await page.getByRole('link', {name: 'New Restaurant'}).click();

  expect(page.url()).toContain(AppRoutesEnum.SING_UP)

});


