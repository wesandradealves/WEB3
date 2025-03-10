"use client";
import Script from 'next/script';
import { useMetadata } from '@/hooks/useMetadata';
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
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { ThemeProvider } from 'styled-components';
import StyledJsxRegistry from './registry';
import { Suspense, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

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

  useMetadata({
    title: 'Dourado Cash',
    description: 'Onde o dinheiro se transforma em Ouro!',
    // favicon: './favicon.png',
    ogTitle: 'Dourado Cash',
    // ogImage: '//mercado.dourado.cash/icons/Icon-192.png',
  });

  return (
    <html lang='pt-br' ref={scrollRef}>    
      <body suppressHydrationWarning={true}
        className={classNames('antialiased bg-black overflow-x-hidden')}
      >
        <Script
          src='https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js'
          strategy='afterInteractive'
        />
        <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading...</div>}>
              <StyledJsxRegistry>
                <AnimatePresence
                  mode='wait'
                  initial={true}
                  onExitComplete={() => window.scrollTo(0, 0)}
                >
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
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
                  </motion.div>                  
                </AnimatePresence>
              </StyledJsxRegistry>
            </Suspense>
            <GlobalStyle />
        </ThemeProvider>
      </body>
    </html>
  );
}