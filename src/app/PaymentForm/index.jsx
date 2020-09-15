import React from 'react';
import PropTypes from 'prop-types';
import { Currencies, CurrenciesSymbol, CurrenciesEnum } from 'shared/constants/currencies';
import Button from 'shared/components/Button';
import { StyledField } from 'shared/components/Form/styles';
import { Image, Text, Container } from './styles';
import PaypalBanner from '../../assets/images/payload-banner.png';

const getTotalAmount = (amount, currencySymbol, fee, wantsToCoverFees) => {
    const fees = wantsToCoverFees ? fee : 0;
    return [currencySymbol, amount + fees].join('');
};

const PaymentForm = ({ fee, amount, currency, wantsToCoverFees }) => {
    const currencySymbol = CurrenciesSymbol[currency];
    return (
        <React.Fragment>
            <Container>
                <Image src={PaypalBanner} />
                <Text>You will be redirected to PayPal.com after clicking the donate button below.</Text>
            </Container>
            {/* <Form.Field.Checkbox name="wantsToCoverFees">{`Optionally add ${currencySymbol}${fee} to cover processing fee `}</Form.Field.Checkbox> */}
            <StyledField>
                <Button type="submit" variant="primary" style={{ width: '100%' }}>
                    {`Donate ${getTotalAmount(amount, currencySymbol, fee, wantsToCoverFees)} One-time`}
                </Button>
            </StyledField>
        </React.Fragment>
    );
};

PaymentForm.propTypes = {
    amount: PropTypes.number,
    currency: PropTypes.oneOf(Currencies),
    fee: PropTypes.number,
    wantsToCoverFees: PropTypes.bool,
};

PaymentForm.defaultProps = {
    amount: 0,
    currency: CurrenciesEnum.USD,
    fee: 0,
    wantsToCoverFees: false,
};


export default PaymentForm;