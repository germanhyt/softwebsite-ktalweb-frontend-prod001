import React, { useState } from 'react';
import Logo from '../assets/logo.webp?url';


const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);


  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all header-enter">
        <div className="min-h-[4rem] px-5 sm:container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-blue-600 nav-logo-enter"
            aria-label="Ktalweb Home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              className="w-[9.5rem] sm:w-[11.5rem] lg:w-[12rem] cursor-pointer"
              src={Logo}
              alt="Logo de Ktalweb"
            />
          </a>
          {/* Navigation -- sm screen */}
          <div className='flex items-center gap-4'>
            <nav
              className="hidden md:flex items-center space-x-8 nav-links-enter"
              aria-label="Main Navigation"
            >
              <a href="#soluciones" className=" font-medium font-nunito hover:text-primary-purple-100 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' }); }}>Soluciones</a>
              <a href="#casos" className=" font-medium font-nunito hover:text-primary-purple-100 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' }); }}>Casos de éxito</a>
              <a href="#bochure" className=" font-medium font-nunito hover:text-primary-purple-100 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('bochure')?.scrollIntoView({ behavior: 'smooth' }); }}>Brochure</a>
              {/* <a href="#clientes" className=" font-medium font-nunito hover:text-primary-purple-100 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' }); }}>Soluciones</a>
              <a href="#caracteristicas" className=" font-medium font-nunito hover:text-primary-purple-100 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' }); }}>Características</a>
              <a href="#proceso" className=" font-medium font-nunito hover:text-primary-purple-100 transition-colors" onClick={e => { e.preventDefault(); document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' }); }}>Proceso</a> */}
            </nav>
            {/* CTA Button */}
            <a
              href="https://api.whatsapp.com/send?phone=51923416407&text=Hola%20Ktalweb,%20me%20requiero%20más%20información."  
              target="_blank"
              className="ml-4 font-nunito px-6 py-2 text-white font-bold rounded-full bg-primary-purple-100 hover:bg-primary-purple-200 shadow transition-colors text-base md:flex hidden nav-cta-enter"
              aria-label="Cotizar ahora"
            >
              Contáctanos
            </a>
          </div>
          {/* Hamburger */}
          <div className="flex md:hidden justify-between gap-2 items-center">
            <button
              className="block md:hidden"
              onClick={() => setShowMenu(!showMenu)}
              aria-label="Menu Button"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {showMenu ? (
                  <path
                    className="text-black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="text-black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      {showMenu && (
        <div className="mt-[4rem] fixed top-0 left-0 w-full h-full bg-white z-50 flex gap-4 flex-col items-center pt-24 animate-fade-in">
          <a href="#soluciones" className="text-xl font-nunito text-primary-purple-100 font-medium mt-2" onClick={e => { e.preventDefault(); document.getElementById('soluciones')?.scrollIntoView({ behavior: 'smooth' }); setShowMenu(false); }}>Soluciones</a>
          <a href="#casos" className="text-xl font-nunito text-primary-purple-100 font-medium mt-2" onClick={e => { e.preventDefault(); document.getElementById('casos')?.scrollIntoView({ behavior: 'smooth' }); setShowMenu(false); }}>Casos de éxito</a>
          <a href="#bochure" className="text-xl font-nunito text-primary-purple-100 font-medium mt-2" onClick={e => { e.preventDefault(); document.getElementById('bochure')?.scrollIntoView({ behavior: 'smooth' }); setShowMenu(false); }}>Brochure</a>
          {/* <a href="#clientes" className="text-xl font-nunito text-primary-purple-100 font-medium mt-2" onClick={e => { e.preventDefault(); document.getElementById('clientes')?.scrollIntoView({ behavior: 'smooth' }); setShowMenu(false); }}>Soluciones</a>
          <a href="#caracteristicas" className="text-xl font-nunito text-primary-purple-100 font-medium mt-2" onClick={e => { e.preventDefault(); document.getElementById('caracteristicas')?.scrollIntoView({ behavior: 'smooth' }); setShowMenu(false); }}>Características</a>
          <a href="#proceso" className="text-xl font-nunito text-primary-purple-100 font-medium mt-2" onClick={e => { e.preventDefault(); document.getElementById('proceso')?.scrollIntoView({ behavior: 'smooth' }); setShowMenu(false); }}>Proceso</a> */}
          <a
            href="https://api.whatsapp.com/send?phone=51923416407&text=Hola%20Ktalweb,%20me%20gustaría%20más%20información."
            target="_blank"
            className="mt-6 font-nunito px-6 py-2 text-white font-bold rounded-full bg-primary-purple-100 hover:bg-primary-purple-200 shadow transition-colors text-base"
            aria-label="Cotizar ahora"
            onClick={() => setShowMenu(false)}
          >
            Contáctanos
          </a>
        </div>
      )}
      <style>{`html { scroll-behavior: smooth; } .bg-primary-purple-100 { background: #7b3ff2; } .hover\:bg-primary-purple-200:hover { background: #5f8cff; } .font-nunito { font-family: 'Nunito', sans-serif; } .animate-fade-in { animation: fadeIn 0.4s ease; } .header-enter { animation: headerReveal 0.7s cubic-bezier(0.22, 1, 0.36, 1); } .nav-logo-enter { animation: navItemReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.08s both; } .nav-links-enter { animation: navItemReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.14s both; } .nav-cta-enter { animation: navItemReveal 0.6s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both; } @keyframes fadeIn { from { opacity: 0; transform: translateY(-20px);} to { opacity: 1; transform: translateY(0);} } @keyframes headerReveal { from { opacity: 0; transform: translateY(-14px); } to { opacity: 1; transform: translateY(0); } } @keyframes navItemReveal { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } } @media (prefers-reduced-motion: reduce) { .header-enter, .nav-logo-enter, .nav-links-enter, .nav-cta-enter, .animate-fade-in { animation: none !important; } }`}</style>
    </>
  );
};

export default Header;