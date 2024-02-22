import { fetchAnimeInfo } from "@/app/lib/anilist"
import MediaInfo from "../components/MediaInfo"
import EpisodeList from "./components/EpisodeList"
import { IAnimeEpisode, ITitle } from "@consumet/extensions"

type Props = {
    searchParams: {
        id: string,
    }
}

export default async function AnimeInfo({ searchParams }: Props) {

    const { id } = searchParams

    const animeInfo = await fetchAnimeInfo(id)

    return (
        <main>
            <MediaInfo media='anime' mediaInfo={animeInfo} />

            <EpisodeList animeId={id} episodes={animeInfo.episodes as IAnimeEpisode[]} />
        </main>
    )
}