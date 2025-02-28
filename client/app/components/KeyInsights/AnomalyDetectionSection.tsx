import { Heading, List, Text, VStack } from "@chakra-ui/react";
import { BiSolidMessageSquareError } from "react-icons/bi";

interface AnomolyDetectionSectionProps {
  anomalyDetection: {
    summary: string;
    anomalies: Array<string>;
  };
}

export type AnomalyDetection = {
  summary: string;
  anomalies: Array<string>;
};

function AnomalyDetectionSection({
  anomalyDetection,
}: AnomolyDetectionSectionProps) {
  return (
    <VStack align="start" gap={4} mb={8}>
      <Heading as="h3" size="md">
        Anomaly Detection
      </Heading>
      <Text>{anomalyDetection.summary}</Text>
      {anomalyDetection.anomalies.length > 0 ? (
        <List.Root variant="plain" gap={2}>
          {anomalyDetection.anomalies.map((anomaly, index) => (
            <List.Item key={index}>
              <List.Indicator asChild color="red.500">
                <BiSolidMessageSquareError />
              </List.Indicator>
              {anomaly}
            </List.Item>
          ))}
        </List.Root>
      ) : (
        <Text>No anomalies detected.</Text>
      )}
    </VStack>
  );
}

export default AnomalyDetectionSection;
