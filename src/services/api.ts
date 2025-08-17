import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5157',
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});