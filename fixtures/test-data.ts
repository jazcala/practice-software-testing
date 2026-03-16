/**
 * Test data for Practice Software Testing
 * @see docs/TEST_PLAN.md for full account details
 */
export const TEST_ACCOUNTS = {
  admin: {
    email: 'admin@practicesoftwaretesting.com',
    password: 'welcome01',
    name: 'John Doe',
  },
  customer: {
    email: 'customer@practicesoftwaretesting.com',
    password: 'welcome01',
    name: 'Jane Doe',
  },
  customer2: {
    email: 'customer2@practicesoftwaretesting.com',
    password: 'welcome01',
    name: 'Jack Howe',
  },
  customer3: {
    email: 'customer3@practicesoftwaretesting.com',
    password: 'pass123',
    name: 'Bob Smith',
  },
} as const;
