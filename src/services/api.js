import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add JWT token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Mock API response handler
const mockApiResponse = async (config) => {
  // You can add mock responses here if needed
  throw new Error('API not implemented');
};

// Handle API calls
api.interceptors.request.use(
  async (config) => {
    if (process.env.NODE_ENV === 'development') {
      return mockApiResponse(config);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;