import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ContentItem } from '@/services/ContentService';

// export interface MediaProp {
//     id: number;
//     title: string;
//     body?: string;        
//     summary?: string;    
//     thumbnail?: string;
//     date?: string;
//     author?: string;
//     category?: string;
//     readTime?: string;
// }

interface Props {
    media: ContentItem[];
    setMediaData: React.Dispatch<React.SetStateAction<ContentItem[]>>;
}

const MediaContext = createContext<Props | undefined>(undefined);

export const MediaProvider = ({ children }: { children: ReactNode }) => {
    const [media, setMediaData] = useState<ContentItem[]>([]);

    return (
        <MediaContext.Provider value={{ media, setMediaData }}>
            {children}
        </MediaContext.Provider>
    );
};

export const useMedia = () => {
    const context = useContext(MediaContext);
    if (!context) {
        throw new Error('useMedia must be used within a provider');
    }
    return context;
};