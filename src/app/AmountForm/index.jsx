import React from 'react';
import PropTypes from 'prop-types';
import {
  CurrenciesEnum,
  Currencies,
  CurrenciesSymbol,
  getConvertedAmount,
  currencyRatesAmericanBasedStatic,
} from 'shared/constants/currencies';
import { FieldError, StyledForm } from 'shared/components/Form/styles';
import getLatestRates from 'actions/currency';
import { Form } from 'shared/components';
import { GiftItemsEnum, GiftItems, GiftItemsBasePrice } from 'shared/constants/amounts';
import Input from 'shared/components/Input';
import { Amount, Description, Device, Donation, StyledDevice } from './styles';

const giftItemsList = [GiftItemsEnum.COFFEE, GiftItemsEnum.BEER, GiftItemsEnum.BEERS];

const currenciesList = [
  CurrenciesEnum.AUD,
  CurrenciesEnum.BRL,
  CurrenciesEnum.CAD,
  CurrenciesEnum.EUR,
  CurrenciesEnum.GBP,
  CurrenciesEnum.USD,
];

const giftOptionsUSD = giftItemsList.map((a) => ({
  value: a,
  label: GiftItems[a],
  amount: GiftItemsBasePrice[a],
}));

const currencyOptions = currenciesList.map((c) => ({ value: c, label: Currencies[c] }));

const getCustomAmountDescription = (value, active) => {
  if (value) return '';
  if (active) return 'Please input an amount';
  return 'Enter a custom amount';
};

const setCustomAmountValue = (stringValue, on) => {
  const number = String(stringValue || '').trim() ? Number(stringValue) : null;
  on(number);
};

const AmountForm = ({ currency, wantsToComment }) => {
  const [rates, setRates] = React.useState(currencyRatesAmericanBasedStatic);

  React.useEffect(() => {
    const ratesToDate = getLatestRates();
    if (ratesToDate) {
      setRates(ratesToDate);
    }
  }, []);

  return (
    <StyledForm>
      <Form.Field.Select
        name="currency"
        label="Currency"
        options={currencyOptions}
        defaultValue={CurrenciesEnum.USD}
        withClearValue={false}
      />
      <Form.Field.Radio
        name="giftItem"
        label="Amount"
        options={giftOptionsUSD}
        customValue={GiftItemsEnum.CUSTOM}
        custom
        silentError
        renderValue={({ amount, label: description }, active) => (
          <Donation active={active}>
            <StyledDevice>
              <Device>{CurrenciesSymbol[currency] || CurrenciesSymbol[CurrenciesEnum.USD]}</Device>
            </StyledDevice>
            <Amount>{getConvertedAmount(rates, amount, currency)}</Amount>
            <Description>{description}</Description>
          </Donation>
        )}
        renderCustom={({ setChoice, setValue, error, active, onChange: onAmounItemChange }) => (
          <Donation active={active}>
            <StyledDevice>
              <Device invalid={error}>
                {CurrenciesSymbol[currency] || CurrenciesSymbol[CurrenciesEnum.USD]}
              </Device>
            </StyledDevice>
            <Form.Field.Input name="customAmount">
              {({ onChange, value, ...otherProps }) => (
                <React.Fragment>
                  <Input
                    {...otherProps}
                    style={{ fontSize: 20, color: 'black' }}
                    value={value || ''}
                    filter={/^\d{0,6}(\.?\d{0,2})?$/g}
                    placeholder="Custom Amount"
                    onChange={(v) => onChange(v.trim())}
                    onBlur={(e) => setCustomAmountValue(e.target.value, onChange)}
                    onFocus={(e) => {
                      setChoice(giftOptionsUSD.length);
                      setCustomAmountValue(e.target.value, onChange);
                      setValue(GiftItemsEnum.CUSTOM);
                      onAmounItemChange(GiftItemsEnum.CUSTOM, e);
                    }}
                  />
                  <Description>
                    {error ? (
                      <FieldError>{error}</FieldError>
                    ) : (
                      getCustomAmountDescription(value, active)
                    )}
                  </Description>
                </React.Fragment>
              )}
            </Form.Field.Input>
          </Donation>
        )}
      />
      <Form.Field.Checkbox name="wantsToComment">Write us a comment</Form.Field.Checkbox>
      {wantsToComment && (
        <Form.Field.Textarea name="comment" label="Your comment" validate={Form.is.required()} />
      )}
    </StyledForm>
  );
};

AmountForm.giftOptionsUSD = giftOptionsUSD;

AmountForm.propTypes = {
  currency: PropTypes.oneOf(currenciesList),
  wantsToComment: PropTypes.bool,
};

AmountForm.defaultProps = {
  currency: CurrenciesEnum.USD,
  wantsToComment: false,
};

export default AmountForm;
