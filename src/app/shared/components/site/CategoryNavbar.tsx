import Link from "next/link";

const CategoryNavbar = () => {
    return (
        <div className="bg-[#ccc] py-2">
            <nav className="container mx-auto px-4">
                <ul className="flex item-center gap-6">
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-helvetica">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-helvetica">
                            Leader of Rajasthan
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-helvetica">
                            Entertainment
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-helvetica">
                            City News
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-helvetica">
                            More News
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-helvetica">
                            Business / Profession Directory
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-helvetica">
                            धर्म
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-helvetica">
                            Political Party
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default CategoryNavbar;