import { Box, Heading, Separator } from "@chakra-ui/react";
import SpendingPatternsSection, {
  SpendingPatterns,
} from "./SpendingPatternsSection";
import IncomeAndExpenseSection, {
  IncomeVsExpenses,
} from "./IncomeAndExpenseSection";
import FinancialHealthSection, {
  FinancialHealth,
} from "./FinancialHealthSection";
import BehavioralInsightsSection, {
  BehavioralInsights,
} from "./BehavioralInsightsSection";
import PredictiveInsightsSection, {
  PredictiveInsights,
} from "./PredictiveInsightsSection";
import AnomalyDetectionSection, {
  AnomalyDetection,
} from "./AnomalyDetectionSection";
import PersonalizedRecommendationsSection, {
  PersonalizedRecommendations,
} from "./PersonalizedRecommendationsSection";

interface KeyInsightsProps {
  insights: {
    spendingPatterns: SpendingPatterns;
    incomeVsExpenses: IncomeVsExpenses;
    financialHealth: FinancialHealth;
    behavioralInsights: BehavioralInsights;
    predictiveInsights: PredictiveInsights;
    anomalyDetection: AnomalyDetection;
    personalizedRecommendations: PersonalizedRecommendations;
  };
}

function KeyInsights({ insights }: KeyInsightsProps) {
  return (
    <Box mt={8}>
      <Heading as="h2" size="lg" mb={6}>
        Financial Insights
      </Heading>

      {/* Spending Patterns */}
      <SpendingPatternsSection spendingPatterns={insights.spendingPatterns} />
      <Separator my={6} />

      {/* Income vs. Expenses */}
      <IncomeAndExpenseSection incomeVsExpenses={insights.incomeVsExpenses} />
      <Separator my={6} />

      {/* Financial Health */}
      <FinancialHealthSection financialHealth={insights.financialHealth} />

      <Separator my={6} />

      {/* Behavioral Insights */}
      <BehavioralInsightsSection
        behavioralInsights={insights.behavioralInsights}
      />
      <Separator my={6} />

      {/* Predictive Insights */}
      <PredictiveInsightsSection
        predictiveInsights={insights.predictiveInsights}
      />

      <Separator my={6} />

      {/* Anomaly Detection */}
      <AnomalyDetectionSection anomalyDetection={insights.anomalyDetection} />

      <Separator my={6} />

      {/* Personalized Recommendations */}
      <PersonalizedRecommendationsSection
        personalizedRecommendations={insights.personalizedRecommendations}
      />
    </Box>
  );
}

export default KeyInsights;
