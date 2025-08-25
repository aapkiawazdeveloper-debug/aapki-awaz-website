import Image from "next/image";
import { FaStar, FaRegStar, FaHeart } from "react-icons/fa";

type PageProps = {
  params: {
    id: string;
  };
};

const BookDetailsPage = () => {
  const book = {
    id: 1,
    title: "Business Strategies 2024",
    author: "John Doe",
    published: "Jan 2024",
    rating: 4,
    cover: "/assets/images/book-image.jpg",
    content: `
      Chapter 1: Introduction to Business Strategies
      ------------------------------------------------
      In today's competitive market, businesses must adapt...

      Chapter 2: Market Analysis
      ------------------------------------------------
      Understanding your customers and competitors...

      Chapter 3: Digital Transformation
      ------------------------------------------------
      Companies that embrace technology are seeing better growth...
    `,
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
          <p className="text-gray-600 mt-2">By {book.author}</p>
          <p className="text-sm text-gray-400">Published: {book.published}</p>

          {/* ⭐ Rating */}
          <div className="flex items-center text-yellow-500 text-lg mt-3">
            {[...Array(5)].map((_, i) =>
              i < book.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
            )}
            <span className="ml-2 text-gray-600">({book.rating}.0)</span>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-5">
            <button className="flex items-center gap-2 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition cursor-pointer">
              <FaHeart /> Save
            </button>
          </div>
        </div>
      </div>

      {/* Reader Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">Read the Book</h2>
        <div className="bg-white shadow p-5 rounded-lg max-h-[600px] overflow-y-scroll leading-relaxed text-gray-800 whitespace-pre-line">
          {book.content}
        </div>
      </div>
    </>
  );
};

export default BookDetailsPage;