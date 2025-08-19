"use client";
import React from "react";
import Link from "next/link";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const Pagination = () => {
    return (
        <div className="flex items-center mt-6">
            <ul className="flex list-none p-0 m-0">
                <li>
                    <Link href="/page/1" className="px-3 py-1 border border-[#ddd] text-[#337ab7] hover:bg-gray-100 h-full flex items-center">
                        First
                    </Link>
                </li>

                <li>
                    <Link href="/page/prev" className="px-3 py-1 border border-[#ddd] text-[#337ab7] hover:bg-gray-100 h-full flex items-center">
                        <FiChevronsLeft />
                    </Link>
                </li>

                <li>
                    <Link href="/page/1" className="px-3 py-1 border border-[#ddd] bg-[#337ab7] text-white h-full flex items-center">
                        1
                    </Link>
                </li>
                <li>
                    <Link href="/page/2" className="px-3 py-1 border border-[#ddd] text-[#337ab7] hover:bg-gray-100 h-full flex items-center">
                        2
                    </Link>
                </li>
                <li>
                    <Link href="/page/3" className="px-3 py-1 border border-[#ddd] text-[#337ab7] hover:bg-gray-100 h-full flex items-center">
                        3
                    </Link>
                </li>
                <li>
                    <Link href="/page/4" className="px-3 py-1 border border-[#ddd] text-[#337ab7] hover:bg-gray-100 h-full flex items-center">
                        4
                    </Link>
                </li>

                <li>
                    <Link href="/page/next" className="px-3 py-1 border border-[#ddd] text-[#337ab7] hover:bg-gray-100 h-full flex items-center">
                        <FiChevronsRight />
                    </Link>
                </li>

                <li>
                    <Link href="/page/last" className="px-3 py-1 border border-[#ddd] text-[#337ab7] hover:bg-gray-100 h-full flex items-center">
                        Last
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Pagination;
