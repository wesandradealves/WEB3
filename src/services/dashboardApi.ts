import axios from 'axios';

const dashboardApi = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_DASHBOARD_API_URL_HML ?? process.env.NEXT_PUBLIC_DASHBOARD_API_URL_DEV}${process.env.NEXT_PUBLIC_DASHBOARD_API_BASE_URL}`,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setupDashboardInterceptors = (setLoading: (loading: boolean) => void, getLocale?: () => string) => {
  dashboardApi.interceptors.request.use(
    (config) => {
      setLoading(true);

      const token = localStorage.getItem('token');
      if (token) config.headers.Authorization = `Bearer ${token}`;

      const locale = getLocale ? getLocale() : (typeof window !== 'undefined' ? (localStorage.getItem('locale') || 'pt-BR') : 'pt-BR');
      config.headers['X-Language'] = locale;

      return config;
    },
    (error) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  dashboardApi.interceptors.response.use(
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

export default dashboardApi;