import Link from "next/link";

const CategoryNavbar = () => {
    return (
        <div className="bg-[#F3F4F6] py-2">
            <nav className="container mx-auto px-4">
                <ul className="flex item-center gap-6">
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-poppins">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-poppins">
                            Leader of Rajasthan
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-poppins">
                            Entertainment
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-poppins">
                            City News
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-poppins">
                            More News
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-poppins">
                            Business / Profession Directory
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-poppins">
                            धर्म
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className="text-[#0000ff] text-sm font-normal font-poppins">
                            Political Party
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default CategoryNavbar;