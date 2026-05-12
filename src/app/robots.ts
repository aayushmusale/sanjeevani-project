import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Allows all search engines (Google, Bing, etc.)
      allow: '/',
      disallow: '/api/', // Prevents Google from scanning your backend API routes
    },
    sitemap: 'https://sanjivanieducation.com/sitemap.xml',
  }
}