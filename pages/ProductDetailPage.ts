import { Page, Locator } from '@playwright/test';

export class ProductDetailPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly quantityInput: Locator;
  readonly productName: Locator;
  readonly productPrice: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.getByTestId('add-to-cart').or(page.getByRole('button', { name: /add to cart/i }));
    this.quantityInput = page.getByTestId('quantity');
    this.productName = page.getByTestId('product-name');
    this.productPrice = page.getByTestId('unit-price');
  }

  async addToCart(quantity = 1) {
    if (quantity > 1) {
      await this.quantityInput.fill(String(quantity));
    }
    await this.addToCartButton.click();
  }

  async getProductName(): Promise<string> {
    return (await this.productName.textContent()) ?? '';
  }
}
