import React from 'react';
import { Image, Text, Container } from './styles';

const PaypalForm = () => {
  return (
    <Container>
      <Image src="https://raw.githubusercontent.com/jwallet/donate/master/src/assets/images/payload-banner.png" />
      <Text>You will be redirected to PayPal.com after clicking the donate button below.</Text>
    </Container>
  );
};

export default PaypalForm;
