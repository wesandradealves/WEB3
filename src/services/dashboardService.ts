import dashboardApi from './dashboardApi';

export interface DashboardErrorResponse {
  message: string | string[];
  details?: unknown;
}

export const DashboardService = {
  async get<T>(endpoint: string, params?: Record<string, unknown>): Promise<T> {
    let retries = 3;
    const delay = 2000;
    
    while (retries > 0) {
      try {
        const response = await dashboardApi.get(endpoint, { params });
        return response.data as T;
      } catch (error: unknown) {
        retries--;
        if (retries === 0) {
          console.error(`Dashboard API Error (GET ${endpoint}):`, error);
          throw error;
        }
        await new Promise(res => setTimeout(res, delay));
      }
    }
    throw new Error('Dashboard API request failed');
  }
};

export default DashboardService;