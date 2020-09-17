export const CurrenciesEnum = {
  AUD: 'AUD',
  BRL: 'BRL',
  CAD: 'CAD',
  EUR: 'EUR',
  GBP: 'GBP',
  USD: 'USD',
};

export const CurrenciesSymbol = {
  [CurrenciesEnum.AUD]: 'A$',
  [CurrenciesEnum.BRL]: 'R$',
  [CurrenciesEnum.CAD]: 'C$',
  [CurrenciesEnum.EUR]: '€',
  [CurrenciesEnum.GBP]: '£',
  [CurrenciesEnum.USD]: 'U$',
};

export const Currencies = {
  [CurrenciesEnum.AUD]: 'Australian Dollars (AUD)',
  [CurrenciesEnum.BRL]: 'Brazilian Dollars (BRL)',
  [CurrenciesEnum.CAD]: 'Canadian Dollars (CAD)',
  [CurrenciesEnum.EUR]: 'Euros (EUR)',
  [CurrenciesEnum.GBP]: 'British Pound Sterling (GBP)',
  [CurrenciesEnum.USD]: 'US Dollars (USD)',
};

export const currenciesList = [
  CurrenciesEnum.AUD,
  CurrenciesEnum.BRL,
  CurrenciesEnum.CAD,
  CurrenciesEnum.EUR,
  CurrenciesEnum.GBP,
  CurrenciesEnum.USD,
];

export const currencyConverterUSD = {
  [CurrenciesEnum.AUD]: 1.37296,
  [CurrenciesEnum.BRL]: 5.31766,
  [CurrenciesEnum.CAD]: 1.31775,
  [CurrenciesEnum.EUR]: 0.84441,
  [CurrenciesEnum.GBP]: 0.78152,
  [CurrenciesEnum.USD]: 1,
};

export const getConvertedAmount = (rates, amount, currency) =>
  Math.ceil((rates[currency] || 1) * amount);
