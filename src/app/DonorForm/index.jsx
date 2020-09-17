import React from 'react';
import { Form } from 'shared/components';

const DonorForm = () => (
  <React.Fragment>
    <Form.Field.Input name="firstName" label="Donor" placeholder="First Name" />
    <Form.Field.Input name="lastName" placeholder="Last Name" />
    <Form.Field.Checkbox name="wantsToBeAnonymous">Make donation anonymous</Form.Field.Checkbox>
    <Form.Field.Input name="email" label="Email" placeholder="email@domain.com" />
  </React.Fragment>
);

export default DonorForm;
