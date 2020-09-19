import React from 'react';
import { get } from 'lodash';
import SlackNotifier from 'actions/slackNotifier';
import Paypal from 'actions/paypal';
import { Form } from 'shared/components';
import { CurrenciesEnum } from 'shared/constants/currencies';
import { StepsEnum } from 'shared/constants/steps';
import { AmounItemEnum } from 'shared/constants/amounts';
import Button from 'shared/components/Button';
import { StyledField, StyledForm } from 'shared/components/Form/styles';
import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';
import Header from './app/Header';
import AmountForm from './app/AmountForm';
import DonorForm from './app/DonorForm';
import PaymentForm from './app/PaymentForm';

const initialValues = {
  [StepsEnum.AMOUNT]: {
    amount: null,
    amountItem: '',
    customAmount: null,
    currency: CurrenciesEnum.USD,
    wantsToComment: false,
    comment: '',
  },
  [StepsEnum.DONOR]: {
    firstName: '',
    lastName: '',
    email: '',
    wantsToBeAnonymous: false,
  },
  [StepsEnum.PAYMENT]: {},
};

const validAmount = (message) => (value, { customAmount }) => {
  if (value === AmounItemEnum.CUSTOM) return Form.is.number(message)(customAmount);
  return Form.is.required(message)(value);
};

const validations = {
  [StepsEnum.AMOUNT]: {
    currency: Form.is.required(),
    amountItem: validAmount('Please select or enter an amount'),
  },
  [StepsEnum.DONOR]: {
    firstName: (value, { wantsToBeAnonymous }) => !wantsToBeAnonymous && Form.is.required()(value),
    lastName: (value, { wantsToBeAnonymous }) => !wantsToBeAnonymous && Form.is.required()(value),
    email: [Form.is.required(), Form.is.email()],
  },
};

const handleSubmit = ({ formsBag, setFormsBag, step, setStep }) => async (values) => {
  switch (step) {
    case StepsEnum.AMOUNT: {
      const { amountItem, customAmount } = values;
      const amount =
        amountItem === AmounItemEnum.CUSTOM
          ? customAmount
          : AmountForm.DonationOptionsUSD.find((d) => d.value === amountItem).amount;
      setFormsBag({ ...formsBag, [step]: { ...values, amount } });
      setStep(step + 1);
      break;
    }
    case StepsEnum.PAYMENT: {
      const bag = Object.values(formsBag).reduce((acc, x) => ({ ...acc, ...x }), values);
      const amountItemLabel = get(
        AmountForm.DonationOptionsUSD.find((d) => d.value === bag.amountItem),
        'label',
        '',
      );
      const updatedBag = { ...bag, amountItemLabel };
      await Paypal.saveDataToCookie(updatedBag);
      await SlackNotifier.paymentAttempt(updatedBag);
      await Paypal.proceedToPaypal(updatedBag);
      return;
    }
    case StepsEnum.DONOR:
    default:
      setFormsBag({ ...formsBag, [step]: values });
      setStep(step + 1);
      break;
  }
};

const Base = () => {
  const [step, setStep] = React.useState(StepsEnum.AMOUNT);
  const [formsBag, setFormsBag] = React.useState({});

  React.useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has(Paypal.COOKIE_NAME)) {
      const cookieId = params.get(Paypal.COOKIE_NAME);
      if (!Paypal.doesCookieExists(cookieId)) return;
      const bag = Paypal.getCookieToData(cookieId);
      SlackNotifier.paymentSucceeded(bag);
      Paypal.eraseCookie(cookieId);
    }
  }, []);

  return (
    <React.Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <Form
        enableReinitialize
        initialValues={{ ...initialValues[step], ...formsBag[step] }}
        validations={validations[step]}
        onSubmit={handleSubmit({ formsBag, setFormsBag, step, setStep })}
      >
        {({ values: { currency, wantsToComment, wantsToCoverFees } }) => (
          <Form.Element>
            <Header step={step} onStepChange={setStep} />
            <StyledForm>
              {step === StepsEnum.AMOUNT && (
                <AmountForm currency={currency} wantsToComment={wantsToComment} />
              )}
              {step === StepsEnum.DONOR && <DonorForm />}
              {step === StepsEnum.PAYMENT ? (
                <PaymentForm
                  amount={formsBag[StepsEnum.AMOUNT].amount}
                  currency={formsBag[StepsEnum.AMOUNT].currency}
                  wantsToCoverFees={wantsToCoverFees}
                />
              ) : (
                <StyledField>
                  <Button type="submit" variant="primary" style={{ width: '100%' }}>
                    Next
                  </Button>
                </StyledField>
              )}
            </StyledForm>
          </Form.Element>
        )}
      </Form>
    </React.Fragment>
  );
};

export default Base;
