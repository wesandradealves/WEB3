import { DashboardService } from './dashboardService';

export interface CategoryTreeNode {
  categoryCode: string;
  categoryLevel: number;
  parentCode?: string;
  text: string;
  keywords?: string[];
  isActive: boolean;
  children?: CategoryTreeNode[];
}

export interface DashboardCategoriesResponse {
  categories: CategoryTreeNode[];
  totalCount: number;
}

export interface DashboardCategoriesParams {
  categoryLevel?: number;
  categoryCode?: string;
  language?: 'pt-BR' | 'en-US' | 'es-ES' | 'fr' | 'ar' | 'zh' | 'it';
  [key: string]: unknown;
}

export const DashboardCategoriesService = {
  async getCategories(params?: DashboardCategoriesParams): Promise<DashboardCategoriesResponse> {
    try {
      const response = await DashboardService.get<DashboardCategoriesResponse>(
        '/categories-list',
        params
      );
      return response;
    } catch (error: unknown) {
      console.error('Error fetching categories from dashboard:', error);
      throw error;
    }
  }
};

export default DashboardCategoriesService;