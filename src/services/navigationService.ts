// Get Navigation

import api from "./api";

export interface MenuItem {
    url: string;
    title: string;
    className?: string;
    classes?: string[];
    acf?: {
      isButton?: boolean;
      effect?: string;
    };
    children?: MenuItem[];
  }
  
  export const NavigationService = async (slug: string): Promise<MenuItem[]> => {
    try {
      const response = await api.get(`/custom/v1/menus`, {
        params: { slug },
      });

      console.log(response)
  
      return response.data as MenuItem[];
    } catch (error: unknown) {
      console.error('Navigation Error:', error);
      throw error;
    }
  };