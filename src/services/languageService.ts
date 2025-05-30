import api from "./api";

export const getAvailableLanguages = async (): Promise<string[]> => {
  try {
    const response = await api.get("/custom/v1/languages");
    if (Array.isArray(response.data)) {
      return response.data;
    }
    throw new Error("Unexpected response format");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Get Available Languages Error: ${error.message}`);
    }
    throw new Error("Get Available Languages Error: Unknown error");
  }
};