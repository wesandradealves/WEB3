import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface NavigationItem {
  title: string;
  url: string;
  className?: string;
  type?: string;
  btnAnimation?: string;
  btnClass?: string;
  below?: NavigationItem[];
}

interface NavigationContextProps {
  menuData: NavigationItem[];
  setMenuData: React.Dispatch<React.SetStateAction<NavigationItem[]>>;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [menuData, setMenuData] = useState<NavigationItem[]>([
    { title: 'App BDM', url: 'app-bdm' },
    { title: 'Mercado BDM', url: 'mercado-bdm' },
    { title: 'Clientes', url: 'clientes' },
    { title: 'Para empresas', url: 'para-empresas' },
    { title: 'Sobre nós', url: 'sobre-nos' },
  ]);

  return (
    <NavigationContext.Provider value={{ menuData, setMenuData }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a provider');
  }
  return context;
};