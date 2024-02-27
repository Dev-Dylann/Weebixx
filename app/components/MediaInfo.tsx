import Image from "next/image"
import { montserrat } from "@/app/ui/fonts"
import { IAnimeEpisode, IAnimeInfo, IMangaInfo, ITitle } from "@consumet/extensions"

type Props = {
    media: 'anime' | 'manga',
    mediaInfo: IAnimeInfo | IMangaInfo
}

export default function MediaInfo({ media, mediaInfo }: Props) {
    const title = mediaInfo.title as ITitle
    const episodes = mediaInfo.episodes as IAnimeEpisode[]

    return (
        <section className='relative p-5 flex flex-col'>
            <div className="absolute top-0 left-0 w-full h-[40vh]" style={{ backgroundColor: mediaInfo.color as string}}>
                <Image 
                    src={mediaInfo.cover as string}
                    alt={`${title.romaji}`}
                    fill
                    quality={75}
                    sizes="100vw"
                    className='object-cover object-center'
                />
                <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-white/50 to-white'></div>
            </div>

            <article className='relative pt-40 flex flex-col gap-2 items-center text-center'>
                <div className='relative w-1/3 h-[30vh] max-h-[200px]'>
                    <Image 
                        src={mediaInfo.image as string}
                        alt={`${title.romaji}`}
                        fill
                        quality={100}
                        className='rounded-lg'
                    />
                </div>

                <h2 className={`${montserrat.className} text-2xl font-bold`} title={title?.english}>
                    {title?.romaji}
                </h2>

                <p className='flex items-center gap-3 text-gray-400 text-lg'>
                    {media === 'anime' ? `${episodes.length} Episodes` : `${mediaInfo?.chapters?.length} Chapters`}
                    <span className='w-2 h-2 rounded-full bg-gray-400'></span>
                    {mediaInfo?.status}
                    <span className='w-2 h-2 rounded-full bg-gray-400'></span>
                    {mediaInfo?.type as string}
                </p>

                <p className='flex flex-wrap justify-center gap-3 mt-2'>
                    {mediaInfo.genres?.map((genre, index) => (
                        <span className='bg-accent text-[#1a1a1a] dark:border dark:border-accent dark:bg-transparent dark:text-white px-3 py-1 text-center rounded-full' key={`Genre ${index}`}>{genre}</span>
                    ))}
                </p>

                <p className='mt-2'>
                    {mediaInfo?.description as string}
                </p>
            </article>
        </section>
    )
}