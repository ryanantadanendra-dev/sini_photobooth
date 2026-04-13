import Hero from '@/components/Hero'
import { getBlogs } from '@/lib/useBlogs'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
    title: 'Dapatkan Info Terkini Dari Dunia Photobooth - Get The Latest Articles About Photobooth | Sini Photobooth',
    description:
        'Dapatkan informasi terupdate dari dunia photobooth melalui halaman blog kami. Get the latest information about photobooth through our blog page',
    openGraph: {
        title: 'Dapatkan Info Terkini Dari Dunia Photobooth - Get The Latest Articles About Photobooth | Sini Photobooth',
        description:
            'Dapatkan informasi terupdate dari dunia photobooth melalui halaman blog kami. Get the latest information about photobooth through our blog page',
        siteName: 'siniphotobooth.com',
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dapatkan Info Terkini Dari Dunia Photobooth - Get The Latest Articles About Photobooth | Sini Photobooth',
        description:
            'Dapatkan informasi terupdate dari dunia photobooth melalui halaman blog kami. Get the latest information about photobooth through our blog page',
        creator: '@siniphotoboothgroup',
        images: [
            {
                url: '../../../public/Assets/Logo.png',
                width: 1200,
                height: 630,
                alt: 'Sini Photobooth Logo',
            },
        ],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-snippet': -1,
            'max-image-preview': 'large',
            'max-video-preview': -1,
        },
    },
}

const Card = ({ data, index }) => {
    return (
        <div class="card" key={index}>
            <div class="card-details">
                <figure className="relative w-full md:h-40 h-28">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${data?.image}`}
                        alt={`${data?.title} image`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                        className="object-cover"
                        style={{ borderRadius: '18px' }}
                    />
                </figure>
                <p class="text-title  text-lg md:text-[1.5em] line-clamp-2 px-2 mt-2">
                    {data?.title}
                </p>
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
            <main className="min-h-screen md:min-h-[20rem]  md:px-12 py-12">
                <div className="flex justify-center gap-8 md:gap-32 lg:gap-12 flex-wrap">
                    {blogs?.data.length > 0 ? (
                        blogs?.data.map(blog => (
                            <Card data={blog} index={blog?.id} />
                        ))
                    ) : (
                        <p className="text-center">No Blog Yet!</p>
                    )}
                </div>
            </main>
        </>
    )
}

export default BlogsPage
