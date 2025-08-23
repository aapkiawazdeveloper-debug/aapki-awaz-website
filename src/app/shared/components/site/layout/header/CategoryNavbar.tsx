"use client";
import { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";

const CategoryNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // For mobile toggle dropdown
  const handleDropdownClick = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="bg-[#ccc]">
      <nav className="px-4 py-2 relative">
        {/* Mobile Header */}
        <div className="flex justify-end items-center md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            <AiOutlineMenu className="text-white" size={24} />
          </button>
        </div>

        {/* Menu List */}
        <div
          className={`transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-[500px]" : "max-h-0"
          } overflow-hidden md:overflow-visible md:max-h-none`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 py-2 md:py-0">
            <li>
              <Link href="/" className="text-[#0000ff] text-sm font-poppins">
                Home
              </Link>
            </li>

            {/* Leadaer of Rajasthan Dropdown */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("reporter")}
            >
              <span className="flex items-center gap-1 text-[#0000ff] text-sm font-poppins cursor-pointer">
                Leader of Rajasthan <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[250px] z-50 
                            md:hidden md:group-hover:block
                            transition-all duration-300 ease-in-out overflow-hidden
                            ${
                              openDropdown === "reporter"
                                ? "block"
                                : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                            }`}
              >
                <li>
                  <Link
                    href="/leader-of-rajasthan-minister-mla-mp-district"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Member of Parliament - MP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/leader-of-rajasthan-minister-mla"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    MLA of Rajasthan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mayor-chairman-president-news-photos"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Mayor - Chairman - President
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rajasthan-zila-pramukh"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Rajasthan - Zila Pramukh
                  </Link>
                </li>
                <li>
                  <Link
                    href="/panchayat-samiti-pradhan-rajasthan"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Panchayat Samiti - Pradhan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sarpanch-rajasthan"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sarpanch - Rajasthan
                  </Link>
                </li>
              </ul>
            </li>

            {/* Entertainment Dropdown */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("business")}
            >
              <span className="flex items-center gap-1 text-[#0000ff] text-sm font-poppins cursor-pointer">
                Entertainment <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[250px] z-50 
                            md:hidden md:group-hover:block overflow-hidden
                            transition-all duration-300 ease-in-out
                            ${
                              openDropdown === "business"
                                ? "block"
                                : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                            }`}
              >
                <li>
                  <Link
                    href="/entertainment/bollywood-directory"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bollywood Directory
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entertainment/entertainment-bollywoord-news"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Entertainment / Bollywood News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entertainment/bollywood-registration"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bollywood registration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entertainment/bollywood-login-via-userid"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Login via userid
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entertainment/bollywood-login-via-mobile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bollywood User Mobile Login
                  </Link>
                </li>
                <li>
                  <Link
                    href="/entertainment/data-package-registration"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Bollywood Directory Data Package - User Registration Form
                  </Link>
                </li>
              </ul>
            </li>

            {/* City News Dropdown */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("business")}
            >
              <span className="flex items-center gap-1 text-[#0000ff] text-sm font-poppins cursor-pointer">
                City News <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[1024] z-50 
                            md:hidden md:group-hover:block overflow-hidden
                            transition-all duration-300 ease-in-out
                            ${
                              openDropdown === "business"
                                ? "block"
                                : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                            }`}
              >
                <div className="grid grid-cols-5 gap-6 py-4 px-2">
                  {/* column 1 */}
                  <div>
                    <li>
                      <Link
                        href="/city/jaipur"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Jaipur News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/kota"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Kota News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/ajmer"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Ajmer News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/jodhpur"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Jodhpur News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/udaipur"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Udaipur News
                      </Link>
                    </li>
                  </div>

                  {/* column 2 */}
                  <div>
                    <li>
                      <Link
                        href="/city/baran"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Baran News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/bhilwara"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Bhilwara News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/beawar"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Beawar News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/bharatpur"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Bharatpur News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/barmer"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Barmer News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/bikaner"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Bikaner News
                      </Link>
                    </li>
                  </div>

                  {/* column 3 */}
                  <div>
                    <li>
                      <Link
                        href="/city/bundi"
                        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Bundi News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/chittorgarh"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Chittorgarh News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/churu"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Churu News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/dausa"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Dausa News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/dholpur"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Dholpur News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/jaisalmer"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Jaisalmer News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/tonk"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Tonk News
                      </Link>
                    </li>
                  </div>

                  {/*  column 4 */}
                  <div>
                    <li>
                      <Link
                        href="/city/jalour"
                        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Jalour News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/jhalawar"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Jhalawar News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/karauli"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Karauli News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/nagour"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Nagour News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/pali"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Pali News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/pratapgarh"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Pratapgarh News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/rajsamand"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Rajsamand News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/sawai-madhopur"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Sawai Madhopur News
                      </Link>
                    </li>
                  </div>

                  {/* column 4 */}
                  <div>
                    <li>
                      <Link
                        href="/city/new-delhi"
                        className="block px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        New Delhi News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/crime"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/jda"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        JDA News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/city/business"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Business News
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            {/* More News Dropdown */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("moreNews")}
            >
              <span className="flex items-center gap-1 text-[#0000ff] text-sm font-poppins cursor-pointer">
                More News <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[1024px] z-50 
                md:hidden md:group-hover:block overflow-hidden
                transition-all duration-300 ease-in-out
                ${
                  openDropdown === "moreNews"
                    ? "block"
                    : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                }`}
              >
                <div className="grid grid-cols-4 gap-6 py-4 px-2">
                  {/* column 1 */}
                  <div>
                    <li>
                      <Link
                        href="/more-news/events"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        News / Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/national"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        National News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/congress-rajasthan"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Congress Rajasthan News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/congress-national"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Congress National News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/bjp-national"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        BJP National News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/it-computer"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        IT - Computer / Laptop
                      </Link>
                    </li>
                  </div>

                  {/* column 2 */}
                  <div>
                    <li>
                      <Link
                        href="/more-news/sports"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Sports
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/religious"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Religious News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/yuva-morcha"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Yuva Morcha BJP - News / Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/mahila-morcha"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Mahila Morcha BJP - News / Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/jda"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        JDA News
                      </Link>
                    </li>
                  </div>

                  {/* column 3 */}
                  <div>
                    <li>
                      <Link
                        href="/more-news/new-delhi"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        New Delhi News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/crime"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Crime
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/business"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Business News
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/automobile-guide"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Automobile Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/wish"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Wish - Shubh Kamna - Congratulations
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/railway"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Railway News
                      </Link>
                    </li>
                  </div>

                  {/* column 4 */}
                  <div>
                    <li>
                      <Link
                        href="/more-news/medical-guide"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Medical and Health Guide
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/medical-videos"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Medical and Health Guide - Video Interviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/more-news/cab-caa-nrc"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        CAB - CAA - NRC Video News
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            {/* Business / Profession Directory */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("business")}
            >
              <span className="flex items-center gap-1 text-[#0000ff] text-sm font-poppins cursor-pointer">
                Business / Profession Directory <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[1024px] z-50 
                md:hidden md:group-hover:block overflow-hidden
                transition-all duration-300 ease-in-out
                ${
                  openDropdown === "business"
                    ? "block"
                    : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                }`}
              >
                <div className="grid grid-cols-5 gap-6 py-4 px-2">
                  {/* column 1 */}
                  <div>
                    <li>
                      <Link
                        href="/business-professional-news/trade-industries"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        BUSINESS - TRADE & INDUSTRIES Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/trade-association"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        TRADE & INDUSTRIES ASSOCIATION
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/life-members"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        LIFE MEMBERS
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/patron-members"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        PATRON MEMBERS
                      </Link>
                    </li>
                  </div>

                  {/* column 2 */}
                  <div>
                    <li>
                      <Link
                        href="/business-professional-news/naturopathy"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Naturopathy - Acupuncture & Acupressure
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/hospitals"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        All India Hospitals / Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/diagnostic-centre"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Diagnostic Centre
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/doctors"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Doctors
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/hospitals-list"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Hospitals
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/pharma"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Pharma Companies & Dealer
                      </Link>
                    </li>
                  </div>

                  {/* column 3 */}
                  <div>
                    <li>
                      <Link
                        href="/business-professional-news/education"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Education Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/hotels"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Indian Hotel Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/automobile"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Automobile Dealers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/safety-industry"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Safety Industry Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/fire-industry"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Fire Industry Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/safety-security"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Safety Security & Fire Directory
                      </Link>
                    </li>
                  </div>

                  {/* column 4 */}
                  <div>
                    <li>
                      <Link
                        href="/business-professional-news/caterers"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Caterers Dealers Directory
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/tent-house"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Tent House and Decorators
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/gems"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Gems & Jewellery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/marriage-garden"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Marriage Garden / Banquet Halls / Wedding Hotels
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/business-professional-news/hardware"
                        className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded"
                      >
                        Hardware & Sanitaryware Dealers
                      </Link>
                    </li>
                  </div>
                </div>
              </ul>
            </li>

            {/* Religion news */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("business")}
            >
              <span className="flex items-center gap-1 text-[#0000ff] text-sm font-poppins cursor-pointer">
                Religion <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[250px] z-50 
                            md:hidden md:group-hover:block
                            transition-all duration-300 ease-in-out overflow-hidden
                            ${
                              openDropdown === "reporter"
                                ? "block"
                                : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                            }`}
              >
                <li>
                  <Link
                    href="/religion/astrology"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Astrology
                  </Link>
                </li>
                <li>
                  <Link
                    href="/religion/vastu"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Vastu
                  </Link>
                </li>
                <li>
                  <Link
                    href="/religion/horoscope"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Horoscope
                  </Link>
                </li>
                <li>
                  <Link
                    href="/religion/festivals"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Festivals
                  </Link>
                </li>
              </ul>
            </li>

            {/* BJP Leader news */}
            <li
              className="relative group"
              onClick={() => handleDropdownClick("business")}
            >
              <span className="flex items-center gap-1 text-[#0000ff] text-sm font-poppins cursor-pointer">
                BJP Leader <FiChevronDown size={12} />
              </span>
              <ul
                className={`absolute left-0 top-full bg-white shadow-lg rounded-lg min-w-[250px] z-50 
                            md:hidden md:group-hover:block
                            transition-all duration-300 ease-in-out overflow-hidden
                            ${
                              openDropdown === "reporter"
                                ? "block"
                                : "hidden md:block md:opacity-0 md:group-hover:opacity-100"
                            }`}
              >
                <li>
                  <Link
                    href="/bjp-leader/youth-front-bjp"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Youth Front - BJP
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bjp-leader/women-front-bjp"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Women's Front - BJP
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/" className="text-[#0000ff] text-sm font-poppins">
                Congress Leader - INC
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default CategoryNavbar;
