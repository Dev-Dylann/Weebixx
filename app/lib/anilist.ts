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

const searchAnime = cache(async (query: string, page: string) => {
    try {
        const response = await anilist.search(query, Number(page), 24)

        return response
    } catch(err) {
        console.log(err)
        throw new Error(`No results found for ${query}`)
    }
})

const fetchAnimeInfo = cache(async (animeId: string) => {
    try {
        const response = await anilist.fetchAnimeInfo(animeId)

        return response
    } catch(err) {
        console.log(err)
        throw new Error('Couldn\'t find requested media')
    }
})

export {fetchTrending, fetchRecent, searchAnime, fetchAnimeInfo}