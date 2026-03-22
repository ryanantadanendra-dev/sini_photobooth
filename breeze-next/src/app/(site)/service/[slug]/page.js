import CTA from '@/components/CTA'
import getTypes from '@/lib/getType'
import Image from 'next/image'
import YouTubeFacade from '@/components/YoutubeFascade'
import { notFound } from 'next/navigation'

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
        'col-span-2 row-span-2',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
        'col-span-2 row-span-1',
    ]
    const getSpanClass = index => SPAN_PATTERN[index % SPAN_PATTERN.length]

    const SPAN_SIZES = [
        '(max-width: 768px) 100vw, 374px', // col-span-2 row-span-2 → ~374px wide on mobile grid
        '(max-width: 768px) 100vw, 269px', // col-span-1 → ~269px
        '(max-width: 768px) 100vw, 269px',
        '(max-width: 768px) 100vw, 269px',
        '(max-width: 768px) 100vw, 374px', // col-span-2
    ]
    const getSizes = index => SPAN_SIZES[index % SPAN_SIZES.length]

    return (
        <>
            <header>
                <section className="hero w-screen h-[25rem]">
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
                            sizes="100vw"
                            className="invisible"
                        />
                        <div className="absolute inset-0 bg-black/30 z-10" />
                        <div className="relative z-20 text-center">
                            <h1 className="text-5xl text-white">
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
                    <h2 className="text-center text-black text-3xl">
                        Our Setup
                    </h2>
                    <p className="text-center text-[0.8rem] px-3 md:px-32 lg:px-96">
                        Take a closer look at the premium equipment, lighting,
                        and backdrops that bring your photobooth moments to
                        life.
                    </p>
                    <div className="grid grid-cols-3 gap-3 min-h-[85vh] px-4 md:px-12 py-12">
                        {type?.setupImages.map((image, index) => (
                            <figure
                                key={image.id}
                                className={`relative overflow-hidden rounded-2xl min-h-72 group m-0 ${getSpanClass(index)}`}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
                                    alt={`${type?.name} setup ${index + 1}`}
                                    fill
                                    quality={75}
                                    loading="lazy"
                                    sizes={getSizes(index)}
                                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <span className="absolute top-4 left-4 text-[10px] tracking-widest text-white/40 uppercase">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </figure>
                        ))}
                    </div>
                </section>

                <section className="w-screen h-full flex flex-col items-center">
                    <h2 className="text-center text-3xl text-black">
                        How It Works?
                    </h2>
                    <p className="text-center text-[0.8rem] px-4 md:px-32 lg:px-96">
                        Watch how our photobooth works and see how easy it is
                        for guests to capture fun and memorable moments
                    </p>
                    <YouTubeFacade
                        vidLink={type?.vidLink}
                        title="How the photobooth works"
                    />
                </section>

                <CTA />
            </main>
        </>
    )
}

export default ServicePage
