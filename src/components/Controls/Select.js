import React from 'react';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';

export default function Select(props) {
  const { name, label, value, onChange, options } = props;

  return (
    <FormControl variant="outlined">
      <InputLabel>{label}</InputLabel>
      <MuiSelect label={label} value={value} onChange={onChange} name={name}>
        <MenuItem value="">None</MenuItem>
        {options.map(
          item => (<MenuItem key={item.id} value={item.id} >{item.title}</MenuItem>)
        )}
      </MuiSelect>
    </FormControl>
  )
}
