import { Badge, Heading, HStack, Text, VStack } from "@chakra-ui/react";

interface FinancialHealthSectionProps {
  financialHealth: FinancialHealth;
}

export type FinancialHealth = {
  summary: string;
  savingsStatus: string;
  debtStatus: string;
  emergencyFundAdequacy: string;
};

function FinancialHealthSection({
  financialHealth,
}: FinancialHealthSectionProps) {
  return (
    <VStack align="start" gap={4} mb={8}>
      <Heading as="h3" size="md">
        Financial Health
      </Heading>
      <Text>{financialHealth.summary}</Text>
      <HStack gap={4}>
        <Badge colorScheme="green">
          Savings: {financialHealth.savingsStatus}
        </Badge>
        <Badge colorScheme="orange">Debt: {financialHealth.debtStatus}</Badge>
        <Badge colorScheme="blue">
          Emergency Fund: {financialHealth.emergencyFundAdequacy}
        </Badge>
      </HStack>
    </VStack>
  );
}

export default FinancialHealthSection;
