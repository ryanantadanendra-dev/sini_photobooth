'use client'

import Link from 'next/link'
import { useState } from 'react'

const StyledLink = ({ text, link }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <Link
            href={link}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="px-7 py-5 max-w-full text-center mt-5 inline-block rounded-2xl hover:scale-95 transition-all duration-200 ease-out"
            style={{
                backgroundColor: `${isHovered ? 'var(--color-ternary)' : 'var(--color-secondary)'}`,
                color: 'var(--color-primary)',
            }}>
            {text}
        </Link>
    )
}
export default StyledLink
