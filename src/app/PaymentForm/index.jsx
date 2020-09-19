import React from 'react';
import PropTypes from 'prop-types';
import { Currencies, CurrenciesSymbol, CurrenciesEnum } from 'shared/constants/currencies';
import Button from 'shared/components/Button';
import { StyledField } from 'shared/components/Form/styles';
import { Image, Text, Container } from './styles';

const PaymentForm = ({ amount, currency }) => {
  const currencySymbol = CurrenciesSymbol[currency];
  return (
    <React.Fragment>
      <Container>
        <Image src="https://raw.githubusercontent.com/jwallet/donate/master/src/assets/images/payload-banner.png" />
        <Text>You will be redirected to PayPal.com after clicking the donate button below.</Text>
      </Container>
      <StyledField>
        <Button type="submit" variant="primary" style={{ width: '100%' }}>
          {`Donate ${[currencySymbol, amount.toFixed(2)].join('')}`}
        </Button>
      </StyledField>
    </React.Fragment>
  );
};

PaymentForm.propTypes = {
  amount: PropTypes.number,
  currency: PropTypes.oneOf(Currencies),
};

PaymentForm.defaultProps = {
  amount: 0,
  currency: CurrenciesEnum.USD,
};

export default PaymentForm;
