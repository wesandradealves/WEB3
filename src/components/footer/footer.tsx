"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Container } from './styles';
import Navigation from '../navigation/navigation';
import SocialNetworks from '../socialNetworks/socialNetworks';

export default function Footer() {
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
                className="w-24 h-auto"
                priority
              />
            </Link>
            
            <div className="flex flex-col gap-4 md:max-w-[300px]">
  
              <SocialNetworks data={[
                { title: 'Twitter', url: 'https://twitter.com' },
                { title: 'Instagram', url: 'https://instagram.com' },
                { title: 'Linkedin', url: 'https://linkedin.com' },
              ]} />

              <p className="text-sm text-gray-700 leading-normal mt-2">
                © 2025 DBM Digital. Todos os direitos reservados.
                <br />
                Desenvolvido por Dourado.cash
              </p>
            </div>
          </div>

          <Navigation 
            defaultexpanded={"on"} 
            className='flex-1' 
            ListClassName='gap-8 md:gap-8 xl:gap-[16.25rem] flex-col md:flex-row md:justify-end' data={[
            { title: 'Explore', url: '#', below: [
              { title: 'Sobre nós', url: '#' },
              { title: 'BDM POS', url: '#' },
              { title: 'BDMAP', url: '#' },
              { title: 'Mercado BDM', url: '#' },
            ] },
            { title: 'Recursos', url: '#', below: [
              { title: 'Blog', url: '#' },
              { title: 'Suporte', url: '#' },
              { title: 'Documentação', url: '#' },
              { title: 'API', url: '#' },
            ] }
          ]} />
        </div>
      </div>
    </Container>
  );
}