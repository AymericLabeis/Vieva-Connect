import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance = axios.create({
  baseURL: 'http://54.38.188.78:8080', // Replace with your actual server URL
  timeout: 5000, // Timeout of 5 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to attach authorization token (if available)
instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('authToken'); // Retrieve token from AsyncStorage
      console.log('Interceptor token:', token); // Log the token for debugging

      // Only attach token if it exists
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    } catch (error) {
      console.error('Error in request interceptor:', error);
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
