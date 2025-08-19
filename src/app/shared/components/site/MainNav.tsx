import Link from "next/link"

const MainNav = () => {
    return (
        <div className="bg-[#77a22f] py-2">
            <nav className="container mx-auto px-4">
                <ul className="flex items-center gap-6">
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-helvetica">Home</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-helvetica">Reporter</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-helvetica">Business Associates</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-helvetica">Member of Parliament - MP</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-helvetica">MLA of Rajasthan</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-helvetica">Panchayat Samiti - Pradhan</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-helvetica">Video Interview</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-helvetica">Business News</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNav
