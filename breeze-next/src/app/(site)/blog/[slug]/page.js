import { getBlogs } from '@/lib/useBlogs'
import Image from 'next/image'

const BlogPage = async ({ params }) => {
    const { slug } = params
    const { blogs } = await getBlogs()
    const blog = blogs?.data.find(b => b.slug == slug)

    const formatedDate = new Date(blog?.created_at).toLocaleDateString(
        'en-US',
        {
            weekday: 'long',
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        },
    )

    return (
        <>
            <article className=" py-12">
                <header className="flex flex-col px-12 lg:px-56 items-center">
                    <h1 className="text-4xl text-black text-center">
                        {blog?.title}
                    </h1>
                    <p className="text-xl mt-3">{blog?.subtitle}</p>
                    <time className="text-black text-center mt-4">
                        {formatedDate}
                    </time>
                </header>
                <main>
                    <figure className="relative w-[80vw] lg:w-[60vw] h-72 mt-12 mx-auto">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${blog?.image}`}
                            alt={`${blog?.title} image`}
                            fill
                            className="object-cover"
                        />
                    </figure>
                    <div
                        dangerouslySetInnerHTML={{ __html: blog?.content }}
                        className="content max-w-full px-8 md:px-20 lg:px-64 mt-12"
                    />
                </main>
            </article>
        </>
    )
}
export default BlogPage
