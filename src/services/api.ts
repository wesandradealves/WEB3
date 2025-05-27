import axios from 'axios';
import { getApiBaseURL } from '@/utils/getApiBaseURL';

const api = axios.create({
  baseURL: getApiBaseURL(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupInterceptors = (setLoading: (loading: boolean) => void) => {
  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      setLoading(true); 

      const token = localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      setLoading(false);
      return response;
    },
    (error) => {
      setLoading(false); 
      return Promise.reject(error);
    }
  );
};

export default api;
