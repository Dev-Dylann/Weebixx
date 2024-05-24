import Link from 'next/link'

import { montserrat } from '@/app/ui/fonts'
import anilist, { fetchAnimeInfo, fetchEpisodeLinks } from "@/app/lib/anilist"
import VideoPlayer from "./components/VideoPlayer"
import { IAnimeEpisode, ITitle } from "@consumet/extensions"

type Props = {
    searchParams: {
        id: string,
        epId: string,
    }
}

export const getCurrentEpisode = (id: string, episodes: IAnimeEpisode[]) => {
    const current = episodes.find(episode => {
        return episode.id === id
    })

    const currentIndex = episodes.indexOf(current!)
    
    if (currentIndex === 0) {
        const prev = undefined
        const next = episodes[currentIndex + 1]

        return {prev, current, next}
    } else if (currentIndex === episodes.length - 1) {
        const prev = episodes[currentIndex - 1]
        const next = undefined

        return {prev, current, next}
    }

    const prev = episodes[currentIndex - 1]
    const next = episodes[currentIndex + 1]

    return {prev, current, next}
}

export default async function WatchEpisode({ searchParams }: Props) {

    const { id, epId } = searchParams

    const animeInfo = await fetchAnimeInfo(id)
    const title = animeInfo.title as ITitle

    const {prev, current, next} = getCurrentEpisode(epId, animeInfo.episodes!)

    const {sources} = await anilist.fetchEpisodeSources(epId)

    return (
        <main className='flex flex-col gap-4'>
            <section className='px-5 py-4 flex flex-col gap-3'>
                <article className={`${montserrat.className} flex flex-col items-center gap-1`}>
                    <h2 className='underline font-medium'><Link href={`/anime/info?id=${id}`}>
                        {title.romaji}
                    </Link></h2>
                    <p>Episode {current?.number}</p>
                </article>

                <VideoPlayer epId={epId} episodeLinks={sources} episodes={animeInfo.episodes!} />

                <div className='flex justify-between items-center'>
                    <Link href={`/anime/watch?id=${animeInfo.id}&epId=${prev?.id}`}>

                    </Link>
                </div>
            </section>
        </main>
    )
}