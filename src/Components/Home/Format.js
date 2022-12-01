export const numberFormat = (value) =>
  new Intl.NumberFormat("en-TH", {
    style: "currency",
    currency: "THB",
  }).format(value);
