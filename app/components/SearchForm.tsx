import {useState} from 'react'
import Link from 'next/link'

import { Dispatch, SetStateAction, FormEvent } from 'react'

type Prop = {
    setSearch: Dispatch<SetStateAction<boolean>>,
}

export default function SearchForm({ setSearch }: Prop) {
    const [query, setQuery] = useState('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setSearch(false)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="absolute w-full h-full top-0 left-0 p-5 pr-16 z-[6] flex items-center gap-3 bg-white dark:bg-background-dark dark:text-[#1a1a1a]">
           <label htmlFor="search" className='absolute -left-[10000px]'>Search anime or manga...</label>

           <input type="text" id='search' placeholder='Search anime or manga' autoFocus value={query} onChange={(e) => setQuery(e.target.value)} className='grow rounded-lg px-3 py-1 border border-background-dark' />

           <Link href={`/search/anime?query=${query}`} className="font-bold bg-accent px-3 py-1 rounded-md">
            <button type="submit">
                Search
            </button>
           </Link>
        </form>
    )
}