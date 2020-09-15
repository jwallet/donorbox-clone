import React from 'react';
import { get, round } from 'lodash';
import { Form } from 'shared/components';
import { CurrenciesEnum, getConvertedAmount } from 'shared/constants/currencies';
import { StepsEnum } from 'shared/constants/steps';
import { navigateToUrl } from 'shared/utils/url';
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
  [StepsEnum.PAYMENT]: {
    wantsToCoverFees: false,
  }
}

const validAmount = message => (value, { customAmount }) => {
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
  }
};

const getProceecingFees = amount => round((amount * 0.029) + .30, 2);

const proceedToPaypal = bag => {
  const amountItem = get(AmountForm.DonationOptionsUSD.find(d => d.value === bag.amountItem), 'label', '');
  const params = new URLSearchParams({
    amount: bag.amount + (bag.wantsToCoverFees ? getProceecingFees(bag.amount) : 0),
    currency_code: bag.currency.toString().toUpperCase(),
    email: bag.email,
    first_name: bag.firstName,
    last_name: bag.lastName,
    item_number: amountItem,
    bn: "Spytify",
    business: "jwallet.spytify@gmail.com",
    charset: "utf-8",
    cmd: "_donations",
    item_name: "Spytify Donation",
    no_shipping: 1,
    return: "https://jwallet.github.io/spy-spotify/donate.html",
  });
  navigateToUrl(`https://www.paypal.com/donate?${params.toString()}`, true);
}

const handleSubmit = ({ formsBag, setFormsBag, step, setStep }) => values => {
  switch (step) {
    case StepsEnum.AMOUNT: {
      const { amountItem, customAmount, currency } = values;
      const amount = amountItem === AmounItemEnum.CUSTOM ? customAmount : AmountForm.DonationOptionsUSD.find(d => d.value === amountItem).amount;
      setFormsBag({ ...formsBag, [step]: { ...values, amount: getConvertedAmount(amount, currency) } });
      break;
    }
    case StepsEnum.PAYMENT: {
      const bag = Object.values(formsBag).reduce((acc, x) => ({...acc, ...x}), values);
      return proceedToPaypal(bag);
    }
    case StepsEnum.DONOR:
    default:
      setFormsBag({ ...formsBag, [step]: values });
      break;
  }
    setStep(step + 1);
};

const Base = () => {
  const [step, setStep] = React.useState(StepsEnum.AMOUNT);
  const [formsBag, setFormsBag] = React.useState({});

  return (
    <React.Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <Form
        enableReinitialize
        initialValues={{ ...initialValues[step], ...formsBag[step] }}
        validations={validations[step]}
        onSubmit={handleSubmit({ formsBag, setFormsBag, step, setStep })}>
        {({ values: { currency, wantsToComment, wantsToCoverFees } }) => (
          <Form.Element>
            <Header step={step} onStepChange={setStep} />
            <StyledForm>
              {step === StepsEnum.AMOUNT && (
                <AmountForm currency={currency} wantsToComment={wantsToComment} />
              )}
              {step === StepsEnum.DONOR && (
                <DonorForm />
              )}
              {step === StepsEnum.PAYMENT ? (
                  <PaymentForm
                    amount={formsBag[StepsEnum.AMOUNT].amount}
                    currency={formsBag[StepsEnum.AMOUNT].currency}
                    wantsToCoverFees={wantsToCoverFees}
                    fee={getProceecingFees(formsBag[StepsEnum.AMOUNT].amount)} />
              ) : (
                <StyledField>
                  <Button type="submit" variant="primary" style={{ width: '100%' }}>Next</Button>
                </StyledField>
              )}
            </StyledForm>
          </Form.Element>
        )}
      </Form>
    </React.Fragment>
  );
}

export default Base;