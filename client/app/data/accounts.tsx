export interface Account {
  id: number;
  name: string;
  balance: number;
  type: string;
  accountNumber: string;
}

// Mock data for bank accounts
export const accounts: Array<Account> = [
  {
    id: 1,
    name: "Checking Account",
    balance: 2500.75,
    type: "checking",
    accountNumber: "****1234",
  },
  {
    id: 2,
    name: "Savings Account",
    balance: 15000.0,
    type: "savings",
    accountNumber: "****5678",
  },
  {
    id: 3,
    name: "Credit Card",
    balance: -500.25,
    type: "credit",
    accountNumber: "****9876",
  },
];
