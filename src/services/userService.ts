import api from './api';

// Define a custom type for API errors
interface ApiError {
  response?: {
    data?: unknown;
  };
}

// Login user
export const Login = async (username: string, password: string) => {
  try {
    const response = await api.post('/jwt-auth/v1/token', {
      username,
      password,
    });
    // Save the token to localStorage or sessionStorage
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error && 'response' in error) {
      const apiError = error as ApiError;
      console.error('Login Error:', apiError.response?.data || error.message);
    } else {
      console.error('Login Error:', error);
    }
    throw error;
  }
};