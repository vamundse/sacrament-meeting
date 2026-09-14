export function getApiUrl(path: string): string {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  
  const url = `${baseUrl}${path}`;
  console.log('[getApiUrl]', { VERCEL_URL: process.env.VERCEL_URL, baseUrl, path, url });
  return url;
}
