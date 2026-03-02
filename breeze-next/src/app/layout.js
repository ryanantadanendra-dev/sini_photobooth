import { League_Spartan, Inter } from 'next/font/google'
import '@/app/global.css'

const leagueSpartan = League_Spartan({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-league-spartan',
})

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={leagueSpartan.className}>
            <body className="antialiased">{children}</body>
        </html>
    )
}

export const metadata = {
    title: 'Laravel',
}

export default RootLayout
