import React from 'react';

import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useElements,
} from '@stripe/react-stripe-js';

import { Form } from 'shared/components';
import {
  FieldError,
  FieldLabel,
  StyledField,
  StyledFieldInline,
} from 'shared/components/Form/styles';
import { StyledInput } from 'shared/components/Input/styles';
import { CreditCardsEnum, CreditCardSvgs } from 'shared/constants/creditcards';
import { Field } from 'formik';

import { StyledStripeElement, StyledStripeError, CreditCards, StyledCard } from './styles';

const ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: '15px',
      fontFamily: 'Verdana',
      color: '#222',
      '::placeholder': {
        color: '#AAA',
      },
    },
    invalid: {
      color: '#E13C3C',
    },
  },
};

const creditCardsList = [
  CreditCardsEnum.AMEX,
  CreditCardsEnum.DINERSCLUB,
  CreditCardsEnum.DISCOVER,
  CreditCardsEnum.JCB,
  CreditCardsEnum.MASTERCARD,
  CreditCardsEnum.VISA,
];

const validateStripeElement = (stripeElements, Element, entity) => () => {
  const { _empty: empty, _invalid: invalid } = stripeElements.getElement(Element);
  return (empty && 'Required') || (invalid && `Invalid ${entity}`) || '';
};

const StripeForm = () => {
  const stripeElements = useElements();
  const [ccBrand, setCreditCardBrand] = React.useState('');

  return (
    <React.Fragment>
      <Field name="stripeError">
        {({ meta: { error } }) => {
          if (!error) return null;
          return (
            <StyledStripeError>
              <FieldError>{error}</FieldError>
            </StyledStripeError>
          );
        }}
      </Field>
      <CreditCards>
        <div>
          {creditCardsList.map((cc, key) => (
            <StyledCard key={key} active={ccBrand === cc}>
              {React.createElement(CreditCardSvgs[cc])}
            </StyledCard>
          ))}
        </div>
      </CreditCards>
      <StyledField>
        <FieldLabel>Card Number</FieldLabel>
        <StyledInput>
          <Field
            name="cardNumber"
            validate={validateStripeElement(stripeElements, CardNumberElement, 'Card Number')}
          >
            {({ meta: { error }, field: { name }, form: { setFieldError } }) => (
              <StyledStripeElement invalid={!!error}>
                <CardNumberElement
                  id="cardNumber"
                  options={ELEMENT_OPTIONS}
                  onChange={(e) => {
                    setFieldError(name, '');
                    if (e.brand !== ccBrand) setCreditCardBrand(e.brand);
                  }}
                />
                <FieldError>{error}</FieldError>
              </StyledStripeElement>
            )}
          </Field>
        </StyledInput>
      </StyledField>

      <StyledFieldInline>
        <StyledField>
          <FieldLabel>Card Expiration</FieldLabel>
          <StyledInput>
            <Field
              name="cardExpiration"
              validate={validateStripeElement(stripeElements, CardExpiryElement, 'Expiration Date')}
            >
              {({ meta: { error }, field: { name }, form: { setFieldError } }) => (
                <StyledStripeElement invalid={!!error}>
                  <CardExpiryElement
                    id="expiry"
                    options={ELEMENT_OPTIONS}
                    onChange={() => setFieldError(name, '')}
                  />
                  <FieldError>{error}</FieldError>
                </StyledStripeElement>
              )}
            </Field>
          </StyledInput>
        </StyledField>

        <StyledField>
          <FieldLabel>CVC</FieldLabel>
          <StyledInput>
            <Field
              name="cardCvc"
              validate={validateStripeElement(stripeElements, CardCvcElement, 'CVC')}
            >
              {({ meta: { error }, field: { name }, form: { setFieldError } }) => (
                <StyledStripeElement invalid={!!error}>
                  <CardCvcElement
                    id="cvc"
                    options={ELEMENT_OPTIONS}
                    onChange={() => setFieldError(name, '')}
                  />
                  <FieldError>{error}</FieldError>
                </StyledStripeElement>
              )}
            </Field>
          </StyledInput>
        </StyledField>
      </StyledFieldInline>

      <Form.Field.Input
        name="postalCode"
        label="Postal Code"
        placeholder="Postal Code"
        validate={Form.is.required()}
      />
    </React.Fragment>
  );
};

export default StripeForm;
