import { Box, Grid, Heading } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import AccountCard from "~/components/AccountCard";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

// Mock data for bank accounts
const accounts = [
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

export default function Index() {
  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={6}>
        Account Dashboard
      </Heading>
      <Grid templateColumns="1fr" justifyItems="center" gap={6}>
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            name={account.name}
            balance={account.balance}
            type={account.type}
            accountNumber={account.accountNumber}
          />
        ))}
      </Grid>
    </Box>
  );
}
