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

const NewsDetails = () => {
  return (
    <section className="py-4">
      <div className="flex flex-col gap-y-2">
        <h2 className="text-2xl font-semibold">
          वोट चोरी के आरोपों को लेकर चुनाव आयोग
        </h2>
        <div className="flex items-center gap-1">
          <FiCalendar size={18} />
          <p>16 August 2025</p>
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

        <p className="text-base font-normal mt-2">
          {" "}
          ओम प्रकाश मित्तल अखिल भारतीय पूर्व राष्ट्रीय अध्यक्ष व पूर्वी व
          पूर्वोत्तर भारत के प्रभारी - लघु उद्योग भारती से आपकी आवाज के मुख्य
          संपादक अरुण कूलवाल ने MSME उद्योग नीति, जीएसटी सरलीकरण, आपातकाल और
          आरएसएस को लेकर विस्तार से की चर्चा चर्चा के मुख्य बिंदु - लघु उद्योग
          भारती की भूमिका व विजन, मार्बल इंडस्ट्री लघु उद्योग मंत्रालय का गठन
          प्रदेश व देशभर MSME की इकाइयां व उनके अधिकार MSME अधिनियम में संशोधन
          एमएसएमई पर्यावरण नीति एमएसएमई को वित्तीय सहायता, तकनीकी चुनौतियां पर
          चर्चा... विभिन्न राज्यों/केंद्र शासित प्रदेशों में एमएसएमई क्लस्टरों
          का वित्तपोषण MSMEs क्षेत्र में उद्यमिता और कौशल विकास एमएसएमई खनन
          उद्योग की योजना, और पर्यावरण प्रबंधन नीति अंतर्राष्ट्रीय स्तर पर भारत
          की भूमिका राष्ट्रनिर्माण में आरएसएस की भूमिका !!!
        </p>
      </div>
    </section>
  );
};

export default NewsDetails;
