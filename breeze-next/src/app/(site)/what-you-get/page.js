import Link from 'next/link'
import Hero from '@/components/Hero'
import Image from 'next/image'
import setupImg from '../../../../public/Assets/setup.jpg'
import setupImg2 from '../../../../public/Assets/setup2.jpg'
import Carousel from '@/components/Carousel'
import Carousel1 from '../../../../public/Assets/carousel1.jpg'
import Carousel2 from '../../../../public/Assets/carousel2.jpg'
import Carousel3 from '../../../../public/Assets/carousel3.jpg'
import QrImg from '../../../../public/Assets/qr.jpg'
import DriveImg from '../../../../public/Assets/drive.jpg'
import PoseImg from '../../../../public/Assets/pose.jpg'
import InframeImg from '../../../../public/Assets/inframe.jpg'
import PropImg1 from '../../../../public/Assets/property1.jpg'
import PropImg2 from '../../../../public/Assets/property2.jpg'
import CTA from '@/components/CTA'
import Divider from '@/components/Divider'

const carouselImages = [Carousel1, Carousel2, Carousel3]

const datas = [
    {
        icon: 'M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z',
        description: 'Custom Overlay Design',
    },
    {
        icon: 'M256 512c141.4 0 256-114.6 256-256 0-23.3-3.1-45.9-8.9-67.3 5.5-13.5 8.9-28.4 8.9-44.7 0-53-43-96-96-96l-2.9 0c-2.5 0-5 .1-7.4 .3-42.1-30.4-93.8-48.3-149.7-48.3S148.4 17.9 106.3 48.3c-2.5-.2-4.9-.3-7.4-.3L96 48c-53 0-96 43-96 96 0 16.3 3.5 31.2 8.9 44.7-5.8 21.4-8.9 44-8.9 67.3 0 141.4 114.6 256 256 256zM386.7 324.9c11.9-3.7 23.9 6.3 19.6 18.1-22.4 61.3-81.3 105.1-150.3 105.1S128.1 404.2 105.7 342.9c-4.3-11.8 7.7-21.8 19.6-18.1 39.2 12.2 83.7 19.1 130.7 19.1s91.5-6.9 130.7-19.1zM322.9 96c13.5 0 26.5 5.4 36 14.9l9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9l2.9 0c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48l2.9 0zm-188 14.9l9.1 9.1 9.1-9.1c9.5-9.5 22.5-14.9 36-14.9l2.9 0c26.5 0 48 21.5 48 48 0 53.4-66.9 95.7-89 108.2-4.4 2.5-9.6 2.5-14 0-22.1-12.5-89-54.8-89-108.2 0-26.5 21.5-48 48-48l2.9 0c13.5 0 26.5 5.4 36 14.9z',
        description: 'Lots Of Fun And Engaging Props',
    },
    {
        icon: 'M0 416l0-208 136.2 0c13.5-20.2 32-36.8 53.7-48L0 160 0 125.7c0-35.3 28.7-64 64-64l.1 0C65.3 45.1 79.1 32 96 32l32 0c16.9 0 30.7 13.1 31.9 29.7l32.1 0 51.2-23.8c8.4-3.9 17.6-6 26.9-6L448 32c35.3 0 64 28.7 64 64l0 64-190 0c21.7 11.2 40.2 27.8 53.7 48l136.2 0 0 208c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM256 192a96.1 96.1 0 1 0 0 192.1 96.1 96.1 0 1 0 0-192.1z',
        description: 'Professional Camera and Equipment',
    },
    {
        icon: 'M64 64C64 28.7 92.7 0 128 0L341.5 0c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3l0 37.5-384 0 0-80zM0 256c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32l-32 0 0 64c0 35.3-28.7 64-64 64l-256 0c-35.3 0-64-28.7-64-64l0-64-32 0c-17.7 0-32-14.3-32-32l0-96zM128 416l0 32 256 0 0-96-256 0 0 64zM456 272a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z',
        description: 'Unlimited Photo Prints, Including Stylish Frames',
    },
    {
        icon: 'M224 248a120 120 0 1 1 0-240 120 120 0 1 1 0 240zm-30.5 56l61 0c9.7 0 17.5 7.8 17.5 17.5 0 4.2-1.5 8.2-4.2 11.4l-27.4 32 31 115.1 .6 0 34.6-138.5c2.2-8.7 11.1-14 19.5-10.8 61.9 23.6 105.9 83.6 105.9 153.8 0 15.1-12.3 27.4-27.4 27.4L43.4 512c-15.1 0-27.4-12.3-27.4-27.4 0-70.2 44-130.2 105.9-153.8 8.4-3.2 17.3 2.1 19.5 10.8l34.6 138.5 .6 0 31-115.1-27.4-32c-2.7-3.2-4.2-7.2-4.2-11.4 0-9.7 7.8-17.5 17.5-17.5z',
        description: 'A Dedicated Crew to Assis Throughout the Event',
    },
]

const Card = ({ data }) => (
    <div className="w-72 h-32 px-4 py-4">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-20 h-10 mx-auto">
            <path fill="rgb(0, 0, 0)" d={data?.icon} />
        </svg>
        <h3 className="text-black mt-3 text-center">{data?.description}</h3>
    </div>
)

const WhatYouGetPage = () => {
    return (
        <>
            <Hero
                title="You’re Not Booking a Service. You’re Securing an Experience."
                subtitle="Once you’ve selected your ideal setup, our team enhances every detail to create stunning, high-quality results. Let’s turn your moments into memories worth reliving."
            />
            <main>
                <section className="py-20 px-12">
                    <h2 className="text-3xl md:text-4xl text-center md:text-start font-bold text-black">
                        What You Will Get
                    </h2>
                    <div className="flex justify-center gap-3 flex-wrap mt-8 px-10">
                        {datas.map((data, indec) => (
                            <Card data={data} />
                        ))}
                    </div>
                </section>
                <section className="py-12">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-black">
                        Our Setup
                    </h2>
                    <div className="flex flex-wrap justify-center mt-8 gap-4">
                        <figure className="relative w-72 h-[30rem]">
                            <Image
                                src={setupImg}
                                alt="Setup Image"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </figure>
                        <figure className="relative w-72 h-[30rem]">
                            <Image
                                src={setupImg2}
                                alt="Setup Image"
                                fill
                                className="object-cover rounded-2xl"
                            />
                        </figure>
                    </div>
                </section>
                <section className="howitwork-section h-full py-12">
                    <h2 className="text-center text-3xl md:text-4xl font-bold text-black">
                        How It Workds
                    </h2>
                    <div className="flex flex-col items-center mt-10">
                        <figure className="relative md:w-[30rem] w-[20rem] h-80 rounded-3xl">
                            <iframe
                                width="300"
                                height="400"
                                src="https://www.youtube.com/embed/_Sl8diqCAFw?si=0hAr2UiTAP58SZ5V"
                                title="YouTube video player"
                                frameborder="0"
                                className="object-cover absolute w-full h-full rounded-3xl"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen></iframe>
                        </figure>
                    </div>
                </section>
                <section className="result-sectoin w-screen h-full py-32 lg:py-12">
                    <h2 className="text-center text-3xl md:text-4xl text-black font-bold">
                        Check Out Our Results
                    </h2>
                    <div className="flex flex-col items-center justify-center w-screen gap-1 md:gap-5 mt-5 px-8 md:px-0">
                        <Carousel datas={carouselImages} />
                        <h3 className="text-2xl md:text-3xl font-bold text-black">
                            Photos
                        </h3>
                        <p className="text-center md:px-32 lg:px-72">
                            Photo print dan Photo digital ! Setelah foto, para
                            tamu akan mendapatkan hasil cetak foto mereka dan
                            file digital foto mereka secara langsung, lengkap
                            dengan design inframe overlay yang sudah terdesign
                            sesuai dengan mood acara kalian
                        </p>
                    </div>
                </section>
                <section className="w-screen h-full py-12">
                    <h2 className="text-center text-3xl md:text-4xl text-black font-bold">
                        Claim Your Photos!
                    </h2>
                    <p className="text-center text-[1rem] md:text-lg px-12  font-normal">
                        Customers can access their photos digitally and printed
                    </p>
                    <div className="flex justify-center flex-wrap gap-10 mt-10">
                        <div>
                            <figure className="relative md:w-96 w-80 h-64">
                                <Image
                                    src={QrImg}
                                    alt="Scan QR code"
                                    fill
                                    className="object-cover "
                                />
                            </figure>
                            <p className="text-center mt-3 text-2xl">
                                Scan QR Code
                            </p>
                        </div>
                        <div>
                            <figure className="relative md:w-96 w-80 h-64">
                                <Image
                                    src={DriveImg}
                                    alt="Access Google Drive"
                                    fill
                                    className="object-cover "
                                />
                            </figure>
                            <p className="text-center text-2xl mt-3">
                                VIA Google Drive
                            </p>
                        </div>
                        <div>
                            <figure className="relative md:w-96 w-80 h-64">
                                <Image
                                    src={Carousel1}
                                    alt="Scan QR code"
                                    fill
                                    className="object-cover "
                                />
                            </figure>
                            <p className="text-center text-2xl mt-3">
                                Printout
                            </p>
                        </div>
                    </div>
                </section>
                <Divider
                    title="High Quality Print"
                    description="High Quality Prints with fully customizable
                                layouts designed to match your event theme.
                                Every detail is crafted to turn your moments
                                into unforgettable keepsakes."
                    imgLink="/Assets/carousel1.jpg"
                />
                <section className="w-screen h-full flex flex-col-reverse md:flex-row justify-center gap-10 mt-32">
                    <div className="md:w-1/2 w-full md:ps-32 px-8 md:px-0 pt-12">
                        <h2 className="text-3xl text-black">
                            Choose Your Layouts
                        </h2>
                        <p className="mt-5">
                            You can choose your desired layout once after you
                            finished booking our services. Choose your layout
                            that suits your needs
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <figure className="relative md:w-96 w-72 h-72 md:h-96 mx-auto md:mx-0">
                            <Image
                                src={PoseImg}
                                alt="Pose Layout Image"
                                fill
                                className="object-cover"
                            />
                        </figure>
                    </div>
                </section>
                <section className="w-screen h-full flex flex-col md:flex-row justify-center gap-10 mt-32">
                    <div className="md:w-1/2 w-full">
                        <figure className="relative md:w-96 w-72 h-72 md:h-96 mx-auto">
                            <Image
                                src={InframeImg}
                                alt="Pose Layout Image"
                                fill
                                className="object-cover"
                            />
                        </figure>
                    </div>
                    <div className="md:w-1/2 w-full px-8 md:px-0 md:pe-32 pt-12">
                        <h2 className="text-3xl text-black">
                            Choose Or Custom Your Inframe Design
                        </h2>
                        <p className="mt-5">
                            After seleting layout, you may choose or even custom
                            your desired infram designs
                        </p>
                    </div>
                </section>
                <section className="w-screen h-full py-32">
                    <h2 className="text-center text-3xl md:text-4xl text-black font-bold lg:px-72">
                        Light Up Your Moment With Cute Properties That We
                        Provide
                    </h2>
                    <p className="text-center text-[1rem] md:text-lg">
                        We provide various kinds of property starting from
                        hilarious, cool, mysterious, and much more!
                    </p>
                    <div className="flex justify-center flex-wrap gap-12 mt-12">
                        <figure
                            className="w-72 h-56 relative"
                            style={{ borderRadius: '50px' }}>
                            <Image
                                src={setupImg2}
                                alt="Property Photo"
                                fill
                                className="object-cover"
                                style={{ borderRadius: '0% 25% 0% 25%' }}
                            />
                        </figure>
                        <figure className="w-72 h-56 relative">
                            <Image
                                src={PropImg1}
                                alt="Property Photo"
                                fill
                                className="object-cover"
                                style={{ borderRadius: '25%' }}
                            />
                        </figure>
                        <figure className="w-72 h-56 relative">
                            <Image
                                src={PropImg2}
                                alt="Property Photo"
                                fill
                                className="object-cover"
                                style={{ borderRadius: '25% 0% 25% 0%' }}
                            />
                        </figure>
                    </div>
                </section>
                <CTA />
            </main>
        </>
    )
}
export default WhatYouGetPage
