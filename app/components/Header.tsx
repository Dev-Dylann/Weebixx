"use client"

import Image from "next/image";
import Link from "next/link";
import WeebixxLogo from "@/public/logo.png"
import WeebixxDarkLogo from "@/public/logo-dark.png"
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

import { useEffect, useState } from "react"; 
import Nav from "./Nav";
import SearchForm from "./SearchForm";

export default function Header() {
    const [navStatus, setNavStatus] = useState(false)
    const [search, setSearch] = useState(false)

    return (
        <header className="">
            <section className="relative px-5 py-3 flex justify-between items-center gap-5 bg-white dark:bg-background-dark">
                <button className='rounded-md z-[6]' onClick={() => setNavStatus(prev => !prev)}>
                    {navStatus ? <XMarkIcon className='h-7 w-7' /> : <Bars3Icon className='h-7 w-7' />}
                </button>

                <Nav navStatus={navStatus} />

                <Link href="/">
                    <Image
                        src={WeebixxLogo}
                        alt="Weebixx Logo"
                        priority
                        className='max-w-[125px]'
                    />
                </Link>

                <button className="rounded-md z-[7]" onClick={() => setSearch(prev => !prev)}>
                    {search ? <XMarkIcon className="h-7 w-7" /> : <MagnifyingGlassIcon className="h-6 w-6" />}
                </button>

                {search && <SearchForm setSearch={setSearch} />}
            </section>
        </header>
    )
}