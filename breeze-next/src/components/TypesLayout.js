'use client'

import { useType } from '@/hooks/type'
import Image from 'next/image'
import Link from 'next/link'
import StyledLink from './StyledLink'

const TypesLayout = () => {
    const { types } = useType()

    return (
        <div>
            {types?.data?.map((type, index) => (
                <section className="w-full flex md:flex-row flex-col lg:gap-12 md:gap-12 md:px-12 lg:px-32 mt-20">
                    <figure className="relative w-56 h-56 md:w-96 md:h-96 mx-auto md:mx-0">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image}`}
                            alt={`${type?.name} image`}
                            fill
                            className="object-cover"
                        />
                    </figure>
                    <div className="md:w-1/2 px-12 md:px-0">
                        <h2 className="text-4xl font-bold text-black text-center md:text-start mt-5 md:mt-0">
                            {type?.name}
                        </h2>
                        <p className="md:text-lg text-[0.8rem] text-center md:text-start line-clamp-3">
                            {type?.description}
                        </p>
                        <div className="w-full flex md:justify-start justify-center">
                            <StyledLink
                                text="Learn More"
                                link={`/service/${type?.slug}`}
                            />
                        </div>
                    </div>
                </section>
            ))}
        </div>
    )
}
export default TypesLayout
