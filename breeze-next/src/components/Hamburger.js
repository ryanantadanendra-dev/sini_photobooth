'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useType } from '@/hooks/type'

const Hamburger = ({ isOpen, setIsOpen, goToSection, slugify }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isExtended, setIsExtended] = useState(false)
    const { types } = useType()
    const pathname = usePathname() // ← call hook at top level

    useEffect(() => {
        if (!isOpen) {
            setIsExtended(false)
        }
    }, [isOpen])

    return (
        <div
            className={`menu-wrapper w-screen absolute ${isOpen ? 'top-20' : '-top-96'} left-0`}
            style={{
                background: 'var(--color-secondary)',
                height: isExtended
                    ? `${(types?.data.length + 6) * 44.8}px`
                    : '268.8px',
            }}>
            <div className="link-wrapper">
                <div className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                    <Link
                        href="/"
                        onClick={() => setIsOpen(false)}
                        className={`w-full ms-3 ${pathname === '/' ? 'font-bold' : ''}`}>
                        Home
                    </Link>
                </div>
                <div
                    className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center gap-1"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className="ms-3">
                        Photobooth Types
                    </Link>
                    <svg
                        onClick={() => setIsExtended(!isExtended)}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        className="w-3">
                        <path
                            fill={isHovered ? '#000000' : '#FFFFFF'}
                            d="M140.3 376.8c12.6 10.2 31.1 9.5 42.8-2.2l128-128c9.2-9.2 11.9-22.9 6.9-34.9S301.4 192 288.5 192l-256 0c-12.9 0-24.6 7.8-29.6 19.8S.7 237.5 9.9 246.6l128 128 2.4 2.2z"
                        />
                    </svg>
                </div>
                {isExtended && (
                    <div className="extended-menu">
                        {types?.data.map(type => (
                            <div
                                key={type?.slug}
                                className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                                <button
                                    onClick={() => {
                                        goToSection('service', type?.slug)
                                        setIsExtended(false)
                                        setIsOpen(false)
                                    }}
                                    className="ms-3">
                                    {type?.name}
                                </button>
                            </div>
                        ))}
                    </div>
                )}
                <div className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                    <Link
                        href="/what-you-get"
                        onClick={() => setIsOpen(false)}
                        className={`ms-3 w-full ${pathname === '/what-you-get' ? 'font-bold' : ''}`}>
                        What You Get?
                    </Link>
                </div>
                <div className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                    <Link
                        href="/blogs"
                        onClick={() => setIsOpen(false)}
                        className={`ms-3 w-full ${pathname === '/blogs' ? 'font-bold' : ''}`}>
                        Blogs
                    </Link>
                </div>
                <div className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                    <Link
                        href="/portfolios"
                        onClick={() => setIsOpen(false)}
                        className={`ms-3 w-full ${pathname === '/portfolios' ? 'font-bold' : ''}`}>
                        Events Portfolio
                    </Link>
                </div>
                <div className="link-wrapper h-[44.8px] text-white hover:bg-white hover:text-black flex items-center">
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="ms-3 w-full">
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hamburger
