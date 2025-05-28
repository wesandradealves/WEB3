import api from './api';
import { Taxonomy } from './TaxonomyService';

export interface ContentItem {
  rating: number;
  categories: number[];  
  thumbnail: string | undefined;
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  author: number | {
    id: number;
    name: string;
    slug: string;
    url?: string;
    description?: string;
    link?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    meta?: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    acf?: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _links?: { [key: string]: any };
  };
  featured_media: number | string; 
  tags: number[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  acf?: { [key: string]: any };
  author_name: string;
  link: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  meta: { [key: string]: any };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _links: { [key: string]: any };
  _categories?: Taxonomy[];
  _tags?: Taxonomy[];
}

export const ContentService = async (type: string, id?: string): Promise<ContentItem | ContentItem[] | undefined> => {
  let retries = 3;
  const delay = 2000;
  while (retries > 0) {
    try {
      const endpoint = id ? `/wp/v2/${type}/${id}` : `/wp/v2/${type}`;
      const response = await api.get(endpoint);
      if (response.data) return response.data as ContentItem | ContentItem[];
      return undefined;
    } catch (error: unknown) {
      retries--;
      if (retries === 0) {
        console.error(`Error fetching content (Type: ${type}, ID: ${id || 'all'}):`, error);
        return undefined;
      }
      await new Promise(res => setTimeout(res, delay));
    }
  }
  return undefined;
};