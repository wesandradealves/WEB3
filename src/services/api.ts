import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL_HML ?? process.env.NEXT_PUBLIC_API_URL_DEV}${process.env.NEXT_PUBLIC_API_BASE_URL}`, 
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupInterceptors = (setLoading: (loading: boolean) => void) => {
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
