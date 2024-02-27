"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { montserrat } from "@/app/ui/fonts"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Options } from '@splidejs/react-splide'
import { IAnimeResult, ITitle } from "@consumet/extensions"

type Props = {
    recommendations: IAnimeResult[]
}

export default function RecommendationsSlider({recommendations}: Props) {

    const [sliderOptions] = useState<Options>({
        type: 'slide',
        perPage: 3,
        perMove: 3,
        mediaQuery: "min",
        breakpoints: {
            640: {
                perPage: 4,
                perMove: 4,
                gap: '20px',
            }, 
            768: {
                perPage: 5,
            }, 
            1024: {
                perPage: 6,
                perMove: 2,
                arrows: true,
                pagination: true,
                classes: {
                    arrows: 'splide__arrows splide-arrows',
                    arrow: 'splide__arrow slider-arrow',
                    page: 'splide__pagination__page slider-page'
                }
            }, 
            1280: {
                perPage: 7,
            }
        },
        gap: '12px',
        autoplay: false,
        pagination: false,
        arrows: false,
    })

    return (
        <section className='px-5 pb-12 flex flex-col gap-4'>
            <h3 id='recommend-label' className={`${montserrat.className} text-lg`}>More Like This...</h3>

            <Splide options={sliderOptions} aria-labelledby='recommend-label' className=''>
                {recommendations.map((recommendation) => {
                    const title = recommendation.title as ITitle

                    return (
                        <SplideSlide key={recommendation.id}>
                           <Link key={recommendation.id} href={`/anime/info?id=${recommendation.id}`} className='h-48 w-full relative flex flex-col gap-2 rounded-md shadow-md'>
                                <Image 
                                    src={recommendation.image as string}
                                    alt={title.romaji as string}
                                    fill
                                    sizes="33vw"
                                    className='rounded-md shadow-md object-cover'
                                />

                        <div className="rounded-md z-[2] flex items-end p-2 h-full bg-gradient-to-t from-black/70 from-20%">
                            <p className='text-sm text-white line-clamp-2 text-ellipsis'>{title?.romaji}</p>
                        </div>
                           </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </section>
    )
}