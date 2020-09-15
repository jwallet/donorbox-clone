import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, InputElement } from './styles';

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  invalid: PropTypes.bool,
  filter: PropTypes.instanceOf(RegExp),
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  value: '',
  invalid: false,
  filter: undefined,
  onChange: () => {},
};

const Input = forwardRef(({ className, filter, onChange, ...inputProps }, ref) => {
  const handleChange = event => {
    if (!filter || filter.test(event.target.value)) {
      onChange(event.target.value, event);
    }
  };

  return (
    <StyledInput className={className}>
      <InputElement {...inputProps} onChange={handleChange} ref={ref} />
    </StyledInput>
  );
});

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;