import { News } from "@/app/api/news/types";
import Link from "next/link";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const ArticleCard: React.FC<{ isSocialMedia?: boolean; newsData?: News }> = ({
  isSocialMedia = false,
}) => {
  return (
    <div className="shadow-sm">
      <iframe
        className="w-full h-auto"
        width="560"
        height="800"
        src="https://www.youtube.com/embed/psyZHwBx9Cg?si=XLl7dgw1kprxPki5"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <div className="p-3">
        <Link
          href="/news/1"
          className="font-helvetica font-semibold text-md text-black hover:text-[#C13B3C] transition-colors duration-300 ease-in-out"
        >
          वोट चोरी के आरोपों को लेकर चुनाव आयोग के खिलाफ कांग्रेस ने किया विरोध
          प्रदर्शन
        </Link>
        <p className="font-helvetica text-base pt-1">
          राजस्थान कांग्रेस कमेटी द्वारा प्रदेशाध्यक्ष गोविन्द सिंह डोटासरा के
          नेतृत्व में आज राजधानी जयपुर में 'वोट चोरी' और चुनावी
          प्रक्रिया........
        </p>

        {isSocialMedia && (
          <div className="flex items-center gap-1.5 transition-all duration-300 pt-2">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-1 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="https://plus.google.com"
              target="_blank"
              className="p-1 bg-red-600 text-white rounded-full hover:bg-red-700"
            >
              <FaGooglePlusG size={14} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="p-1 bg-sky-500 text-white rounded-full hover:bg-sky-600"
            >
              <FaTwitter size={14} />
            </Link>
            <Link
              href="https://wa.me/919414970299"
              target="_blank"
              className="p-1 bg-green-500 text-white rounded-full hover:bg-green-600"
            >
              <FaWhatsapp size={14} />
            </Link>
            <Link
              href="https://pinterest.com"
              target="_blank"
              className="p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <FaPinterestP size={14} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-1 bg-blue-700 text-white rounded-full hover:bg-blue-800"
            >
              <FaLinkedinIn size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
