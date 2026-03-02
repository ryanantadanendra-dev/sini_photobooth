'use client'

import { useType } from '@/hooks/type'
import Image from 'next/image'
import Link from 'next/link'

const TypesLayout = () => {
    const { types } = useType()

    return (
        <div>
            {types?.data?.map((type, index) => (
                <section className="w-full flex md:flex-row flex-col gap-12 md:gap-20 md:px-32 mt-20">
                    <figure className="relative w-56 h-56 md:w-96 md:h-96 mx-auto md:mx-0">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image}`}
                            fill
                            className="object-cover"
                        />
                    </figure>
                    <div className="">
                        <h2 className="text-4xl font-bold text-black text-center md:text-start">
                            {type?.name}
                        </h2>
                        <p className="text-center md:text-start">
                            {type?.description}
                        </p>
                        <Link
                            href={`/service/${type?.slug}`}
                            className="w-32 h-16 rounded-2xl mt-5 mx-auto md:mx-0 text-white flex justify-center items-center"
                            style={{ background: 'var(--color-secondary)' }}>
                            Learn More!
                        </Link>
                    </div>
                </section>
            ))}
        </div>
    )
}
export default TypesLayout
