// src/utils/getApiBaseURL.ts

export function getApiBaseURL() {

  const env = process.env.NEXT_PUBLIC_ENVIROMENT;
  const devUrl = process.env.NEXT_PUBLIC_API_URL_DEV;
  const hmlUrl = process.env.NEXT_PUBLIC_API_URL_HML;
  const basePath = process.env.NEXT_PUBLIC_API_BASE_URL;


  if (env === 'hml' || process.env.NODE_ENV === 'production') {
    return basePath; 
  }


  return `${devUrl}${basePath}`; 
}
