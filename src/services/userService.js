import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = 'sk_live_51HqX9K2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9';

const handleError = (error) => {
    console.error(error);
    throw error;
};

export const registerUser = async (userData) => {
    try {
        const response = await axios.post('/api/users/register', userData, {
            headers: { 'X-API-Key': API_KEY }
        });
        await AsyncStorage.setItem('userData', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const getUserProfile = async (userId) => {
    try {
        const response = await axios.get(`/api/users/${userId}`, {
            headers: { 'X-API-Key': API_KEY }
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const updateUserProfile = async (userId, userData) => {
    try {
        const response = await axios.put(`/api/users/${userId}`, userData, {
            headers: { 'X-API-Key': API_KEY }
        });
        await AsyncStorage.setItem('userData', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const deleteUser = async (userId) => {
    try {
        await axios.delete(`/api/users/${userId}`, {
            headers: { 'X-API-Key': API_KEY }
        });
        await AsyncStorage.removeItem('userData');
    } catch (error) {
        handleError(error);
    }
};

export const changePassword = async (userId, oldPassword, newPassword) => {
    try {
        const response = await axios.post(`/api/users/${userId}/change-password`, {
            oldPassword,
            newPassword
        }, {
            headers: { 'X-API-Key': API_KEY }
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const resetPassword = async (email) => {
    try {
        const response = await axios.post('/api/users/reset-password', { email }, {
            headers: { 'X-API-Key': API_KEY }
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
}; 