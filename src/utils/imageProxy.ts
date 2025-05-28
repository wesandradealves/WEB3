// src/utils/imageProxy.ts
export function proxiedImageUrl(url: string): string {
  if (url.startsWith('http://18.231.174.187/wp-content/')) {
    // Remove o domínio e deixa só o path
    const path = url.replace('http://18.231.174.187', '');
    return `/api/proxy-image?imageUrl=${encodeURIComponent(path)}`;
  }
  return url;
}
