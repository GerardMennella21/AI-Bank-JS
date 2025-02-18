import { ActionFunctionArgs, data } from "@remix-run/node";
import { PlaidClient } from "~/util/clients";

PlaidClient;

// Create Link Token
export async function action({ request }: ActionFunctionArgs) {
  const { method } = request;
  const body = request.json();
  if (method === "POST") {
    if (request.url.endsWith("/create-link-token")) {
      try {
        const response = await PlaidClient.linkTokenCreate({
          user: { client_user_id: body.userId },
          client_name: "Your App Name",
          products: ["transactions"],
          country_codes: ["US"],
          language: "en",
        });
        return data({ link_token: response.data.link_token });
      } catch (error) {
        return data({ error: error.message }, { status: 500 });
      }
    }

    if (request.url.endsWith("/exchange-public-token")) {
      try {
        const response = await PlaidClient.itemPublicTokenExchange({
          public_token: body.publicToken,
        });
        return data({ access_token: response.data.access_token });
      } catch (error) {
        return data({ error: error.message }, { status: 500 });
      }
    }

    if (request.url.endsWith("/get-transactions")) {
      try {
        const response = await PlaidClient.transactionsGet({
          access_token: body.accessToken,
          start_date: "2023-01-01",
          end_date: "2023-12-31",
        });
        return data({ transactions: response.data.transactions });
      } catch (error) {
        return data({ error: error.message }, { status: 500 });
      }
    }
  }

  return data({ error: "Invalid request" }, { status: 400 });
}
