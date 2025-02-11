import { Box, Grid, Heading } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import AccountCard from "~/components/AccountCard";
import { accounts } from "../data/accounts";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

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
