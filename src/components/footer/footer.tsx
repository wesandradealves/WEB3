"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';
import Navigation from '../navigation/navigation';
import SocialNetworks from '../socialNetworks/socialNetworks';
import { fetchNavigation } from '@/utils/index';
import { MenuItem } from '@/services/userService';
import { useEffect, useState } from 'react';
import { useSettings } from '@/context/settings';

export default function Footer() {
  const [menu, setNavigation] = useState<MenuItem[]>([]);
  const { settings } = useSettings();
  const year = new Date().getFullYear();
  const loadNavigation = async () => {
    try {
      const menu = await Promise.all([
        fetchNavigation('footer')
      ]);

      if (menu[0]) setNavigation(menu[0]);
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
            {settings && (<Link href="/">
              <Image
                src={settings.custom_logo}
                alt={settings.blog_info.name}
                width={160}
                height={40}
                className="h-auto"
                priority
              />
            </Link>)}

            {settings && (<div className="flex flex-col gap-4 md:max-w-[300px]">
              <SocialNetworks className="text-xl" data={settings.social_networks} />

              <p className="text-sm lg:text-md text-gray-700 leading-normal mt-2">
                {`© ${year} ${settings.blog_info.name}. Todos os direitos reservados.`}
                <br />
                Desenvolvido por Dourado.cash
              </p>
            </div>)}
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