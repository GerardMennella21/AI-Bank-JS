import { Heading, Text, VStack } from "@chakra-ui/react";

interface PredictiveInsightsSectionProps {
  predictiveInsights: PredictiveInsights;
}

export type PredictiveInsights = {
  summary: string;
  futureProjection: string;
};

function PredictiveInsightsSection({
  predictiveInsights,
}: PredictiveInsightsSectionProps) {
  return (
    <VStack align="start" gap={4} mb={8}>
      <Heading as="h3" size="md">
        Predictive Insights
      </Heading>
      <Text>{predictiveInsights.summary}</Text>
      <Text>{predictiveInsights.futureProjection}</Text>
    </VStack>
  );
}

export default PredictiveInsightsSection;
