import Hero from '@/components/Hero'
import WAForm from '@/components/WAForm'
import Image from 'next/image'
import Img from '../../../../public/Assets/Image1.jpg'

export const metadata = {
    title: 'Hubungi Kami Untuk Informasi Selengkapnya - Contact Us For Further Information | Sini Photobooth',
    description:
        'Hubungi kami via Whatsapp untuk menanyakan informasi mengenai jasa kami. Contact us via Whatsapp to know more about our services',
    openGraph: {
        title: 'Hubungi Kami Untuk Informasi Selengkapnya - Contact Us For Further Information | Sini Photobooth',
        description:
            'Hubungi kami via Whatsapp untuk menanyakan informasi mengenai jasa kami. Contact us via Whatsapp to know more about our services',
        siteName: 'siniphotobooth.com',
        locale: 'id_ID',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Hubungi Kami Untuk Informasi Selengkapnya - Contact Us For Further Information | Sini Photobooth',
        description:
            'Hubungi kami via Whatsapp untuk menanyakan informasi mengenai jasa kami. Contact us via Whatsapp to know more about our services',
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

const ContactPage = async () => {
    return (
        <>
            <Hero
                title="Get In Touch"
                subtitle="Contact us for further information about our services"
            />
            <main className="mt-12 lg:py-12 py-20">
                <section className="w-screen lg:min-h-screen grid md:grid-cols-2 grid-cols-1">
                    <div className="px-12">
                        <h1 className="md:text-4xl text-2xl text-center md:text-left text-black">
                            Contact Us
                        </h1>
                        <p className="text-center md:text-left text-[0.8rem] md:text-lg">
                            Ready to create unforgettable memories? Reach out
                            and let’s make it happen.
                        </p>
                        <WAForm />
                    </div>
                    <div className="mt-16 md:mt-0 md:ps-5 md:pe-20">
                        <div className="grid lg:grid-cols-2 md:grid-rows-2 grid-cols-1 px-12 md:px-0">
                            <div>
                                <h3 className="text-black">Contact Person</h3>
                                <div className="flex items-center gap-3 mt-3">
                                    <svg
                                        aria-label="Phone Icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="w-4">
                                        <path
                                            fill="rgb(0, 0, 0)"
                                            d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"
                                        />
                                    </svg>
                                    <p className="">+621234567890</p>
                                </div>
                            </div>
                            <div className="mt-2 lg:mt-0">
                                <h3 className="text-black">Email Us</h3>
                                <div className="flex items-center gap-3 mt-3">
                                    <svg
                                        aria-label="Envelope Icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="min-w-4 max-w-4">
                                        <path
                                            fill="#000000"
                                            d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"
                                        />
                                    </svg>
                                    <p className="">askme@siniphotobooth.com</p>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-black">Location</h3>
                                <div className="flex items-center gap-3 mt-3">
                                    <svg
                                        aria-label="Location Icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 384 512"
                                        className="min-w-4 max-w-4">
                                        <path
                                            fill="rgb(0, 0, 0)"
                                            d="M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"
                                        />
                                    </svg>
                                    <p className="">askme@siniphotobooth.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 px-12 md:px-0 lg:pe-12">
                            <figure className="w-full h-64 mx-auto md:mx-0 relative">
                                <Image
                                    src={Img}
                                    alt="Contact Page"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    fill
                                    loading="lazy"
                                    className="object-cover"
                                />
                            </figure>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default ContactPage
