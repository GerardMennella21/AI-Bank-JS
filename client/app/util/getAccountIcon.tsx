import { BiCreditCardAlt, BiMoneyWithdraw, BiWallet } from "react-icons/bi";

export default function getAccountIcon(type: string) {
  switch (type) {
    case "savings":
      return BiMoneyWithdraw;
    case "credit":
      return BiCreditCardAlt;
    default:
      return BiWallet;
  }
}
