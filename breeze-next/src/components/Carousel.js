// components/Home/Carousel.jsx
'use client'

import { useEffect, useCallback, useState, useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const EmblaCarousel = ({ options, datas }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    // Memoize plugin instances to prevent recreation on every render
    const plugins = useMemo(
        () => [Fade(), Autoplay({ delay: 6000, stopOnInteraction: false })],
        [],
    )

    const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return

        onSelect()
        emblaApi.on('select', onSelect).on('reInit', onSelect)

        return () => {
            emblaApi.off('select', onSelect).off('reInit', onSelect)
        }
    }, [emblaApi, onSelect])

    return (
        <div className="embla w-full">
            <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container w-96 h-96">
                    {datas?.map((image, index) => {
                        const isActive = index === selectedIndex
                        const isPriority = index === 0

                        return (
                            <figure
                                className="embla__slide min-w-full h-[20rem] md:h-[45.5vh] lg:h-screen relative"
                                key={image.src}>
                                <Image
                                    src={image || ''}
                                    alt={`Carousel slide ${index + 1}`}
                                    priority={isPriority}
                                    loading={isPriority ? 'eager' : 'lazy'}
                                    quality={90}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="embla__slide__img object-cover"
                                    // placeholder="blur"
                                />
                            </figure>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default EmblaCarousel
