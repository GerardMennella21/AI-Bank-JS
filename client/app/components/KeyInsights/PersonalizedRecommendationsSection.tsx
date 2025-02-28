import { Heading, List, Text, VStack } from "@chakra-ui/react";
import { BiSolidBulb } from "react-icons/bi";

interface PersonalizedRecommendationsSectionProps {
  personalizedRecommendations: {
    summary: string;
    recommendations: Array<{
      title: string;
      description: string;
      actionableSteps: string;
    }>;
  };
}

export type PersonalizedRecommendations = {
  summary: string;
  recommendations: Array<{
    title: string;
    description: string;
    actionableSteps: string;
  }>;
};

function PersonalizedRecommendationsSection({
  personalizedRecommendations,
}: PersonalizedRecommendationsSectionProps) {
  return (
    <VStack align="start" gap={4} mb={8}>
      <Heading as="h3" size="md">
        Personalized Recommendations
      </Heading>
      <Text>{personalizedRecommendations.summary}</Text>
      <List.Root variant="plain" gap={2}>
        {personalizedRecommendations.recommendations.map(
          (recommendation, index) => (
            <List.Item key={index} gap={1}>
              <List.Indicator gap={1} asChild color="blue.500">
                <BiSolidBulb />
              </List.Indicator>
              <Text fontWeight="bold">{recommendation.title}:</Text>
              <Text>{recommendation.description}</Text>
              <Text fontStyle="italic">{recommendation.actionableSteps}</Text>
            </List.Item>
          )
        )}
      </List.Root>
    </VStack>
  );
}

export default PersonalizedRecommendationsSection;
