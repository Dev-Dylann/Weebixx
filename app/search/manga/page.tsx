type Props = {
    searchParams: {
        query: string
    }
}

export default function SearchManga({ searchParams }: Props) {
    const { query } = searchParams

    return (
        <h1>Searching for "{query}" in manga</h1>
    )
}