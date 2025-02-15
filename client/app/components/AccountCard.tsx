import { Card, Heading, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { BiCreditCardAlt, BiMoneyWithdraw, BiWallet } from "react-icons/bi";
interface AccountCardProps {
  name: string;
  balance: number;
  type: string;
  accountNumber: string;
}

function AccountCard({
  name,
  balance,
  type,
  accountNumber,
}: AccountCardProps): React.ReactNode {
  function getAccountIcon() {
    switch (type) {
      case "savings":
        return BiMoneyWithdraw;
      case "credit":
        return BiCreditCardAlt;
      default:
        return BiWallet;
    }
  }

  return (
    <Card.Root
      flexDirection="row"
      overflow="hidden"
      width="100%"
      variant="elevated"
    >
      <Card.Header>
        <HStack>
          <Icon as={getAccountIcon()} boxSize={6} color={"blue.500"} />
          <VStack align="start">
            <Heading as="h2" size="md">
              {name}
            </Heading>
            <Text fontSize="sm" color="grey.500">
              {accountNumber}
            </Text>
          </VStack>
        </HStack>
      </Card.Header>
      <Card.Body textAlign="end">
        <Text fontSize="2xl" fontWeight="bold">
          ${balance.toLocaleString()}
        </Text>
        <Text fontSize="sm" color="gray.500">
          {type === "credit" ? "Credit Balance" : "Available Balance"}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}

export default AccountCard;
