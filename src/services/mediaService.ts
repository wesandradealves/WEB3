// Get Media

import api from "./api";

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