"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export type Language = 'pt' | 'en';
interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLang?: Language }> = ({
  children,
  initialLang = 'pt',
}) => {
  const [language, setLang] = useState<Language>(() => {
    if (typeof window === 'undefined') return initialLang;
    return (Cookies.get('NEXT_LOCALE') as Language) || localStorage.getItem('locale') || initialLang;
  });

  useEffect(() => {
    Cookies.set('NEXT_LOCALE', language, { expires: 365, sameSite: 'lax' });
    localStorage.setItem('locale', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};
