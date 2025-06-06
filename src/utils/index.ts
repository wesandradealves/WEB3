import { NavigationService } from "@/services/navigationService";

export const getLocaleFromLanguage = (lang: string) => {
  switch (lang) {
    case 'pt':
      return 'pt-BR';
    case 'en':
      return 'en-US';
    default:
      return 'pt-BR';
  }
};

export const formatDate = (dateString: string, lang: string) => {
  const locale = getLocaleFromLanguage(lang);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString(locale, options);
};

export const fetchNavigation = async (slug: string) => {
  try {
    const menuTree = await NavigationService(slug);
    return menuTree
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
};