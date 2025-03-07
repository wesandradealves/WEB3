"use client";
import Script from "next/script";
import { useMetadata } from "@/hooks/useMetadata";
import {
  _colors,
  _breakpoints,
} from "@/assets/scss/variables";
const theme = {
  _colors,
  _breakpoints,
};
import { GlobalStyle } from "@/app/style";
import "@/assets/scss/globals.scss";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import StyledJsxRegistry from "./registry";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useMetadata({
    title: "Dourado Cash",
    description: "Onde o dinheiro se transforma em Ouro!",
    // favicon: "./favicon.png",
    ogTitle: "Dourado Cash",
    // ogImage: "//mercado.dourado.cash/icons/Icon-192.png",
  });

  return (
    <html lang="pt-br">    
      <body suppressHydrationWarning={true}
        className={`antialiased`}
      >
        <Script
          src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"
          strategy="afterInteractive"
        />
        <ThemeProvider theme={theme}>
            <Suspense fallback={<div>Loading...</div>}>
              <StyledJsxRegistry>
                <AnimatePresence
                  mode="wait"
                  initial={true}
                  onExitComplete={() => window.scrollTo(0, 0)}
                >
                  <motion.div
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 0, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 100,
                    }}
                  >
                    {children}
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
