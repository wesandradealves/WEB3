"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';
import Navigation from '../navigation/navigation';
import SocialNetworks from '../socialNetworks/socialNetworks';
import { fetchNavigation } from '@/utils/index';
import { MenuItem } from '@/services/userService';
import { useEffect, useState } from 'react';

export default function Footer() {
  const [menu, setNavigation] = useState<MenuItem[]>([]);
  
  const loadNavigation = async () => {
    try {
      const menu = await Promise.all([
        fetchNavigation('footer')
      ]);
  
      if(menu[0]) setNavigation(menu[0]);
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  };

  useEffect(() => {
    loadNavigation();
  }, []);

  return (
    <Container className="bg-white py-5 rounded-t-2xl">
      <div className="container m-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 py-5">
          <div className='flex flex-col gap-4 2xl:flex-row 2xl:gap-[9rem]'>
            <Link href="/">
              <Image 
                src="/img/bdm-logo.svg" 
                alt="BDM Digital" 
                width={160} 
                height={40}
                className="h-auto"
                priority
              />
            </Link>
            
            <div className="flex flex-col gap-4 md:max-w-[300px]">
  
              <SocialNetworks className='text-xl' data={[
                { title: 'Twitter', url: 'https://twitter.com' },
                { title: 'Instagram', url: 'https://instagram.com' },
                { title: 'Linkedin', url: 'https://linkedin.com' },
                { title: 'Pinterest', url: 'https://pinterest.com' },
              ]} />

              <p className="text-sm lg:text-md text-gray-700 leading-normal mt-2">
                © 2025 DBM Digital. Todos os direitos reservados.
                <br />
                Desenvolvido por Dourado.cash
              </p>
            </div>
          </div>

          {menu && (<Navigation 
            defaultexpanded={"on"} 
            className='flex-1' 
            ListClassName='gap-8 md:gap-4 xl:gap-[8rem] flex-col md:flex-row md:justify-end' data={menu} />)}
        </div>
      </div>
    </Container>
  );
}