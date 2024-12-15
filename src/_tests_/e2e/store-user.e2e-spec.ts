import { AppRoutesEnum } from '@/routes/routes';
import { test, expect } from '@playwright/test';


test('update user profile sucessfully', async ({ page }) => {
  await page.goto(AppRoutesEnum.BASE, {waitUntil: 'networkidle'});
  await page.getByRole('button', { name: 'AcarajeShop' }).click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();

  await page.getByLabel('Name').fill('PastelShop');
  await page.locator('#descritpion').fill('Another Description');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForLoadState();

  const toastMessageRegistredRestaurantSucess = page.getByText('The restaurant profile was successfully updated.');
  const buttonChangeNewName = page.getByRole('button', { name: 'PastelShop' });
  await expect(toastMessageRegistredRestaurantSucess).toBeVisible();
  await expect(buttonChangeNewName).toBeVisible();
});


test('update user profile wrong name', async ({ page }) => {
  await page.goto(AppRoutesEnum.BASE, {waitUntil: 'networkidle'});
  await page.getByRole('button', { name: 'AcarajeShop' }).click();
  await page.getByRole('menuitem', { name: 'Profile' }).click();

  await page.getByLabel('Name').fill('ErrorName');
  await page.locator('#descritpion').fill('Another Description');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForLoadState();


  const toastMessageRegistredRestaurantFailed = page.getByText('An error occurred while updating the restaurant profile. Please try again later.');
  await expect(toastMessageRegistredRestaurantFailed).toBeVisible();
 
  
});
