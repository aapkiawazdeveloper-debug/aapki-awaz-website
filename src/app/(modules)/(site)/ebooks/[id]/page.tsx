"use client";

import Image from "next/image";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";
import HTMLFlipBook from "react-pageflip";
import { useRef, useState } from "react";

const BookDetailsPage = () => {
  const book = {
    id: 1,
    title: "Chandra Raj Singhvi 2024 Magazine",
    description:
      "A comprehensive magazine covering various topics including culture, history, and contemporary issues.",
    author: "John Doe",
    published: "Jan 2024",
    rating: 4,
    cover:
      "/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - 0.jpg",
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

  const handleNext = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const handlePrev = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  const onPageFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const flipBookProps: any = {
    width: 200,
    height: 300,
    size: "stretch",
    minWidth: 180,
    maxWidth: 400,
    minHeight: 250,
    maxHeight: 600,
    maxShadowOpacity: 0.5,
    showCover: true,
    mobileScrollSupport: true,
    onFlip: onPageFlip,
  };

  return (
    <>
      {/* Top Section */}
      <div className="grid grid-cols-12 items-center gap-6">
        <div className="col-span-3">
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <Image
              src={book.cover}
              alt={book.title}
              width={400}
              height={600}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>

        <div className="col-span-9">
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <p className="text-gray-600 mt-2">{book.description}</p>
          <p className="text-gray-600 mt-2">By {book.author}</p>
          <p className="text-sm text-gray-400">Published: {book.published}</p>

          <div className="flex items-center text-yellow-500 text-lg mt-3">
            {[...Array(5)].map((_, i) =>
              i < book.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
            )}
            <span className="ml-2 text-gray-600">({book.rating}.0)</span>
          </div>

          <div className="flex gap-4 mt-5">
            <button className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition cursor-pointer">
              <FaHeart /> Save
            </button>
          </div>
        </div>
      </div>

      {/* Page Flip Book */}
      <div className="mt-10 flex flex-col items-center">
        <HTMLFlipBook
          {...flipBookProps}
          className="shadow-lg rounded-lg"
          ref={bookRef}
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
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </HTMLFlipBook>

        {/* Page Controls */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 0}
            className={`px-4 py-2 rounded-lg border cursor-pointer ${
              currentPage === 0
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            }`}
          >
            Previous
          </button>

          <span className="text-gray-700">
            Page {currentPage + 1} of {book.pages.length}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === book.pages.length - 1}
            className={`px-4 py-2 rounded-lg border cursor-pointer ${
              currentPage === book.pages.length - 1
                ? "border-gray-300 text-gray-300 cursor-not-allowed"
                : "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default BookDetailsPage;
