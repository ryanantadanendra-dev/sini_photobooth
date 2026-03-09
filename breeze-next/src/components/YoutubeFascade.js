// components/YouTubeFacade.jsx
'use client'
import { useState } from 'react'

const getYouTubeId = url => {
    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    )
    return match?.[1] ?? null
}

const YouTubeFacade = ({ vidLink, title }) => {
    const [active, setActive] = useState(false)
    const videoId = getYouTubeId(vidLink)

    return (
        <figure className="relative md:w-[30rem] w-[20rem] h-80 rounded-3xl mt-10 overflow-hidden cursor-pointer">
            {active ? (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="absolute w-full h-full rounded-3xl"
                />
            ) : (
                <button
                    onClick={() => setActive(true)}
                    className="relative w-full h-full"
                    aria-label={`Play ${title}`}>
                    <img
                        src={`https://i.ytimg.com/vi/${videoId}/sddefault.webp`}
                        alt={title}
                        loading="lazy"
                        className="object-cover w-full h-full"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors">
                            <svg
                                className="w-7 h-7 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </button>
            )}
        </figure>
    )
}

export default YouTubeFacade
