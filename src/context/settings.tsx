import { createContext, useContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';
import { getSettings } from '../services/settingsService';
import { Data } from '@/components/socialNetworks/typo';

export interface BlogInfo {
  name: string;
  description: string;
  url: string;
  admin_email: string;
}

export interface Settings {
  social_networks: Data[];
  custom_logo: string;
  favicon: string;
  blog_info: BlogInfo;
}

// Update the context to include proper typing
const SettingsContext = createContext<{
  settings: Settings | null;
  loading: boolean;
}>({ settings: null, loading: true });

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const data = await getSettings();
        setSettings(data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  return useContext(SettingsContext);
};