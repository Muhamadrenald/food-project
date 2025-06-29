import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  // Data untuk link agar mudah dikelola
  const topCities = [
    ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"],
    ["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"],
    ["New York City", "Orange County", "Atlanta", "Charlotte", "Denver"],
    ["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"],
    ["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"],
  ];

  const companyLinks = ["About us", "Team", "Careers", "Blog"];
  const contactLinks = ["Help & Support", "Partner with us", "Ride with us"];
  const legalLinks = [
    "Terms & Conditions",
    "Refund & Cancellation",
    "Privacy Policy",
    "Cookie Policy",
  ];

  return (
    <footer className="bg-[#1D1D1D] text-gray-400 pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Bagian "Our top cities" */}
        <div className="mb-16">
          <h3 className="text-2xl ml-7 font-bold text-white mb-4">
            Our top cities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-4 gap-x-8">
            {topCities.map((column, colIndex) => (
              <ul key={colIndex} className="space-y-3">
                {column.map((city, cityIndex) => (
                  <li
                    key={cityIndex}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Bagian Link Utama & Form */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-8 my-12">
          {/* Kolom Company */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold ml-7 text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Contact */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="font-bold ml-7 text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              {contactLinks.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Legal */}
          <div className="md:col-span-2 lg:col-span-3">
            <h4 className="font-bold ml-7 text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link, i) => (
                <li
                  key={i}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom Follow Us & Subscribe */}
          <div className="md:col-span-6 lg:col-span-5">
            <h4 className="font-bold text-slate-300 mb-4">FOLLOW US</h4>
            <div className="flex space-x-4 mb-8">
              <FaInstagram size={20} />
              <FaFacebookF size={20} />
              <FaTwitter size={20} />
            </div>
            <h4 className="font-semibold text-slate-300 mb-4">
              Receive exclusive offers in your mailbox
            </h4>
            <div className="flex">
              <div className="relative flex-grow">
                <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Enter Your email"
                  className="w-full bg-gray-800 rounded-l-md py-2.5 pl-10 pr-4 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                />
              </div>
              <button className="bg-yellow-500 text-white font-bold py-2.5 px-6 !rounded-r-md hover:bg-yellow-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <hr className="border-gray-700" />

        {/* Bagian Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-sm">
          <p className="mb-4 md:mb-0">
            All rights Reserved. © Your Company, 2021
          </p>
          <p className="flex items-center">
            Made with <FiHeart className="mx-1 text-red-500" /> by{" "}
            <a href="#" className="font-bold text-white ml-1 hover:underline">
              Themewagon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
