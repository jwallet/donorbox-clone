import React from 'react';
import PropTypes from 'prop-types';
import { CurrenciesEnum, Currencies, CurrenciesSymbol, currenciesList, getConvertedAmount, currencyConverterUSD } from 'shared/constants/currencies';
import { FieldError } from 'shared/components/Form/styles';
import { Form } from 'shared/components';
import { AmounItemEnum, AmountItemLabel, AmountItemBasePrice } from 'shared/constants/amounts';
import Input from 'shared/components/Input';
import { Amount, Description, Device, Donation, StyledDevice } from './styles';
import getLatestRates from 'actions/currency';

const amountItemsList = [
    AmounItemEnum.COFFEE,
    AmounItemEnum.BEER,
    AmounItemEnum.BEERS
];

const donationOptionsUSD = amountItemsList.map(a => ({ value: a, label: AmountItemLabel[a], amount: AmountItemBasePrice[a] }));

const currencyOptions = currenciesList.map(c => ({ value: c, label: Currencies[c] }));

const getCustomAmountDescription = (value, active) => {
    if (value) return '';
    if (active) return 'Please input an amount';
    return 'Enter a custom amount';
}

const setCustomAmountValue = (stringValue, on) => {
    const number = String(stringValue || "").trim() ? Number(stringValue) : null;
    on(number);
};

const AmountForm = ({ currency, wantsToComment }) => {
    const [rates, setRates] = React.useState(currencyConverterUSD);

    React.useEffect(async () => {
        const ratesToDate = await getLatestRates();
        if (!!ratesToDate) {
            setRates(ratesToDate);
        }
    }, []);

    return (
        <React.Fragment>
            <Form.Field.Select name="currency" label="Currency" options={currencyOptions} defaultValue={CurrenciesEnum.USD} withClearValue={false} />
            <Form.Field.Radio name="amountItem" label="Amount" options={donationOptionsUSD} customValue={AmounItemEnum.CUSTOM} custom silentError renderValue={({ amount, label: description }, active) => (<Donation active={active}>
                <StyledDevice>
                    <Device>{CurrenciesSymbol[currency] || CurrenciesSymbol[CurrenciesEnum.USD]}</Device>
                </StyledDevice>
                <Amount>{getConvertedAmount(rates, amount, currency)}</Amount>
                <Description>{description}</Description>
            </Donation>)} renderCustom={({ setChoice, setValue, error, active, onChange: onAmounItemChange }) => (<Donation active={active}>
                <StyledDevice>
                    <Device invalid={error}>{CurrenciesSymbol[currency] || CurrenciesSymbol[CurrenciesEnum.USD]}</Device>
                </StyledDevice>
                <Form.Field.Input name="customAmount">
                    {({ onChange, value, ...otherProps }) => (<React.Fragment>
                        <Input {...otherProps} style={{ fontSize: 20, color: 'black' }} value={value || ""} filter={/^\d{0,6}$/} placeholder="Custom Amount" onChange={event => setCustomAmountValue(event, onChange)} onFocus={event => {
                            setChoice(donationOptionsUSD.length);
                            setCustomAmountValue(event.target.value, onChange);
                            setValue(AmounItemEnum.CUSTOM);
                            onAmounItemChange(AmounItemEnum.CUSTOM, event);
                        }} />
                        <Description>{error ? <FieldError>{error}</FieldError> : getCustomAmountDescription(value, active)}</Description>
                    </React.Fragment>)}
                </Form.Field.Input>
            </Donation>)} />
            <Form.Field.Checkbox name="wantsToComment">Write us a comment</Form.Field.Checkbox>
            {wantsToComment && <Form.Field.Textarea name="comment" label="Your comment" validate={Form.is.required()} />}
        </React.Fragment>
    );
};

AmountForm.DonationOptionsUSD = donationOptionsUSD;

AmountForm.propTypes = {
    currency: PropTypes.oneOf(currenciesList),
    wantsToComment: PropTypes.bool,
}

AmountForm.defaultProps = {
    currency: CurrenciesEnum.USD,
    wantsToComment: false,
}

export default AmountForm;