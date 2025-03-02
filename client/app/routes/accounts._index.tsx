import { Box, Grid, Heading } from "@chakra-ui/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import AccountCard from "~/components/AccountCard";
import { accounts } from "../data/accounts";
import { Link, redirect, useLoaderData } from "@remix-run/react";
import { getAuth } from "@clerk/remix/ssr.server";
import PlaidLink from "~/components/PlaidLink";
import { useEffect } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader(args: LoaderFunctionArgs) {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect("/");
  }
  const { linkToken } = await (
    await fetch("http://localhost:5173/api/plaid/create-link-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    })
  ).json();

  return { userId, linkToken };
}

export default function Accounts() {
  const { userId, linkToken } = useLoaderData();

  async function handleSuccess(publicToken: string) {
    try {
      const { accessToken } = "";
    } catch (e) {
      console.error(e);
    }
  }

  // useEffect(() => {
  //   (async function () {
  //     const { linkToken } = await (
  //       await fetch("/api/plaid/create-link-token", {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify({ userId }),
  //       })
  //     ).json();
  //     console.log({ linkToken });
  //   })();
  // });

  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={6}>
        Account Dashboard
      </Heading>
      <Heading as="h3" size="lg">
        Welcome back! Your user ID is: {userId}
      </Heading>
      {linkToken && (
        <PlaidLink linkToken={linkToken} onSuccess={handleSuccess} />
      )}

      <Grid templateColumns="1fr" justifyItems="center" gap={6}>
        {accounts.map((account) => (
          <Link
            key={account.id}
            to={`/accounts/${account.id}`}
            style={{ display: "block", width: "100%", maxWidth: "56rem" }}
          >
            <AccountCard
              key={account.id}
              name={account.name}
              balance={account.balance}
              type={account.type}
              accountNumber={account.accountNumber}
            />
          </Link>
        ))}
      </Grid>
    </Box>
  );
}
