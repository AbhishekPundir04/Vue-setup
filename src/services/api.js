// src/api.js
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual base URL
const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Accept': 'application/json',
    'Accept-Language': 'en',
    'x-api-key': 'your-api-key', // Replace with actual API key
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Add Authorization token if available
apiClient.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: Handle global error handling here
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle specific error codes (e.g., 401 for unauthorized)
    if (error.response?.status === 401) {
      console.log('Token expired or not authorized');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
