import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaArrowUp } from 'react-icons/fa';

import Logo from '@/assets/logo.webp?url';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-primary-purple-100 pt-8 pb-4 relative">
            {/* Botón scroll top */}
            <div className="absolute right-1/12 -top-6 transform -translate-x-1/3 z-10">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="
                    bg-primary-purple-100 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg border-2 border-white 
                    hover:bg-primary-purple-200 transition
                    hover:cursor-pointer
                    "
                    aria-label="Volver arriba"
                >
                    <FaArrowUp className="text-[1.5rem]" />
                </button>
            </div>
            <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 justify-between items-start gap-8 pb-4">
                {/* Logo y ubicación */}
                <div className="">
                    <img
                        src={Logo}
                        alt="Logo Ktalweb"
                        className="w-32 h-auto mb-2"
                    />
                    <div className="text-gray-600 mt-2 text-sm font-nunito">Lima, Perú</div>
                </div>
                {/* Navegación */}
                <div className="">
                    <div className=''>
                        <div className="font-bold text-black mb-1 font-nunito">Explora</div>
                        <nav className="flex flex-col gap-1 text-sm">
                            <a href="/" className="hover:underline text-black font-nunito">Inicio</a>
                            <a href="/portfolio" className="hover:underline text-black font-nunito">Casos de éxito</a>
                        </nav>
                    </div>
                </div>
                {/* Contacto */}
                <div className="flex justify-center">
                    <div className=''>
                        <div className="font-bold text-black mb-1 font-nunito">Contacto</div>
                        <div className="text-sm text-black font-nunito break-all">
                            {/* Envío de correo a ktalweb.peru@gmail.com */}
                            <a href="mailto:ktalweb.peru@gmail.com" className="hover:underline">
                                ktalweb.peru@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
                {/* Redes sociales */}
                <div className="flex md:justify-center">
                    <div className=''>
                        <div className="font-bold text-black mb-1 font-nunito">Síguenos</div>
                        <div className="flex gap-3 mt-1">
                            <a href="https://www.instagram.com/ktalweb.pe" aria-label="Instagram" className="text-black hover:text-primary-purple-100 text-2xl"><FaInstagram /></a>
                            <a href="https://www.facebook.com/profile.php?id=61574115239227&sk=reels_tab" aria-label="Facebook" className="text-black hover:text-primary-purple-100 text-2xl"><FaFacebookF /></a>
                            <a href="https://www.tiktok.com/@ktalweb.pe" aria-label="TikTok" className="text-black hover:text-primary-purple-100 text-2xl"><FaTiktok /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-black text-sm mt-2">
                Copyright © {new Date().getFullYear()} Ktalweb Peru.
            </div>
        </footer>
    );
};

export default Footer;