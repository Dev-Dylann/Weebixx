import { Metadata, ResolvingMetadata } from 'next'
import { searchAnime } from "@/app/lib/anilist"
import { montserrat } from "@/app/ui/fonts"
import Pagination from "../components/Pagination"
import Grid from "@/app/components/Grid"

type Props = {
    searchParams: {
        query: string,
        page?: string
    }
}

export async function generateMetadata({searchParams}: Props, parent: ResolvingMetadata): Promise<Metadata> {
    const { query } = searchParams

    return {
        title: `Searching for "${query}" in anime`,
    }
}

export default async function SearchAnimePage({ searchParams }: Props) {
    const { query, page } = searchParams

    const data = await searchAnime(query, page as string ?? '1')

    return (
        <section className="px-5 flex flex-col gap-3">
            <h2 className={`${montserrat.className} font-bold`}>Results for &#39;{query}&#39; in anime</h2>

            <Grid itemsArray={data.results} link={'anime'} />

            <Pagination hasNextPage={data?.hasNextPage as boolean} />
        </section>
    )
}