import CTA from '@/components/CTA'
import getTypes from '@/lib/getType'
import Image from 'next/image'

const ServicePage = async ({ params }) => {
    const { slug } = params
    const { types } = await getTypes()
    const type = types?.data.find(t => t.slug == slug)

    const SPAN_PATTERN = [
        'col-span-2 row-span-2',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
        'col-span-1 row-span-1',
        'col-span-2 row-span-1',
    ]

    const getSpanClass = index => SPAN_PATTERN[index % SPAN_PATTERN.length]

    return (
        <>
            <header>
                <section className="hero w-screen h-[25rem]">
                    <div
                        className="w-full h-full bg-fixed bg-center bg-cover relative flex justify-center items-center"
                        style={{
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image})`,
                        }}>
                        <div className="absolute z-40">
                            <h1 className="text-5xl">{type?.name}</h1>
                            <p className="text-2xl text-center text-white">
                                {type?.subname}
                            </p>
                        </div>
                        <div className="overlay bg-[#00000050] absolute w-full h-full"></div>
                    </div>
                </section>
            </header>
            <main>
                <section className="w-screen h-56 flex justify-center pt-8">
                    <article className="text-xl">{type?.description}</article>
                </section>
                {/* <section className="w-screen h-full flex flex-col items-center justify-center">
                <h2 className="text-3xl text-black">{type?.name} Look</h2>
                <figure className="w-96 h-96 relative mt-5">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${type?.image}`}
                        fill
                        className="object-cover"
                    />
                </figure>
            </section> */}
                <section className="w-screen min-h-full">
                    <h2 className="text-center text-black text-3xl">
                        Our Setup
                    </h2>
                    <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[85vh] px-4 md:px-12 py-12">
                        {type?.setupImages.map((image, index) => (
                            <figure
                                key={image.id}
                                className={`relative overflow-hidden rounded-2xl group m-0 ${getSpanClass(index)}`}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BACKEND_URL}/storage/${image}`}
                                    alt={`${type?.name} image`}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <span className="absolute top-4 left-4 text-[10px] tracking-widest text-white/40 uppercase">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </figure>
                        ))}
                    </div>
                </section>
                <section className="w-screen h-full flex flex-col items-center">
                    <h2 className="text-center text-3xl text-black ">
                        How It Works?
                    </h2>
                    <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/_Sl8diqCAFw?si=uBIh5WXFOs-gu1EZ"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                        className="mt-10"></iframe>
                </section>
                <CTA />
            </main>
        </>
    )
}
export default ServicePage
