import { META } from "@consumet/extensions";
import { cache } from "react";

const anilist = new META.Anilist()

export default anilist

const fetchTrending = cache( async () => {
    try {
        const response = await anilist.fetchTrendingAnime(1, 10)

        return response
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch")
    }
})

const fetchRecent = cache( async () => {
    try {
        const response = await anilist.fetchRecentEpisodes("gogoanime", 1, 24)

        return response
    } catch(err) {
        console.log(err)
        throw new Error("Failed to fetch")
    }
})

export {fetchTrending, fetchRecent}