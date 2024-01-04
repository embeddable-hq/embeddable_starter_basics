import { defineType, defineOption } from "@embeddable.com/core";

const CurrencyType = defineType("currency", {
  label: "Currency",
  toString: (currency) => currency.name,
});

defineOption(CurrencyType, { name: 'USD', symbol: "$"});
defineOption(CurrencyType, { name: 'GBP', symbol: "£"});
defineOption(CurrencyType, { name: 'EUR', symbol: "€"});

export default CurrencyType;