export const PaymentModesEnum = {
  STRIPE: 'STRIPE',
  PAYPAL: 'PAYPAL',
};

export const PaymentModes = {
  [PaymentModesEnum.STRIPE]: 'Card',
  [PaymentModesEnum.PAYPAL]: 'Paypal',
};

export const PaymentServices = {
  [PaymentModesEnum.STRIPE]: 'Stripe',
  [PaymentModesEnum.PAYPAL]: 'Paypal',
};
