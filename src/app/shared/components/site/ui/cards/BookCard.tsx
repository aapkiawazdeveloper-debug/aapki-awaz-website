import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaBookOpen } from "react-icons/fa";

const BookCard = () => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <Link href="/ebooks/1">
        <Image
          src="/assets/magazine/Chandra_Raj_Singhvi_2024_Magazine/Chandra Raj Singhvi - Book - 0.jpg"
          width={2404}
          height={3304}
          className="object-cover"
          alt="book image"
        />
      </Link>

      <div className="p-3">
        <Link href="/ebooks/1" className="text-base font-semibold">
          Vaishya Bharati Patrika June 2022
        </Link>
        {/* <p className="text-sm text-gray-600">By John Doe</p> */}
        <p className="text-sm text-gray-400">
          A comprehensive magazine covering various.
        </p>
        <p className="text-xs text-gray-400 mt-1">Published: Jan 2024</p>

        {/* ⭐ Rating */}
        {/* <div className="flex items-center text-yellow-500 text-sm mt-1">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
          <span className="ml-2 text-gray-600">(4.0)</span>
        </div> */}

        {/* Buttons */}
        <div className="flex justify-between items-center mt-3">
          <Link
            href="/ebooks/1"
            className="flex items-center gap-1 text-blue-600 text-sm font-medium"
          >
            <FaBookOpen /> Read Now
          </Link>

          <button className="flex items-center gap-1 text-red-500 text-sm cursor-pointer">
            <FaHeart /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
