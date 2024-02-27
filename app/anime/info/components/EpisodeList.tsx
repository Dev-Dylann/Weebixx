"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { montserrat } from "@/app/ui/fonts"
import { ArrowsUpDownIcon, ChevronRightIcon, ListBulletIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { IAnimeEpisode } from "@consumet/extensions"

type Props = {
    animeId: string,
    episodes: IAnimeEpisode[]
    pathname?: 'episodes',
    title?: string,
}

export default function EpisodeList({ animeId, episodes, pathname, title }: Props) {
    const [episodeList, setEpisodeList] = useState(episodes)
    const [sorting, setSorting] = useState<'Newest First' | 'Oldest First'>('Newest First')
    const [view, setView] = useState<'Grid' | 'List'>('List')

    useEffect(() => {
        if (sorting === 'Newest First') {
            const newFirst = [...episodes]
            newFirst.reverse()
            setEpisodeList(pathname === 'episodes' ? newFirst : newFirst.slice(0, 12))
        } else {
            setEpisodeList(pathname === 'episodes' ? episodes : episodes.slice(0, 12))
        }
    }, [sorting, episodes, pathname])

    return (
        <section className='py-8 px-5 flex flex-col gap-3'>
            <div className='flex items-center justify-between flex-wrap'>
                {!pathname ? (
                    <h3 className={`${montserrat.className} text-lg`}>Episodes</h3>
                ) : (
                    <h2 className={`${montserrat.className}`}>
                        <Link href={`/anime/info?id=${animeId}`} className='underline'>{title}</Link>
                        &nbsp;
                        All Episodes
                    </h2>
                )}

                <div className='flex items-center justify-end gap-4 text-sm grow'>
                    <button type='button' className='flex items-center p-2 gap-2 rounded-md' onClick={() => setSorting(prev => prev === 'Newest First' ? 'Oldest First' : 'Newest First')}>
                        {sorting}
                        <ArrowsUpDownIcon className='h-6 w-6' />
                    </button>

                    <button type="button" className={clsx('flex items-center p-2 gap-2 rounded-md', {'hidden' : pathname !== 'episodes'})} onClick={() => setView(prev => prev === 'List' ? 'Grid' : 'List')}>
                        {view}
                        {view === 'List' ? <ListBulletIcon className='h-6 w-6' /> : <Squares2X2Icon className='h-6 w-6' />}
                    </button>
                </div>
                
            </div>

            <article className={clsx('', {'flex flex-col divide-y' : view === 'List', 'grid grid-cols-3 gap-3' : view === 'Grid'})}>
                {!episodes.length ? (
                    <p className='text-center py-8 col-span-full'>
                        No episodes available.
                    </p>
                ) : (
                    episodeList.map((episode, index) => (
                        <Link key={`Episode ${index}`} href={`/watch?id=${animeId}&epId=${episode.id}`} className={clsx(' transition-all duration-500', {'flex items-center gap-2 py-4' : view === 'List', 'flex flex-col gap-2' : view === 'Grid'})}>
                            <div className={clsx('relative', {'w-1/4 h-[12vw]' : view === 'List', 'w-full h-[15vw]' : view === 'Grid'})}>
                                <Image
                                    src={episode.image as string}
                                    alt={episode.title as string}
                                    fill
                                    quality={75}
                                    className='object-cover rounded-sm'
                                />
                            </div>

                            <div className='flex flex-col'>
                                <p className={clsx('text-ellipsis', {'line-clamp-1' : view === 'List', 'line-clamp-2 text-sm' : view === 'Grid'})}>
                                    {episode.number}. {episode.title}
                                </p>
                                <p className={clsx('text-gray-400', {'text-sm' : view === 'List', 'text-xs' : view === 'Grid'})}>
                                    {episode.releaseDate}
                                </p>
                            </div>
                            
                        </Link>
                    ))
                )}
            </article>

            <Link href={`/anime/episodes?id=${animeId}`} className={clsx('bg-accent text-sm p-2 rounded-lg flex gap-1 items-center self-end w-fit', {'hidden' : pathname === 'episodes'})}>
                See All Episodes
                <ChevronRightIcon className='h-6 w-6' />
            </Link>
        </section>
    )
}