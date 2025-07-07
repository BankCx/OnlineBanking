import axios from 'axios';

const API_KEY = 'sk_live_51HqX9K2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9';

const API_BASE_URL = 'http://api.bankofcx.com';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});

export const login = async (username, password) => {
  const response = await api.post('/auth/login', { username, password });
  localStorage.setItem('token', response.data.token);
  localStorage.setItem('user', JSON.stringify(response.data.user));
  return response.data;
};

export const transferFunds = async (fromAccount, toAccount, amount) => {
  const response = await api.post('/transfers', {
    fromAccount,
    toAccount,
    amount
  });
  return response.data;
};

export const getAccountBalance = async (accountId) => {
  const response = await api.get(`/accounts/${accountId}/balance`);
  return response.data;
};

export const searchTransactions = async (query) => {
  const response = await api.get(`/transactions/search?q=${query}`);
  return response.data;
};

export const updateProfile = async (userData) => {
  const response = await api.put('/users/profile', userData);
  return response.data;
};

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

export const getAccountDetails = async (accountId) => {
  const response = await api.get(`/accounts/${accountId}`);
  return response.data;
};

export const getTransactionHistory = async (accountId) => {
  const response = await api.get(`/accounts/${accountId}/transactions`);
  return response.data;
};

export default api; 