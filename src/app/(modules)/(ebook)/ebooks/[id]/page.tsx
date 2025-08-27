"use client";

import Image from "next/image";
import {
  FiArrowRight,
  FiArrowLeft,
  FiColumns,
  FiGrid,
  FiPlus,
  FiMinus,
} from "react-icons/fi";
import HTMLFlipBook from "react-pageflip";
import { useRef, useState, useEffect } from "react";

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

  const onPageFlip = (e: any) => {
    setCurrentPage(e.data);
    if (pageFlipSound.current) {
      pageFlipSound.current.currentTime = 0;
      pageFlipSound.current.play().catch(() => {});
    }
  };

  const toggleSingleDoublePage = (single: boolean) => {
    setIsSinglePage(single);
    setPageZoom(Array(book.pages.length).fill(1));
    setOffset(Array(book.pages.length).fill({ x: 0, y: 0 }));
    setCurrentPage(0);
    setBookKey((prev) => prev + 1);
  };

  const handlePrev = () => bookRef.current?.pageFlip().flipPrev();
  const handleNext = () => bookRef.current?.pageFlip().flipNext();

  // Zoom functions (vertical only)
  const handleZoomIn = () => {
    if (!isSinglePage) toggleSingleDoublePage(true);

    const idx = currentPage;
    const newZoom = [...pageZoom];
    newZoom[idx] = Math.min(newZoom[idx] + 0.3, 3); // max 3x height
    setPageZoom(newZoom);

    const newOffset = [...offset];
    newOffset[idx] = { x: 0, y: Math.min(newOffset[idx].y, 0) };
    setOffset(newOffset);
  };

  const handleZoomOut = () => {
    const idx = currentPage;
    const newZoom = [...pageZoom];
    newZoom[idx] = Math.max(newZoom[idx] - 0.3, 1); // min 1x height
    setPageZoom(newZoom);

    if (newZoom[idx] === 1) {
      const newOffset = [...offset];
      newOffset[idx] = { x: 0, y: 0 }; // reset
      setOffset(newOffset);
      setIsDragging(false);
    }
  };

  // Dragging (vertical only)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      setIsDragging(true);
      setStartPos({
        x: e.clientX,
        y: e.clientY - offset[currentPage].y,
      });
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const newOffset = [...offset];
      let newY = e.clientY - startPos.y;
      if (newY > 0) newY = 0; // cannot drag down
      newOffset[currentPage] = { x: 0, y: newY }; // horizontal fixed
      setOffset(newOffset);
    }
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);
  const handlePageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) e.stopPropagation();
  };

  return (
    <div className="flex flex-col items-center w-full overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
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
          onClick={handleZoomIn}
          className="px-3 py-1.5 font-medium border rounded cursor-pointer text-sm flex items-center gap-2"
        >
          <FiPlus size={16} /> Zoom In
        </button>
        <button
          onClick={handleZoomOut}
          className="px-3 py-1.5 font-medium border rounded cursor-pointer text-sm flex items-center gap-2"
        >
          <FiMinus size={16} /> Zoom Out
        </button>
      </div>

      {/* Search Bar */}
      <div className="mt-5 w-full max-w-md">
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
        useMouseEvents={!isZoomed} // disable horizontal flip when zoomed
        disableFlipByClick={isZoomed} // disable click flip when zoomed
        swipeDistance={isZoomed ? 1000 : 30} // effectively disables swipe
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
          <FiArrowLeft size={16} />
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
          <FiArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
