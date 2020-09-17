import React from 'react';
import PropTypes from 'prop-types';
import { Label, CheckElement, StyledCheck } from './styles';

const propTypes = {
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  invalid: PropTypes.bool,
  children: PropTypes.node,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

const defaultProps = {
  className: undefined,
  value: false,
  invalid: false,
  checked: false,
  children: undefined,
  onChange: () => {},
};

const Checkbox = React.forwardRef(
  (
    { className, children, value, checked: checkedProps, onChange, invalid, ...inputProps },
    ref,
  ) => {
    const [checked, setChecked] = React.useState(checkedProps);

    React.useEffect(() => {
      if (value !== undefined && checked !== value) {
        setChecked(value);
      }
    }, [checked, value]);

    return (
      <StyledCheck className={className}>
        <Label>
          <input
            {...inputProps}
            onChange={(event) => onChange(event.target.checked, event)}
            type="checkbox"
            checked={checked}
            ref={ref}
          />
          <CheckElement checked={checked} invalid={invalid} />
          {children}
        </Label>
      </StyledCheck>
    );
  },
);

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;
