import Hero from '@/components/Hero'
import getTypes from '@/lib/getType'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/CTA'
import Divider from '@/components/Divider'
import StyledLink from '@/components/StyledLink'

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
                    <h2 className="text-center text-3xl md:text-4xl text-black">
                        Available Photobooth Types
                    </h2>
                    <p className="text-center text-[1rem] md:text-lg">
                        Explore Our Photo Booth Collections
                    </p>
                    <div className="flex justify-center flex-wrap gap-12 mt-10">
                        {types?.data.map((type, index) => (
                            <Link href={`/service/${type?.slug}`}>
                                <figure className="w-72 h-56">
                                    <div className="relative w-full h-48 overflow-hidden rounded-2xl">
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image}`}
                                            alt={`${type?.name} image`}
                                            fill
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
                    <h2 className="text-black text-3xl md:text-4xl px-12 md:px-0 text-center md:text-start">
                        Looking For A Photographer?
                    </h2>
                    <p className="text-[1rem] md:text-lg text-center md:text-start">
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
