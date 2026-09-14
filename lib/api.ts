export function getApiUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : 'http://localhost:3000';
  
  const url = `${baseUrl}${path}`;
  console.log('[getApiUrl]', { NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL, baseUrl, path, url });
  return url;
}
