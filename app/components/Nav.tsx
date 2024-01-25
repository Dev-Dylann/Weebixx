import { useState, useEffect } from 'react'
import Link from 'next/link'
import toProperCase from '../lib/properCase'
import { SunIcon, MoonIcon, Cog6ToothIcon, QuestionMarkCircleIcon, BookmarkIcon } from '@heroicons/react/24/outline'
import { montserrat } from '../ui/fonts'

type NavProps = {
    navStatus: boolean
}

type NavLinksType = {
    [index: string]: any
}

const navLinks: NavLinksType = {
    preferences: Cog6ToothIcon,
    library: BookmarkIcon,
    disclaimer: QuestionMarkCircleIcon,
}

function NavLinks({keyName, Icon}: NavLinksType) {
    return (
        <li className='py-2 flex items-center gap-2'>
            <Link href={`/${keyName}`} className={`${montserrat.className} font-medium`}>
                <Icon className='h-7 w-7 inline mr-2' />
                {toProperCase(keyName)}
            </Link>
        </li>
    )
}

export default function Nav({ navStatus }: NavProps) {
    const [isDark, setIsDark] = useState(false)

    useEffect(() => {
        const handleThemeToggle = () => {
            if (isDark) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
        }

        handleThemeToggle()
    }, [isDark])

    return (
        <aside className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[5] -translate-x-full transition-all duration-500' style={ navStatus ? { transform: "translateX(0)" } : {} } >
            <nav className="h-full w-[60%] bg-white flex flex-col gap-8 px-6 pt-24 dark:text-white dark:bg-background-dark">
                <div className='flex justify-around items-center'>
                    <SunIcon className='h-8 w-8' />

                    <button onClick={() => setIsDark(prev => !prev)} className='w-[72px] h-8 rounded-full relative bg-accent'>
                      <div className='absolute h-7 w-7 rounded-full bg-white dark:bg-background-dark top-[1.5px] transition-all duration-300 left-0.5' style={isDark ? {transform: 'translateX(40px)'} : {}}></div>
                    </button>

                    <MoonIcon className='h-8 w-8' />
                </div>

                <ul className="text-lg flex flex-col gap-4">
                    {Object.keys(navLinks).map((navLink, index) => (
                        <NavLinks key={`${index}. ${navLink}`} keyName={navLink} Icon={navLinks[navLink]} />
                    ))}
                </ul>
            </nav>
        </aside>
    )
}