'use client'

import { useBlog } from '@/hooks/blog'
import Image from 'next/image'
import Link from 'next/link'

const BlogCards = () => {
    const { blogs } = useBlog()
    const sorted = blogs?.data.sort((a, b) => b.created_at - a.created_at)

    const displayData = sorted?.slice(0, 4).map((blog, index) => (
        <div class="card">
            <div class="card-details">
                <figure className="relative w-full h-40">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${blog?.image}`}
                        alt={`${blog?.title} image`}
                        fill
                        className="object-cover"
                        style={{ borderRadius: '20px' }}
                    />
                </figure>
                <p class="text-title line-clamp-2 px-2 mt-2">{blog?.title}</p>
                <p class="text-body line-clamp-1 px-2">{blog?.subtitle}</p>
            </div>
            <Link href={`/blog/${blog?.slug}`} class="card-button">
                More info
            </Link>
        </div>
    ))

    return displayData
}
export default BlogCards
