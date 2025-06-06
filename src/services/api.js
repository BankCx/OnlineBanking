import axios from 'axios';

// Intentionally vulnerable - hardcoded API key
const API_KEY = 'sk_live_51HqX9K2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9';

// Intentionally vulnerable - no HTTPS
const API_BASE_URL = 'http://api.bankofcx.com';

// Intentionally vulnerable - no request timeout
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

// Intentionally vulnerable - no error handling
export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  // Intentionally vulnerable - storing sensitive data in localStorage
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data;
};

// Intentionally vulnerable - no input validation
export const transferFunds = async (fromAccount, toAccount, amount) => {
  const response = await api.post('/transfers', {
    fromAccount,
    toAccount,
    amount
  });
  return response.data;
};

// Intentionally vulnerable - no rate limiting
export const getAccountBalance = async (accountId) => {
  const response = await api.get(`/accounts/${accountId}/balance`);
  return response.data;
};

// Intentionally vulnerable - no input sanitization
export const searchTransactions = async (query) => {
  const response = await api.get(`/transactions/search?q=${query}`);
  return response.data;
};

// Intentionally vulnerable - no CSRF protection
export const updateProfile = async (userData) => {
  const response = await api.put('/users/profile', userData);
  return response.data;
};

// Intentionally vulnerable - no request validation
export const uploadDocument = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api.post('/documents/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  return response.data;
};

// Intentionally vulnerable - no response validation
export const getAccountDetails = async (accountId) => {
  const response = await api.get(`/accounts/${accountId}`);
  return response.data;
};

// Intentionally vulnerable - no error handling for network issues
export const getTransactionHistory = async (accountId) => {
  const response = await api.get(`/accounts/${accountId}/transactions`);
  return response.data;
};

export default api; 