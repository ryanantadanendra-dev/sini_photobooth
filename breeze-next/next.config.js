/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/storage/**',
            },
            {
                protocol: 'https',
                hostname: 'i.ytimg.com',
            },
            // Production:
            // { protocol: 'https', hostname: 'your-backend.com', pathname: '/storage/**' },
        ],
    },
}

module.exports = nextConfig
