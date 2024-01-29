import { montserrat } from "./fonts"

type Props = {
    title: string,
}

const shimmer = 'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'

const mappish = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function Item() {
    return (
        <div className={`${shimmer} relative overflow-hidden rounded-md bg-gray-100 shadow-md h-48`}>

        </div>
    )
}

export default function GridSkeleton({ title }: Props) {
    return (
        <section className="flex flex-col gap-3">
            <h2 className={`${montserrat.className} font-bold`}>{title}</h2>

            <article className='grid grid-cols-3 gap-3'>
                {mappish.map((item, index) => (
                    <Item key={`Skeleton${index}`} />
                ))}
            </article>
        </section>
    )
}