import StyledLink from './StyledLink'

const CTA = () => {
    return (
        <section
            className="CTA w-screen h-96 flex flex-col justify-center items-center text-black mt-12"
            style={{ background: 'var(--color-primary)' }}>
            <h2 className="text-center text-3xl md:text-4xl font-bold lg:px-56 text-black">
                Ready To Save Your Moments, Memories, and Celebrations?
            </h2>
            <p className="text-center text-lg md:text-xl mt-5">
                Contact Us For Further Information
            </p>
            <div className="flex gap-10 mt-10">
                <StyledLink text="Whatsapp" link="" />
                <StyledLink text="Photobooth Types" link="/services" />
            </div>
        </section>
    )
}

export default CTA
