type Props = {
    searchParams: {
        query: string
    }
}

export default function SearchManga({ searchParams }: Props) {
    const { query } = searchParams

    return (
        <h1>Searching for &#39;{query}&#39; in manga</h1>
    )
}