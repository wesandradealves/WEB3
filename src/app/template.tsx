'use client';

import { PageService } from '../services/userService';
import { usePathname } from 'next/navigation';
import { useMetadata } from "@/hooks/useMetadata";
import { useEffect, useState } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  interface Page {
    title?: {
      rendered?: string;
    };
  }

  const [page, setPage] = useState<Page | null>(null);
  const pathname = usePathname();

  const loadPage = async (pathname: string) => {
    try {
      const data = await PageService(pathname);
      if (data) setPage(data as Page); 
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  };

  useEffect(() => {
    loadPage(pathname)
  }, [pathname]);

  useMetadata({
    title: `BDM Digital ${page?.title?.rendered ? ' - ' + page.title.rendered : ''}`,
    ogTitle: `BDM Digital ${page?.title?.rendered ? ' - ' + page.title.rendered : ''}`,
  });

  return (
    <main className='flex-1'>
      {children}
    </main>
  );
}

