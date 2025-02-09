import {
  Button,
  Card,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaPiggyBank, FaWallet } from "react-icons/fa";
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
        return FaPiggyBank;
      default:
        return FaWallet;
    }
  }

  return (
    <Card.Root
      width="100%"
      maxWidth="400px"
      variant="elevated"
      alignContent={"end"}
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
      <Card.Body>
        <Text fontSize="sm" color="gray.500">
          {type === "credit" ? "Credit Balance" : "Available Balance"}
        </Text>
        <Text fontSize="2xl" fontWeight="bold">
          ${balance.toLocaleString()}
        </Text>
      </Card.Body>
      <Card.Footer>
        <Button colorScheme="blue" size="sm" backgroundColor={"blue.600"} p={2}>
          View Transactions
        </Button>
      </Card.Footer>
    </Card.Root>
  );
}

export default AccountCard;
