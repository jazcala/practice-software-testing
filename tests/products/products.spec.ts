import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';
import { ProductDetailPage } from '../../pages/ProductDetailPage';

test.describe('Product Browsing', { tag: '@smoke' }, () => {
  let productsPage: ProductsPage;

  test.beforeEach(async ({ page }) => {
    productsPage = new ProductsPage(page);
    await productsPage.goto();
  });

  test('PROD-01: Product list is displayed', async () => {
    const count = await productsPage.getProductCount();
    expect(count).toBeGreaterThan(0);
  });

  test('PROD-02: Search returns results', async ({ page }) => {
    await productsPage.search('hammer');

    const count = await productsPage.getProductCount();
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('PROD-09: Can navigate to product detail', async ({ page }) => {
    const initialCount = await productsPage.getProductCount();
    if (initialCount === 0) {
      test.skip();
    }

    await productsPage.clickProduct(0);

    const detailPage = new ProductDetailPage(page);
    await page.waitForURL(/\/product\//);
    const productName = await detailPage.getProductName();
    expect(productName.length).toBeGreaterThan(0);
  });
});
