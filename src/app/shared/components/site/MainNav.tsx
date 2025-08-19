import Link from "next/link"

const MainNav = () => {
    return (
        <div className="bg-[#ccc] py-2">
            <nav className="container mx-auto px-4">
                <ul className="flex items-center gap-6">
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-poppins">Home</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-poppins">Reporter</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-poppins">Business Associates</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-poppins">Member of Parliament - MP</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-poppins">MLA of Rajasthan</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-poppins">Panchayat Samiti - Pradhan</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-poppins">Video Interview</Link>
                    </li>
                    <li>
                        <Link href="/" className="text-white text-sm font-normal font-poppins">Business News</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default MainNav
