import { Page, Locator } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly searchInput: Locator;
  readonly productCards: Locator;
  readonly sortDropdown: Locator;
  readonly ecoFriendlyToggle: Locator;
  readonly priceRangeMin: Locator;
  readonly priceRangeMax: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchInput = page.getByRole('textbox', { name: /search/i });
    this.productCards = page.locator('a[href*="/product/"]');
    this.sortDropdown = page.getByRole('combobox', { name: /sort/i });
    this.ecoFriendlyToggle = page.getByText(/eco-friendly|sustainability/i);
    this.priceRangeMin = page.locator('input[type="range"]').first();
    this.priceRangeMax = page.locator('input[type="range"]').last();
  }

  async goto() {
    await this.page.goto('/');
    await this.page.waitForLoadState('domcontentloaded');
    await this.page.waitForSelector('a[href*="/product/"]', { timeout: 15000 });
  }

  async search(term: string) {
    await this.searchInput.fill(term);
    await this.searchInput.press('Enter');
  }

  async getProductCount(): Promise<number> {
    // Products: links to /product/:id
    const productLinks = this.page.locator('a[href*="/product/"]');
    await productLinks.first().waitFor({ state: 'visible', timeout: 15000 }).catch(() => { });
    return await productLinks.count();
  }

  async clickProduct(index: number) {
    await this.productCards.nth(index).click();
  }

  async sortBy(option: string) {
    await this.sortDropdown.selectOption({ label: option });
  }
}
