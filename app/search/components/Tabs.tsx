"use client"

import Link from 'next/link'
import { useSearchParams, usePathname } from 'next/navigation'
import { clsx } from 'clsx'
import { montserrat } from "@/app/ui/fonts"

export default function Tabs() {
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const query = searchParams.get('query')

    return (
        <section className={`${montserrat.className} mx-5 pt-3 flex items-center justify-evenly gap-6 border-b dark:border-b-gray-700 dark:text-white`}>
            <Link href={`/search/anime?query=${query}`} className={clsx(' pb-1 px-4', {
                'border-b-2 border-accent font-bold text-[#1a1a1a] dark:text-white' : pathname.includes('anime'), 
                'text-[#9ca3af]' : !pathname.includes('anime')
            })}>
                Anime
            </Link>

            <Link href={`/search/manga?query=${query}`} className={clsx(' pb-1 px-4', {
                'border-b-2 border-accent font-bold text-[#1a1a1a]' : pathname.includes('manga'), 
                'text-[#9ca3af]' : !pathname.includes('manga')
            })}>
                Manga
            </Link>
        </section>
    )
}