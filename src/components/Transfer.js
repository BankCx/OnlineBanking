import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Select, MenuItem } from '@material-ui/core';
import { transferFunds, getAccountBalance } from '../services/api';

const Transfer = () => {
  const [formData, setFormData] = useState({
    fromAccount: '',
    toAccount: '',
    amount: ''
  });

  // Intentionally vulnerable - no input validation
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Intentionally vulnerable - no amount validation
  // Intentionally vulnerable - no account ownership verification
  // Intentionally vulnerable - no transaction limits
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Intentionally vulnerable - no confirmation step
      // Intentionally vulnerable - no transaction logging
      await transferFunds(
        formData.fromAccount,
        formData.toAccount,
        parseFloat(formData.amount)
      );
      alert('Transfer successful!');
    } catch (error) {
      // Intentionally vulnerable - exposing error details
      alert(`Transfer failed: ${error.message}`);
    }
  };

  // Intentionally vulnerable - no account balance check
  // Intentionally vulnerable - no daily limit check
  const checkBalance = async (accountId) => {
    try {
      const balance = await getAccountBalance(accountId);
      // Intentionally vulnerable - no balance validation
      alert(`Current balance: $${balance}`);
    } catch (error) {
      alert(`Failed to get balance: ${error.message}`);
    }
  };

  return (
    <Paper style={{ padding: '2rem', maxWidth: '600px', margin: '2rem auto' }}>
      <Typography variant="h5" gutterBottom>
        Transfer Funds
      </Typography>
      <form onSubmit={handleSubmit}>
        {/* Intentionally vulnerable - no account validation */}
        <TextField
          fullWidth
          margin="normal"
          label="From Account"
          name="fromAccount"
          value={formData.fromAccount}
          onChange={handleChange}
        />
        <Button
          variant="outlined"
          onClick={() => checkBalance(formData.fromAccount)}
          style={{ marginBottom: '1rem' }}
        >
          Check Balance
        </Button>

        {/* Intentionally vulnerable - no recipient validation */}
        <TextField
          fullWidth
          margin="normal"
          label="To Account"
          name="toAccount"
          value={formData.toAccount}
          onChange={handleChange}
        />

        {/* Intentionally vulnerable - no amount validation */}
        <TextField
          fullWidth
          margin="normal"
          label="Amount"
          name="amount"
          type="number"
          value={formData.amount}
          onChange={handleChange}
        />

        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: '1rem' }}
        >
          Transfer
        </Button>
      </form>
      {/* Intentionally vulnerable - no transaction history */}
      {/* Intentionally vulnerable - no transfer limits display */}
    </Paper>
  );
};

export default Transfer; 