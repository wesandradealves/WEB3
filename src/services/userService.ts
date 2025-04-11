/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './api';

interface ApiError {
  response?: {
    data?: unknown;
  };
}

// Login 
export const Login = async (username: string, password: string) => {
  try {
    const response = await api.post('/jwt-auth/v1/token', {
      username,
      password,
    });
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

// Get Navigation

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

interface Page {
  acf_blocks: any;
  id: any;
  acf: any;
  data: {
    "title": {
      "rendered": string
    }
  }
}

export const NavigationService = async (slug: string): Promise<MenuItem[]> => {
  try {
    const response = await api.get(`/custom/v1/menus`, {
      params: { slug },
    });

    return response.data as MenuItem[];
  } catch (error: unknown) {
    console.error('Navigation Error:', error);
    throw error;
  }
};

// Get Link Object by Slug
export const PageService = async (slug: string): Promise<Page> => {
  try {
    const response = await api.get('/wp/v2/pages', {
      params: { slug },
    });

    if (response.data && response.data.length > 0) {
      return response.data[0];
    } else {
      throw new Error(`No page found with slug: ${slug}`);
    }
  } catch (error: unknown) {
    throw new Error(`Get Link by Slug Error: ${error}`);
  }
};

// Get Settings

export const getSettings = async () => {
  const response = await api.get('/custom/v1/settings'); // Use the API instance to make the request
  return response.data;
};

// Get Media

export interface MediaItem {
  id: number;
  source_url: string;
  alt_text?: string;
  title?: {
    rendered: string;
  };
  caption?: {
    rendered: string;
  };
  media_type: string;
  mime_type: string;
}

export const MediaService = async (id: number): Promise<MediaItem> => {
  try {
    const response = await api.get(`/wp/v2/media/${id}`);
    return response.data as MediaItem;
  } catch (error: unknown) {
    console.error(`Media Fetch Error (ID: ${id}):`, error);
    throw error;
  }
};

// Get User

export const getUser = async (id: number = 1) => {
  try {
    const response = await api.get(`/wp/v2/users/${id}?context=view`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
};