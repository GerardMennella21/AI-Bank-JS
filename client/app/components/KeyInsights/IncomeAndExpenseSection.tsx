import { Badge, Heading, HStack, Text, VStack } from "@chakra-ui/react";

interface IncomeAndExpenseSectionProps {
  incomeVsExpenses: IncomeVsExpenses;
}

export type IncomeVsExpenses = {
  summary: string;
  totalIncome: string;
  totalExpenses: string;
  netFlow: string;
  netFlowSummary: string;
};

function IncomeAndExpenseSection({
  incomeVsExpenses,
}: IncomeAndExpenseSectionProps) {
  return (
    <VStack align="start" gap={4} mb={8}>
      <Heading as="h3" size="md">
        Income vs. Expenses
      </Heading>
      <Text>{incomeVsExpenses.summary}</Text>
      <HStack gap={4}>
        <Badge colorScheme="green">
          Total Income: ${incomeVsExpenses.totalIncome}
        </Badge>
        <Badge colorScheme="red">
          Total Expenses: ${incomeVsExpenses.totalExpenses}
        </Badge>
        <Badge colorScheme="blue">Net Flow: ${incomeVsExpenses.netFlow}</Badge>
      </HStack>
      <Text>{incomeVsExpenses.netFlowSummary}</Text>
    </VStack>
  );
}

export default IncomeAndExpenseSection;
