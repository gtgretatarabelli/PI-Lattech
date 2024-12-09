"use client";

import { createOrder } from "@/helpers/cart.helpers";
import { IUserSession } from "@/interfaces/IUserSession";
import { IProduct } from "@/interfaces/Iproduct";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const CartView = () => {
  const router = useRouter();
  const [cart, setCart] = useState<IProduct[]>([]);
  const [userData, setUserData] = useState<IUserSession | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserData = JSON.parse(
        localStorage.getItem("userSession") || "null"
      );
      if (storedUserData) {
        setUserData(storedUserData);
        setIsAuthenticated(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);
    } else {
      setCart([]);
    }
  }, [isAuthenticated]);

  const handleClick = async () => {
    try {
      if (!userData?.token) {
        alert("Debes iniciar sesión para proceder con el pago.");
        router.push("/login");
        return;
      }
      const idProducts = cart.map((product) => product.id);
      const response = await createOrder(idProducts, userData.token);
      alert("Pago realizado correctamente");
      setCart([]);
      localStorage.removeItem("cart");
      router.push("/dashboard/orders");
    } catch (error) {

      alert("Hubo un problema al procesar la orden.");
    }
  };

  const handleRemove = (id: number) => {
    try {
      const removeProduct = cart.filter((product) => product.id !== id);
      setCart(removeProduct);
      localStorage.setItem("cart", JSON.stringify(removeProduct));
    } catch (error) {
      alert("No fue posible eliminar el producto");
    }
  };

  const total = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div className="flex flex-col items-center justify-around w-full p-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full max-w-2xl ">
        {isAuthenticated ? (
          cart.length > 0 ? (
            <>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      <span className="sr-only">Imagen</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Producto
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Cantidad
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Precio
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product) => (
                    <tr
                      key={product.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <img
                          src={product.image}
                          className="w-16 md:w-32 max-w-full max-h-full"
                          alt={product.name}
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            className="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Decrementar cantidad</span>
                            <svg
                              className="w-3 h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div className="mx-3">
                            <input
                              type="number"
                              id={`quantity_${product.id}`}
                              className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                              placeholder="1"
                              required
                              defaultValue={1}
                            />
                          </div>
                          <button
                            className="inline-flex items-center justify-center h-6 w-6 p-1 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Incrementar cantidad</span>
                            <svg
                              className="w-3 h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        ${product.price}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleRemove(product.id)}
                          className="font-medium text-red-600 dark:text-red-500 hover:underline"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Mostrar el total del carrito */}
              <div className="w-2/5  p-6 bg-black shadow-md sm:rounded-lg ">
                <h3 className="text-xl font-semibold text-slate-100 border-b pb-2 ">
                  Resumen de compra
                </h3>
                <p className="text-lg font-bold text-gray-400 dark:text-gray-200">
                  Total: ${total}
                </p>
                <button
                  onClick={handleClick}
                  className="px-4 py-2 mt-2 text-black bg-white rounded hover:bg-lime-600"
                >
                  Pagar
                </button>
              </div>
            </>
          ) : (
            <div
              className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
              role="alert"
            >
              <span className="font-medium">Tu carrito está vacío.</span>{" "}
              Comienza a agregar productos!
            </div>
          )
        ) : (
          <div
            className="p-4 mb-4 text-sm text-black rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-lime-700"
            role="alert"
          >
            <span className="font-medium">Tu carrito está vacío! </span>
            <br />
            <Link href="/login" className="text-red-600">
              Inicia Sesión
            </Link>{" "}
            para ver si tienes algún producto guardado.
          </div>
        )}
      </div>
    </div>
  );
};

export default CartView;
