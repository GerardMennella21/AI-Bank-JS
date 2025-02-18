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

const PlaidClient = new PlaidApi(configuration);

export default PlaidClient;
