export default function formatCurrency(
  number: number,
  currencyCode = "USD",
  locale = "en-US"
) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currencyCode,
  }).format(number);
}
