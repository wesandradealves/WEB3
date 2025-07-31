import api from "./api";

export interface CustomCssResponse {
  theme: string;
  custom_css: string;
}

export const getCustomCss = async (): Promise<CustomCssResponse> => {
  try {
    const response = await api.get('/custom/v1/extra-css');
    return response.data;
  } catch (error: unknown) {
    console.error('Error fetching custom CSS:', error);
    return {
      theme: '',
      custom_css: ''
    };
  }
};