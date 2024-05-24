"use client"

import { useState, useEffect, useRef } from 'react'
import Hls from 'hls.js'

import { IAnimeEpisode, IVideo } from "@consumet/extensions"

type Props = {
    epId: string,
    episodeLinks: IVideo[],
    episodes: IAnimeEpisode[],
}

export default function VideoPlayer({ epId, episodeLinks, episodes }: Props) {
    const [streamQuality, setStreamQuality] = useState('360p')
    const [streamLink, setStreamLink] = useState('')

    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        const link = episodeLinks.find(link => {
            return link.quality === streamQuality
        })

        setStreamLink(link?.url!)
    }, [streamQuality])

    useEffect(() => {
        const loadVideo = () => {
            if (Hls.isSupported()) {
                const hls = new Hls()
                hls.loadSource(streamLink)
                hls.attachMedia(videoRef.current!)

                return () => {
                    hls.destroy()
                }
            } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
                videoRef.current.src = streamLink
            }
        }

        if (streamLink) loadVideo()

    }, [streamLink])

    return (
        <article className='flex flex-col gap-2 items-center'>
            <video controls ref={videoRef} className='w-full'>
                <source src={streamLink} type="application/x-mpegURL" />
            </video>

            <select name="quality" id="quality" value={streamQuality} onChange={(e) => setStreamQuality(e.target.value)} className='bg-white px-2 border border-gray-400 rounded-md relative'>
                {episodeLinks?.map((link, index) => (
                    <option key={`link${index}`} value={link.quality} className=''>{link.quality}</option>
                ))}
            </select>
        </article>
    )
}