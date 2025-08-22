"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const CategoryNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#ccc]">
            <nav className="px-4 py-2">
                <div className="flex justify-end items-center md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        <AiOutlineMenu className="text-white" size={24} />
                    </button>
                </div>

                <div className={`transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible ${isOpen ? "max-h-[500px]" : "max-h-0"} md:max-h-none`}>
                    <ul className="flex flex-col md:flex-row md:items-center gap-4 py-2 md:py-0">
                        <li>
                            <Link href="/" className="text-[#0000ff] text-sm font-poppins">Home</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[#0000ff] text-sm font-poppins">Leader of Rajasthan</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[#0000ff] text-sm font-poppins">Entertainment</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[#0000ff] text-sm font-poppins">City News</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[#0000ff] text-sm font-poppins">More News</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[#0000ff] text-sm font-poppins">Business / Profession Directory</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[#0000ff] text-sm font-poppins">Religion</Link>
                        </li>
                        <li>
                            <Link href="/" className="text-[#0000ff] text-sm font-poppins">Political Party</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default CategoryNavbar;
