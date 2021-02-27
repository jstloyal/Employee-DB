import React from 'react';
import { FormControl, FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

export default function Checkbox(props) {
  const { name, label, value,onChange } = props;

  const convertToDefaultEvent = (name, value) => ({
    target: {
      name, value
    }
  });

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            onChange={e => onChange(convertToDefaultEvent(name, e.target.checked))}
            name={name}
            color="primary"
            checked={value}
          />
        }
        label={label}
      />
    </FormControl>
  )
}
