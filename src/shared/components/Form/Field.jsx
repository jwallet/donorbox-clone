import React from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';

import Input from '../Input';
import Select from '../Select';
import Radio from '../Radio';
import Checkbox from '../Checkbox';
import Textarea from '../Textarea';

import { StyledField, FieldLabel, FieldTip, FieldError } from './styles';

const propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  tip: PropTypes.string,
  error: PropTypes.string,
  name: PropTypes.string,
  silentError: PropTypes.bool,
  children: PropTypes.any,
};

const defaultProps = {
  className: undefined,
  label: undefined,
  tip: undefined,
  error: undefined,
  name: undefined,
  silentError: false,
  children: undefined,
};

const generateField = FormComponent => {
  const FieldComponent = ({ className, children, label, tip, error, silentError, name, ...otherProps }) => {
    const fieldId = uniqueId('form-field-');
    
    if (typeof children === 'function') return children({ ...otherProps, fieldId, className, label, tip, error, silentError, name });
    
    return (
      <StyledField
      className={className}
      hasLabel={!!label}
      data-testid={name ? `form-field:${name}` : 'form-field'}
      >
        {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
        <FormComponent id={fieldId} invalid={!!error} name={name} error={error} {...otherProps}>
          {children}
        </FormComponent>
        {tip && <FieldTip>{tip}</FieldTip>}
        {!silentError && error && <FieldError>{error}</FieldError>}
      </StyledField>
    );
  };

  FieldComponent.propTypes = propTypes;
  FieldComponent.defaultProps = defaultProps;

  return FieldComponent;
};

export default {
  Input: generateField(Input),
  Select: generateField(Select),
  Radio: generateField(Radio),
  Checkbox: generateField(Checkbox),
  Textarea: generateField(Textarea),
};