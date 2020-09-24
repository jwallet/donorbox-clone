export const GiftItemsEnum = {
  COFFEE: 'COFFEE',
  BEER: 'BEER',
  BEERS: 'BEERS',
  CUSTOM: 'CUSTOM',
};

export const GiftItems = {
  [GiftItemsEnum.COFFEE]: 'A Coffee ☕',
  [GiftItemsEnum.BEER]: 'A Beer 🍺',
  [GiftItemsEnum.BEERS]: 'More beers 🍻',
};

export const GiftItemsBasePrice = {
  [GiftItemsEnum.COFFEE]: 4,
  [GiftItemsEnum.BEER]: 8,
  [GiftItemsEnum.BEERS]: 16,
};
