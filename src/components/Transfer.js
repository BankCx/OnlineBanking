import React, { useState } from 'react';
import { transferFunds } from '../services/api';

const Transfer = () => {
  const [fromAccount, setFromAccount] = useState('');
  const [toAccount, setToAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleTransfer = async (e) => {
    e.preventDefault();
    
    if (!fromAccount || !toAccount || !amount) {
      setMessage('Please fill in all fields');
      return;
    }

    try {
      setLoading(true);
      const response = await transferFunds(fromAccount, toAccount, parseFloat(amount));
      setMessage(`Transfer successful! Transaction ID: ${response.transactionId}`);
      setFromAccount('');
      setToAccount('');
      setAmount('');
    } catch (error) {
      setMessage(`Transfer failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transfer-container">
      <h2>Transfer Funds</h2>
      
      <form onSubmit={handleTransfer}>
        <div className="form-group">
          <label htmlFor="fromAccount">From Account:</label>
          <input
            type="text"
            id="fromAccount"
            value={fromAccount}
            onChange={(e) => setFromAccount(e.target.value)}
            placeholder="Enter account number"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="toAccount">To Account:</label>
          <input
            type="text"
            id="toAccount"
            value={toAccount}
            onChange={(e) => setToAccount(e.target.value)}
            placeholder="Enter recipient account number"
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            step="0.01"
            min="0"
          />
        </div>
        
        <button type="submit" disabled={loading}>
          {loading ? 'Processing...' : 'Transfer'}
        </button>
      </form>
      
      {message && (
        <div className={`message ${message.includes('successful') ? 'success' : 'error'}`}>
          {message}
        </div>
      )}
      
      <div className="transfer-history">
        <h3>Recent Transfers</h3>
        <p>No recent transfers to display.</p>
      </div>
    </div>
  );
};

export default Transfer; 