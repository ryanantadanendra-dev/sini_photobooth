import { Inter, Josefin_Sans } from 'next/font/google'
import '@/app/global.css'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})
const josefin = Josefin_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-josefin',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={`${inter.className} ${josefin.className}`}>
            <body className="antialiased">{children}</body>
            <script async src="//www.instagram.com/embed.js"></script>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
