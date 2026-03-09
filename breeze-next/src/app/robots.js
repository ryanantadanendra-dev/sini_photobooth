import { userAgent } from 'next/server'
import sitemap from './sitemap'

export default function robots() {
    const baseUrl = 'https://siniphotobooth.com'

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/dashboard/', '/login'],
            },
            {
                userAgent: 'Googlebot',
                allow: '/',
                disallow: ['/dashboard/', '/login'],
            },
        ],
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
