const Divider = ({ title, description, imgLink }) => {
    return (
        <div className="divider flex justify-center mt-12">
            <div
                className="w-[80vw] h-64 bg-fixed bg-center rounded-2xl relative bg-no-repeat bg-cover"
                style={{
                    backgroundImage: `url(${imgLink})`,
                }}>
                <div
                    className="flex flex-col justify-center items-center w-full h-full absolute z-10 px-4 md:px-32
                        ">
                    <h2 className="text-2xl md:text-4xl font-bold text-center text-white">
                        {title}
                    </h2>
                    <p className="text-white text-[0.8rem] md:text-[1rem] text-center">
                        {description}
                    </p>
                </div>
                <div className="overlay absolute w-full h-full rounded-2xl bg-[#00000070] top-0 z-0"></div>
            </div>
        </div>
    )
}
export default Divider
