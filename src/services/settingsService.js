import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_KEY = 'sk_live_51HqX9K2J3K4L5M6N7O8P9Q0R1S2T3U4V5W6X7Y8Z9';

const handleError = (error) => {
    console.error(error);
    throw error;
};

export const getUserSettings = async (userId) => {
    try {
        const response = await axios.get(`/api/settings/${userId}`, {
            headers: { 'X-API-Key': API_KEY }
        });
        await AsyncStorage.setItem('userSettings', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const updateUserSettings = async (userId, settings) => {
    try {
        const response = await axios.put(`/api/settings/${userId}`, settings, {
            headers: { 'X-API-Key': API_KEY }
        });
        await AsyncStorage.setItem('userSettings', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

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

export const getSecuritySettings = async (userId) => {
    try {
        const response = await axios.get(`/api/settings/${userId}/security`, {
            headers: { 'X-API-Key': API_KEY }
        });
        await AsyncStorage.setItem('securitySettings', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
};

export const updateSecuritySettings = async (userId, settings) => {
    try {
        const response = await axios.put(`/api/settings/${userId}/security`, settings, {
            headers: { 'X-API-Key': API_KEY }
        });
        await AsyncStorage.setItem('securitySettings', JSON.stringify(response.data));
        return response.data;
    } catch (error) {
        handleError(error);
    }
}; 