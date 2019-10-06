import React from 'react';

import { TextField } from '@material-ui/core';

const Input = ({ label, ...props }) => (
  <TextField
    label={label}
    margin='dense'
    className='input'
    {...props}
  />
);

export default Input;