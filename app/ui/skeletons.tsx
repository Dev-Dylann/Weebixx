import { montserrat } from "./fonts"

type Props = {
    title: string,
}

const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

const mappish = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function GridItem() {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 shadow-md h-48`}>

        </div>
    )
}

function GridSkeleton({ title }: Props) {
    return (
        <section className="flex flex-col gap-3">
            <h2 className={`${montserrat.className} font-bold`}>{title}</h2>

            <article className='grid grid-cols-3 gap-3'>
                {mappish.map((item, index) => (
                    <GridItem key={`Skeleton${index}`} />
                ))}
            </article>
        </section>
    )
}

function MediaInfoSkeleton() {
    return (
        <section className='relative p-5 flex flex-col'>
            <div className={`${shimmer} absolute top-0 left-0 w-full h-[40vh] overflow-hidden bg-gray-100`}>

                <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-white/50 to-white'></div>
            </div>

            <article className='relative pt-40 flex flex-col gap-2 items-center text-center'>
                <div className={`${shimmer} relative overflow-hidden rounded-lg bg-gray-100 w-1/3 h-[25vh] maax-h-[200px]`}></div>

                <div className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 h-10 w-1/2`}></div>

                <div className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 w-3/5 h-8`}></div>

                <div className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 w-3/5 h-8`}></div>

                <div className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 mt-2 h-40 w-full`}></div>
            </article>
        </section>
    )
}

function EpisodesSkeleton() {
    return (
        <section className='py-8 px-5 flex flex-col gap-3'>
            <h2 className={`${montserrat.className} font-medium`}>All Episodes</h2>

            <article className='flex flex-col gap-3'>
                {mappish.map((item, index) => (
                    <div key={`skeleton${index}`} className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 h-[20vw]`}></div>
                ))}

            </article>
        </section>
    )
}

export {GridSkeleton, MediaInfoSkeleton, EpisodesSkeleton}