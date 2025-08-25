import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiUser, FiMail } from "react-icons/fi";

const ProfileDetails = () => {
  return (
    <section>
      <div className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-xl border border-gray-200 shadow-md">
        {/* Profile Image */}
        <Image
          src="/assets/images/MoolChand_Meena.jpg"
          width={196}
          height={226}
          alt="political image"
          className="rounded-lg shadow"
        />

        {/* Profile Info */}
        <div>
          <h2 className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-2">
            <FiUser className="text-gray-600" />
            Moolchand Meena
          </h2>
          <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
            <FiMapPin className="text-gray-400" />
            Jaipur
          </p>
          <span className="inline-block mt-2 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
            Zila Pramukh
          </span>

          {/* Contact Numbers */}
          <div className="mt-3 flex flex-wrap gap-4">
            <Link
              href="tel:+919414970299"
              className="flex items-center gap-2 text-xs text-gray-600 font-medium hover:text-[#C13B3C]"
            >
              <FiPhone /> +91 9414970299
            </Link>
            <Link
              href="tel:+917597034566"
              className="flex items-center gap-2 text-xs text-gray-600 font-medium hover:text-[#C13B3C]"
            >
              <FiPhone /> +91 7597034566
            </Link>
          </div>

          {/* Email */}
          <Link
            href="mailto:moolchandmeena123@gmail.com"
            className="flex items-center gap-2 text-xs text-gray-600 font-medium hover:text-[#C13B3C] mt-2"
          >
            <FiMail /> moolchandmeena123@gmail.com
          </Link>

          {/* Address */}
          <p className="flex items-center gap-2 text-xs text-gray-600 font-medium mt-3">
            <FiMapPin /> House No. Q-41, NRI colony, Haldigathi Road, Pratap
            Nagar, Jaipur
          </p>

          {/* Social Media Links */}
          <div className="flex gap-2 mt-4">
            <Link
              href="https://facebook.com"
              target="_blank"
              className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <FaFacebookF size={14} />
            </Link>
            <Link
              href="https://plus.google.com"
              target="_blank"
              className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
            >
              <FaGooglePlusG size={14} />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600"
            >
              <FaTwitter size={14} />
            </Link>
            <Link
              href="https://wa.me/919414970299"
              target="_blank"
              className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600"
            >
              <FaWhatsapp size={14} />
            </Link>
            <Link
              href="https://pinterest.com"
              target="_blank"
              className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600"
            >
              <FaPinterestP size={14} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800"
            >
              <FaLinkedinIn size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
