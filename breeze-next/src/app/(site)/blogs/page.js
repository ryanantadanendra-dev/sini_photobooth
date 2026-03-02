import Hero from '@/components/Hero'
import { getBlogs } from '@/lib/useBlogs'
import Image from 'next/image'
import Link from 'next/link'

const Card = ({ data }) => {
    return (
        <div className="w-56 h-52">
            <figure className="relative w-full h-32">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${data?.image}`}
                    alt={`${data?.title} image`}
                    fill
                    className="object-cover"
                />
            </figure>
            <div className="h-full flex flex-col justify-around">
                <h2 className="text-black mt-3 line-clamp-2">{data?.title}</h2>
                <p>{data?.subtitle}</p>
                <Link
                    href={`/blog/${data?.slug}`}
                    className="text-sky-500 hover:underline">
                    Read More {`>>>`}
                </Link>
            </div>
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
            <main className="px-12 py-12">
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
