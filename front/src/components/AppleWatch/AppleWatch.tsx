"use client"

import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const AppleWatch = () => {
    const imagesCarousel1 = [
        {
            src: "https://www.apple.com/v/watch/bo/images/overview/consider_modals/fitness/modal_fitness_rings__cznvg9yafq82_xlarge_2x.jpg",
            text: "En forma para todas tus formas de entrenar. Desde ciclismo o yoga hasta intervalos de alta intensidad, tienes un montón de opciones entre las que elegir con un seguimiento preciso de los datos que más te importan."
        },
        {
            src: "https://www.apple.com/es/watch/home/images/overview/consider_modals/safety/modal_safety_lost_and_pinged__c9t6lfwuoe82_xlarge_2x.jpg",
            text: "Realiza un seguimiento preciso de tu actividad física diaria con anillos de movimiento, ejercicio y de estar de pie. Puedes compartir tu progreso y competir con amigos."
        },
        {
            src: "https://www.apple.com/es/watch/home/images/overview/consider_modals/health/modal_health_ecg__gany7sy943ue_xlarge_2x.jpg",
            text: "El Apple Watch es resistente al agua hasta 50 metros, lo que lo hace perfecto para nadar o realizar entrenamientos acuáticos."
        }
    ];

    const imagesCarousel2 = [
        {
            src: "https://www.apple.com/es/watch/home/images/overview/consider_modals/safety/modal_safety_lost_and_pinged__c9t6lfwuoe82_xlarge_2x.jpg",
            text: "Listo para emergencias: El Apple Watch detecta si has sufrido una caída brusca o un accidente grave y llama automáticamente a los servicios de emergencia."
        },
        {
            src: "https://www.apple.com/es/watch/home/images/overview/consider_modals/personalize/modal_personalization_apps__dypq24x4xpsi_xlarge_2x.jpg",
            text: "Con la función 'Emergencia SOS', puedes llamar a los servicios de emergencia directamente desde tu muñeca en situaciones críticas."
        },
        {
            src: "https://www.apple.com/es/watch/home/images/overview/consider_modals/safety/modal_safety_alarm__fwg3dxy7qvyy_xlarge_2x.jpg",
            text: "El Apple Watch también puede avisarte si detecta un ritmo cardíaco inusualmente alto o bajo, ayudándote a cuidar mejor de tu salud."
        }
    ];


    const settings = {
        dots: true,         // Muestra puntos de navegación
        infinite: true,     // Ciclo infinito de las imágenes
        speed: 500,         // Velocidad de transición
        slidesToShow: 1,    // Cuántas imágenes mostrar a la vez
        slidesToScroll: 1,  // Cuántas imágenes avanzar
        autoplay: true,     // Cambio automático de imágenes
        autoplaySpeed: 3000 // Cada 3 segundos
    };

    return (
        <div className='mx-1 '>
            <h1 className=" text-base sm:text-lg text-center  font-bold my-5">Apple Watch 10</h1>

            {/* Contenedor de los carruseles */}
            <div className='flex flex-col sm:flex-row md:justify-between justify-center m-11 sm:space-y-5 md:space-y-0 md:space-x-10'>
                {/* Carrusel 1 */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full sm:max-w-md lg:max-w-lg">
                        <Slider {...settings}>
                            {imagesCarousel1.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img
                                        src={item.src}
                                        alt={`Carrusel 1 - Imagen ${index + 1}`}
                                        className="w-full h-50 object-cover sm:w-48" // Misma altura y objeto ajustado
                                    />
                                    <div className="flex flex-col text-center sm:text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#5f6368">
                                            <path d="m480-80-20-400-140-40H40v-80h240l280-200 52 61-166 119h114l312-180 48 56-340 264-20 400h-80ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Z" />
                                        </svg>
                                        <p className="text-base sm:text-lg">{item.text}</p>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>

                {/* Carrusel 2 */}

                <div className="w-full md:w-1/2 flex justify-center">
                    <div className="w-full sm:max-w-md lg:max-w-lg">
                        <Slider {...settings}>
                            {imagesCarousel2.map((item, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <img
                                        src={item.src}
                                        alt={`Carrusel 1 - Imagen ${index + 1}`}
                                        className="w-full h-50 object-cover sm:w-48" // Misma altura y objeto ajustado
                                    />
                                    <div className="flex flex-col text-center sm:text-left">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960" width="45px" fill="#5f6368">
                                            <path d="m480-80-20-400-140-40H40v-80h240l280-200 52 61-166 119h114l312-180 48 56-340 264-20 400h-80ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Z" />
                                        </svg>
                                        <p className="text-base sm:text-lg">{item.text}</p>
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppleWatch;
