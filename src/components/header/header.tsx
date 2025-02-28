"use client";

import Link from 'next/link';
import Image from "next/image";
import { Container } from './styles';
import Navigation from '../navigation/navigation';
// import { Props } from './typo';

export default function Header() {
  return (
      <Container>
        <div className='container m-auto'>
          <div className='flex justify-between items-center'>
            <div className='logo'>
              <Link href={'/'}>
                <Image width={226} height={74} src='/img/bdm-logo-golden.svg' alt='Onde o dinheiro se transforma em Ouro!' />
              </Link>
            </div>
            <Navigation gap={91} data={[
              { title: 'Soluções e Produtos', url: '#' },
              { title: 'Mercados', url: '#' },
              { title: 'Clientes', url: '#' },
              { title: 'Para empresas', url: '#' },
              { title: 'Sobre nós', url: '#' },
            ]} className={''} />
            <Navigation gap={24} data={[
              { title: 'Login', url: '#' },
              { title: 'Register', url: '#', type: 'button', btnClass: '--primary' },
            ]} className={'--shortcuts'} />
          </div>
        </div> 
      </Container>
  );
}

