import React from 'react';
import SlackNotifier from 'actions/slackNotifier';
import Paypal from 'actions/paypal';
import { PaymentModesEnum } from 'shared/constants/payments';

export const usePaypalPaymentSucceeded = (showThanksNote = () => {}) => {
  React.useLayoutEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has(Paypal.COOKIE_NAME)) {
      const cookieId = params.get(Paypal.COOKIE_NAME);
      if (!Paypal.doesCookieExists(cookieId)) return;
      const bag = Paypal.getCookieToData(cookieId);
      SlackNotifier.paymentSucceeded(PaymentModesEnum.PAYPAL, bag);
      Paypal.eraseCookie(cookieId);
      showThanksNote();
    }
  }, [showThanksNote]);
};
