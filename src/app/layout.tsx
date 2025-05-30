import Script from 'next/script';
import '@/assets/scss/globals.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames';
import LanguageRoot from './language';
import ClientProviders from '@/app/client';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body
        suppressHydrationWarning={true}
        className={classNames(`
          antialiased overflow-x-hidden
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
        <link rel="preconnect" href="http://localhost:8000" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="http://localhost:8000" />
        <Script
          src="https://cdn.jsdelivr.net/npm/pace-js@latest/pace.min.js"
          strategy="afterInteractive"
        />
        <LanguageRoot>
          <ClientProviders>
            {children}
          </ClientProviders>
        </LanguageRoot>
      </body>
    </html>
  );
}
