'use client';

import { PageService } from '../services/userService';
import { usePathname } from 'next/navigation';
import { useMetadata } from "@/hooks/useMetadata";
import { useEffect, useState, useCallback } from 'react';
import { useSettings } from '@/context/settings';

export default function Template({ children }: { children: React.ReactNode }) {
  const { settings } = useSettings();
  const [title, setTitle] = useState<string>();

  interface Page {
    title?: {
      rendered?: string;
    };
  }

  const [page, setPage] = useState<Page | null>(null);
  const pathname = usePathname();

  const loadPage = useCallback(async (pathname: string) => {
    try {
      const data = await PageService(pathname);
      if (data) setPage(data as Page); 
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  }, []);

  useEffect(() => {
    loadPage(pathname);
  }, [pathname, loadPage]);

  useEffect(() => {
    if(page && page?.title) setTitle(` - ${page?.title?.rendered}`)
  }, [page]);

  useMetadata({
    title: `${settings?.blog_info.name ?? 'BDM Digital'} ${title ?? ''}`,
    ogTitle: `${settings?.blog_info.name ?? 'BDM Digital'} ${title ?? ''}`,
  });

  return (
    <main className='flex-1'>
      {children}
    </main>
  );
}