import { ActionFunctionArgs, data } from "@remix-run/node";
import {
  Configuration,
  CountryCode,
  PlaidApi,
  PlaidEnvironments,
  Products,
} from "plaid";

const configuration = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-SECRET": process.env.PLAID_CLIENT_SECRET,
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

async function createLinkToken(userId: string) {
  const res = await client.linkTokenCreate({
    user: { client_user_id: userId },
    client_name: "AI BankJS",
    products: [Products.Auth, Products.Transactions],
    country_codes: [CountryCode.Us],
    language: "en",
  });

  return { linkToken: res.data.link_token };
}

async function exchangePublicToken(publicToken: string) {
  const res = await client.itemPublicTokenExchange({
    public_token: publicToken,
  });

  return { accessToken: res.data.access_token };
}

async function getTransactions(
  accessToken: string,
  dateRange: { start: string; end: string } = {
    start: "2023-01-01",
    end: getToday(),
  }
) {
  const response = await client.transactionsGet({
    access_token: accessToken,
    start_date: dateRange.start, // Adjust date range as needed
    end_date: dateRange.end,
  });
  return { transactions: response.data.transactions };
}

export async function action(args: ActionFunctionArgs) {
  console.log("Plaid api called", args);
  const { request: req, params } = args;

  switch (req.method) {
    case "POST":
      if (params.endpoint === "create-link-token") {
        try {
          const { userId } = await req.json();
          const res = await createLinkToken(userId);
          return res;
        } catch (error) {
          return data({ error }, { status: 500 });
        }
      }

      if (params.endpoint === "exchange-public-token") {
        try {
          const { publicToken } = await req.json();
          const res = await exchangePublicToken(publicToken);
          return res;
        } catch (error) {
          return data({ error }, { status: 500 });
        }
      }

      if (params.endpoint === "get-transactions") {
        try {
          const { accessToken, dateRange } = await req.json();
          const res = await getTransactions(accessToken, dateRange);
          return res;
        } catch (error) {
          return data({ error }, { status: 500 });
        }
      }
      break;
  }
}
