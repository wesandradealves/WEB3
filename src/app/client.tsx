'use client';

import { ThemeProvider } from 'styled-components';
import { LoaderProvider, useLoader } from '@/context/spinner';
import { AuthProvider } from '@/context/auth';
import { SettingsProvider } from '@/context/settings';
import Spinner from '@/components/spinner/spinner';
import StyledJsxRegistry from './registry';
import { App, GlobalStyle } from '@/app/style';
import { AnimatePresence, motion, useScroll } from 'motion/react';
import { Suspense, useRef, useState, useEffect } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { setupInterceptors } from '@/services/api';
import { getCustomCss } from '@/services/customCssService';

import {
  _colors,
  _breakpoints,
} from '@/assets/scss/variables';
import { MediaProvider } from '@/context/media';

const theme = {
  _colors,
  _breakpoints,
};

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
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

  return (
    <ThemeProvider theme={theme}>
      <LoaderProvider>
        <LoaderSetup />
        <AuthProvider>
          <MediaProvider> 
            <SettingsProvider>
              <CustomCssSetup />
              <Suspense fallback={<div>Loading...</div>}>
                <StyledJsxRegistry>
                  <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => window.scrollTo(0, 0)}
                  >
                    <App id="primary">
                      <motion.div
                        className="min-h-screen flex flex-start flex-col"
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 0, opacity: 0 }}
                        ref={scrollRef}
                      >
                        <Header scrollPosition={scrollPosition} />
                        {children}
                        <Footer />
                      </motion.div>
                      <Spinner />
                    </App>
                  </AnimatePresence>
                </StyledJsxRegistry>
              </Suspense>
            </SettingsProvider>
          </MediaProvider>
        </AuthProvider>
      </LoaderProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

function LoaderSetup() {
  const { setLoading } = useLoader();

  useEffect(() => {
    setupInterceptors(setLoading);
  }, [setLoading]);

  return null;
}

function CustomCssSetup() {
  const [customCss, setCustomCss] = useState<string>('');

  useEffect(() => {
    const fetchCustomCss = async () => {
      try {
        const { custom_css } = await getCustomCss();
        if (custom_css) {
          setCustomCss(custom_css);
        }
      } catch (error) {
        console.error('Error loading custom CSS:', error);
      }
    };

    fetchCustomCss();
  }, []);

  if (!customCss) return null;

  return (
    <style 
      dangerouslySetInnerHTML={{ __html: customCss }}
      data-custom-css="wordpress"
    />
  );
}
