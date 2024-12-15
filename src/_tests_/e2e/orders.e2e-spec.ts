import { AppRoutesEnum } from '@/routes/routes';
import { test, expect } from '@playwright/test';


test('navigate page orders to view list', async ({ page }) => {
  await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});
  
  await expect(page.getByRole('cell', {name: 'Customer 1', exact: true})).toBeVisible()
  await expect(page.getByRole('cell', {name: 'Customer 10', exact: true})).toBeVisible()

});

test('navigate page orders to next page', async ({ page }) => {
  await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});
  await page.getByRole('button', { name: 'Next Page' }).click();
  await expect(page.getByRole('cell', {name: 'Customer 11', exact: true})).toBeVisible()
  await expect(page.getByRole('cell', {name: 'Customer 20', exact: true})).toBeVisible()
});

test('navigate page orders to last page', async ({ page }) => {
  await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});
  await page.getByRole('button', { name: 'Last Page' }).click();
  await expect(page.getByRole('cell', {name: 'Customer 91', exact: true})).toBeVisible()
  await expect(page.getByRole('cell', {name: 'Customer 100', exact: true})).toBeVisible()
});

test('navigate page orders to previous page', async ({ page }) => {
  await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});
  await page.getByRole('button', { name: 'Next Page' }).click();
  await page.getByRole('button', { name: 'Previous Page' }).click();

  await expect(page.getByRole('cell', {name: 'Customer 1', exact: true})).toBeVisible()
  await expect(page.getByRole('cell', {name: 'Customer 10', exact: true})).toBeVisible()
});

test('navigate page orders to first page', async ({ page }) => {
  await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});
  await page.getByRole('button', { name: 'Next Page' }).click();
  await page.getByRole('button', { name: 'Next Page' }).click();
  await page.getByRole('button', { name: 'Next Page' }).click();

  await page.getByRole('button', { name: 'First Page' }).click();

  await expect(page.getByRole('cell', {name: 'Customer 1', exact: true})).toBeVisible()
  await expect(page.getByRole('cell', {name: 'Customer 10', exact: true})).toBeVisible()
});

test('filter by order id',async ({page}) => {
  await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});
  await page.getByPlaceholder('ID orders').fill('order-11')
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('cell',{name: 'order-11', exact: true})).toBeVisible()

})

test('filter by customer name', async ({page}) => {
  await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});

  await page.getByPlaceholder('Customer name').fill('Customer 15')
  await page.getByRole('button', { name: 'Search' }).click();
  await expect(page.getByRole('cell',{name: 'Customer 15', exact: true})).toBeVisible();

})

test('filter by status', async ({page}) => {
  await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});

  await page.getByTestId('select-element').click()
  await page.getByLabel('Pending').click();
  await page.getByRole('button', { name: 'Search' }).click();
  const tableRowsOrders = page.getByRole('cell', {name: 'In pending'});
  await expect(tableRowsOrders).toHaveCount(10);
})

test('clear all filters', async ({page}) => {
await page.goto(AppRoutesEnum.ORDERS, {waitUntil: 'networkidle'});
await page.getByPlaceholder('ID orders').fill('order-17')
await page.getByPlaceholder('Customer name').fill('Customer 17')
await page.getByTestId('select-element').click()
await page.getByLabel('Pending').click();

 await page.getByRole('button', { name: 'Search' }).click();
 await expect(page.getByRole('cell',{name: 'Customer 17', exact: true})).toBeVisible();
 await expect(page.getByRole('cell',{name: 'order-17', exact: true})).toBeVisible()
 await expect(page.getByRole('cell', {name: 'In pending'})).toBeVisible();
 
 await page.getByRole('button', { name: 'Remove Filters' }).click();

 await expect(page.getByRole('cell',{name: 'Customer 1', exact: true})).toBeVisible();
})


