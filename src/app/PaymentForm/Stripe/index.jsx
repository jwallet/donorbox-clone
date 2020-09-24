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
import { Field } from 'formik';
import { StyledStripeElement, StyledStripeError, CreditCards, StyledCard } from './styles';

import Amex from '../../../assets/svgs/cc-amex.svg';
import DinersClub from '../../../assets/svgs/cc-diners-club.svg';
import Discover from '../../../assets/svgs/cc-discover.svg';
import Jcb from '../../../assets/svgs/cc-jcb.svg';
import Mastercard from '../../../assets/svgs/cc-mastercard.svg';
import Visa from '../../../assets/svgs/cc-visa.svg';

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

const validateStripeElement = (stripeElements, Element, entity) => () => {
  const { _empty: empty, _invalid: invalid } = stripeElements.getElement(Element);
  return (empty && 'Required') || (invalid && `Invalid ${entity}`) || '';
};

const StripeForm = () => {
  const stripeElements = useElements();

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
          {[Amex, DinersClub, Discover, Jcb, Mastercard, Visa].map((CreditCard, key) => (
            <StyledCard key={key}>
              <CreditCard />
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
                  onChange={() => setFieldError(name, '')}
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
