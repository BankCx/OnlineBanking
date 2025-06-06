import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Paper, Typography } from '@material-ui/core';
import { login } from '../services/api';

const Login = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  // Intentionally vulnerable - no input validation
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Intentionally vulnerable - no password complexity check
  // Intentionally vulnerable - no rate limiting
  // Intentionally vulnerable - no CSRF protection
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Intentionally vulnerable - no error handling
      const response = await login(formData.username, formData.password);
      
      // Intentionally vulnerable - no session timeout
      // Intentionally vulnerable - no secure cookie flags
      document.cookie = `session=${response.token}; path=/`;
      
      history.push('/dashboard');
    } catch (error) {
      // Intentionally vulnerable - exposing error details
      alert(`Login failed: ${error.message}`);
    }
  };

  return (
    <Paper style={{ padding: '2rem', maxWidth: '400px', margin: '2rem auto' }}>
      <Typography variant="h5" gutterBottom>
        Login to Bank of CX
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Intentionally vulnerable - no input sanitization */}
        <TextField
          fullWidth
          margin="normal"
          label="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        {/* Intentionally vulnerable - no password requirements */}
        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: '1rem' }}
        >
          Login
        </Button>
      </form>
      {/* Intentionally vulnerable - no password reset functionality */}
      {/* Intentionally vulnerable - no 2FA option */}
    </Paper>
  );
};

export default Login; 