"use client";

import Link from 'next/link';
import Image from "next/image";
import { Container } from './styles';
import Navigation from '../navigation/navigation';
import 'hamburgers/dist/hamburgers.css';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Props from './typo';
// import LanguageSwitcher from '../languageSwitcher/languageSwitcher';
import { fetchNavigation } from '@/utils/index';
import { MenuItem } from '@/services/userService';

const Header = ({ scrollPosition }: Props) => {
  const [expanded, setExpand] = useState<boolean>(false);
  const [main, setMain] = useState<MenuItem[]>([]);
  const [lateral, setLateral] = useState<MenuItem[]>([]);

  useEffect(() => {
      if (scrollPosition) {
        setExpand(false);
      }
  }, [scrollPosition]);

  const handleResize = () => {
    setExpand(false);
  };

  const loadNavigation = async () => {
    try {
      const menu = await Promise.all([
        fetchNavigation('main'),
        fetchNavigation('lateral'),
      ]);
  
      if(menu[0]) setMain(menu[0]);
      if(menu[1]) setLateral(menu[1]);
    } catch (error) {
      console.error('Error loading navigation:', error);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    loadNavigation();

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
        className={classNames('container m-auto', {
          'pt-3 pb-3': scrollPosition > 0,
          'pt-6 pb-6': scrollPosition <= 0,
        })}>
          <div className='flex justify-between items-center gap-6'>
            <div className='logo'>
              <Link href={'/'}>
                <Image width={226} height={74} src='/img/bdm-logo-golden.svg' alt='Onde o dinheiro se transforma em Ouro!' />
              </Link>
            </div>
            
            {main && (<Navigation isScrolling={scrollPosition} className='hidden xl:flex flex-1' ListClassName='gap-6 2xl:gap-20 justify-center items-center' data={main} />)}

            <div className='ms-auto flex items-center justify-end gap-6'>

              {lateral && (<Navigation ListClassName='gap-6 justify-center items-center' data={lateral} />)}

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

              {/* <LanguageSwitcher float='on' className="hidden xl:flex" data={[
                {
                  title: 'Portugês',
                  code: 'br'
                }
                , {
                  title: 'Inglês',
                  code: 'us'
                }, {
                  title: 'Espanhol',
                  code: 'es'
                }
              ]} /> */}
            </div>
          </div>
        </div> 

        <Navigation
          className={classNames({ 
            'block': expanded,
            'hidden': !expanded
          })}
          mobile={true} ListClassName='gap-6' data={main}>
            {/* <LanguageSwitcher className="mt-6" data={[
              {
                title: 'Portugês',
                code: 'br'
              }, {
                title: 'Inglês',
                code: 'us'
              }, {
                title: 'Espanhol',
                code: 'es'
              }
                ]} /> */}
          </Navigation>
      </Container>
  );
}

export default Header;