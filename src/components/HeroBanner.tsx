import React, { useState, useEffect } from 'react';
import { VscArrowCircleRight } from "react-icons/vsc";


const HeroBanner = () => {
    const [currentMessage, setCurrentMessage] = useState(0);
    const messages = ["Vende 24/7", "Atrae clientes", "Conecta y crece"];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessage((prev) => (prev + 1) % messages.length);
        }, 3000); // Cambia el mensaje cada 3 segundos

        return () => clearInterval(interval);
    }, []);


    return (
        <div className="relative w-full  h-[40rem] md:h-[47rem] lg:h-[40rem] xl:h-[40rem] 3xl:h-[48rem] overflow-hidden">
            {/* Video de fondo */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={"https://res.cloudinary.com/dz0ajaf3i/video/upload/v1746928699/KTALWEB/hero_banner_ff0ijr.mp4"} // Reemplaza con la ruta de tu video
                autoPlay
                loop
                muted
            ></video>

            {/* Contenido del Hero */}
            <div className="mx-auto max-w-md px-5 sm:max-w-xl md:max-w-3xl relative z-10 flex flex-col items-start justify-center h-full  text-white ">
                <h1 className="font-nunito text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                    ¡Bienvenido al primer paso para digitalizar tu negocio!
                    <span className="bg-[#3B206E] px-2 py-1 rounded-xl text-2xl sm:text-3xl lg:text-4xl font-semibold ml-4">
                        {messages[currentMessage]}
                    </span>
                </h1>
                <p className="font-nunito text-lg sm:text-2xl mt-6 max-w-xl">
                    Creamos páginas webs que potencian tu presencia digital y reflejan lo que te hace único.
                </p>
                <a
                    href="#contact"
                    className="flex items-center gap-2  mt-8 px-6 py-2 bg-primary-purple-100  rounded-full transition duration-300"
                >
                    <span className='font-nunito text-white text-lg font-medium'>
                        Cotizar ahora
                    </span>
                    <VscArrowCircleRight className='text-4xl' />
                </a>
            </div>

            {/* Overlay para oscurecer el video */}
            <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] backdrop-blur-sm"></div>
        </div>
    );
};

export default HeroBanner;