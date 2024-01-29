"use client"

import Link from "next/link"
import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

type ErrorProps = {
    error: Error & { digest?: string },
    reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
    console.log(error)

    return (
        <article className='text-center py-10 px-5 flex flex-col gap-4 items-center sm:py-20'>
            <ExclamationCircleIcon className='h-16 w-16 dark:stroke-white sm:h-20 sm:w-20' />

            <p className='text-xl font-bold font-montserrat dark:text-white sm:text-2xl'>{error.message}</p>

            <button className='bg-accent rounded-md p-2 dark:text-[#1a1a1a]' onClick={() => reset()}>
                Retry
            </button>

            <Link href='/' className='text-gray-400 -mt-2 underline sm:no-underline sm:hover:underline sm:text-lg'>Back to Homepage</Link>
        </article>
    )
}