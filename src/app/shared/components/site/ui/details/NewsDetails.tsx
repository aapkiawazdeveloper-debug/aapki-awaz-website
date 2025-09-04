import { News } from "@/app/shared/types/news";
import Link from "next/link";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

const NewsDetails: React.FC<{ news: News }> = ({ news }) => {
  console.log("news data", news);

  return (
    <section className="py-4">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold">{news.news_name}</h2>
        <div className="flex items-center gap-1">
          <FiCalendar size={18} />
          <p>
            {new Date(news.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>

        <div className="flex gap-1.5 mt-2">
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

        <iframe
          className="w-full mt-2"
          width="560"
          height="800"
          src="https://www.youtube.com/embed/psyZHwBx9Cg?si=XLl7dgw1kprxPki5"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />

        <p className="text-base font-normal mt-2">{news.news_desc}</p>
      </div>
    </section>
  );
};

export default NewsDetails;
