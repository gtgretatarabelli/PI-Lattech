"use client"

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const Presentacion: React.FC = () => {

  // Configuración de Slick
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Ciclo infinito
    speed: 700, // Velocidad del cambio de imagen
    slidesToShow: 1, // Mostrar una diapositiva a la vez
    slidesToScroll: 1, // Desplazar una diapositiva a la vez
    autoplay: true, // Hacer que se pase automáticamente
    autoplaySpeed: 1300, // Tiempo de espera entre diapositivas (en milisegundos)
    arrows: true, // Mostrar flechas para navegar manualmente
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden m-0 p-0">

      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="w-full h-full">
          <img
            src="presentacion1.png"
            className="w-full h-full object-cover"
            alt="Slide 1"
          />
        </div>

        {/* Slide 2 */}
        <div className="w-full h-full">
          <img
            src="presentacion2.png"
            className="w-full h-full object-cover"
            alt="Slide 2"
          />
        </div>

        {/* Slide 3 */}
        <div className="w-full h-full">
          <img
            src="presentacion3.png"
            className="w-full h-full object-cover"
            alt="Slide 3"
          />
        </div>

        {/* Slide 4 */}
        <div className="w-full h-full">
          <img
            src="presentacion4.png"
            className="w-full h-full object-cover"
            alt="Slide 4"
          />
        </div>
      </Slider>

      {/* Text and Button */}
      <div className="max-w-md p-4 mx-auto mt-4 absolute top-1/4 right-8 text-right text-white z-10">
        <h2 className=" text-base sm:text-lg font-semibold text-center text-blue-500 sm:text-xl">AirPods Max</h2>

        <p className="text-base sm:text-lg  font-bold mb-4">Sonido a todo color.</p>

        <div className="flex justify-end">
          <Link href={`/category/${4}`} className="bg-slate-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">Comprar</Link>
        </div>
      </div>
    </div>
  );
};

export default Presentacion;
