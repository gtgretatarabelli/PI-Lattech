"use client"
import Cart from "@/app/cart/page";
import { IUserSession } from "@/interfaces/IUserSession";
import { IProduct } from "@/interfaces/Iproduct";
import 'flowbite/dist/flowbite.min.css';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProductsDetail: React.FC<IProduct> = ({ name, description, image, stock, price, id, categoryId }) => {
  const [userData, setUserData] = useState<IUserSession | null>(null);
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUserData = JSON.parse(localStorage.getItem("userSession") || "null");

      if (storedUserData) {
        setUserData(storedUserData);
      }
    }
  }, []);

  const handleClick = () => {
    if (userData?.token) {

      const cart = JSON.parse(localStorage.getItem("cart") || "[]")
      const productExist = cart.some((product: IProduct) => {
        if (product.id === id) return true
        return false
      })
      if (productExist) {
        alert("Este producto ya existe en el carrito")
        router.push("/cart")
      } else {
        cart.push({
          name, description, image, stock, price, id, categoryId
        })
        localStorage.setItem("cart", JSON.stringify(cart))
        alert("producto agregado al carrito")
      }
    } else {
      alert("Necesitas estar Logueado");
      router.push("/login")

    }
  };

  return (

    <section className=" text-gray-400 bg-black body-font overflow-hidden">
      <div className=" container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {/* Imagen del producto */}
          <img alt="ecommerce" className="w-80 lg:h-auto h-64 object-cover object-center rounded" src={image} />

          {/* Detalles del producto */}
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <br />
            <h1 className="text-white text-3xl title-font font-medium mb-1">{name}</h1>

            {/* Valoración */}
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="ml-3">4 Reviews</span>
              </span>
            </div>

            {/* Descripción */}
            <p className="leading-relaxed">{description}</p>

            {/* Selector de color y tamaño */}
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-800 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div>

            </div>

            {/* Precio y botón de agregar al carrito */}
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">${price}</span>
              <button
                onClick={handleClick}
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsDetail;
