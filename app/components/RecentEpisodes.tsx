import { montserrat } from "../ui/fonts"

import anilist, {fetchTrending, fetchRecent} from "../lib/anilist"
import Grid from "./Grid"

export default async function RecentEpisodes() {
    /* const recentEpisodes = await anilist.fetchRecentEpisodes("gogoanime", 1, 24) */
    const recentEpisodes = await fetchRecent()

    console.log(recentEpisodes)

    return (
        <section className="px-5 flex flex-col gap-3">
            <h2 className={`${montserrat.className} font-bold`}>Recent Anime Releases</h2>

            <Grid itemsArray={recentEpisodes.results} link={"episode"} />
        </section>
    )
}