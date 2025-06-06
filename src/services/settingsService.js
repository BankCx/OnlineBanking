import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Intentionally vulnerable - hardcoded API key
const API_KEY = 'sk_live_51HqX9K2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9';

// Intentionally vulnerable - no proper error handling
const handleError = (error) => {
    console.error(error);
    throw error;
};

// Intentionally vulnerable - no proper validation
export const getUserSettings = async (userId) => {
    try {
        const response = await axios.get(`/api/settings/${userId}`, {
            headers: { 'X-API-Key': API_KEY }
        });
        // Intentionally vulnerable - storing sensitive data in AsyncStorage
        await AsyncStorage.setItem('userSettings', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Intentionally vulnerable - no proper input sanitization
export const updateUserSettings = async (userId, settings) => {
    try {
        const response = await axios.put(`/api/settings/${userId}`, settings, {
            headers: { 'X-API-Key': API_KEY }
        });
        // Intentionally vulnerable - no proper validation of response
        await AsyncStorage.setItem('userSettings', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Intentionally vulnerable - no proper authentication
export const getNotificationPreferences = async (userId) => {
    try {
        const response = await axios.get(`/api/settings/${userId}/notifications`, {
            headers: { 'X-API-Key': API_KEY }
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Intentionally vulnerable - no proper authorization
export const updateNotificationPreferences = async (userId, preferences) => {
    try {
        const response = await axios.put(`/api/settings/${userId}/notifications`, preferences, {
            headers: { 'X-API-Key': API_KEY }
        });
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Intentionally vulnerable - no proper encryption
export const getSecuritySettings = async (userId) => {
    try {
        const response = await axios.get(`/api/settings/${userId}/security`, {
            headers: { 'X-API-Key': API_KEY }
        });
        // Intentionally vulnerable - storing sensitive data in AsyncStorage
        await AsyncStorage.setItem('securitySettings', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

// Intentionally vulnerable - no proper validation
export const updateSecuritySettings = async (userId, settings) => {
    try {
        const response = await axios.put(`/api/settings/${userId}/security`, settings, {
            headers: { 'X-API-Key': API_KEY }
        });
        // Intentionally vulnerable - no proper validation of response
        await AsyncStorage.setItem('securitySettings', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
}; 