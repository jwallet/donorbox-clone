import { ForwardIcon, StyledForwardIcon } from 'app/styles';
import React from 'react';
import { Form } from 'shared/components';
import Button from 'shared/components/Button';
import { StyledField, StyledForm } from 'shared/components/Form/styles';

const DonorForm = () => (
  <StyledForm>
    <Form.Field.Input name="firstName" label="Donor" placeholder="First Name" />
    <Form.Field.Input name="lastName" placeholder="Last Name" />
    <Form.Field.Checkbox name="wantsToBeAnonymous">Make donation anonymous</Form.Field.Checkbox>
    <Form.Field.Input name="email" label="Email" placeholder="email@domain.com" />
    <StyledField>
      <Button type="submit" variant="primary">
        Next
        <StyledForwardIcon>
          <ForwardIcon />
        </StyledForwardIcon>
      </Button>
    </StyledField>
  </StyledForm>
);

export default DonorForm;
