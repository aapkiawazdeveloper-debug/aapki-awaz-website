"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const BreakingNews: React.FC<{ news: string[] }> = ({ news }) => {
    return (
        <div className="flex items-center overflow-hidden bg-[#757575] h-10">
            <div className="bg-[#0000ff] text-white px-6 font-medium text-base h-full min-w-40 text-center flex items-center">
                Breaking News
            </div>

            <div className="flex-1 text-white px-4">
                <Swiper
                    modules={[Autoplay, FreeMode]} freeMode={{ enabled: true, momentum: false }} loop={true} slidesPerView={"auto"} spaceBetween={50} autoplay={{
                        delay: 1, disableOnInteraction: false,
                    }} speed={5000} allowTouchMove={false}>
                    {news.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: "auto" }}>
                            <span className="whitespace-nowrap">{item}</span>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default BreakingNews;
