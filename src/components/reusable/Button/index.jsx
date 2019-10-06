import React from 'react';
import PropTypes from 'prop-types';

import { Button as BaseButton } from '@material-ui/core';

const Button = ({ children, color, disabled, ...props }) => (
  <BaseButton
    color={color}
    variant="contained"
    disabled={disabled}
    {...props}
  >
    {children}
  </BaseButton>
);

Button.defaultProps = {
  disabled: false
}

Button.propTypes = {
  disabled: PropTypes.bool
}

export default Button;