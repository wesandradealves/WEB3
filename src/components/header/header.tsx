"use client";

import Link from 'next/link';
import Image from "next/image";
import { Container } from './styles';
import Navigation from '../navigation/navigation';
import 'hamburgers/dist/hamburgers.css';
import { useState } from 'react';
import classNames from 'classnames';

export default function Header() {
  const [expanded, setExpand] = useState<boolean>(false);

  return (
      <Container>
        <div className='container m-auto'>
          <div className='flex justify-between items-center gap-6'>
            <div className='logo'>
              <Link href={'/'}>
                <Image width={226} height={74} src='/img/bdm-logo-golden.svg' alt='Onde o dinheiro se transforma em Ouro!' />
              </Link>
            </div>
            
            <Navigation className='hidden xl:flex flex-1' ListClassName='gap-6 2xl:gap-20' data={[
              { title: 'Soluções e Produtos', url: '#', below: [
                { title: 'Ouro', url: '#' },
                { title: 'Prata', url: '#' },
              ] },
              { title: 'Mercados', url: '#' },
              { title: 'Clientes', url: '#' },
              { title: 'Para empresas', url: '#' },
              { title: 'Sobre nós', url: '#' },
            ]} />

            <div className='ms-auto flex items-center justify-end gap-6'>

              <Navigation ListClassName='gap-6' data={[
                { title: 'Login', url: '#', className: 'hidden sm:block' },
                { title: 'Registro', url: '#', type: 'button', btnClass: '--primary' },
              ]} className={'--shortcuts'} />

              <span className='hamburger-wrapper block xl:hidden'>
                <button 
                className={
                    classNames(
                    "hamburger hamburger--collapse",
                        {
                          'is-active': !!expanded
                        }
                    )      
                }
                onClick={() => setExpand(!expanded)}
                type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div> 

        <Navigation
        className={classNames({ 
          'block': expanded,
          'hidden': !expanded
        })}
        mobile={true} ListClassName='gap-6' data={[
          { title: 'Soluções e Produtos', url: '#', below: [
            { title: 'Ouro', url: '#' },
            { title: 'Prata', url: '#' },
          ] },
          { title: 'Mercados', url: '#' },
          { title: 'Clientes', url: '#' },
          { title: 'Para empresas', url: '#' },
          { title: 'Sobre nós', url: '#' },
        ]} />
      </Container>
  );
}

