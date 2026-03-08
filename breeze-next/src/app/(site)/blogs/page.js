import Hero from '@/components/Hero'
import { getBlogs } from '@/lib/useBlogs'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ data }) => {
    return (
        <div class="card">
            <div class="card-details">
                <figure className="relative w-full h-40">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${data?.image}`}
                        fill
                        className="object-cover"
                        style={{ borderRadius: '20px' }}
                    />
                </figure>
                <p class="text-title line-clamp-2 px-2 mt-2">{data?.title}</p>
                <p class="text-body line-clamp-1 px-2">{data?.subtitle}</p>
            </div>
            <Link href={`/blog/${data?.slug}`} class="card-button">
                More info
            </Link>
        </div>
    )
}

const BlogsPage = async () => {
    const { blogs } = await getBlogs()

    return (
        <>
            <header>
                <Hero
                    title="Take A Look At Our Latest Articles"
                    subtitle="Stay inspired with insights, tips, and creative ideas to make every event unforgettable."
                />
            </header>
            <main className="min-h-screen md:min-h-full px-12 py-12">
                <div className="flex justify-center gap-36 md:gap-32 lg:gap-12 flex-wrap">
                    {blogs?.data.map((blog, index) => (
                        <Card data={blog} />
                    ))}
                </div>
            </main>
        </>
    )
}

export default BlogsPage
