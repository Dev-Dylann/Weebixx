import Link from "next/link"
import Image from "next/image"

import { IAnimeResult, IMangaResult, ITitle } from "@consumet/extensions"

type GridProps = {
    itemsArray: (IAnimeResult | IMangaResult)[],
    link: "anime" | "manga" | "episode"
}

export default function Grid({itemsArray, link}: GridProps) {
    return (
        <article className="grid grid-cols-3 gap-3">
            {itemsArray.map((item, index) => {
                const title = item.title as ITitle

                return (
                    <Link key={`${index}. ${item.id}`} href="" className="min-h-48 relative flex flex-col gap-2 rounded-md">
                        <Image 
                            src={item.image as string}
                            alt={`${title?.romaji}`}
                            fill
                            sizes="33vw"
                            className="rounded-md shadow-md object-cover roundeed-md"
                        />
                        
                        <p className='p-1 bg-accent absolute top-2 right-2 text-xs rounded-md dark:text-[#1a1a1a] '>Ep. {item.episodeNumber}</p>

                        <div className="z-[2] flex items-end p-2 h-full bg-gradient-to-t from-black/70 from-20%">
                            <p className='text-sm text-white line-clamp-2 text-ellipsis'>{title?.romaji}</p>
                        </div>
                       
                    </Link>
            )})}
        </article>
    )
}