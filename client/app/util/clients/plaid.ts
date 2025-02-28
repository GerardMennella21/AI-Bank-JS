import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": "",
      "PLAID-SECRET": "",
    },
  },
});

const client = new PlaidApi(configuration);

function getToday(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

async function getTransactions(
  accessToken: string,
  dateRange: { start: string; end: string } = {
    start: "2023-01-01",
    end: getToday(),
  }
) {
  try {
    const response = await client.transactionsGet({
      access_token: accessToken,
      start_date: dateRange.start, // Adjust date range as needed
      end_date: dateRange.end,
    });
    return response.data.transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    throw new Error("Failed to fetch transactions");
  }
}

export default { getTransactions };
