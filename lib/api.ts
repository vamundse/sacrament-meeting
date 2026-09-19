export function getApiUrl(path: string): string {
  let baseUrl: string;
  
  if (process.env.VERCEL_URL) {
    // On Vercel (server-side environment variable)
    baseUrl = `https://${process.env.VERCEL_URL}`;
  } else {
    // Local development
    baseUrl = 'http://localhost:3000';
  }
  
  return `${baseUrl}${path}`;
}