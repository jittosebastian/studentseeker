
import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const Admin = ({ product = {} }) => {
  const [form, setForm] = useState({
    Email: product.Email || '',
    Password: product.Password || '',
  });
  let navigate = useNavigate();
  // let location = useLocation();


  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
   
    if (!form.Email || !form.Password) {
      setError('All fields are required.');
      return;
    }

    
    setError('');

    
    console.log('Form Submitted:', form);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
        backgroundColor: 'transperant', 
        p: 20.9,
        height:'42.42ch',
        borderRadius: '8px', 
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <br />
      <Typography variant="h6" noWrap component="a" sx={{
  fontSize: 30,
  fontFamily: 'serif',
  position: 'absolute',
  top: '28%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color:'white',
  letterSpacing:'7px'
}}>
              ADMIN LOGIN
            </Typography>
      <div>
        <TextField
          required
          id="email"
          label="Email"
          name="Email"
          type="email"
          value={form.Email}
          onChange={handleChange}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />
        <TextField
          required
          id="password"
          label="Password"
          name="Password"
          type="password"
          value={form.Password}
          onChange={handleChange}
          sx={{ backgroundColor: '#fff' }}
        />
        <br />

        {error && (
          <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>
        )}

<br/><Button
          type="submit" 
          variant="contained"
          sx={{
            backgroundColor: '#6b1ca2',
            '&:hover': {
              backgroundColor: '#6b2ca2', 
            }
          }}
          onClick={() => navigate('/addb')}
        >
          Login
        </Button>
      </div>
    </Box>
  );
};

export default Admin;