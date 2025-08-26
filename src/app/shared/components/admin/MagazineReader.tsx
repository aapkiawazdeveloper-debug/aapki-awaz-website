"use client";

import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type MagazinePage = { cover: string };
type MagazineReaderProps = { magazines: MagazinePage[] };

const MagazineReader: React.FC<MagazineReaderProps> = ({ magazines }) => {
  const bookRef = useRef<any>(null); // <-- Use any for forwardRef
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => bookRef.current?.flipNext?.();
  const handlePrev = () => bookRef.current?.flipPrev?.();
  const onPageChange = (e: any) => setCurrentPage(e.data);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="relative">
        <HTMLFlipBook
          ref={bookRef}
          width={400}
          height={600}
          minWidth={315}
          maxWidth={1000}
          minHeight={420}
          maxHeight={1350}
          startPage={0}
          size="fixed"
          drawShadow
          flippingTime={700}
          useMouseEvents
          showCover
          mobileScrollSupport
          usePortrait
          startZIndex={0}
          autoSize={false}
          clickEventForward
          showPageCorners
          swipeDistance={30}
          disableFlipByClick={false}
          maxShadowOpacity={0.5}
          onFlip={onPageChange}
          className="shadow-lg"
          style={{}}
        >
          {magazines.map((mag, index) => (
            <div
              key={index}
              className="bg-white flex items-center justify-center overflow-hidden"
            >
              <img
                src={mag.cover}
                alt={`Page ${index + 1}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="mt-3 text-gray-600">
        Page {currentPage + 1} of {magazines.length}
      </div>
    </div>
  );
};

export default MagazineReader;
