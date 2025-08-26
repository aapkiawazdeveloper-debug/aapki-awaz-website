"use client";

import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import HTMLFlipBook from "react-pageflip";
import { useRef, useState, useEffect } from "react";

const BookDetailsPage = () => {
  const book = {
    pages: [
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - 0.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - 00.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - 000.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - 0000.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 1.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 2.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 3.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 4.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 5.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 6.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 7.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 8.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 9.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 10.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 11.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 12.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 13.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 14.jpg",
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - Page - 15.jpg",
    ],
  };

  const bookRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [bookWidth, setBookWidth] = useState(600);
  const [isSinglePage, setIsSinglePage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBookWidth(width * 0.9);
        setIsSinglePage(true); // ✅ Force single page
      } else {
        setBookWidth(Math.min(width * 0.8, 1000));
        setIsSinglePage(false); // double page
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => bookRef.current?.pageFlip().flipNext();
  const handlePrev = () => bookRef.current?.pageFlip().flipPrev();
  const onPageFlip = (e: any) => setCurrentPage(e.data);

  return (
    <div className="mt-10 flex flex-col items-center w-full px-2 overflow-hidden">
      <HTMLFlipBook
        width={bookWidth}
        height={bookWidth * 1.4}
        size={isSinglePage ? "fixed" : "stretch"} // ✅ fixed for single page
        minWidth={180}
        maxWidth={1000}
        minHeight={250}
        maxHeight={1400}
        maxShadowOpacity={0.5}
        showCover={true}
        mobileScrollSupport={true}
        onFlip={onPageFlip}
        ref={bookRef}
        className="shadow-lg rounded-lg w-full"
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={isSinglePage} // ✅ portrait mode = single page
        clickEventForward={true}
        startZIndex={0}
        autoSize={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        style={{ margin: "0 auto" }}
      >
        {book.pages.map((pageUrl, idx) => (
          <div
            key={idx}
            className="h-full w-full flex items-center justify-center"
          >
            <Image
              src={pageUrl}
              alt={`Page ${idx + 1}`}
              width={2404}
              height={3304}
              className="object-cover rounded-lg w-full h-full"
            />
          </div>
        ))}
      </HTMLFlipBook>

      {/* Page Controls */}
      <div className="flex items-center justify-center gap-6 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`p-2 rounded-full border cursor-pointer ${
            currentPage === 0
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          }`}
        >
          <FaArrowLeft size={16} />
        </button>

        <span className="text-gray-700 font-medium">
          {currentPage + 1} / {book.pages.length}
        </span>

        <button
          onClick={handleNext}
          disabled={currentPage === book.pages.length - 1}
          className={`p-2 rounded-full border cursor-pointer ${
            currentPage === book.pages.length - 1
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          }`}
        >
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
