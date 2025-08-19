"use client";
import React from "react";

const BreakingNews: React.FC<{ news: string[] }> = ({ news }) => {
    // Duplicate news array so it can scroll seamlessly
    const headlines = [...news, ...news];

    return (
        <div className="flex items-center overflow-hidden bg-[#757575] h-10">
            {/* Left Label */}
            <div className="bg-[#0000ff] text-white px-6 font-medium text-base h-full min-w-40 text-center flex items-center">
                Breaking News
            </div>

            {/* Marquee Scroller */}
            <div className="flex-1 overflow-hidden relative">
                <div className="flex whitespace-nowrap animate-marquee">
                    {headlines.map((item, index) => (
                        <span key={index} className="mx-8 text-white">
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BreakingNews;
