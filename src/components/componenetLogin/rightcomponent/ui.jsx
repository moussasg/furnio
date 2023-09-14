import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BasicTextFields = ({ name, value, onChange }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id={name} 
        name={name} 
        value={value} 
        onChange={onChange} 
        variant="standard" 
        fullWidth 
      />
    </Box>
  );
}

export default BasicTextFields;
