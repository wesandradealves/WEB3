import { cookies } from 'next/headers';
import { LanguageProvider, Language } from '@/context/language';

export default async function LanguageRoot({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();

  const supportedLangs: Language[] = ['pt', 'en'];
  const cookieLang = (await cookieStore).get('lang')?.value;
  const lang: Language = supportedLangs.includes(cookieLang as Language) ? (cookieLang as Language) : 'pt';

  return (
    <LanguageProvider initialLang={lang}>
      {children}
    </LanguageProvider>
  );
}
