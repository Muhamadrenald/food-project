import React from "react";

const FoodCard = ({ image, title, price, location }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 flex flex-col h-full">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1 leading-tight">
            {title}
          </h3>
          {location && (
            <p className="text-sm text-gray-500 mb-2 flex items-center">
              <svg
                className="w-3 h-3 mr-1 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {location}
            </p>
          )}
          {/* Harga */}
          <p className="text-xl font-bold text-orange-400 mb-4">
            ${price.toFixed(2)}
          </p>
        </div>
        {/* Tombol Order Now */}
        <button className="w-full bg-orange-400 text-white py-2 rounded-lg font-semibold hover:bg-orange-500 transition-colors duration-200 mt-auto">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
