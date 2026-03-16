# Test Plan: Practice Software Testing (Toolshop v5.0)

**Document Version:** 1.0
**Date:** March 8, 2025
**Application:** [practicesoftwaretesting.com](https://practicesoftwaretesting.com/)
**Target:** Sprint 5 (latest version)

---

## 1. Introduction

### 1.1 Purpose

This test plan defines the strategy, scope, and approach for testing the Practice Software Testing application—an e-commerce Toolshop designed for software testing training and bug hunting practice.

### 1.2 Application Overview

- **Type:** E-commerce (Toolshop)
- **Tech Stack:** Angular 20, Laravel 12, MariaDB 10.6
- **Purpose:** Training application for black box testing and bug hunting

### 1.3 References

- [Documentation](https://testsmith-io.github.io/practice-software-testing/#/)
- [GitHub Repository](https://github.com/testsmith-io/practice-software-testing)
- [API Swagger](https://api.practicesoftwaretesting.com/api/documentation)

---

## 2. Test Scope

### 2.1 In Scope

| Area | Description |
| ------ | ------------- |
| **UI/E2E** | Product browsing, search, filters, cart, checkout |
| **Authentication** | Login, Register, Forgot Password, Social Login (Google, GitHub) |
| **Customer Account** | Profile, password change, invoices, favorites, contact messages |
| **Admin** | CRUD entities, reporting (if applicable) |
| **Checkout** | Cart operations, address, payment options |
| **Contact Form** | Basic and advanced (with file upload) |
| **API** | REST API endpoints via Swagger |

### 2.2 Out of Scope

- Mobile app (iOS/Android) — separate test effort
- Performance testing — dedicated performance environment exists
- Security penetration testing

---

## 3. Test Environments

| Environment | URL | Use Case |
| ------------- | ----- | ---------- |
| **Production (Sprint 5)** | practicesoftwaretesting.com | Main test target |
| **With Bugs** | with-bugs.practicesoftwaretesting.com | Bug hunting practice |
| **API** | api.practicesoftwaretesting.com | API testing |

---

## 4. Test Data

### 4.1 Default Accounts

| Name | Role | Email | Password |
| ------ | ------ | ------- | ---------- |
| John Doe | Admin | <admin@practicesoftwaretesting.com> | welcome01 |
| Jane Doe | User | <customer@practicesoftwaretesting.com> | welcome01 |
| Jack Howe | User | <customer2@practicesoftwaretesting.com> | welcome01 |
| Bob Smith | User | <customer3@practicesoftwaretesting.com> | pass123 |

---

## 5. Feature Matrix & Test Priorities

| Feature | Priority | Test Type |
| --------- | ---------- | ----------- |
| Authentication (Login, Register, Forgot Password) | P0 | E2E, API |
| Product Overview (Search, Filter, Sort, Pagination) | P0 | E2E |
| Product Detail | P0 | E2E |
| Shopping Cart & Checkout | P0 | E2E |
| Customer Account (Profile, Invoices) | P1 | E2E |
| Contact Form | P1 | E2E |
| Admin CRUD | P1 | E2E |
| Social Login | P2 | E2E |
| Favorites | P2 | E2E |
| Multi-Language | P2 | E2E |
| Chat Widget | P2 | E2E |

---

## 6. Test Scenarios

### 6.1 Authentication

| ID | Scenario | Steps | Expected Result |
| ---- | ---------- | ------- | ----------------- |
| AUTH-01 | Valid login | Enter valid email/password, submit | User redirected to home, session active |
| AUTH-02 | Invalid login | Enter invalid credentials | Error message displayed |
| AUTH-03 | Logout | Click logout | Session cleared, redirected to login/home |
| AUTH-04 | Register new account | Fill registration form, submit | Account created, user logged in |
| AUTH-05 | Forgot password | Request password reset | Reset email sent or confirmation shown |
| AUTH-06 | Social login (Google) | Click "Sign in with Google" | OAuth flow completes |
| AUTH-07 | Lock account | Multiple failed login attempts | Account locked message |

### 6.2 Product Browsing

| ID | Scenario | Steps | Expected Result |
| ---- | ---------- | ------- | ----------------- |
| PROD-01 | View product list | Navigate to products | Products displayed with pagination |
| PROD-02 | Search products | Enter search term | Relevant products returned |
| PROD-03 | Filter by category | Select category filter | Products filtered correctly |
| PROD-04 | Filter by brand | Select brand filter | Products filtered correctly |
| PROD-05 | Price range filter | Set min/max price | Products within range shown |
| PROD-06 | Sort by name (A-Z) | Select sort option | Products sorted alphabetically |
| PROD-07 | Sort by price | Select price sort | Products sorted by price |
| PROD-08 | Eco-friendly filter | Toggle sustainability filter | Only eco-friendly products shown |
| PROD-09 | View product detail | Click product | Product details, add to cart visible |
| PROD-10 | Pagination | Navigate pages | Correct page of products displayed |

### 6.3 Shopping Cart & Checkout

| ID | Scenario | Steps | Expected Result |
| ---- | ---------- | ------- | ----------------- |
| CART-01 | Add to cart | Add product from detail page | Cart count updates |
| CART-02 | Update quantity | Increase/decrease in cart | Total recalculates |
| CART-03 | Remove item | Delete item from cart | Item removed, total updates |
| CART-04 | Checkout flow | Add items, proceed to checkout | Address and payment steps |
| CART-05 | Complete purchase | Fill address, select payment, submit | Order confirmation |
| CART-06 | Empty cart | Remove all items | Empty cart state shown |

### 6.4 Customer Account

| ID | Scenario | Steps | Expected Result |
| ---- | ---------- | ------- | ----------------- |
| ACCT-01 | Update profile | Edit profile fields, save | Changes persisted |
| ACCT-02 | Change password | Enter old/new password | Password updated |
| ACCT-03 | View invoices | Navigate to invoices | Order history displayed |
| ACCT-04 | Invoice detail | Click invoice | Invoice details shown |
| ACCT-05 | Add to favorites | Add product to favorites | Product in favorites list |
| ACCT-06 | Contact messages | View contact history | Messages listed |

### 6.5 Contact Form

| ID | Scenario | Steps | Expected Result |
| ---- | ---------- | ------- | ----------------- |
| CONT-01 | Submit contact form | Fill required fields, submit | Success message |
| CONT-02 | Validation | Submit with empty required fields | Validation errors shown |
| CONT-03 | File upload | Attach file, submit | File uploaded successfully |

### 6.6 Admin (if applicable)

| ID | Scenario | Steps | Expected Result |
| ---- | ---------- | ------- | ----------------- |
| ADMIN-01 | Admin login | Login as admin | Admin dashboard accessible |
| ADMIN-02 | CRUD products | Create, edit, delete product | Changes reflected |
| ADMIN-03 | Reporting | View reports | Data displayed correctly |

---

## 7. Test Strategy

### 7.1 Test Types

- **E2E (Playwright):** Critical user journeys
- **API:** REST endpoints via Swagger
- **Exploratory:** Bug hunting on with-bugs environment

### 7.2 Test Execution

- Run smoke tests on every deployment
- Full regression before releases
- Bug hunting sessions on with-bugs.practicesoftwaretesting.com

### 7.3 Defect Management

- Log defects with steps to reproduce
- Include environment, browser, screenshots
- Reference test scenario ID

---

## 8. Risks & Assumptions

| Risk | Mitigation |
| ------ | ------------ |
| Demo data may change | Use documented test accounts; create test data via API if needed |
| Rate limiting | Space out automated runs |
| Social login requires credentials | Mock or skip in CI; manual verification |

**Assumptions:**

- Application is generally stable (training environment)
- API documentation is up to date
- Test accounts remain available

---

## 9. Sign-off

| Role | Name | Date |
| ------ | ------ | ------ |
| Test Lead | TBD | [Pending] |
| Project Manager | TBD | [Pending] |
