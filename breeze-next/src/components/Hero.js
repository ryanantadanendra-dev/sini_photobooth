import Link from 'next/link'
import StyledLink from './StyledLink'

const Hero = ({ title, subtitle }) => {
    return (
        <header>
            <section className="hero w-screen min-h-72 py-10 bg-white text-black flex flex-col items-center justify-center">
                <h1 className="text-center font-bold text-3xl md:text-4xl text-black lg:px-80">
                    {title}
                </h1>
                <p className="text-center text-[0.8rem] md:text-lg px-12 lg:px-56 mt-4">
                    {subtitle}
                </p>
                <div className="flex justify-center mt-4">
                    <StyledLink text="Need Help?" link="" />
                </div>
            </section>
        </header>
    )
}

export default Hero
