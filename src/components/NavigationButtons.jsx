import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const NavigationButtons = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
  isMobile,
}) => {
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
    boxSizing: "content-box",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    opacity: 0.5,
    cursor: "not-allowed",
  };

  return (
    <>
      {/* Desktop Navigation Buttons - Left & Right */}
      {!isMobile && totalPages > 1 && (
        <>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            style={{
              ...(currentPage === 0 ? disabledButtonStyle : buttonStyle),
              position: "absolute",
              left: "-64px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              if (currentPage !== 0) {
                e.target.style.backgroundColor = "#E6A00D";
                e.target.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 0) {
                e.target.style.backgroundColor = "#FFB30E";
                e.target.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
              }
            }}
            onMouseDown={(e) => {
              if (currentPage !== 0) {
                e.target.style.transform = "translateY(-50%) scale(0.95)";
              }
            }}
            onMouseUp={(e) => {
              if (currentPage !== 0) {
                e.target.style.transform = "translateY(-50%)";
              }
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
              transform: "translateY(-50%)",
              zIndex: 10,
            }}
            onMouseEnter={(e) => {
              if (currentPage !== totalPages - 1) {
                e.target.style.backgroundColor = "#E6A00D";
                e.target.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== totalPages - 1) {
                e.target.style.backgroundColor = "#FFB30E";
                e.target.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
              }
            }}
            onMouseDown={(e) => {
              if (currentPage !== totalPages - 1) {
                e.target.style.transform = "translateY(-50%) scale(0.95)";
              }
            }}
            onMouseUp={(e) => {
              if (currentPage !== totalPages - 1) {
                e.target.style.transform = "translateY(-50%)";
              }
            }}
          >
            <IoChevronForward size={20} />
          </button>
        </>
      )}

      {/* Mobile Navigation Buttons - Bottom */}
      {isMobile && totalPages > 1 && (
        <div className="d-flex justify-content-center gap-3 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 0}
            style={currentPage === 0 ? disabledButtonStyle : buttonStyle}
            onMouseEnter={(e) => {
              if (currentPage !== 0) {
                e.target.style.backgroundColor = "#E6A00D";
                e.target.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== 0) {
                e.target.style.backgroundColor = "#FFB30E";
                e.target.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
              }
            }}
            onTouchStart={(e) => {
              if (currentPage !== 0) {
                e.target.style.transform = "scale(0.95)";
              }
            }}
            onTouchEnd={(e) => {
              if (currentPage !== 0) {
                e.target.style.transform = "scale(1)";
              }
            }}
          >
            <IoChevronBack size={20} />
          </button>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
            style={
              currentPage === totalPages - 1 ? disabledButtonStyle : buttonStyle
            }
            onMouseEnter={(e) => {
              if (currentPage !== totalPages - 1) {
                e.target.style.backgroundColor = "#E6A00D";
                e.target.style.boxShadow =
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)";
              }
            }}
            onMouseLeave={(e) => {
              if (currentPage !== totalPages - 1) {
                e.target.style.backgroundColor = "#FFB30E";
                e.target.style.boxShadow =
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
              }
            }}
            onTouchStart={(e) => {
              if (currentPage !== totalPages - 1) {
                e.target.style.transform = "scale(0.95)";
              }
            }}
            onTouchEnd={(e) => {
              if (currentPage !== totalPages - 1) {
                e.target.style.transform = "scale(1)";
              }
            }}
          >
            <IoChevronForward size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default NavigationButtons;
