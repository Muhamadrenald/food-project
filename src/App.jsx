import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import SectionTitle from "./components/SectionTitle";
import FoodCard from "./components/FoodCard";
import Footer from "./components/Footer";
import SearchByFood from "./components/SearchByFood";
import FoodPromo from "./components/FoodPromo";

import { menuItems, DEFAULT_ACTIVE_CATEGORY } from "./constants/data";
import Contact from "./components/Contact";
import PromoBanner from "./components/Header/PromoBanner/PromoBanner";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [activeCategory, setActiveCategory] = useState(DEFAULT_ACTIVE_CATEGORY);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getFilteredItems = () => {
    if (activeCategory === "all") {
      return menuItems;
    }
    return menuItems.filter((item) => item.category === activeCategory);
  };

  const filteredItems = getFilteredItems();
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const getCurrentItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredItems.slice(startIndex, endIndex);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const handleCategoryClick = (categoryKey) => {
    setActiveCategory(categoryKey);
    setCurrentPage(0);
  };

  useEffect(() => {
    if (currentPage >= totalPages && totalPages > 0) {
      setCurrentPage(totalPages - 1);
    } else if (totalPages === 0 && currentPage !== 0) {
      setCurrentPage(0);
    }
  }, [activeCategory, totalPages, currentPage]);

  const buttonStyle = {
    backgroundColor: "#FFB30E",
    border: "none",
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
    outline: "none",
    transform: "translateY(-50%)",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: "not-allowed",
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Work />

      <SearchByFood
        onCategoryClick={handleCategoryClick}
        activeCategory={activeCategory}
      />

      <div className="py-20" id="menu">
        <Container className="relative">
          <SectionTitle
            title="Popular Menus"
            // subtitle="Check our best-selling dishes that you can order."
          />

          <div className="relative">
            {filteredItems.length > 0 && totalPages > 1 && !isMobile && (
              <>
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  style={{
                    ...(currentPage === 0 ? disabledButtonStyle : buttonStyle),
                    position: "absolute",
                    left: "-64px",
                    top: "50%",
                  }}
                >
                  <IoChevronBack size={20} />
                </button>

                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  style={{
                    ...(currentPage === totalPages - 1
                      ? disabledButtonStyle
                      : buttonStyle),
                    position: "absolute",
                    right: "-64px",
                    top: "50%",
                  }}
                >
                  <IoChevronForward size={20} />
                </button>
              </>
            )}

            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-4">
                {getCurrentItems().map((item) => (
                  <div key={item.id} className="w-full">
                    <FoodCard
                      image={item.image}
                      title={item.title}
                      price={item.price}
                      location={item.location}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-muted text-lg mb-0">
                  No items found for this category.
                </p>
              </div>
            )}

            {filteredItems.length > 0 && totalPages > 1 && isMobile && (
              <div className="flex justify-center gap-3 mt-4">
                <button
                  onClick={handlePrevPage}
                  disabled={currentPage === 0}
                  style={currentPage === 0 ? disabledButtonStyle : buttonStyle}
                >
                  <IoChevronBack size={20} />
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages - 1}
                  style={
                    currentPage === totalPages - 1
                      ? disabledButtonStyle
                      : buttonStyle
                  }
                >
                  <IoChevronForward size={20} />
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>

      <FoodPromo />
      <Contact />
      <PromoBanner />
      <Footer />
    </div>
  );
}

export default App;
