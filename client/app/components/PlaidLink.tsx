import { Button } from "@chakra-ui/react";
import { usePlaidLink } from "react-plaid-link";

function PlaidLink({
  linkToken,
  onSuccess,
}: {
  linkToken: string;
  onSuccess: (publicToken: string) => void;
}) {
  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess(publicToken) {
      onSuccess(publicToken);
    },
  });
  return (
    <Button
      onClick={() => {
        open();
      }}
      disabled={!ready}
    >
      Link Your Bank Account
    </Button>
  );
}

export default PlaidLink;
