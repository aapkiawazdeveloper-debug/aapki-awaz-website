"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const MainNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#337ab7]">
            <nav className="container mx-auto px-4 py-2">
                {/* Mobile Header */}
                <div className="flex justify-end items-center md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <AiOutlineMenu className="text-[#0000ff]" size={24} />
                    </button>
                </div>

                {/* Menu List */}
                <div className={`transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible ${isOpen ? "max-h-[500px]" : "max-h-0"} md:max-h-none`}>
                    <ul className="flex flex-col md:flex-row md:items-center gap-4 py-2 md:py-0">
                        <li>
                            <Link href="/" className="text-white text-sm font-poppins">Home</Link>
                        </li>
                        <li><Link href="/" className="text-white text-sm font-poppins">Reporter</Link></li>
                        <li><Link href="/" className="text-white text-sm font-poppins">Business Associates</Link></li>
                        <li><Link href="/" className="text-white text-sm font-poppins">Member of Parliament - MP</Link></li>
                        <li><Link href="/" className="text-white text-sm font-poppins">MLA of Rajasthan</Link></li>
                        <li><Link href="/" className="text-white text-sm font-poppins">Panchayat Samiti - Pradhan</Link></li>
                        <li><Link href="/" className="text-white text-sm font-poppins">Video Interview</Link></li>
                        <li><Link href="/" className="text-white text-sm font-poppins">Business News</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default MainNav;
