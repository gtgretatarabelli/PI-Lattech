"use client";
import { IUserSession } from "@/interfaces/IUserSession";
import { IProduct } from "@/interfaces/Iproduct";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Navbar = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState<IUserSession | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [cart, setCart] = useState<IProduct[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedUserData = JSON.parse(localStorage.getItem("userSession") || "null");
      if (storedUserData) {
        setUserData(storedUserData);
        setIsAuthenticated(true);
      }
    }
  }, [pathname]);

  const Dropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Element && !event.target.closest(".user-menu")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userSession")
    setUserData(null);
    setIsAuthenticated(false);
    setCart([]);
    router.push("/")

  }
  return (
    <nav className="bg-gray-950 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">

        {/* BARRA DE BÚSQUEDA MÁS PEQUEÑA */}
        <div className="flex items-center w-1/4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-lg text-black"
          />
        </div>

        {/* LOGO CENTRADO */}
        <div className="flex-grow flex justify-center">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-12 cursor-pointer" />
          </Link>
        </div>

        {/* BOTONES O AVATAR DE USUARIO */}
        <div className="flex justify-end space-x-6 w-1/4">
          {/* Ícono del carrito */}
          <Link href="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </Link>

          {/* Ícono de productos */}
          <Link href="/productsList">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,400,0,0"
            />
            <span className="material-symbols-outlined">weight</span>
          </Link>


          {/* Renderizado condicional basado en si el usuario está autenticado */}
          {isAuthenticated && userData?.token ? (
            <div className="relative user-menu">
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={Dropdown}
              >
                <span>{userData?.user?.name || 'Mi cuenta'}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>

              {/* Menú desplegable */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-black z-50">
                  <Link href="/dashboard">
                    <div className="block px-4 py-2 hover:bg-gray-100">Mi Cuenta</div>
                  </Link>
                  <button
                    className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="relative user-menu">
              <div className="cursor-pointer" onClick={Dropdown}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>

              {/* Menú desplegable para usuarios no autenticados */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-black z-50">
                  <Link href="/login">
                    <div className="block px-4 py-2 hover:bg-gray-100">Iniciar Sesion</div>
                  </Link>
                  <Link href="/register">
                    <div className="block px-4 py-2 hover:bg-gray-100">Registrarse</div>
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};;

export default Navbar;
