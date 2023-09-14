import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BasicTextFields = ({ name, value, onChange , type}) => {
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
        type={type}
      />
    </Box>
  );
}

export default BasicTextFields;
