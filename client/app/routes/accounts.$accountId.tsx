import {
  Badge,
  Box,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import TransactionTable from "~/components/TransactionTable";
import getAccountIcon from "~/util/getAccountIcon";

// Mock data for the account
const account = {
  id: 1,
  name: "Checking Account",
  balance: 2500.75,
  type: "checking",
  accountNumber: "****1234",
};

// Mock data for transactions
const transactions = [
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
];

function AccountDetails() {
  return (
    <Box p={6}>
      <VStack align="start" gap={4} mb={8}>
        <HStack gap={3}>
          <Icon
            as={getAccountIcon(account.type)}
            boxSize={8}
            color="blue.500"
          />
          <Heading as="h1" size="xl">
            {account.name}
          </Heading>
        </HStack>
        <Text fontSize="lg" color="gray.500">
          Account Number: {account.accountNumber}
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          ${account.balance.toLocaleString()}
        </Text>
        <Badge
          colorScheme={account.type === "credit" ? "red" : "green"}
          fontSize="sm"
        >
          {account.type === "credit" ? "Credit Account" : "Deposit Account"}
        </Badge>
      </VStack>

      <TransactionTable transactions={transactions} />
    </Box>
  );
}

export default AccountDetails;
