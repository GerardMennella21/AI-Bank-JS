import { HStack, Stack, Table } from "@chakra-ui/react";
import { Transaction } from "~/data/transactions";
import formatCurrency from "~/util/formatCurrency";
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "./ui/pagination";
import { useState } from "react";

interface TransactionTableProps {
  transactions: Array<Transaction>;
}

const pageSize = 5;

function TransactionTable({ transactions }: TransactionTableProps) {
  const [page, setPage] = useState(1);

  const startRange = (page - 1) * pageSize;
  const endRange = startRange + pageSize;

  const pageTransactions = transactions.slice(startRange, endRange);

  return (
    <Stack width="full" gap="5">
      <Table.Root variant="outline">
        <Table.Header bgColor="blue.400">
          <Table.Row fontSize="lg" fontWeight="bolder">
            <Table.ColumnHeader>Date</Table.ColumnHeader>
            <Table.ColumnHeader>Description</Table.ColumnHeader>
            <Table.ColumnHeader>Amount</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {pageTransactions.map((transaction) => (
            <Table.Row key={transaction.id}>
              <Table.Cell>{transaction.date}</Table.Cell>
              <Table.Cell>{transaction.description}</Table.Cell>
              <Table.Cell>{formatCurrency(transaction.amount)}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>

      <PaginationRoot
        count={transactions.length}
        pageSize={pageSize}
        page={page}
        onPageChange={(e) => setPage(e.page)}
      >
        <HStack wrap="wrap">
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Stack>
  );
}

export default TransactionTable;
