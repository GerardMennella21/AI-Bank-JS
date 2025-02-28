import { Heading, List, Text, VStack } from "@chakra-ui/react";
import { BiSolidMessageSquareCheck } from "react-icons/bi";

interface SpendingPatternsSectionProps {
  spendingPatterns: SpendingPatterns;
}

export type SpendingPatterns = {
  summary: string;
  topCategories: Array<{
    category: string;
    amount: string;
    percentageOfTotalSpending: string;
  }>;
  trend: string;
};

function SpendingPatternsSection({
  spendingPatterns,
}: SpendingPatternsSectionProps) {
  return (
    <VStack align="start" gap={4} mb={8}>
      <Heading as="h3" size="md">
        Spending Patterns
      </Heading>
      <Text>{spendingPatterns.summary}</Text>
      <List.Root variant="plain" gap={2}>
        {spendingPatterns.topCategories.map((category, index) => (
          <List.Item key={index}>
            <List.Indicator asChild color="green.500">
              <BiSolidMessageSquareCheck />
            </List.Indicator>
            <Text as="span" fontWeight="bold">
              {category.category}:
            </Text>{" "}
            ${category.amount} ({category.percentageOfTotalSpending}% of total
            spending)
          </List.Item>
        ))}
      </List.Root>
      <Text fontStyle="italic">{spendingPatterns.trend}</Text>
    </VStack>
  );
}

export default SpendingPatternsSection;
