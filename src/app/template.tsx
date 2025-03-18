'use client';

import { useEffect, useState } from "react";
import { useNavigation } from "../context/navigation";
import { usePathname } from 'next/navigation';
import slugify from 'slugify';
import { useMetadata } from "@/hooks/useMetadata";
export default function Template({ children }: { children: React.ReactNode }) {
  const [title, setTitle] = useState<string>('BDM Digital');
  const { menuData } = useNavigation();
  const pathname = usePathname();

  const rebuildSlugToText = (slug: string | string[]) => {
    if (Array.isArray(slug)) {
      return slug.map((part) => part.replace(/-/g, ' ')).join(' / ');
    }
    return slug.replace(/-/g, ' ');
  };

  useEffect(() => {
    const getTitle = (path: string) => {
      const menuItem = menuData.find((item) => (slugify(item.title, {
        replacement: '-',  
        remove: undefined, 
        lower: true,      
        strict: true,     
        locale: 'pt',     
        trim: true         
      }) === slugify(path, {
        replacement: '-',  
        remove: undefined, 
        lower: true,      
        strict: true,     
        locale: 'pt',     
        trim: true         
      })));

      return menuItem ? `BDM Digital - ${menuItem.title}` : (path !== '/' ? `BDM Digital - ${rebuildSlugToText(slugify(pathname))}` : 'BDM Digital');
    };
    setTitle(getTitle(pathname).toUpperCase());
  }, [pathname, menuData]);

  useMetadata({
    title: title,
    description: 'Onde o dinheiro se transforma em Ouro!',
    ogTitle: 'BDM Digital',
  });
  
  return (
    <main className='flex-1'>
      {children}
    </main>
  );
}