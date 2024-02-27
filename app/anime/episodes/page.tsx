import { fetchAnimeInfo } from "@/app/lib/anilist"

import EpisodeList from "../info/components/EpisodeList"
import { ITitle } from "@consumet/extensions"

type Props = {
    searchParams: {
        id: string,
    }
}

export default async function Episodes({ searchParams }: Props) {
    const { id } = searchParams

    const animeInfo = await fetchAnimeInfo(id)
    const title = animeInfo.title as ITitle
    
    return (
        <main>
            <EpisodeList animeId={id} episodes={animeInfo.episodes!} pathname="episodes" title={title.romaji} />
        </main>
    )
}