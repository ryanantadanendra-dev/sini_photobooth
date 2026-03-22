'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const Popup = ({ popup }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (isVisible) {
            document.documentElement.style.overflowY = 'hidden'
        } else {
            document.documentElement.style.overflowY = ''
        }
    }, [isVisible])

    return (
        <>
            <figure
                className={`${isVisible ? 'md:w-96 md:h-96 w-56 h-56 visible' : 'w-0 h-0 invisible'} transition-all duration-200 ease-out  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100]`}>
                <button
                    aria-label="Close Popup"
                    onClick={() => setIsVisible(false)}
                    className={`${isVisible ? 'visible opacity-100' : 'invisible opacity-0'} transition-all duration-200 ease-out fixed z-[100] -right-12 -top-14`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-8 md:w-12">
                        <path
                            fill="#FFFFFF"
                            d="M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM167 167c9.4-9.4 24.6-9.4 33.9 0l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9z"
                        />
                    </svg>
                </button>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${popup?.data.image}`}
                    alt="Popup Image"
                    fill
                    className="object-cover rounded-xl"
                />
            </figure>
            <div
                className={`overlay ${isVisible ? 'w-screen h-screen visited: opacity-100' : 'w-0 h-0 invisible opacity-0'} transition-all duration-0 ease-out  fixed top-0 z-50 bg-[#00000050]`}
            />
        </>
    )
}
export default Popup
