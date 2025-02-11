export interface Transaction {
  id: number;
  date: string; // YYYY-MM-DD
  description: string;
  amount: number;
  type: "debit" | "credit";
}

export const transactions: Array<Transaction> = [
  {
    id: 1,
    date: "2023-10-01",
    description: "Groceries",
    amount: -150.0,
    type: "debit",
  },
  {
    id: 2,
    date: "2023-10-03",
    description: "Paycheck",
    amount: 2000.0,
    type: "credit",
  },
  {
    id: 3,
    date: "2023-10-05",
    description: "Restaurant",
    amount: -75.5,
    type: "debit",
  },
  {
    id: 4,
    date: "2023-10-06",
    description: "Gas Station",
    amount: -45.3,
    type: "debit",
  },
  {
    id: 5,
    date: "2023-10-07",
    description: "Online Shopping",
    amount: -120.0,
    type: "debit",
  },
  {
    id: 6,
    date: "2023-10-08",
    description: "Freelance Payment",
    amount: 800.0,
    type: "credit",
  },
  {
    id: 7,
    date: "2023-10-09",
    description: "Coffee Shop",
    amount: -12.75,
    type: "debit",
  },
  {
    id: 8,
    date: "2023-10-10",
    description: "Utility Bill",
    amount: -200.0,
    type: "debit",
  },
  {
    id: 9,
    date: "2023-10-11",
    description: "Gym Membership",
    amount: -50.0,
    type: "debit",
  },
  {
    id: 10,
    date: "2023-10-12",
    description: "Bonus",
    amount: 500.0,
    type: "credit",
  },
  {
    id: 11,
    date: "2023-10-13",
    description: "Movie Tickets",
    amount: -35.0,
    type: "debit",
  },
  {
    id: 12,
    date: "2023-10-14",
    description: "Phone Bill",
    amount: -80.0,
    type: "debit",
  },
  {
    id: 13,
    date: "2023-10-15",
    description: "Freelance Payment",
    amount: 1200.0,
    type: "credit",
  },
  {
    id: 14,
    date: "2023-10-16",
    description: "Dinner Out",
    amount: -90.0,
    type: "debit",
  },
  {
    id: 15,
    date: "2023-10-17",
    description: "Savings Deposit",
    amount: 300.0,
    type: "credit",
  },
  {
    id: 16,
    date: "2023-10-18",
    description: "Clothing Store",
    amount: -75.0,
    type: "debit",
  },
  {
    id: 17,
    date: "2023-10-19",
    description: "Interest Earned",
    amount: 15.0,
    type: "credit",
  },
  {
    id: 18,
    date: "2023-10-20",
    description: "Car Maintenance",
    amount: -250.0,
    type: "debit",
  },
  {
    id: 19,
    date: "2023-10-21",
    description: "Freelance Payment",
    amount: 900.0,
    type: "credit",
  },
  {
    id: 20,
    date: "2023-10-22",
    description: "Bookstore",
    amount: -45.0,
    type: "debit",
  },
  {
    id: 21,
    date: "2023-10-23",
    description: "Internet Bill",
    amount: -60.0,
    type: "debit",
  },
  {
    id: 22,
    date: "2023-10-24",
    description: "Dividend Payment",
    amount: 50.0,
    type: "credit",
  },
  {
    id: 23,
    date: "2023-10-25",
    description: "Grocery Store",
    amount: -85.0,
    type: "debit",
  },
  {
    id: 24,
    date: "2023-10-26",
    description: "Freelance Payment",
    amount: 700.0,
    type: "credit",
  },
  {
    id: 25,
    date: "2023-10-27",
    description: "Coffee Shop",
    amount: -10.0,
    type: "debit",
  },
  {
    id: 26,
    date: "2023-10-28",
    description: "Savings Deposit",
    amount: 400.0,
    type: "credit",
  },
  {
    id: 27,
    date: "2023-10-29",
    description: "Restaurant",
    amount: -65.0,
    type: "debit",
  },
  {
    id: 28,
    date: "2023-10-30",
    description: "Freelance Payment",
    amount: 1500.0,
    type: "credit",
  },
  {
    id: 29,
    date: "2023-10-31",
    description: "Halloween Party Supplies",
    amount: -120.0,
    type: "debit",
  },
  {
    id: 30,
    date: "2023-11-01",
    description: "Paycheck",
    amount: 2500.0,
    type: "credit",
  },
];
