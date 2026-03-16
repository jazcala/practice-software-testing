# Practice Software Testing - E2E Tests

E2E test suite for [Practice Software Testing](https://practicesoftwaretesting.com/) (Toolshop v5.0) using **Playwright** and **TypeScript**.

## Prerequisites

- Node.js 18+
- npm or yarn

## Setup

```bash
# Install dependencies
npm install

# Install Playwright browsers (first time only)
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm test

# Run with UI mode (interactive)
npm run test:ui

# Run in headed mode (see browser)
npm run test:headed

# Run smoke tests only
npm run test:smoke

# Run specific test suite
npm run test:auth
npm run test:products
npm run test:checkout

# Debug mode
npm run test:debug
```

## Run and Debug (VS Code / Cursor)

The launch configs use `scripts/run-with-node.sh` to ensure Node.js is found when using nvm/fnm (e.g. when opening the IDE from Finder instead of a terminal).

1. Open **Run and Debug** (⇧⌘D or Ctrl+Shift+D)
2. Select a configuration from the dropdown:
   - **Debug Playwright Tests** – Debug all tests (opens Playwright Inspector)
   - **Debug Current Playwright Test File** – Debug the file you have open
   - **Debug Playwright Tests (Chromium)** – Debug all tests in Chromium only
   - **Run Playwright Tests** – Run all tests without debugger
3. Set breakpoints in your test files and press F5 to start

**If you get "Can't find Node.js binary"**: Launch Cursor from a terminal (`cursor .`) so nvm/fnm paths are loaded, or set `runtimeExecutable` in `.vscode/launch.json` to your Node path (e.g. `~/.nvm/versions/node/v20.x.x/bin/node`).

## Test Against Different Environments

```bash
# Default: practicesoftwaretesting.com
npm test

# Bug hunting environment
BASE_URL=https://with-bugs.practicesoftwaretesting.com npm test

# Specific sprint version
BASE_URL=https://v4.practicesoftwaretesting.com npm test
```

## Project Structure

```bash
practice-software-testing/
├── .vscode/
│   └── launch.json        # Run and Debug configurations
├── docs/
│   └── TEST_PLAN.md       # Comprehensive test plan
├── fixtures/
│   └── test-data.ts       # Test accounts & data
├── pages/
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── ProductDetailPage.ts
├── scripts/
│   └── run-with-node.sh   # Ensures Node.js in PATH for debugger (nvm/fnm)
├── tests/
│   ├── auth/
│   │   └── login.spec.ts
│   ├── products/
│   │   └── products.spec.ts
│   └── checkout/
│       └── cart.spec.ts
├── playwright.config.ts
├── package.json
└── tsconfig.json
```

## Test Data

Default accounts (from [documentation](https://testsmith-io.github.io/practice-software-testing/#/)):

| Role | Email | Password |
| -------- | ------------------------------------ | ----------- |
| Admin | <admin@practicesoftwaretesting.com> | welcome01 |
| User | <customer@practicesoftwaretesting.com> | welcome01 |

## Quick Start

```bash
npm install
npx playwright install chromium
npm test
```

## Reports

After a test run:

```bash
npm run report
```

Opens the HTML report in your browser.

## Documentation

- [Test Plan](docs/TEST_PLAN.md) - Full test strategy and scenarios
- [Practice Software Testing Docs](https://testsmith-io.github.io/practice-software-testing/#/)
- [Playwright Docs](https://playwright.dev/docs/intro)
