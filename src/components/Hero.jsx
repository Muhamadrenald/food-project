import React, { useState } from "react";
import { FaMotorcycle, FaShoppingBag, FaSearch } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import heroImage from "../assets/ramen.png";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("delivery");
  const primaryColor = "#FF7A7A";

  const baseTabClasses =
    "flex cursor-pointer items-center gap-2 border-b-[3px] py-2 px-5 font-medium transition-all duration-300 ease-in-out";

  const activeTabClasses = `border-[#FF7A7A] text-[#FF7A7A]`;
  const inactiveTabClasses = `border-transparent text-gray-500`;

  return (
    <div
      id="hero"
      className="relative overflow-hidden bg-linear-to-r from-[#FFC107] to-[#FFA000] py-28"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-12 lg:col-span-7 z-20">
            {/* PERUBAHAN DI SINI */}
            <h1 className="!text-5xl !font-bold text-white lg:text-6xl">
              Are you starving?
            </h1>
            {/* DAN DI SINI */}
            <p className="my-4 text-lg text-slate-700 lg:text-xl">
              Within a few clicks, find meals that are accessible near you.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-2xl">
              <div className="mb-6 flex">
                <div
                  className={`${baseTabClasses} ${
                    activeTab === "delivery"
                      ? activeTabClasses
                      : inactiveTabClasses
                  }`}
                  onClick={() => setActiveTab("delivery")}
                >
                  <FaMotorcycle size={20} /> Delivery
                </div>
                <div
                  className={`${baseTabClasses} ${
                    activeTab === "pickup"
                      ? activeTabClasses
                      : inactiveTabClasses
                  }`}
                  onClick={() => setActiveTab("pickup")}
                >
                  <FaShoppingBag size={20} /> Pickup
                </div>
              </div>

              <div className="flex">
                <div className="relative flex-auto">
                  <MdLocationOn
                    color={primaryColor}
                    size={24}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="w-full rounded-l-lg border border-gray-300 py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  />
                </div>
                <button className="flex items-center justify-center !rounded-r-lg bg-gradient-to-r from-[#FF7A7A] to-[#F65900] px-6 font-bold text-white transition-opacity hover:opacity-90">
                  <FaSearch className="mr-2" /> Find Food
                </button>
              </div>
            </div>
          </div>

          <div className="col-span-5 hidden lg:block"></div>
        </div>
      </div>

      <img
        src={heroImage}
        alt="Ramen Bowl"
        className="absolute bottom-[-70px] right-[2vw] z-10 hidden h-auto w-[40vw] max-w-[497.14px] lg:block"
      />
    </div>
  );
};

export default Hero;
