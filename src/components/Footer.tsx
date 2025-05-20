import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaArrowUp } from 'react-icons/fa';

import Logo from '@/src/assets/logo.webp?url';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-primary-purple-50 pt-8 pb-4 relative">
            {/* Botón scroll top */}
            <div className="absolute left-1/2 -top-6 transform -translate-x-1/2 z-10">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="bg-primary-purple-100 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border-2 border-white hover:bg-primary-purple-200 transition"
                    aria-label="Volver arriba"
                >
                    <FaArrowUp className="text-xl" />
                </button>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8 pb-4">
                {/* Logo y ubicación */}
                <div className="flex-1 min-w-[180px]">
                    <img
                        src={Logo}
                        alt="Logo Ktalweb"
                        className="w-32 h-auto mb-2"
                    />

                    <div className="text-gray-600 mt-2 text-sm font-nunito">Lima, Perú</div>
                </div>
                {/* Navegación */}
                <div className="flex-1 justify-center min-w-[120px]">
                    <div className=''>
                        <div className="font-bold text-black mb-1 font-nunito">Explora</div>
                        <nav className="flex flex-col gap-1 text-sm">
                            <a href="/" className="hover:underline text-black font-nunito">Inicio</a>
                            <a href="/portfolio" className="hover:underline text-black font-nunito">Portafolio</a>
                        </nav>
                    </div>
                </div>
                {/* Contacto */}
                <div className="flex-1 min-w-[180px]">
                    <div className="font-bold text-black mb-1 font-nunito">Contacto</div>
                    <div className="text-sm text-black font-nunito">ktalweb.peru@gmail.com</div>
                </div>
                {/* Redes sociales */}
                <div className="flex-1 min-w-[120px]">
                    <div className="font-bold text-black mb-1 font-nunito">Síguenos</div>
                    <div className="flex gap-3 mt-1">
                        <a href="#" aria-label="Instagram" className="text-black hover:text-primary-purple-100 text-2xl"><FaInstagram /></a>
                        <a href="#" aria-label="Facebook" className="text-black hover:text-primary-purple-100 text-2xl"><FaFacebookF /></a>
                        <a href="#" aria-label="TikTok" className="text-black hover:text-primary-purple-100 text-2xl"><FaTiktok /></a>
                    </div>
                </div>
            </div>
            <div className="text-center text-black text-sm mt-2">
                Copyright © 2025 Ktalweb Peru.
            </div>
        </footer>
    );
};

export default Footer;