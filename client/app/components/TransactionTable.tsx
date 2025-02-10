import { Table } from "@chakra-ui/react";

interface Transction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: string;
}

interface TransactionTableProps {
  transactions: Array<Transction>;
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
            <Table.Cell>${transaction.amount.toLocaleString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export default TransactionTable;
