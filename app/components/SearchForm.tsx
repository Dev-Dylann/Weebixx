import {useState} from 'react'
import Link from 'next/link'

export default function SearchForm() {
    const [query, setQuery] = useState('')

    return (
        <form onSubmit={(e) => e.preventDefault} className="absolute w-full h-full top-0 left-0 p-5 pr-16 z-[6] border border-red-700 flex items-center gap-3 bg-white dark:bg-background-dark">
           <label htmlFor="search" className='absolute -left-[10000px]'>Search anime or manga...</label>

           <input type="text" id='search' placeholder='Search anime or manga' autoFocus value={query} onChange={(e) => setQuery(e.target.value)} className='grow rounded-lg px-3 py-1 border border-background-dark' />

           <Link href={`/search/anime?query${query}`} className="font-bold bg-accent px-3 py-1 rounded-md">
            Search
           </Link>
        </form>
    )
}