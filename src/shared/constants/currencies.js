export const CurrenciesEnum = {
  AUD: 'AUD',
  BGN: 'BGN',
  BRL: 'BRL',
  CAD: 'CAD',
  CNY: 'CNY',
  CZK: 'CZK',
  DKK: 'DKK',
  EUR: 'EUR',
  GBP: 'GBP',
  HKD: 'HKD',
  IDR: 'IDR',
  ILS: 'ILS',
  INR: 'INR',
  JPY: 'JPY',
  KRW: 'KRW',
  MXN: 'MXN',
  MYR: 'MYR',
  NOK: 'NOK',
  NZD: 'NZD',
  PHP: 'PHP',
  PLN: 'PLN',
  RUB: 'RUB',
  SEK: 'SEK',
  SGD: 'SGD',
  THB: 'THB',
  TRY: 'TRY',
  USD: 'USD',
  ZAR: 'ZAR',
};

export const CurrenciesSymbol = {
  [CurrenciesEnum.AUD]: 'A$',
  [CurrenciesEnum.BGN]: 'лв',
  [CurrenciesEnum.BRL]: 'R$',
  [CurrenciesEnum.CAD]: 'C$',
  [CurrenciesEnum.CNY]: '¥',
  [CurrenciesEnum.CZK]: 'Kč',
  [CurrenciesEnum.DKK]: 'kr',
  [CurrenciesEnum.EUR]: '€',
  [CurrenciesEnum.GBP]: '£',
  [CurrenciesEnum.HKD]: 'HK$',
  [CurrenciesEnum.IDR]: 'Rp',
  [CurrenciesEnum.ILS]: '₪',
  [CurrenciesEnum.INR]: '₹',
  [CurrenciesEnum.JPY]: '¥',
  [CurrenciesEnum.KRW]: '₩',
  [CurrenciesEnum.MXN]: 'M$',
  [CurrenciesEnum.MYR]: 'RM',
  [CurrenciesEnum.NOK]: 'kr',
  [CurrenciesEnum.NZD]: 'NZ$',
  [CurrenciesEnum.PHP]: '₱',
  [CurrenciesEnum.PLN]: 'zł',
  [CurrenciesEnum.RUB]: '₽',
  [CurrenciesEnum.SEK]: 'kr',
  [CurrenciesEnum.SGD]: 'S$',
  [CurrenciesEnum.THB]: '฿',
  [CurrenciesEnum.TRY]: '₺',
  [CurrenciesEnum.USD]: 'U$',
  [CurrenciesEnum.ZAR]: 'R',
};

export const Currencies = {
  [CurrenciesEnum.AUD]: 'Australian Dollar (AUD)',
  [CurrenciesEnum.BGN]: 'Bulgarian Lev (BGN)',
  [CurrenciesEnum.BRL]: 'Brazilian Dollar (BRL)',
  [CurrenciesEnum.CAD]: 'Canadian Dollar (CAD)',
  [CurrenciesEnum.CNY]: 'Chinese Renminbi Yuan (CNY)',
  [CurrenciesEnum.CZK]: 'Czech Koruna (CZK)',
  [CurrenciesEnum.DKK]: 'Danish Krone (DKK)',
  [CurrenciesEnum.EUR]: 'Euro (EUR)',
  [CurrenciesEnum.GBP]: 'British Pound Sterling (GBP)',
  [CurrenciesEnum.HKD]: 'Hong Kong Dollar (HKD)',
  [CurrenciesEnum.IDR]: 'Indonesian Rupiah (IDR)',
  [CurrenciesEnum.ILS]: 'Israeli New Sheqel (ILS)',
  [CurrenciesEnum.INR]: 'Indian Rupee (INR)',
  [CurrenciesEnum.JPY]: 'Japanese Yen (JPY)',
  [CurrenciesEnum.KRW]: 'South Korean Won (KRW)',
  [CurrenciesEnum.MXN]: 'Mexican Peso (MXN)',
  [CurrenciesEnum.MYR]: 'Malaysian Ringgit (MYR)',
  [CurrenciesEnum.NOK]: 'Norwegian Krone (NOK)',
  [CurrenciesEnum.NZD]: 'New Zealand Dollar (NZD)',
  [CurrenciesEnum.PHP]: 'Philippine Peso (PHP)',
  [CurrenciesEnum.PLN]: 'Polish Złoty (PLN)',
  [CurrenciesEnum.RUB]: 'Russian Ruble (RUB)',
  [CurrenciesEnum.SEK]: 'Swedish Krona (SEK)',
  [CurrenciesEnum.SGD]: 'Singapore Dollar (SGD)',
  [CurrenciesEnum.THB]: 'Thai Baht (THB)',
  [CurrenciesEnum.TRY]: 'Turkish Lira (TRY)',
  [CurrenciesEnum.USD]: 'US Dollar (USD)',
  [CurrenciesEnum.ZAR]: 'South African Rand (ZAR)',
};

export const currencyRatesAmericanBasedStatic = {
  [CurrenciesEnum.AUD]: 1.3726020451,
  [CurrenciesEnum.BGN]: 1.6528352911,
  [CurrenciesEnum.BRL]: 5.2544578721,
  [CurrenciesEnum.CAD]: 1.3184315051,
  [CurrenciesEnum.CNY]: 6.7730921998,
  [CurrenciesEnum.CZK]: 22.5868334319,
  [CurrenciesEnum.DKK]: 6.2877545846,
  [CurrenciesEnum.EUR]: 0.845094228,
  [CurrenciesEnum.GBP]: 0.7717231471,
  [CurrenciesEnum.HKD]: 7.7501056368,
  [CurrenciesEnum.IDR]: 14735.003802924,
  [CurrenciesEnum.ILS]: 3.4235612271,
  [CurrenciesEnum.INR]: 73.5350291558,
  [CurrenciesEnum.JPY]: 104.3606862165,
  [CurrenciesEnum.KRW]: 1162.8158539677,
  [CurrenciesEnum.MXN]: 20.9028986732,
  [CurrenciesEnum.MYR]: 4.1145102679,
  [CurrenciesEnum.NOK]: 9.0879743091,
  [CurrenciesEnum.NZD]: 1.4779852954,
  [CurrenciesEnum.PHP]: 48.4289698301,
  [CurrenciesEnum.PLN]: 3.7692892758,
  [CurrenciesEnum.RUB]: 75.334995352,
  [CurrenciesEnum.SEK]: 8.788134877,
  [CurrenciesEnum.SGD]: 1.3590805375,
  [CurrenciesEnum.THB]: 31.1746809769,
  [CurrenciesEnum.TRY]: 7.5720442829,
  [CurrenciesEnum.USD]: 1,
  [CurrenciesEnum.ZAR]: 16.1852446548,
};

export const getConvertedAmount = (rates, amount, currency) =>
  Math.ceil((rates[currency] || 1) * amount);
