import Hero from '@/components/Hero'
import getPortfolios from '@/lib/getPortfolios'
import Image from 'next/image'

export const metadata = {
    title: 'Portofolio Jasa Kami - Oour Service Portfolios | Sini Photobooth',
    description:
        'Lihat hasil jepretan terbaik kami dari berbagai acara sebelumnya. Discover our best shots from previous events.',
    openGraph: {
        title: 'Portofolio Jasa Kami - Oour Service Portfolios | Sini Photobooth',
        description:
            'Lihat hasil jepretan terbaik kami dari berbagai acara sebelumnya. Discover our best shots from previous events.',
        siteName: 'siniphotobooth.com',
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Portofolio Jasa Kami - Oour Service Portfolios | Sini Photobooth',
        description:
            'Lihat hasil jepretan terbaik kami dari berbagai acara sebelumnya. Discover our best shots from previous events.',
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

const PortfoliosPage = async () => {
    const { portfolios } = await getPortfolios()

    const SPAN_PATTERN = [
        'col-span-1 row-span-2',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
        'col-span-3 row-span-1',
        'col-span-1 row-span-1',
        'col-span-2 row-span-2',
    ]

    const getSpanClass = index => SPAN_PATTERN[index % SPAN_PATTERN.length]

    const getResponsiveSpan = index => {
        const desktop = getSpanClass(index)
        return `col-span-1 sm:col-span-1 md:${desktop.replace(' ', ' md:')} lg:${desktop.replace(' ', ' lg:')}`
    }

    return (
        <>
            <header>
                <Hero
                    title="Take A Look At Our Previous Works"
                    subtitle="See how we turn ordinary events into extraordinary memories through creativity, quality, and unforgettable photo booth experiences. "
                />
            </header>
            <main>
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-2 px-12 mt-10 py-12">
                    {portfolios?.data.length > 0 ? (
                        portfolios?.data.map((image, index) => {
                            const spanClass = getSpanClass(index)
                            // On mobile collapse everything to 1 col, 1 row
                            const responsiveClass = `md:${spanClass.split(' ')[0]} md:${spanClass.split(' ')[1]}`

                            return (
                                <figure
                                    key={image.id}
                                    className={`relative overflow-hidden group m-0 ${responsiveClass}`}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image.image}`}
                                        alt={`portfolios image ${index}`}
                                        fill
                                        loading={index < 3 ? 'eager' : 'lazy'}
                                        priority={index < 3 ? true : false}
                                        className="object-cover transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:brightness-90"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />

                                    {/* Index number */}
                                    <span className="absolute top-3 left-3 text-[10px] font-bold text-white/70 mix-blend-difference">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                </figure>
                            )
                        })
                    ) : (
                        <div className="w-screen mt-12">
                            <p className="text-center">No Portfolios Yet!</p>
                        </div>
                    )}
                </div>
            </main>
        </>
    )
}
export default PortfoliosPage
