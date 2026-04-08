import Hero from '@/components/Hero'
import getTypes from '@/lib/getType'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/CTA'
import Divider from '@/components/Divider'
import StyledLink from '@/components/StyledLink'

export const metadata = {
    title: 'Jenis Photobooth Kami - Photobooth Types | Sini Photobooth',
    description:
        'Temukan jenis photobooth yang sesuai untuk acaramu. Explore our photobooth types that suit your event',
    alternates: {
        canonical: '/service',
    },
    openGraph: {
        title: 'Jenis Photobooth Kami - Photobooth Types | Sini Photobooth',
        description:
            'Temukan jenis photobooth yang sesuai untuk acaramu. Explore our photobooth types that suit your event',
        siteName: 'siniphotobooth.com',
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Jenis Photobooth Kami - Photobooth Types | Sini Photobooth',
        description:
            'Temukan jenis photobooth yang sesuai untuk acaramu. Explore our photobooth types that suit your event',
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

const ServicesPage = async () => {
    const { types } = await getTypes()

    return (
        <>
            <Hero
                title="Find Your Photobooth!"
                subtitle="You can choose our photobooth service type listed below this page which match your desired needs"
            />
            <main>
                <section className="py-12">
                    <h2 className="text-center text-2xl md:text-4xl text-black md:px-32 px-12">
                        Available Photobooth Types
                    </h2>
                    <p className="text-center text-[0.8rem] md:text-lg md:px-32 px-12">
                        Explore Our Photo Booth Collections
                    </p>
                    <div className="flex justify-center flex-wrap gap-12 mt-10">
                        {types?.data.map((type, index) => (
                            <Link
                                key={type?.id}
                                href={`/service/${type?.slug}`}
                                aria-label="Type Page Link">
                                <figure className="w-72 h-56">
                                    <div className="relative w-full h-48 overflow-hidden rounded-2xl">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image}`}
                                            alt={`${type?.name} image`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            {...(index < 2
                                                ? {
                                                      priority: true,
                                                      fetchPriority: 'high',
                                                  }
                                                : { loading: 'lazy' })}
                                            className="object-cover hover:scale-110 transition-all duration-100 ease-out"
                                        />
                                    </div>
                                    <figcaption className="text-center text-2xl mt-3">
                                        {type?.name}
                                    </figcaption>
                                </figure>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="py-12 flex  flex-col items-center">
                    <h2 className="text-black text-2xl md:text-4xl px-12 md:px-32 text-center md:text-start">
                        Looking For A Photographer?
                    </h2>
                    <p className="text-[0.8rem] md:text-lg text-center md:text-start px-12 md:px-32">
                        Get in thouch with one of our professional photographer
                        with lots of experience
                    </p>
                    <StyledLink text="Get In Touch" link="" />
                </section>
                <Divider
                    title="Instant Sharing & Digital Gallery"
                    description="Guests can instantly share their photos via QR
                                code, email, or social media. Every event also
                                comes with a complete digital gallery so no
                                moment is ever missed."
                    imgLink="/Assets/drive.jpg"
                />

                <CTA />
            </main>
        </>
    )
}
export default ServicesPage
