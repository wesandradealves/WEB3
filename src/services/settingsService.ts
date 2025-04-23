// Get Settings

import api from "./api";

export const getSettings = async () => {
    const response = await api.get('/custom/v1/settings'); // Use the API instance to make the request
    return response.data;
  };
  