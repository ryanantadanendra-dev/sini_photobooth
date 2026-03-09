import axios from '@/lib/axios'

export default async function sitemap() {
    const baseUrl = 'https://siniphotobooth.com'

    // Fetch products and blogs dynamically
    const [typesRes, blogsRes] = await Promise.all([
        axios.get('/api/dashboard/types'),
        axios.get('/api/dashboard/blogs'),
    ])

    const types = typesRes.data.data || [] // adjust if your API returns differently
    const blogs = blogsRes.data.data || []

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${baseUrl}/types`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/what-you-get`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolios`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/blogs`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ]

    // Dynamic product pages
    const typePages = types.map(t => ({
        url: `${baseUrl}/type/${t.slug}`,
        lastModified: new Date(t.updatedAt || t.createdAt),
        changeFrequency: 'weekly',
        priority: 0.9,
    }))

    // Dynamic blog pages
    const blogPages = blogs.map(b => ({
        url: `${baseUrl}/blog/${b.slug}`,
        lastModified: new Date(b.updatedAt || b.createdAt),
        changeFrequency: 'monthly',
        priority: 0.9,
    }))

    return [...staticPages, ...typePages, ...blogPages]
}
