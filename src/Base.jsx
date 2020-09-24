import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { STRIPE_API_KEY } from 'constant';
import App from './App';
import BaseStyles from './BaseStyles';
import NormalizeStyles from './NormalizeStyles';

const stripePromise = loadStripe(STRIPE_API_KEY);

const Base = () => {
  return (
    <React.Fragment>
      <NormalizeStyles />
      <BaseStyles />
      <Elements stripe={stripePromise}>
        <App />
      </Elements>
    </React.Fragment>
  );
};

export default Base;
