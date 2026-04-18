import CTA from '@/components/CTA'
import getTypes from '@/lib/getType'
import Image from 'next/image'
import YouTubeFacade from '@/components/YoutubeFascade'
import { notFound } from 'next/navigation'
import IgVideo from '@/components/IgVIdeo'

export async function generateMetadata({ params }) {
    const typesPromise = getTypes()
    const { types } = await typesPromise
    const type = types?.data.find(t => t.slug === params.slug)
    const imageUrl = type?.image
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image}`
        : `https://siniphotobooth.com/public/Assets/Logo.png`

    if (!type) {
        notFound()
    }

    return {
        title: type?.name + ' | Sini Photobooth Type',
        description: type?.description || `Read More About ${type?.name}`,
        openGraph: {
            title: type?.name,
            description: type?.description,
            siteName: 'Sini Photobooth',
            type: 'article',
            publishedTime: type?.created_at,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: `${type?.name} image`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: type?.name,
            description: type?.description,
            images: [imageUrl],
        },
    }
}

const ServicePage = async ({ params }) => {
    const { slug } = params
    const typesPromise = getTypes()
    const { types } = await typesPromise
    const type = types?.data.find(t => t.slug === slug)

    const SPAN_PATTERN = [
        'md:col-span-2 md:row-span-2 ',
        'md:col-span-1 md:row-span-1 ',
        'md:col-span-1 md:row-span-1 ',
        'md:col-span-1 md:row-span-1',
        'col-span-2 md:row-span-1',
    ]
    const getSpanClass = index => SPAN_PATTERN[index % SPAN_PATTERN.length]

    return (
        <>
            <header>
                <section className="hero w-screen h-[30rem]">
                    <div className="w-full h-full relative flex justify-center items-center">
                        <div
                            className="absolute inset-0 bg-fixed bg-center bg-cover"
                            style={{
                                backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image})`,
                            }}
                        />

                        <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image}`}
                            alt={type?.name ?? 'Service hero'}
                            fill
                            priority
                            fetchPriority="high"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="invisible"
                        />
                        <div className="absolute inset-0 bg-black/50 z-10" />
                        <div className="relative z-20 text-center">
                            <h1 className="text-6xl text-white">
                                {type?.name}
                            </h1>
                            <p className="text-2xl text-center text-white">
                                {type?.subname}
                            </p>
                        </div>
                    </div>
                </section>
            </header>
            <main>
                <section className="w-screen min-h-56 flex justify-center pt-12">
                    <article className="text-[0.8rem] md:text-xl text-center px-2 md:text-start md:px-12 whitespace-pre-line">
                        {type?.description}
                    </article>
                </section>

                <section className="w-screen min-h-full pt-20">
                    <h2 className="text-center text-black px-12 md:px-32 text-2xl md:text-4xl">
                        Our Setup
                    </h2>
                    <p className="text-center text-[0.8rem] md:text-lg  px-12 md:px-32 lg:px-64">
                        Take a closer look at the premium equipment, lighting,
                        and backdrops that bring your photobooth moments to
                        life.
                    </p>
                    <figure
                        className={`relative mx-auto mt-12 overflow-hidden rounded-2xl w-96 min-h-96 md:min-h-[80vh] md:w-[29rem] group m-0 `}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.setupImage}`}
                            alt={`${type?.name} setup `}
                            fill
                            quality={90}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                    </figure>
                </section>

                <section className="w-screen h-full flex flex-col items-center py-12">
                    <h2 className="text-center px-12 md:px-32 md:text-3xl text-black">
                        How It Works?
                    </h2>
                    <p className="text-center text-[0.8rem] md:text-lg px-12 md:px-32 lg:px-64">
                        Watch how our photobooth works and see how easy it is
                        for guests to capture fun and memorable moments
                    </p>
                    <IgVideo
                        url={type?.vidLink}
                        postUrl="https://instagram.com"
                    />
                </section>

                <CTA />
            </main>
        </>
    )
}

export default ServicePage
