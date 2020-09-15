import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { StyledTextarea } from './styles';

const propTypes = {
  className: PropTypes.string,
  invalid: PropTypes.bool,
  minRows: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  invalid: false,
  minRows: 2,
  value: undefined,
  onChange: () => {},
};

const Textarea = forwardRef(({ className, invalid, onChange, minRows, ...textareaProps }, ref) => (
  <StyledTextarea className={className} invalid={invalid}>
    <textarea
      {...textareaProps}
      onChange={event => onChange(event.target.value, event)}
      ref={ref || undefined}
    />
  </StyledTextarea>
));

Textarea.propTypes = propTypes;
Textarea.defaultProps = defaultProps;

export default Textarea;