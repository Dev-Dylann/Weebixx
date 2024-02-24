"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { montserrat } from "@/app/ui/fonts"
import { ArrowsUpDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { IAnimeEpisode } from "@consumet/extensions"

type Props = {
    animeId: string,
    episodes: IAnimeEpisode[]
}

export default function EpisodeList({ animeId, episodes }: Props) {
    const [episodeList, setEpisodeList] = useState(episodes.reverse().slice(0, 12))
    const [sorting, setSorting] = useState<'Newest First' | 'Oldest First'>('Newest First')

    useEffect(() => {
        if (sorting === 'Newest First') {
            const newFirst = [...episodes]
            newFirst.reverse()
            setEpisodeList(newFirst.slice(0, 12))
        } else {
            setEpisodeList(episodes.slice(0, 12))
        }
    }, [sorting])

    return (
        <section className='py-8 px-5 flex flex-col gap-3'>
            <div className='flex items-center justify-between'>
                <h3 className={`${montserrat.className} text-lg`}>Episodes</h3>

                <button type='button' className='text-sm flex items-center p-2 gap-2 rounded-md' onClick={() => setSorting(prev => prev === 'Newest First' ? 'Oldest First' : 'Newest First')}>
                    {sorting}
                    <ArrowsUpDownIcon className='h-6 w-6' />
                </button>
            </div>

            <article className='flex flex-col divide-y'>
                {!episodes.length ? (
                    <p className='text-center py-8'>
                        No episodes available.
                    </p>
                ) : (
                    episodeList.map((episode, index) => (
                        <Link key={`Episode ${index}`} href={`/watch?id=${animeId}&epId=${episode.id}`} className='flex items-center gap-2 py-4'>
                            <div className='relative w-1/4 h-[12vw]'>
                                <Image
                                    src={episode.image as string}
                                    alt={episode.title as string}
                                    fill
                                    quality={75}
                                    className='object-cover rounded-sm'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <p className='line-clamp-1 text-ellipsis sm:text-lg'>
                                    {episode.number}. {episode.title}
                                </p>
                                <p className='text-gray-400 text-sm'>
                                    {episode.releaseDate}
                                </p>
                            </div>
                            
                        </Link>
                    ))
                )}
            </article>

            <Link href={`/info/anime/episodes?id=${animeId}`} className='bg-accent text-sm p-2 rounded-lg flex gap-1 items-center self-end w-fit'>
                See All Episodes
                <ChevronRightIcon className='h-6 w-6' />
            </Link>
        </section>
    )
}