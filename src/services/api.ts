import axios from 'axios';

// Added comments for clarity and ensured best practices are followed

const api = axios.create({
  baseURL: '/api', // Base URL for API requests, leveraging Next.js rewrites
  timeout: 90000, // Timeout set to 90 seconds; consider reducing if backend responds faster
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupInterceptors = (setLoading: (loading: boolean) => void) => {
  // Request interceptor
  api.interceptors.request.use(
    (config) => {
      setLoading(true); // Indicate loading state

      const token = localStorage.getItem('token');

      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Attach token if available
      }

      return config;
    },
    (error) => {
      setLoading(false); // Stop loading on error
      return Promise.reject(error);
    }
  );

  // Response interceptor
  api.interceptors.response.use(
    (response) => {
      setLoading(false); // Stop loading on successful response
      return response;
    },
    (error) => {
      setLoading(false); // Stop loading on error

      // Optional: Add custom error handling logic here
      if (error.response) {
        console.error('API Error:', error.response.data);
      } else {
        console.error('Network Error:', error.message);
      }

      return Promise.reject(error);
    }
  );
};

export default api;
