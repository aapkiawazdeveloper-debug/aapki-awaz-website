import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMapPin, FiUser } from "react-icons/fi";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaWhatsapp,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const PoliticianCard = () => {
  return (
    <div className="relative group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md flex flex-col sm:flex-row items-center sm:items-stretch hover:shadow-xl transition">
      {/* Image */}
      <Image
        src="/assets/images/MoolChand_Meena.jpg"
        width={196}
        height={226}
        className="object-cover"
        alt="Moolchand Meena profile"
      />

      {/* Content */}
      <div className="px-4 py-3 w-full">
        {/* Name */}
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FiUser className="text-gray-600" />
          Moolchand Meena
        </h2>

        {/* Location */}
        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
          <FiMapPin className="text-gray-400" />
          Jaipur
        </p>

        {/* Role Badge */}
        <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
          Zila Pramukh
        </span>

        {/* Phone Numbers */}
        <div className="mt-3 space-y-1">
          <Link
            href="tel:+919414970299"
            className="flex items-center gap-2 text-xs text-gray-400 font-medium hover:underline"
          >
            <FiPhone /> +91 9414970299
          </Link>
          <Link
            href="tel:+917597034566"
            className="flex items-center gap-2 text-xs text-gray-400 font-medium hover:underline"
          >
            <FiPhone /> +91 7597034566
          </Link>
        </div>

        {/* Action Button */}
        <div className="mt-7">
          <Link
            href="/profile/moolchand-meena"
            className="block px-4 py-1 text-center w-full text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer"
          >
            View Profile
          </Link>
        </div>
      </div>

      {/* Social Media Icons - Vertical Right Side */}
      <div className="absolute top-0 right-0 px-2 pt-1 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
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
    </div>
  );
};

export default PoliticianCard;
