import { BUSINESS_NAME, BUTTON_NAME, PAYPAL_DONATION_HEADING, BASE_URL } from 'constant';
import { setCookie, getCookie, eraseCookie } from 'shared/cookies';
import { CurrenciesSymbol } from 'shared/constants/currencies';
import { navigateToUrl } from '../shared/utils/url';

const COOKIE_NAME = 'donate-spytify-paypal';
const COOKIE_HOURS = 24;

const proceedToPaypal = (bag) => {
  const params = new URLSearchParams({
    amount: bag.amount,
    currency_code: bag.currency.toString().toUpperCase(),
    email: bag.email,
    first_name: bag.firstName,
    last_name: bag.lastName,
    item_number: bag.amountItemLabel,
    bn: BUTTON_NAME,
    business: BUSINESS_NAME,
    charset: 'utf-8',
    cmd: '_donations',
    item_name: PAYPAL_DONATION_HEADING,
    no_note: 0,
    no_shipping: 1,
    // notify_url: `${BASE_URL}/donate/paypal-hook.html?${bagParams.toString()}`, // reject if origin !== paypal
    return: `${BASE_URL}/donate/paypal-thanks.html`,
    rm: 2, // return POST "2", GET "1"
  });
  navigateToUrl(`https://www.paypal.com/donate?${params.toString()}`, { inNewTab: false });
};

const saveDataToCookie = (bag) => {
  const donation = `${CurrenciesSymbol[bag.currency]} ${bag.amount.toFixed(2)}`;
  const donor = `${bag.wantsToBeAnonymous ? 'Anonymous' : [bag.firstName, bag.lastName].join(' ')}`;

  const payload = {
    donation,
    donor,
    amountItemLabel: bag.amountItemLabel,
    email: bag.email,
    wantsToComment: bag.wantsToComment,
    comment: bag.comment,
  };

  setCookie(COOKIE_NAME, JSON.stringify(payload), COOKIE_HOURS);
};

const getCookieToData = () => {
  const stringified = getCookie(COOKIE_NAME);
  const data = JSON.parse(stringified);
  return data;
};

export default {
  proceedToPaypal,
  saveDataToCookie,
  doesCookieExists: !!getCookie(COOKIE_NAME),
  getCookieToData,
  eraseCookie: eraseCookie(COOKIE_NAME),
};
