"use client";

import Link from 'next/link';
import Image from "next/image";
import { Container } from './styles';
import Navigation from '../navigation/navigation';
import 'hamburgers/dist/hamburgers.css';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Props from './typo';

const Header = ({ scrollPosition }: Props) => {
  const [expanded, setExpand] = useState<boolean>(false);

  const handleResize = () => {
    setExpand(false);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
      <Container 
      className={classNames(`w-full fixed top-0 left-0 z-50 header`, {
          'scrolled': scrollPosition > 0
      })}>
        <div 
        className={classNames('container', {
          'pt-3 pb-3': scrollPosition > 0,
          'pt-6 pb-6': scrollPosition <= 0,
        })}>
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

export default Header;