"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { montserrat } from "../ui/fonts"

import anilist from "../lib/anilist"
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { StarIcon } from "@heroicons/react/24/outline"
import { ITitle } from "@consumet/extensions"

type Props = Awaited<ReturnType<typeof anilist.fetchTrendingAnime>>

export default function TrendingSlider({results}: Props) {

    const [options] = useState({
        type: 'loop',
        autoplay: true,
        pagination: true,
        arrows: true,
        speed: 750,
        cover: true,
        classes: {
            arrow: 'splide__arrow slider-arrow',
            page: 'splide__pagination__page slider-page'
        }
    }) 

    return (
        <section className='h-[30vh] bg-black text-white relative'>
            <h2 className={`${montserrat.className} font-bold text-white absolute top-5 left-5 z-[2]`}>Trending Anime</h2>

            <Splide options={options} className="h-full text-white">
                {results.map((item) => {
                    const title = item.title as ITitle

                    return (
                    <SplideSlide key={item.id} className="h-[30vh] relative">
                        <Image 
                            src={item.image as string}
                            alt={title?.romaji!}
                            fill
                            quality={100}
                            sizes="100vw"
                            className="object-fit object-center brightness-[.6]"
                        />

                        <article className='h-full bg-black bg-opacity-50 flex flex-col gap-2 justify-end px-10 py-8'>
                            <Link href={`/anime/info?id=${item.id}`} className="line-clamp-2 text-ellipsis h-fit">
                                {title?.romaji}
                                
                                <span className="text-xs ml-3">
                                    <StarIcon className='h-4 w-4 inline fill-[gold] stroke-[gold] -mt-1' />
                                    {item.rating}%
                                </span>
                            </Link>

                            <p className="flex flex-wrap gap-x-2 text-xs">
                                {item.genres.map((genre: string, index: number) => (
                                    <span className="border text-white px-2 py-1 text-center rounded-full" key={`${index}. ${genre}`} style={{ borderColor: item.color }}>
                                        {genre}
                                    </span>
                                ))}
                            </p>
                        </article>
                    </SplideSlide>
                )})}
            </Splide>
        </section>
    )
}