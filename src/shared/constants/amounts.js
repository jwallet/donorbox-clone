export const AmounItemEnum = {
    COFFEE: 'COFFEE',
    BEER: 'BEER',
    BEERS: 'BEERS',
    CUSTOM: 'CUSTOM',
};

export const AmountItemLabel = {
    [AmounItemEnum.COFFEE]: 'A Coffee ☕',
    [AmounItemEnum.BEER]: 'A Beer 🍺',
    [AmounItemEnum.BEERS]: 'More beers 🍻',
};

export const AmountItemBasePrice = {
    [AmounItemEnum.COFFEE]: 4,
    [AmounItemEnum.BEER]: 8,
    [AmounItemEnum.BEERS]: 16,
}
