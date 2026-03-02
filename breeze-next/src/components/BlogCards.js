'use client'

import { useBlog } from '@/hooks/blog'
import Image from 'next/image'
import Link from 'next/link'

const BlogCards = () => {
    const { blogs } = useBlog()
    const sorted = blogs?.data.sort((a, b) => b.created_at - a.created_at)

    const displayData = sorted?.slice(0, 4).map((blog, index) => (
        <div className="card-container w-56 h-80 bg-white">
            <figure className="relative w-full h-32">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${blog?.image}`}
                    fill
                    className="object-cover"
                />
            </figure>
            <div className="flex flex-col justify-around h-44 px-2">
                <h3 className="text-xl md:text-2xl text-black md:line-clamp-3 line-clamp-1">
                    {blog?.title}
                </h3>
                <p className="md:text-lg text-[0.8rem]">{blog?.subtitle}</p>
                <Link href="">Learn More!</Link>
            </div>
        </div>
    ))

    return displayData
}
export default BlogCards
