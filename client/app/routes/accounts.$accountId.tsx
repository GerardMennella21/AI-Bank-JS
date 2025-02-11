import { Box } from "@chakra-ui/react";
import BankAccountDetails from "~/components/BankAccountDetails";
import TransactionTable from "~/components/TransactionTable";
import { accounts } from "~/data/accounts";
import { transactions } from "~/data/transactions";

// Mock data for the account
const account = accounts[0];

function AccountDetails() {
  return (
    <Box p={6}>
      <BankAccountDetails account={account} />
      <TransactionTable transactions={transactions} />
    </Box>
  );
}

export default AccountDetails;
