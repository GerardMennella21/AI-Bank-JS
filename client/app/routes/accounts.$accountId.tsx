import { Box } from "@chakra-ui/react";
import { data, useLoaderData } from "@remix-run/react";
// import AiMarkdown from "~/components/AiMarkdown";
import BankAccountDetails from "~/components/BankAccountDetails";
import KeyInsights from "~/components/KeyInsights";
import TransactionTable from "~/components/TransactionTable";
import { accounts } from "~/data/accounts";
import { keyInsightsExample } from "~/data/outputs";
import { transactions } from "~/data/transactions";
// import { OpenAiClient } from "~/util/clients";
// import { keyInsightsPrompt } from "~/util/prompts";

// Mock data for the account
const account = accounts[0];

export async function loader() {
  // const prompt = keyInsightsPrompt(transactions);
  // return (await OpenAiClient.callAi(prompt)) || null;
  return { keyInsightsExample };
}

function AccountDetails() {
  const { keyInsightsExample: insights } = useLoaderData();
  console.log(insights);

  return (
    <Box p={6} bgColor="#FFFEEB">
      <BankAccountDetails account={account} />
      <TransactionTable transactions={transactions} />
      {/* <AiMarkdown>{insights}</AiMarkdown> */}
      <KeyInsights insights={insights} />
    </Box>
  );
}

export default AccountDetails;
