import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type Case = {
    logo?: string;
    logoAlt?: string;
    title: string;
    description: string;
    how: string[];
    images: string[];
    web: string;
    extraLogos?: { src: string; alt: string }[];
};

type Props = {
    cases: Case[];
};

const PrimeVideoCarousel: React.FC<Props> = ({ cases }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleItems, setVisibleItems] = useState(3);

    // Calcular cuántos elementos son visibles según el ancho de pantalla
    useEffect(() => {
        const updateVisibleItems = () => {
            if (typeof window === 'undefined') {
                setVisibleItems(3); // Default for SSR
                return;
            }

            if (window.innerWidth < 640) {
                setVisibleItems(1);
            } else if (window.innerWidth < 1024) {
                setVisibleItems(2);
            } else if (window.innerWidth < 1280) {
                setVisibleItems(3);
            } else {
                setVisibleItems(3);
            }
        };

        updateVisibleItems();

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', updateVisibleItems);
            return () => window.removeEventListener('resize', updateVisibleItems);
        }
    }, []);

    const goPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === cases.length - 1 ? 0 : prev + 1));
    };

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    const getItemStyle = (index: number) => {
        const isHovered = hoveredIndex === index;

        // Lógica circular para determinar visibilidad
        let isVisible = false;
        if (currentIndex + visibleItems <= cases.length) {
            // Caso normal: no hay wraparound
            isVisible = index >= currentIndex && index < currentIndex + visibleItems;
        } else {
            // Caso circular: hay wraparound
            const wraparoundCount = (currentIndex + visibleItems) - cases.length;
            isVisible = index >= currentIndex || index < wraparoundCount;
        }

        if (!isVisible) {
            return {
                transform: 'translateX(100%)',
                opacity: 0,
                zIndex: 1,
            };
        }

        // Responsive widths - with fallback for SSR
        const getWidths = () => {
            if (typeof window === 'undefined') {
                return { base: 320, expanded: 420, gap: 20 }; // Default for SSR
            }

            if (window.innerWidth < 640) {
                return { base: 280, expanded: 320, gap: 12 };
            } else if (window.innerWidth < 1024) {
                return { base: 300, expanded: 520, gap: 16 };
            } else {
                return { base: 320, expanded: 650, gap: 20 };
            }
        };

        const { base: baseWidth, expanded: expandedWidth, gap } = getWidths();

        // Calcular posición base con lógica circular
        let relativeIndex;
        if (index >= currentIndex) {
            // Elemento está después del índice actual
            relativeIndex = index - currentIndex;
        } else {
            // Elemento está antes del índice actual (wraparound)
            relativeIndex = (cases.length - currentIndex) + index;
        }
        const baseTranslateX = relativeIndex * (baseWidth + gap);

        // Si este elemento está siendo hovereado, expandirlo
        if (isHovered) {
            return {
                transform: `translateX(${baseTranslateX}px)`,
                width: `${expandedWidth}px`,
                zIndex: 10,
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            };
        }

        // Si hay un elemento hovereado a la izquierda, empujar este elemento hacia la derecha
        if (hoveredIndex !== null && hoveredIndex !== index) {
            // Calcular la posición relativa del elemento hovereado
            let hoveredRelativeIndex;
            if (hoveredIndex >= currentIndex) {
                hoveredRelativeIndex = hoveredIndex - currentIndex;
            } else {
                hoveredRelativeIndex = (cases.length - currentIndex) + hoveredIndex;
            }

            // Si el elemento hovereado está a la izquierda de este elemento
            if (hoveredRelativeIndex < relativeIndex) {
                const pushDistance = (expandedWidth - baseWidth);
                const adjustedTranslateX = baseTranslateX + pushDistance;

                return {
                    transform: `translateX(${adjustedTranslateX}px)`,
                    width: `${baseWidth}px`,
                    zIndex: 2,
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                };
            }
        }

        // Estado normal
        return {
            transform: `translateX(${baseTranslateX}px)`,
            width: `${baseWidth}px`,
            zIndex: 1,
            transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        };
    };

    return (
        <section className="pt-[6rem] px-5 sm:container mx-auto flex flex-col items-center">
            <h2 className="text-center font-nunito text-3xl md:text-4xl font-medium text-black mb-12 lg:mb-16 mx-5">
                Conoce nuestros <span className="degradado-c3 font-semibold">Casos de éxito</span>
            </h2>

            {/* Contador de elementos */}
            {/* <div className="flex items-center justify-center mb-8">
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">
                        {currentIndex + 1}-{Math.min(currentIndex + visibleItems, cases.length)} de {cases.length}
                    </span>
                </div>
            </div> */}

            {/* Carousel Container con botones laterales */}
            <div className="relative w-full max-w-[72rem] flex items-center">
                {/* Botón izquierdo */}
                <button
                    className="absolute left-10 lg:left-0 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 border border-primary-purple-100 shadow-lg hover:bg-primary-purple-100 hover:text-white transition text-primary-purple-100 text-xl -translate-x-6"
                    aria-label="Anterior"
                    onClick={goPrev}
                >
                    <IoIosArrowBack />
                </button>

                {/* Contenedor del carousel */}
                <div
                    ref={containerRef}
                    className="relative w-full h-[40rem] xs:h-[40rem] sm:h-[50rem] md:h-[36rem] lg:h-[30rem] overflow-hidden mx-20"
                >
                    <div className="relative w-full h-full">
                        {cases.map((caseItem, index) => {
                            const isHovered = hoveredIndex === index;
                            const isMobile = typeof window !== 'undefined' && window.innerWidth < 720;

                            // Lógica circular para determinar visibilidad
                            let isVisible = false;
                            if (currentIndex + visibleItems <= cases.length) {
                                // Caso normal: no hay wraparound
                                isVisible = index >= currentIndex && index < currentIndex + visibleItems;
                            } else {
                                // Caso circular: hay wraparound
                                const wraparoundCount = (currentIndex + visibleItems) - cases.length;
                                isVisible = index >= currentIndex || index < wraparoundCount;
                            }

                            if (!isVisible) return null;

                            return (
                                <div
                                    key={index}
                                    className="absolute top-0 left-0 h-full"
                                    style={isMobile ? {} : getItemStyle(index)}
                                    onMouseEnter={() => !isMobile && handleMouseEnter(index)}
                                    onMouseLeave={() => !isMobile && handleMouseLeave()}
                                >
                                    <div className={`relative h-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 ${isMobile
                                        ? 'hover:shadow-xl'
                                        : (isHovered ? 'shadow-2xl scale-102' : 'hover:shadow-xl')
                                        }`}>

                                        {isMobile ? (
                                            /* Vista móvil: Card simple con maquetado de imágenes original */
                                            <div className="h-full flex flex-col">
                                                {/* Logo */}
                                                <div className="flex justify-center items-center mt-4">
                                                    {caseItem.logo && (
                                                        <img
                                                            src={caseItem.logo}
                                                            alt={caseItem.logoAlt || caseItem.title}
                                                            className="h-10 max-w-[10rem] object-contain"
                                                        />
                                                    )}
                                                    {caseItem.extraLogos && (
                                                        <div className="flex gap-2 ml-2">
                                                            {caseItem.extraLogos.map((logo, i) => (
                                                                <img
                                                                    key={i}
                                                                    src={logo.src}
                                                                    alt={logo.alt}
                                                                    className="h-8 w-auto"
                                                                />
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>

                                                {/* Imágenes en la parte superior - mismo maquetado que el original */}
                                                <div className="relative flex-1 flex flex-col items-center gap-4 p-4 mb-4">
                                                    {caseItem.images.map((img, idx) => (
                                                        <img
                                                            key={idx}
                                                            src={img}
                                                            alt={caseItem.title + " mockup " + (idx + 1)}
                                                            className={
                                                                idx === 0
                                                                    ? "rounded-lg shadow w-full max-w-sm mb-4 sm:mb-16 pr-12 lg:pr-auto"
                                                                    : "absolute top-20 sm:top-28 right-6 lg:right-6 3xl:right-10 z-10 rounded-lg shadow w-24 sm:w-32 md:w-36"
                                                            }
                                                        />
                                                    ))}
                                                </div>

                                                {/* Información en la parte inferior */}
                                                <div className="p-4 border-t border-gray-100">

                                                    {/* Descripción */}
                                                    <p className="text-gray-700 mb-4 font-nunito text-sm line-clamp-3 text-center">
                                                        {caseItem.description}
                                                    </p>

                                                    {/* Lista de características */}
                                                    <div className="mb-4">
                                                        <h4 className="font-semibold text-sm text-black mb-2 font-nunito text-center">
                                                            ¿Cómo lo logramos?
                                                        </h4>
                                                        <ul className="text-xs text-gray-600 space-y-1">
                                                            {caseItem.how.slice(0, 3).map((item, idx) => (
                                                                <li key={idx} className="flex items-start">
                                                                    <span className="text-primary-purple-100 mr-2 mt-1">•</span>
                                                                    <span className="line-clamp-2">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Botón de acción */}
                                                    <a
                                                        href={caseItem.web}
                                                        className="w-full inline-flex items-center justify-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-4 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white text-sm"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Ver página web
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        ) : (
                                            /* Vista desktop: Carousel con expansión */
                                            <>
                                                {/* Vista base: Logo arriba, imágenes abajo */}
                                                <div className="relative h-full flex flex-col max-w-[22rem]">
                                                    {/* Header con logo centrado */}
                                                    <div className="relative p-4 flex justify-center items-start">
                                                        {caseItem.logo && (
                                                            <img
                                                                src={caseItem.logo}
                                                                alt={caseItem.logoAlt || caseItem.title}
                                                                className="h-12 max-w-[10rem] object-contain"
                                                            />
                                                        )}
                                                        {caseItem.extraLogos && (
                                                            <div className="flex gap-2 ml-2">
                                                                {caseItem.extraLogos.map((logo, i) => (
                                                                    <img
                                                                        key={i}
                                                                        src={logo.src}
                                                                        alt={logo.alt}
                                                                        className="h-8 w-auto"
                                                                    />
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Imágenes en la parte inferior */}
                                                    <div className="relative flex-1 flex flex-col items-center gap-4 p-4">
                                                        {caseItem.images.map((img, idx) => (
                                                            <img
                                                                key={idx}
                                                                src={img}
                                                                alt={caseItem.title + " mockup " + (idx + 1)}
                                                                className={
                                                                    idx === 0
                                                                        ? "rounded-lg shadow w-full max-w-sm mb-4 sm:mb-16 pr-12 lg:pr-auto"
                                                                        : "absolute top-16 sm:top-28 right-6 3xl:right-4 z-10 rounded-lg shadow w-24 sm:w-32 md:w-36"
                                                                }
                                                            />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Contenido informativo que aparece en hover (parte derecha) */}
                                                {isHovered && (
                                                    <div className="absolute top-0 z-[9999] right-0 h-full w-[45%] bg-white/95 backdrop-blur-sm p-8 animate-fadeIn border-l border-gray-200 ml-4">
                                                        <div className="h-full flex flex-col">
                                                            <p className="text-gray-700 mb-6 font-nunito text-sm line-clamp-4">
                                                                {caseItem.description}
                                                            </p>

                                                            {/* Lista de características */}
                                                            <div className="mb-6">
                                                                <h4 className="font-semibold text-sm text-black mb-3 font-nunito">
                                                                    ¿Cómo lo logramos?
                                                                </h4>
                                                                <ul className="text-xs text-gray-600 space-y-2">
                                                                    {caseItem.how.slice(0, 4).map((item, idx) => (
                                                                        <li key={idx} className="flex items-start">
                                                                            <span className="text-primary-purple-100 mr-2 mt-1">•</span>
                                                                            <span className="line-clamp-2">{item}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>

                                                            {/* Botón de acción */}
                                                            <a
                                                                href={caseItem.web}
                                                                className="inline-flex items-center justify-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-4 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white text-sm"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                Ver página web
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Botón derecho */}
                <button
                    className="absolute right-10 lg:right-0 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 border border-primary-purple-100 shadow-lg hover:bg-primary-purple-100 hover:text-white transition text-primary-purple-100 text-xl translate-x-6"
                    aria-label="Siguiente"
                    onClick={goNext}
                >
                    <IoIosArrowForward />
                </button>
            </div>

            {/* Indicadores */}
            {/* <div className="flex gap-2 mt-6">
                {Array.from({ length: Math.ceil(cases.length / visibleItems) }).map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${Math.floor(currentIndex / visibleItems) === index
                            ? 'bg-primary-purple-100'
                            : 'bg-gray-300'
                            }`}
                        onClick={() => setCurrentIndex(index * visibleItems)}
                    />
                ))}
            </div> */}
        </section>
    );
};

export default PrimeVideoCarousel;
