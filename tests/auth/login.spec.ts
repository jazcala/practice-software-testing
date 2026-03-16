import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { TEST_ACCOUNTS } from '../../fixtures/test-data';

test.describe('Login', { tag: '@smoke' }, () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('AUTH-01: Valid login redirects to home', async ({ page }) => {
    await loginPage.login(TEST_ACCOUNTS.customer.email, TEST_ACCOUNTS.customer.password);

    await expect(page).not.toHaveURL(/\/auth\/login/);
    await expect(page).toHaveURL(/practicesoftwaretesting\.com/);
  });

  test('AUTH-02: Invalid login shows error', async ({ page }) => {
    await loginPage.login('invalid@example.com', 'wrongpassword');

    await expect(page).toHaveURL(/\/auth\/login/);
    const errorText = await loginPage.getErrorMessage();
    expect(errorText.toLowerCase()).toMatch(/invalid|incorrect|error|wrong/i);
  });

  test('AUTH-03: Empty credentials shows validation', async ({ page }) => {
    await loginPage.loginButton.click();

    await expect(page).toHaveURL(/\/auth\/login/);
  });

  test('Register link navigates to registration', async ({ page }) => {
    await loginPage.registerLink.click();
    await expect(page).toHaveURL(/\/auth\/register/);
  });

  test('Forgot password link navigates to reset', async ({ page }) => {
    await loginPage.forgotPasswordLink.click();
    await expect(page).toHaveURL(/\/auth\/forgot-password/);
  });
});
