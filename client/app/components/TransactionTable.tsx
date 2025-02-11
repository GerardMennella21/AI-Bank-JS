import { Table } from "@chakra-ui/react";
import { Transaction } from "~/data/transactions";
import formatCurrency from "~/util/formatCurrency";

interface TransactionTableProps {
  transactions: Array<Transaction>;
}

function TransactionTable({ transactions }: TransactionTableProps) {
  return (
    <Table.Root variant="outline">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Date</Table.ColumnHeader>
          <Table.ColumnHeader>Description</Table.ColumnHeader>
          <Table.ColumnHeader>Amount</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {transactions.map((transaction) => (
          <Table.Row key={transaction.id}>
            <Table.Cell>{transaction.date}</Table.Cell>
            <Table.Cell>{transaction.description}</Table.Cell>
            <Table.Cell>${formatCurrency(transaction.amount)}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default TransactionTable;
