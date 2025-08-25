import Image from "next/image";
import Link from "next/link";
import { FaStar, FaRegStar, FaHeart, FaBookOpen } from "react-icons/fa";

const BookCard = () => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden">
      <div className="h-36 overflow-hidden">
        <Image
          src="/assets/images/book-image.jpg"
          width={320}
          height={480}
          className="object-cover"
          alt="book image"
        />
      </div>

      <div className="p-3">
        <h1 className="text-base font-semibold">Business Strategies 2024</h1>
        <p className="text-sm text-gray-600">By John Doe</p>
        <p className="text-xs text-gray-400">Published: Jan 2024</p>

        {/* ⭐ Rating */}
        <div className="flex items-center text-yellow-500 text-sm mt-1">
          <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
          <span className="ml-2 text-gray-600">(4.0)</span>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-3">
          <Link
            href="/ebooks/1"
            className="flex items-center gap-1 text-blue-600 text-sm font-medium"
          >
            <FaBookOpen /> Read Now
          </Link>

          <button className="flex items-center gap-1 text-red-500 text-sm">
            <FaHeart /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
