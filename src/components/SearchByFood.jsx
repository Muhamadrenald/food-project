import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import SectionTitle from "./SectionTitle";

import { menuCategories } from "../constants/data";

const SearchByFood = ({ onCategoryClick, activeCategory }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(menuCategories.length / itemsPerPage);

  const getCurrentCategories = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return menuCategories.slice(startIndex, endIndex);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const isPrevDisabled = totalPages <= 1 || currentPage === 0;
  const isNextDisabled = totalPages <= 1 || currentPage === totalPages - 1;

  return (
    <div className="bg-orange-50 py-12">
      <Container className="relative">
        <div className="flex items-center justify-between mb-8">
          <SectionTitle title="Search by Food" subtitle="" />
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onCategoryClick("all")}
              className="flex items-center space-x-2 font-semibold text-lg transition-colors duration-200"
              style={{ color: "#FFB30E" }}
              onMouseEnter={(e) => (e.target.style.color = "#E6A00D")}
              onMouseLeave={(e) => (e.target.style.color = "#FFB30E")}
            >
              <span>View All</span>
              <IoChevronForward size={18} />
            </button>

            <div className="flex items-center !space-x-1.5">
              <button
                onClick={handlePrevPage}
                disabled={isPrevDisabled}
                className={`!w-12 !h-12 !rounded-full !border-0 !p-0
                           text-white flex items-center justify-center
                           shadow-lg hover:shadow-xl
                           active:scale-95 transform transition-all duration-200 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-opacity-50
                           ${
                             isPrevDisabled
                               ? "opacity-50 cursor-not-allowed"
                               : ""
                           }`}
                style={{
                  backgroundColor: "#FFB30E",
                }}
                onMouseEnter={(e) =>
                  !isPrevDisabled &&
                  (e.target.style.backgroundColor = "#E6A00D")
                }
                onMouseLeave={(e) =>
                  !isPrevDisabled &&
                  (e.target.style.backgroundColor = "#FFB30E")
                }
              >
                <IoChevronBack size={18} />
              </button>

              <button
                onClick={handleNextPage}
                disabled={isNextDisabled}
                className={`!w-12 !h-12 !rounded-full !border-0 !p-0
                           text-white flex items-center justify-center
                           shadow-lg hover:shadow-xl
                           active:scale-95 transform transition-all duration-200 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-opacity-50
                           ${
                             isNextDisabled
                               ? "opacity-50 cursor-not-allowed"
                               : ""
                           }`}
                style={{
                  backgroundColor: "#FFB30E",
                }}
                onMouseEnter={(e) =>
                  !isNextDisabled &&
                  (e.target.style.backgroundColor = "#E6A00D")
                }
                onMouseLeave={(e) =>
                  !isNextDisabled &&
                  (e.target.style.backgroundColor = "#FFB30E")
                }
              >
                <IoChevronForward size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center">
          {getCurrentCategories().map((category) => (
            <div
              key={category.key}
              onClick={() => onCategoryClick(category.key)}
              className={`flex flex-col items-center cursor-pointer group p-2 rounded-lg
                          ${
                            activeCategory === category.key
                              ? "bg-yellow-100 ring-2 ring-yellow-500"
                              : ""
                          }`}
              style={{
                borderColor:
                  activeCategory === category.key ? "#FFB30E" : "transparent",
              }}
            >
              <div
                className={`w-32 h-32 rounded-full overflow-hidden border-4 transition-all duration-300 transform group-hover:scale-105`}
                style={{
                  borderColor:
                    activeCategory === category.key ? "#FFB30E" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.key) {
                    e.target.style.borderColor = "#FFB30E";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.key) {
                    e.target.style.borderColor = "transparent";
                  }
                }}
              >
                <img
                  src={category.image}
                  alt={category.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <p
                className={`mt-4 text-lg font-semibold text-gray-800 transition-colors duration-200`}
                style={{
                  color:
                    activeCategory === category.key ? "#FFB30E" : "#1F2937",
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.key) {
                    e.target.style.color = "#FFB30E";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.key) {
                    e.target.style.color = "#1F2937";
                  }
                }}
              >
                {category.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default SearchByFood;
