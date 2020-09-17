import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

const Button = React.forwardRef(
  ({ className, onClick, disabled, children, variant, ...buttonProps }, ref) => {
    const handleClick = () => {
      if (!disabled) {
        onClick();
      }
    };

    return (
      <StyledButton
        {...buttonProps}
        className={className}
        onClick={handleClick}
        disabled={disabled}
        variant={variant}
        ref={ref}
      >
        {children}
      </StyledButton>
    );
  },
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'success', 'danger', 'secondary', 'empty']),
};

Button.defaultProps = {
  className: undefined,
  disabled: false,
  onClick: () => {},
  children: undefined,
  variant: 'secondary',
};

export default Button;
