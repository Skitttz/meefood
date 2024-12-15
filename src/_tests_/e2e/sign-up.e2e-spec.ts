import { AppRoutesEnum } from '@/routes/routes';
import { test, expect } from '@playwright/test';


test('navigate page login', async ({ page }) => {
  await page.goto(AppRoutesEnum.SING_UP, {waitUntil: 'networkidle'});
  await page.getByRole('link', { name: 'Back to login' }).click();
  
  expect(page.url()).toContain(AppRoutesEnum.SIGN_IN)

});

test('sign up new restaurant', async ({ page }) => {
  await page.goto(AppRoutesEnum.SING_UP, {waitUntil: 'networkidle'});

  await page.getByPlaceholder('Enter your restaurant name').fill('AcarajeShop')
  await page.getByPlaceholder('Enter your manager name').fill('Skittz')
  await page.getByPlaceholder('example@email.com').fill('skittz@example.com')
  await page.getByPlaceholder('(00) 09999-').fill('11 98119049')

  await page.getByRole('button', { name: 'Get Started Now' }).click();

  const toastMessageSucessfully = page.getByText('Restaurant successfully registered!');

  await expect(toastMessageSucessfully).toBeVisible()

});

test('sign up new restaurant with wrong credential', async ({ page }) => {
  await page.goto(AppRoutesEnum.SING_UP, {waitUntil: 'networkidle'});

  await page.getByPlaceholder('Enter your restaurant name').fill('L9Restaurant')
  await page.getByPlaceholder('Enter your manager name').fill('Mork')
  await page.getByPlaceholder('example@email.com').fill('example@example.com')
  await page.getByPlaceholder('(00) 09999-').fill('11 31119049')

  await page.getByRole('button', { name: 'Get Started Now' }).click();

  const toastMessageSucessfully = page.getByText('The restaurant registration failed. Please try again later.');

  await expect(toastMessageSucessfully).toBeVisible()

});


