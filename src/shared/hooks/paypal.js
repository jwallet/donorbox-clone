import React from 'react';
import SlackNotifier from 'actions/slackNotifier';
import Paypal from 'actions/paypal';

export const usePaypalPaymentSucceeded = () => {
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
};
