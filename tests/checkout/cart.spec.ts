import { test, expect } from '@playwright/test';
import { ProductsPage } from '../../pages/ProductsPage';
import { ProductDetailPage } from '../../pages/ProductDetailPage';

test.describe('Shopping Cart', { tag: '@smoke' }, () => {
  test('CART-01: Add product to cart', async ({ page }) => {
    const productsPage = new ProductsPage(page);
    await productsPage.goto();

    const count = await productsPage.getProductCount();
    if (count === 0) test.skip();

    await productsPage.clickProduct(0);

    const detailPage = new ProductDetailPage(page);
    await detailPage.addToCart();

    const cartLink = page.getByRole('link', { name: /cart/i });
    await expect(cartLink).toBeVisible();
  });
});
