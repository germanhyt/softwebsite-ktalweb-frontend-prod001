import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.webp?url';
import { motion } from 'framer-motion';


const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);


  // Para mantener el estado de la ruta seleccionada
  const [selected, setSelected] = useState('/'); // Estado inicial predeterminado

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      setSelected(currentPath); // Sincronizar el estado con la URL actual
    }
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.location.href = path; // Cambia la URL y recarga la página
    }
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="min-h-[4rem] container mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="/"
            className="text-2xl font-bold text-blue-600"
            aria-label="Ktalweb Home"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img
              className="w-[9.5rem] sm:w-[11.5rem] lg:w-[12rem] cursor-pointer"
              src={Logo}
              alt="Logo de Ktalweb"
            />
          </a>

          {/* Navigation -- sm screen */}
          <nav
            className="hidden md:flex items-center space-x-4 bg-tertiary-white-200 px-6 py-2 rounded-2xl"
            aria-label="Main Navigation"
          >
            <a
              href="/"
              className={`text-gray-700 font-semibold ${selected === '/' ? 'bg-white py-1 px-4 rounded-2xl' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
              }}
            >
              Inicio
            </a>
            <a
              href="/portfolio"
              className={`text-gray-700 font-semibold ${selected === '/portfolio' ? 'bg-white py-1 px-4 rounded-2xl' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                navigate('/portfolio');
              }}
            >
              Portafolio
            </a>
          </nav>

          <div className="
              flex md:hidden justify-between gap-2 items-center">
            <motion.div
              initial={{ rotate: 0, opacity: 1 }}
              animate={{ rotate: showMenu ? 90 : 0, opacity: 1 }}
            >
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
            </motion.div>
          </div>

          {/* Contact Button */}
          <a
            href="/contact"
            className="hidden md:flex  px-6 py-2 text-primary-purple-100 font-semibold rounded-full hover:bg-primary-purple-100 hover:text-white border border-primary-purple-100"
            aria-label="Contact Us"
          >
            Contáctanos
          </a>
        </div>
      </header>

      <div>
        {/* Mobile Menu */}
        {showMenu && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 50% 0%)' }}
            animate={{ clipPath: 'circle(150% at 50% 0%)' }}
            exit={{ clipPath: 'circle(0% at 50% 0%)' }}
            transition={{ duration: 0.5 }}
            className="absolute top-16 h-screen left-0 w-full bg-white shadow-lg z-50"
          >
            <nav className="flex flex-col items-center py-4 mt-10">
              <a
                href="/"
                className={`text-xl text-primary-purple-100 font-semibold mt-2 ${selected === '/' ? 'bg-white py-1 px-4 rounded-2xl' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/');
                }}
              >
                Inicio
              </a>

              <a
                href="/portfolio"
                className={`text-xl text-primary-purple-100 font-semibold mt-2 ${selected === '/portfolio' ? 'bg-white py-1 px-4 rounded-2xl' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/portfolio');
                }}
              >
                Portafolio
              </a>
            </nav>

            <div className='flex justify-center mt-4'>
              <a
                href="/contact"
                className="px-6 py-2 text-primary-purple-100 font-semibold rounded-full hover:bg-primary-purple-100 hover:text-white border border-primary-purple-100"
                aria-label="Contact Us"
              >
                Contáctanos
              </a>
            </div>
          </motion.div>
        )}
      </div>

    </>
  );
};

export default Header;