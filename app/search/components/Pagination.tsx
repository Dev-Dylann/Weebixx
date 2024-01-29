"use client"

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

type PaginationProps = {
    hasNextPage: boolean
}

export default function Pagination({ hasNextPage }: PaginationProps) {
    const searchParams = useSearchParams()
    const page = searchParams.get('page') ?? "1"

    const pathname = usePathname()
    const router = useRouter()

    const handlePrevPagination = () => {
        const params = new URLSearchParams(searchParams)

        if (page === '1') return null

        params.set('page', `${Number(page) - 1}`)

        router.push(`${pathname}?${params.toString()}`)
    }

    const handleNextPagination = () => {
        const params = new URLSearchParams(searchParams)

        if (!hasNextPage) return null

        params.set('page', `${Number(page) + 1}`)

        router.push(`${pathname}?${params.toString()}`)
    }

    return (
        <div className='mt-5 flex justify-between items-center'>
            <button disabled={page === "1"} className='p-2 rounded-lg bg-accent text-sm shadow-md dark:text-[#1a1a1a] disabled:invisible' onClick={handlePrevPagination} >
                <ChevronLeftIcon className='h-6 w-6 inline' />
                Previous Page
            </button>

            <button disabled={!hasNextPage} className='p-2 rounded-lg bg-accent text-sm shadow-md dark:text-[#1a1a1a] disabled:invisible' onClick={handleNextPagination} >
                Next Page
                <ChevronRightIcon className='h-6 w-6 inline' />
            </button>
        </div>
    )
}