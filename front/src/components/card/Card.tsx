import { IProduct } from "../../interfaces/Iproduct";
import React from "react";

export const Card: React.FC<IProduct> = ({ name, price, stock, image }) => {
  const rating = 4;

  return (
    <div className="w-full md:w-64 h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition-all duration-500 hover:scale-105 hover:opacity-90">
      {/* Imagen del producto con tamaño ajustado */}
      <img
        className="p-4 rounded-t-lg h-40 w-full object-cover"
        src={image}
        alt={name}
      />

      <div className="px-5 pb-5">
        {/* Título del producto */}
        <h1 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white truncate">
          {name}
        </h1>

        <div className="flex items-center mt-2.5 mb-2">
          {/* Estrellas de calificación dinámicas */}
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${index < rating ? "text-yellow-300" : "text-gray-200 dark:text-gray-600"
                  }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            ))}
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {rating}.0
          </span>
        </div>

        {/* Información de stock */}
        <p className="text-sm text-gray-500">Stock: {stock}</p>

        {/* Precio del producto y botón */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            US$ {price}
          </span>
          <button className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};
