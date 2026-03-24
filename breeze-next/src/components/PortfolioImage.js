'use client'

import Image from 'next/image'
import Modal from './Modal'
import { useState } from 'react'

const PortfolioImage = ({ image, index, spanClass, responsiveClass }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <figure
                key={image.id}
                onClick={() => setIsOpen(!isOpen)}
                className={`relative cursor-pointer overflow-hidden group m-0 ${responsiveClass}`}>
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image.image}`}
                    alt={`portfolios image ${index}`}
                    fill
                    loading={index < 3 ? 'eager' : 'lazy'}
                    priority={index < 3 ? true : false}
                    className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* Index number */}
                <span className="absolute top-3 left-3 text-[10px] font-bold text-white/70 mix-blend-difference">
                    {String(index + 1).padStart(2, '0')}
                </span>
            </figure>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <figure
                    key={image.id}
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative overflow-hidden group m-0 w-full h-full`}>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image.image}`}
                        alt={`portfolios image ${index}`}
                        fill
                        loading={index < 3 ? 'eager' : 'lazy'}
                        priority={index < 3 ? true : false}
                        className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-90"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </figure>
            </Modal>
        </>
    )
}
export default PortfolioImage
