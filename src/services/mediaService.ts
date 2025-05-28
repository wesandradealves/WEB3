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
  
  export const MediaService = async (id: number): Promise<MediaItem | undefined> => {
    let retries = 3;
    const delay = 2000;
    while (retries > 0) {
      try {
        const response = await api.get(`/wp/v2/media/${id}`);
        return response.data as MediaItem;
      } catch (error: unknown) {
        retries--;
        if (retries === 0) {
          console.warn(`Media Fetch Error (ID: ${id}):`, error);
          return undefined;
        }
        await new Promise(res => setTimeout(res, delay));
      }
    }
    return undefined;
  };