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
                <button className="md:px-8 px-6 md:py-5 py-4 rounded-2xl text-white transition-all duration-300 ease-out bg-[#a0221c] hover:bg-[#7e1a16] hover:scale-95">
                    WhatsApp
                </button>
                <button className="md:px-8 px-6 md:py-5 py-4 rounded-2xl text-white transition-colors duration-300 ease-out bg-[#a0221c] hover:bg-[#7e1a16] hover:scale-95">
                    Photobooth Types
                </button>
            </div>
        </section>
    )
}

export default CTA
