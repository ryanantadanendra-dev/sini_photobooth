const NotFoundPage = () => {
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-red-500 sm:items-center sm:pt-0">
            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center pt-8 sm:justify-start sm:pt-0">
                    <div className="px-4 text-5xl animate-pulse font-bold text-white border-r border-gray-400 tracking-wider">
                        404
                    </div>

                    <div className="ml-4 text-xl text-white uppercase tracking-wider">
                        Page Not Found!
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
