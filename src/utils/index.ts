import { NavigationService } from "@/services/userService";

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  return new Date(dateString).toLocaleDateString('pt-BR', options);
};

export const fetchNavigation = async (slug: string) => {
  try {
    const menuTree = await NavigationService(slug);
    return menuTree
  } catch (error) {
    console.error('Error fetching menu:', error);
  }
};