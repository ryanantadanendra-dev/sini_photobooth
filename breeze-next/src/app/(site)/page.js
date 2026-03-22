import Link from 'next/link'
import Image from 'next/image'
import Image1 from '../../../public/Assets/hero3.png'
import Image2 from '../../../public/Assets/hero4.png'
import Image3 from '../../../public/Assets/Image1.jpg'
import TypesLayout from '@/components/TypesLayout'
import BlogCards from '@/components/BlogCards'
import Popup from '@/components/Popup'
import getPopup from '@/lib/getPopup'
import StyledLink from '@/components/StyledLink'

export const metadata = {
    title: 'Sewa Photobooth Bali — Premium Photo Booth Rental | Sini Photobooth',
    description:
        'Sewa photobooth terbaik di Bali untuk pernikahan, ulang tahun & corporate event. Premium photo booth with instant print, digital gallery & QR sharing.',
    keywords: [
        'sewa photobooth',
        'rental photobooth',
        'photobooth pernikahan',
        'photobooth ulang tahun',
        'photobooth wisuda',
        'photobooth acara',
        'sewa photobooth murah',
        'jasa photobooth',
        'photobooth digital',
        'booth foto',

        'photo booth rental',
        'photobooth wedding',
        '360 photo booth',
        'sewa 360 photo booth',
        'mirror photobooth',

        'sewa photobooth Bali',
        'sewa photobooth Denpasar',
        'photobooth Bali',
        'photo booth Bali',
        'photobooth cetak langsung',
        'photobooth instant print',
        'photobooth QR code',
        'photobooth props',
    ],
    openGraph: {
        title: 'Sewa Photobooth Bali — Premium Photo Booth Rental | Sini Photobooth',
        description:
            'Sewa photobooth terbaik di Bali untuk pernikahan, ulang tahun & corporate event. Premium photo booth with instant print, digital gallery & QR sharing.',
        siteName: 'siniphotobooth.com',
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Sewa Photobooth Bali — Premium Photo Booth Rental | Sini Photobooth',
        description:
            'Sewa photobooth terbaik di Bali untuk pernikahan, ulang tahun & corporate event. Premium photo booth with instant print, digital gallery & QR sharing.',
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

const testimonials = [
    {
        name: 'John Doe',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'John Doe',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        name: 'John Doe',
        comment:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
]

const whyCards = [
    {
        title: 'High-Quality Prints',
        desc: 'Crisp, vibrant, and professional-grade prints your guests will love.',
        icon: (
            <path
                fill="white"
                d="M64 64C64 28.7 92.7 0 128 0H341.5c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3V144H0V80zM0 256c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v96c0 17.7-14.3 32-32 32h-32v64c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64v-64H32c-17.7 0-32-14.3-32-32v-96zM128 416v32h256v-96H128v64zm328-144a24 24 0 1 0-48 0 24 24 0 1 0 48 0z"
            />
        ),
    },
    {
        title: 'Instant Sharing & Digital Gallery',
        desc: 'Share photos instantly via QR, email, or social media.',
        icon: (
            <path
                fill="white"
                d="M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4.5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"
            />
        ),
    },
    {
        title: 'Customizable Layout & Design',
        desc: 'Personalized templates and layouts tailored to your event theme.',
        icon: (
            <path
                fill="white"
                d="M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3H344c-26.5 0-48 21.5-48 48 0 3.4.4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5.1-7 .2-10.6.2C114.6 512 0 397.4 0 256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0-64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-96a32 32 0 1 0-64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
            />
        ),
    },
    {
        title: 'Fun Props & Professional Setup',
        desc: 'Exciting props and full setup handled by our professional team.',
        icon: (
            <path
                fill="white"
                d="M256 512c141.4 0 256-114.6 256-256 0-23.3-3.1-45.9-8.9-67.3 5.5-13.5 8.9-28.4 8.9-44.7 0-53-43-96-96-96l-2.9 0c-2.5 0-5 .1-7.4.3C365.6 17.9 313.9 0 258 0S148.4 17.9 106.3 48.3c-2.5-.2-4.9-.3-7.4-.3H96c-53 0-96 43-96 96 0 16.3 3.5 31.2 8.9 44.7C3.1 210.1 0 232.7 0 256c0 141.4 114.6 256 256 256zm130.7-187.1c11.9-3.7 23.9 6.3 19.6 18.1C383.9 404.2 325 448 256 448s-127.9-43.8-150.3-105.1c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1z"
            />
        ),
    },
]

const TestimonialCard = ({ data }) => (
    <div
        className="w-72 h-96 rounded-3xl px-5 pb-3 flex flex-col justify-around text-white"
        style={{ background: 'var(--color-secondary)' }}>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-20">
            <path
                fill="#f3efe7"
                d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136z"
            />
        </svg>
        <p>{data.comment}</p>
        <h2 className="text-4xl font-bold">{data.name}</h2>
    </div>
)

const WhyCard = ({ title, desc, icon, className = '' }) => (
    <div
        className={`why-card h-56 rounded-2xl ${className}`}
        style={{ background: 'var(--color-secondary)' }}>
        <div className="text-white h-full flex flex-col items-center py-4 px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-12">
                {icon}
            </svg>
            <h2 className="text-xl mt-4 font-bold text-center">{title}</h2>
            <p className="mt-3">{desc}</p>
        </div>
    </div>
)

const Home = async () => {
    const { popup } = await getPopup()

    return (
        <>
            <Popup popup={popup} />

            {/* Hero */}
            <section className="relative flex flex-col items-center h-[45rem] md:h-[50rem] lg:h-screen pt-20 md:pt-20 lg:pt-12 sm:pt-0">
                <h1 className="md:text-6xl text-3xl text-black text-center leading-[2.5rem] md:leading-[4.2rem]">
                    MOMENTS
                    <br />
                    MEMORIES
                    <br />
                    CELEBRATIONS
                </h1>
                <p className="text-[0.8rem] md:text-xl text-black text-center px-12 md:px-32 lg:px-72">
                    Abadikan momen kalian bersama kami, karena setiap detik
                    kebahagiaan layak dikenang dan setiap cerita pantas untuk
                    disimpan selamanya.
                </p>
                <StyledLink text="Order Now!" link="/services" />
                {[
                    {
                        src: Image1,
                        alt: 'Home Image 1',
                        pos: 'left-0 md:left-20',
                    },
                    {
                        src: Image2,
                        alt: 'Home Image 2',
                        pos: 'right-0 md:right-20',
                    },
                ].map(({ src, alt, pos }) => (
                    <figure
                        key={alt}
                        className={`absolute w-44 h-44 md:w-64 md:h-64 bottom-32 md:bottom-16 ${pos}`}>
                        <Image
                            src={src}
                            alt={alt}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                        />
                    </figure>
                ))}
            </section>

            {/* Types */}
            <div className="w-screen min-h-screen md:min-h-full lg:min-h-screen">
                <TypesLayout />
            </div>

            {/* Why Choose Us */}
            <section className="whychooseus-section w-full min-h-screen md:min-h-full lg:min-h-screen py-32  md:px-0">
                <h2 className="font-bold text-2xl md:text-4xl text-center text-black">
                    Why Choose Us?
                </h2>
                <p className="text-center md:px-12 lg:px-96 text-[0.8rem] md:text-[1rem] px-12 md:px-32">
                    Discover why clients trust our photobooth services to bring
                    fun, quality photos, and unforgettable memories
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-10">
                    <div className="flex flex-col gap-2">
                        <WhyCard
                            {...whyCards[0]}
                            className="lg:w-80 w-80 md:w-64 md:ms-auto lg:ms-0"
                        />
                        <WhyCard
                            {...whyCards[1]}
                            className="lg:w-80 w-80 md:w-64 md:ms-auto lg:ms-0"
                        />
                    </div>
                    <figure className="relative w-80 md:w-56 lg:w-80 md:h-[28.5rem] h-[15rem]">
                        <Image
                            src={Image3}
                            alt="Why Choose Us"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            loading="lazy"
                            className="object-cover"
                        />
                    </figure>
                    <div className="flex flex-col gap-2">
                        <WhyCard
                            {...whyCards[2]}
                            className="w-80 md:w-64 lg:w-80 md:me-auto lg:me-0"
                        />
                        <WhyCard
                            {...whyCards[3]}
                            className="w-80 md:w-64 lg:w-80 md:me-auto lg:me-0"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonial-section">
                <div className="flex items-center gap-10 px-3 md:px-16 lg:px-20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="w-16 md:w-32 rotate-45 opacity-50">
                        <path
                            fill="black"
                            d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        />
                    </svg>
                    <div>
                        <h2 className="md:text-4xl text-2xl text-black">
                            What Other's Say?
                        </h2>
                        <p className="font-normal text-lg md:text-2xl text-left">
                            Real stories from clients who trust our work.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5 justify-center flex-wrap mt-10">
                    {testimonials.map((data, index) => (
                        <TestimonialCard key={index} data={data} />
                    ))}
                </div>
            </section>

            {/* Blogs */}
            <section className="blogs-section w-full h-full md:h-screen py-32">
                <h2 className="text-center font-bold text-2xl md:text-4xl text-black px-12 md:px-32">
                    Check Out Our Latest Article
                </h2>
                <p className="text-center lg:px-96 text-[0.8rem] md:text-[1rem] px-12 md:px-32">
                    Stay updated with our latest tips, event inspiration, and
                    insights to help you create unforgettable moments with a
                    photobooth.
                </p>
                <div className="flex justify-center gap-8 md:gap-10 flex-wrap mt-20">
                    <BlogCards />
                </div>
            </section>
        </>
    )
}

export default Home
