import { Heading, Text, VStack } from "@chakra-ui/react";

interface BehavioralInsightsSectionProps {
  behavioralInsights: {
    summary: string;
    spendingStyle: string;
  };
}

export type BehavioralInsights = {
  summary: string;
  spendingStyle: string;
};

function BehavioralInsightsSection({
  behavioralInsights,
}: BehavioralInsightsSectionProps) {
  return (
    <VStack align="start" gap={4} mb={8}>
      <Heading as="h3" size="md">
        Behavioral Insights
      </Heading>
      <Text>{behavioralInsights.summary}</Text>
      <Text fontStyle="italic">{behavioralInsights.spendingStyle}</Text>
    </VStack>
  );
}

export default BehavioralInsightsSection;
