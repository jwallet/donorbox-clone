const proceedPayment = async (stripe, card, bag) => {
  const stripePaymentPayload = await stripe.createPaymentMethod({
    type: 'card',
    card,
    billing_details: {
      name: `${bag.firstName} ${bag.lastName}`,
      email: bag.email,
      address: {
        postal_code: bag.postalCode,
      },
    },
  });

  if (stripePaymentPayload.error) {
    console.error(stripePaymentPayload.error);
    return [stripePaymentPayload.error.message, false];
  }
  return [null, true];
};

export default {
  proceedPayment,
};
