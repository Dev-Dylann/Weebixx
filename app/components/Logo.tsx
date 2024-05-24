import Link from "next/link"
import Image from "next/image"
import WeebixxLogo from "@/public/logo.png"
import WeebixxDarkLogo from "@/public/logo-dark.png"

export default function Logo() {

    return (
        <Link href="/">
            <Image
                src={WeebixxLogo}
                alt="Weebixx Logo"
                priority
                className='max-w-[125px]'
            />
        </Link>
    )
}