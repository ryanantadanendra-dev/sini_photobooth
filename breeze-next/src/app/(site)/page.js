import LoginLinks from '@/app/LoginLinks'
import Link from 'next/link'
import Image from 'next/image'
import Image1 from '../../../public/Assets/Image1.jpg'
import Image2 from '../../../public/Assets/Image2.jpg'
import TypesLayout from '@/components/TypesLayout'
import BlogCards from '@/components/BlogCards'
import NavLink from '@/components/NavLink'

export const metadata = {
    title: 'Laravel',
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

const Card = ({ data }) => {
    return (
        <div
            className="w-72 h-96 rounded-3xl px-5 pb-3 flex flex-col justify-around text-white"
            style={{
                background: 'var(--color-secondary)',
            }}>
            <svg
                xmlns="
            http:style={{ //www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-20">
                <path
                    fill="#f3efe7"
                    d="M448 296c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136zm-256 0c0 66.3-53.7 120-120 120l-8 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l8 0c30.9 0 56-25.1 56-56l0-8-64 0c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l64 0c35.3 0 64 28.7 64 64l0 136z"
                />
            </svg>
            <p>{data?.comment}</p>
            <h2 className="text-4xl font-bold">{data?.name}</h2>
        </div>
    )
}

const Home = () => {
    return (
        <>
            <section className="relative flex flex-col items-center h-[45rem] md:h-[50rem] lg:h-screen sm:pt-0 md:pt-20 pt-20 lg:pt-12">
                <h1 className="md:text-6xl text-3xl text-black text-center leading-[2.5rem] md:leading-[4.2rem]">
                    MOMENTS
                    <br />
                    MEMORIES
                    <br />
                    CELEBRATIONS
                </h1>
                <p className="text-[1rem] md:text-xl text-black text-center lg:px-72">
                    Abadikan momen kalian bersama kami, karena setiap detik
                    kebahagiaan layak dikenang dan setiap cerita pantas untuk
                    disimpan selamanya.
                </p>
                <Link
                    href="/services"
                    className="px-7 py-4 mt-5 rounded-2xl hover:scale-95 transition-all duration-200 ease-out"
                    style={{
                        backgroundColor: 'var(--color-secondary)',
                        color: 'var(--color-primary)',
                    }}>
                    Order Now!
                </Link>
                <figure className="absolute w-44 h-44 md:w-64 md:h-64 bottom-32 md:bottom-16 left-0 md:left-20">
                    <Image
                        src={Image1}
                        alt="Home Image 1"
                        fill
                        className="object-cover"
                    />
                </figure>
                <figure className="absolute w-44 h-44 md:w-64 md:h-64 right-0 md:right-20  bottom-32 md:bottom-16">
                    <Image
                        src={Image2}
                        alt="Home Image 1"
                        fill
                        className="object-cover"
                    />
                </figure>
            </section>
            <div className="w-screen min-h-screen">
                <TypesLayout />
            </div>
            <section className="whychooseus-section w-full min-h-screen  md:min-h-full lg:min-h-screen py-32">
                <h2 className="font-bold text-3xl md:text-4xl text-center text-black">
                    Why Choose Us?
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-10">
                    <div>
                        <div
                            className="card lg:w-80 w-80 md:w-56 h-56 md:ms-auto lg:ms-0 ms-0 rounded-2xl"
                            style={{
                                background: 'var(--color-secondary)',
                            }}>
                            <div className="text-white h-full flex flex-col items-center py-4 px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-12">
                                    <path
                                        fill="rgb(255, 255, 255)"
                                        d="M64 64C64 28.7 92.7 0 128 0L341.5 0c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3l0 37.5-384 0 0-80zM0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32l-32 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64-32 0c-17.7 0-32-14.3-32-32l0-96zM128 416l0 32 256 0 0-96-256 0 0 64zM456 272a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"
                                    />
                                </svg>
                                <h2 className="text-xl mt-4 font-bold">
                                    High-Quality Prints
                                </h2>
                                <p className="mt-3">
                                    Crisp, vibrant, and professional-grade
                                    prints your guests will love.
                                </p>
                            </div>
                        </div>
                        <div
                            className="card lg:w-80 w-80 md:w-56 md:ms-auto ms-0 lg:ms-0 h-56 mt-2"
                            style={{
                                background: 'var(--color-secondary)',
                            }}>
                            <div className="text-white h-full flex flex-col items-center py-4 px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-12">
                                    <path
                                        fill="rgb(255, 255, 255)"
                                        d="M384 192c53 0 96-43 96-96s-43-96-96-96-96 43-96 96c0 5.4 .5 10.8 1.3 16L159.6 184.1c-16.9-15-39.2-24.1-63.6-24.1-53 0-96 43-96 96s43 96 96 96c24.4 0 46.6-9.1 63.6-24.1L289.3 400c-.9 5.2-1.3 10.5-1.3 16 0 53 43 96 96 96s96-43 96-96-43-96-96-96c-24.4 0-46.6 9.1-63.6 24.1L190.7 272c.9-5.2 1.3-10.5 1.3-16s-.5-10.8-1.3-16l129.7-72.1c16.9 15 39.2 24.1 63.6 24.1z"
                                    />
                                </svg>
                                <h2 className="text-xl mt-4 font-bold">
                                    Instant Sharing & Digital Gallery
                                </h2>
                                <p className="mt-3">
                                    Share photos instantly via QR, email, or
                                    social media.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <figure className="relative w-80 md:w-56 lg:w-80 md:h-[28.5rem] h-[15rem] bg-black">
                            <Image
                                src={Image1}
                                alt="Why Choose Us Image"
                                fill
                                className="object-cover"
                            />
                        </figure>
                    </div>
                    <div>
                        <div
                            className="card w-80 md:w-56 lg:w-80 md:me-auto me-0 lg:me-0  h-56"
                            style={{
                                background: 'var(--color-secondary)',
                            }}>
                            <div className="text-white h-full flex flex-col items-center py-4 px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-12">
                                    <path
                                        fill="rgb(255, 255, 255)"
                                        d="M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                                    />
                                </svg>
                                <h2 className="text-xl mt-4 font-bold">
                                    Customizable Layout & Design
                                </h2>
                                <p className="mt-3">
                                    Personalized templates and layouts tailored
                                    to your event theme.
                                </p>
                            </div>
                        </div>
                        <div
                            className="card w-80 md:w-56 lg:w-80 md:me-auto me-0 lg:me-0  h-56 mt-2"
                            style={{
                                background: 'var(--color-secondary)',
                            }}>
                            <div className="text-white h-full flex flex-col items-center py-4 px-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-12">
                                    <path
                                        fill="rgb(255, 255, 255)"
                                        d="M256 512c141.4 0 256-114.6 256-256 0-23.3-3.1-45.9-8.9-67.3 5.5-13.5 8.9-28.4 8.9-44.7 0-53-43-96-96-96l-2.9 0c-2.5 0-5 .1-7.4 .3-42.1-30.4-93.8-48.3-149.7-48.3S148.4 17.9 106.3 48.3c-2.5-.2-4.9-.3-7.4-.3L96 48c-53 0-96 43-96 96 0 16.3 3.5 31.2 8.9 44.7-5.8 21.4-8.9 44-8.9 67.3 0 141.4 114.6 256 256 256zM386.7 324.9c11.9-3.7 23.9 6.3 19.6 18.1-22.4 61.3-81.3 105.1-150.3 105.1S128.1 404.2 105.7 342.9c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1zM322.9 96c13.5 0 26.5 5.4 36 14.9l9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9l2.9 0c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48l2.9 0zm-188 14.9l9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9l2.9 0c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48l2.9 0c13.5 0 26.5 5.4 36 14.9z"
                                    />
                                </svg>
                                <h2 className="text-xl mt-4 font-bold">
                                    Fun Props & Professional Setup
                                </h2>
                                <p className="mt-3">
                                    Exciting props and full setup handled by our
                                    professional team.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-section">
                <div className="flex items-center gap-10 md:ps-8 lg:ps-20">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                        className="w-20 md:w-32 rotate-45 opacity-50">
                        <path
                            fill="rgb(0, 0, 0)"
                            d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3 160 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-370.7 105.4 105.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                        />
                    </svg>
                    <div>
                        <h2 className="md:text-4xl text-3xl text-black">
                            What Other's Say?
                        </h2>
                        <p className="font-normal text-xl md:text-2xl text-left">
                            Real stories from clients who trust our work.
                        </p>
                    </div>
                </div>
                <div className="flex gap-5 justify-center flex-wrap mt-10">
                    {testimonials.map((data, index) => (
                        <Card data={data} />
                    ))}
                </div>
            </section>
            <section className="blogs-section w-full h-screen py-32">
                <h2 className="text-center font-bold text-3xl md:text-4xl text-black">
                    Check Out Our Latest Article
                </h2>
                <div className="flex justify-center gap-10 flex-wrap mt-20">
                    <BlogCards />
                </div>
            </section>
        </>
    )
}

export default Home
