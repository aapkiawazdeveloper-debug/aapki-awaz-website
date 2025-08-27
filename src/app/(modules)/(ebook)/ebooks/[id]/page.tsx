"use client";

import Image from "next/image";
import {
  FiArrowRight,
  FiArrowLeft,
  FiColumns,
  FiGrid,
  FiPlus,
  FiMinus,
  FiRefreshCw,
} from "react-icons/fi";
import HTMLFlipBook from "react-pageflip";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import ArticleCard from "@/app/shared/components/site/ui/cards/ArticleCard";

const BookDetailsPage = () => {
  const bookRef = useRef<any>(null);
  const pageFlipSound = useRef<HTMLAudioElement | null>(null);

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

  const [currentPage, setCurrentPage] = useState(0);
  const [isSinglePage, setIsSinglePage] = useState(false);
  const [bookKey, setBookKey] = useState(0);
  const [bookWidth, setBookWidth] = useState(800);
  const [pageZoom, setPageZoom] = useState(Array(book.pages.length).fill(1));
  const [offset, setOffset] = useState(
    Array(book.pages.length).fill({ x: 0, y: 0 })
  );
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [autoSlideInterval, setAutoSlideInterval] = useState(3000); // 3 seconds

  const isZoomed = pageZoom[currentPage] > 1;

  // Load page flip sound
  useEffect(() => {
    pageFlipSound.current = new Audio("/assets/sound/page-flip.mp3");
    pageFlipSound.current.load();
  }, []);

  // Responsive default view
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setBookWidth(width * 0.9);
        setIsSinglePage(true);
      } else {
        setBookWidth(Math.min(width * 0.8, 1000));
        setIsSinglePage(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Page flip handler
  const onPageFlip = (e: any) => {
    setCurrentPage(e.data);
    if (pageFlipSound.current) {
      pageFlipSound.current.currentTime = 0;
      pageFlipSound.current.play().catch(() => {});
    }
  };

  // Toggle single/double page view
  const toggleSingleDoublePage = (single: boolean) => {
    setIsSinglePage(single);
    setPageZoom(Array(book.pages.length).fill(1));
    setOffset(Array(book.pages.length).fill({ x: 0, y: 0 }));
    setCurrentPage(0);
    setBookKey((prev) => prev + 1);
  };

  // Previous page
  const handlePrev = () => bookRef.current?.pageFlip().flipPrev();

  // Next page
  const handleNext = () => bookRef.current?.pageFlip().flipNext();

  // Zoom in
  const imageZoomIn = () => {
    if (!isSinglePage) toggleSingleDoublePage(true);
    const idx = currentPage;
    const newZoom = [...pageZoom];
    newZoom[idx] = Math.min(newZoom[idx] + 0.3, 3);
    setPageZoom(newZoom);
    const newOffset = [...offset];
    newOffset[idx] = { x: 0, y: Math.min(newOffset[idx].y, 0) };
    setOffset(newOffset);
  };

  // Zoom out
  const imageZoomOut = () => {
    const idx = currentPage;
    const newZoom = [...pageZoom];
    newZoom[idx] = Math.max(newZoom[idx] - 0.3, 1);
    setPageZoom(newZoom);
    if (newZoom[idx] === 1) {
      const newOffset = [...offset];
      newOffset[idx] = { x: 0, y: 0 };
      setOffset(newOffset);
      setIsDragging(false);
    }
  };

  // Dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      setIsDragging(true);
      setStartPos({ x: e.clientX, y: e.clientY - offset[currentPage].y });
    }
  };
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const newOffset = [...offset];
      let newY = e.clientY - startPos.y;
      if (newY > 0) newY = 0;
      newOffset[currentPage] = { x: 0, y: newY };
      setOffset(newOffset);
    }
  };
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);
  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) e.stopPropagation();
  };
  const handleResetZoom = () => {
    setPageZoom(Array(book.pages.length).fill(1));
    setOffset(Array(book.pages.length).fill({ x: 0, y: 0 }));
    setIsDragging(false);
  };

  // Auto-slide effect
  useEffect(() => {
    if (!autoSlideInterval) return;
    const interval = setInterval(() => {
      if (bookRef.current && currentPage < book.pages.length - 1) {
        bookRef.current.pageFlip().flipNext();
      } else if (bookRef.current) {
        bookRef.current.pageFlip().flip(0); // reset to first page
      }
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [currentPage, autoSlideInterval]);

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
        <button
          onClick={() => toggleSingleDoublePage(true)}
          className={`px-3 py-1.5 font-medium border rounded cursor-pointer text-sm flex items-center gap-2 ${
            isSinglePage ? "bg-blue-500 text-white" : ""
          }`}
        >
          <FiColumns size={16} /> Single Page
        </button>
        <button
          onClick={() => toggleSingleDoublePage(false)}
          className={`px-3 py-1.5 font-medium border rounded cursor-pointer text-sm flex items-center gap-2 ${
            !isSinglePage ? "bg-blue-500 text-white" : ""
          }`}
        >
          <FiGrid size={16} /> Double Page
        </button>
        <button
          onClick={imageZoomIn}
          className="px-3 py-1.5 font-medium border rounded cursor-pointer text-sm flex items-center gap-2"
        >
          <FiPlus size={16} /> Zoom In
        </button>
        <button
          onClick={imageZoomOut}
          className="px-3 py-1.5 font-medium border rounded cursor-pointer text-sm flex items-center gap-2"
        >
          <FiMinus size={16} /> Zoom Out
        </button>
        <button
          onClick={handleResetZoom}
          className="px-2.5 py-1.5 font-medium border rounded cursor-pointer text-sm flex items-center gap-2"
        >
          <FiRefreshCw size={16} /> Reset
        </button>
        <button
          onClick={() => setAutoSlideInterval(autoSlideInterval ? 0 : 3000)}
          className="px-3 py-1.5 font-medium border rounded cursor-pointer text-sm"
        >
          {autoSlideInterval ? "Stop Auto Slide" : "Start Auto Slide"}
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-3 w-full max-w-[756px]">
        <input
          id="searchInput"
          type="text"
          placeholder="Type to search..."
          className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring focus:ring-gray-300 focus:border-gray-300"
        />
      </div>

      {/* FlipBook */}
      <HTMLFlipBook
        key={bookKey}
        width={bookWidth}
        height={isSinglePage ? bookWidth * 1.5 : bookWidth * 1.4}
        size={isSinglePage ? "fixed" : "stretch"}
        minWidth={180}
        maxWidth={1000}
        minHeight={250}
        maxHeight={1500}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        onFlip={onPageFlip}
        ref={bookRef}
        className="!mt-3"
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={isSinglePage}
        clickEventForward={true}
        startZIndex={0}
        useMouseEvents={!isZoomed}
        disableFlipByClick={isZoomed}
        swipeDistance={isZoomed ? 1000 : 30}
        showPageCorners={true}
        autoSize={!isSinglePage}
        style={{ margin: "0 auto" }}
      >
        {book.pages.map((pageUrl, idx) => (
          <div
            key={idx}
            className="h-full w-full flex items-start justify-center overflow-hidden"
          >
            <div
              className="flex justify-center items-start cursor-grab"
              style={{
                width: "100%",
                height: "100%",
                transform: `scaleY(${pageZoom[idx]}) translateY(${
                  offset[idx].y / pageZoom[idx]
                }px)`,
                transformOrigin: "top center",
                transition: isDragging ? "none" : "transform 0.3s",
                cursor:
                  pageZoom[idx] > 1
                    ? isDragging
                      ? "grabbing"
                      : "grab"
                    : "default",
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              onClick={handlePageClick}
            >
              <Image
                src={pageUrl}
                alt={`Page ${idx + 1}`}
                width={2404}
                height={3304}
                style={{ maxWidth: "100%", height: "auto" }}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </HTMLFlipBook>

      {/* Page Controls */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          disabled={currentPage === 0}
          className={`p-2 rounded-full border cursor-pointer ${
            currentPage === 0
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          }`}
        >
          <FiArrowLeft size={16} />
        </button>

        {/* Go to page input */}
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={1}
            max={book.pages.length}
            value={currentPage + 1}
            onChange={(e) => {
              let page = parseInt(e.target.value, 10);
              if (isNaN(page)) return;
              page = Math.max(1, Math.min(page, book.pages.length));
              bookRef.current?.pageFlip().flip(page - 1);
            }}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring focus:ring-gray-300"
          />
          <span className="text-gray-700 font-medium">
            / {book.pages.length}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === book.pages.length - 1}
          className={`p-2 rounded-full border cursor-pointer ${
            currentPage === book.pages.length - 1
              ? "border-gray-300 text-gray-300 cursor-not-allowed"
              : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
          }`}
        >
          <FiArrowRight size={16} />
        </button>
      </div>

      {/* Social Links */}
      <div className="px-2 pt-6 flex gap-4 transition-all duration-300">
        <Link
          href="https://facebook.com"
          target="_blank"
          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        >
          <FaFacebookF size={16} />
        </Link>
        <Link
          href="https://plus.google.com"
          target="_blank"
          className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
        >
          <FaGooglePlusG size={16} />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600"
        >
          <FaTwitter size={16} />
        </Link>
        <Link
          href="https://wa.me/919414970299"
          target="_blank"
          className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
        >
          <FaWhatsapp size={16} />
        </Link>
        <Link
          href="https://pinterest.com"
          target="_blank"
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
        >
          <FaPinterestP size={16} />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
        >
          <FaLinkedinIn size={16} />
        </Link>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {Array(13)
          .fill(null)
          .map((_, index) => (
            <ArticleCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default BookDetailsPage;
