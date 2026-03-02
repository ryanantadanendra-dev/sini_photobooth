import Link from 'next/link'

const Hero = ({ title, subtitle }) => {
    return (
        <header>
            <section className="hero w-screen min-h-72 bg-white text-black pt-8 ">
                <h1 className="text-center font-bold text-3xl md:text-4xl text-black lg:px-80">
                    {title}
                </h1>
                <p className="text-center text-[1rem] md:text-lg px-12 lg:px-56 mt-4">
                    {subtitle}
                </p>
                <div className="flex justify-center mt-4">
                    <Link
                        href=""
                        className="md:px-8 md:py-5 px-6 py-3 block mx-auto text-white rounded-2xl"
                        style={{ background: 'var(--color-secondary)' }}>
                        Need Help?
                    </Link>
                </div>
            </section>
        </header>
    )
}

export default Hero
