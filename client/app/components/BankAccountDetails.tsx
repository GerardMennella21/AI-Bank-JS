import { Badge, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { Account } from "~/data/accounts";
import getAccountIcon from "~/util/getAccountIcon";

interface BankAccountDetailsProps {
  account: Account;
}

function BankAccountDetails({ account }: BankAccountDetailsProps) {
  return (
    <VStack align="start" gap={4} mb={8}>
      <HStack gap={3}>
        <Icon as={getAccountIcon(account.type)} boxSize={8} color="blue.500" />
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
  );
}

export default BankAccountDetails;
