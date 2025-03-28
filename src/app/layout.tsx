'use client';
import Script from 'next/script';
import {
  _colors,
  _breakpoints,
} from '@/assets/scss/variables';
const theme = {
  _colors,
  _breakpoints,
};
import { App, GlobalStyle } from '@/app/style';
import '@/assets/scss/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { ThemeProvider } from 'styled-components';
import StyledJsxRegistry from './registry';
import { Suspense, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { NavigationProvider } from '../context/navigation';
import { MediaProvider } from '@/context/media';
import { Login } from '@/services/userService';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollRef = useRef<HTMLHtmlElement | null>(null);
  const { scrollY } = useScroll({
    container: scrollRef,
  });

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((n) => {
      setScrollPosition(n);
    });

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const handleLogin = async () => {
    try {
      const data = await Login(process.env.NEXT_PUBLIC_API_USERNAME || '', process.env.NEXT_PUBLIC_API_PWD || '');
      console.log('Login Successful:', data);
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error) {
        const errorResponse = (error as { response?: { data?: unknown } }).response?.data;
        console.error('Login Error:', errorResponse || error.message);
      } else {
        console.error('Login Error:', error);
      }
    }
  };
  
  useEffect(() => {
    handleLogin();
  }, []);


  return (
    <html lang='pt-br' ref={scrollRef}>    
      <body suppressHydrationWarning={true}
        className={classNames(
          `antialiased 
          overflow-x-hidden
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-track]:ms-7
          [&::-webkit-scrollbar-track]:me-7
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-yellow-500
          [&::-webkit-scrollbar-thumb]:rounded-full
          [&::-webkit-scrollbar-thumb]:cursor-move
          `)}
      >
        <Script
          src='https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js'
          strategy='afterInteractive'
        />
        <ThemeProvider theme={theme}>
            <NavigationProvider>
              <MediaProvider>
                <Suspense fallback={<div>Loading...</div>}>
                  <StyledJsxRegistry>
                    <AnimatePresence
                      mode='wait'
                      initial={true}
                      onExitComplete={() => window.scrollTo(0, 0)}
                    >
                      <App id='primary'>
                        <motion.div
                          className='min-h-screen flex flex-start flex-col'
                          initial={{ x: 0, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: 0, opacity: 0 }}
                        >
                          <Header scrollPosition={scrollPosition} />
                          {children}
                          <Footer/>
                        </motion.div>
                      </App>
                    </AnimatePresence>
                  </StyledJsxRegistry>
                </Suspense>
              </MediaProvider>
            </NavigationProvider>
            <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  );
}