import React from 'react';
import PropTypes from 'prop-types';
import { Currencies, CurrenciesEnum, CurrenciesSymbol } from 'shared/constants/currencies';
import Button from 'shared/components/Button';
import PaypalSvg from 'assets/svgs/paypal.svg';
import StripeSvg from 'assets/svgs/credit-card.svg';
import { PaymentModesEnum, PaymentModes } from 'shared/constants/payments';
import { StyledForm, StyledField } from 'shared/components/Form/styles';
import PaypalForm from './Paypal';
import StripeForm from './Stripe';
import { Container, SubMenu, StyledSvg } from './styles';

const paymentModeList = [PaymentModesEnum.STRIPE, PaymentModesEnum.PAYPAL];

const renderSubMenuIcon = (paymentMode) => (render) => {
  switch (paymentMode) {
    case PaymentModesEnum.STRIPE:
      return render(StripeSvg);
    case PaymentModesEnum.PAYPAL:
      return render(PaypalSvg);
    default:
      return null;
  }
};

const renderForm = (paymentMode) => (render) => {
  switch (paymentMode) {
    case PaymentModesEnum.STRIPE:
      return render(StripeForm);
    case PaymentModesEnum.PAYPAL:
      return render(PaypalForm);
    default:
      return null;
  }
};

const PaymentForm = ({ paymentMode, onPaymentModeChange, amount, currency }) => {
  const currencySymbol = CurrenciesSymbol[currency];

  return (
    <React.Fragment>
      <Container>
        {paymentModeList.map((p) => (
          <SubMenu type="button" active={p === paymentMode} onClick={() => onPaymentModeChange(p)}>
            {renderSubMenuIcon(p)((Svg) => (
              <StyledSvg>
                <Svg height={24} />
              </StyledSvg>
            ))}
            {PaymentModes[p]}
          </SubMenu>
        ))}
      </Container>
      <StyledForm>
        {renderForm(paymentMode)((Form) => (
          <Form />
        ))}
        <StyledField>
          <Button type="submit" variant="primary">
            {`Donate ${[currencySymbol, amount.toFixed(2)].join('')}`}
          </Button>
        </StyledField>
      </StyledForm>
    </React.Fragment>
  );
};

PaymentForm.propTypes = {
  paymentMode: PropTypes.string.isRequired,
  onPaymentModeChange: PropTypes.func.isRequired,
  amount: PropTypes.number,
  currency: PropTypes.oneOf(Currencies),
};

PaymentForm.defaultProps = {
  amount: 0,
  currency: CurrenciesEnum.USD,
};

PaymentForm.paymentModes = paymentModeList;

export default PaymentForm;
