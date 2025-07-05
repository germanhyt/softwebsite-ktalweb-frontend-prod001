import React, { useState } from "react";

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


import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


const PortfolioCarousel: React.FC<Props> = ({ cases }) => {
    const [active, setActive] = useState(0);
    const total = cases.length;
    const current = cases[active];

    const goPrev = () => setActive((prev) => (prev === 0 ? total - 1 : prev - 1));
    const goNext = () => setActive((prev) => (prev === total - 1 ? 0 : prev + 1));

    return (

        <section className="pt-[6rem] px-5 sm:container mx-auto flex flex-col items-center ">
            <h2
                className="text-center font-nunito text-3xl md:text-4xl font-medium text-black mb-12 lg:mb-16 mx-5"
            >
                Conoce nuestros <span
                    className="degradado-c3 font-semibold">Casos de éxito
                </span
                >
            </h2>

            {/* Botones y logos */}
            <div className="flex items-center justify-center mb-6 gap-4">
                <button
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 border border-primary-purple-100 shadow hover:bg-primary-purple-100 hover:text-white transition text-primary-purple-100 text-2xl"
                    aria-label="Anterior"
                    onClick={goPrev}
                >
                    <IoIosArrowBack />
                </button>
                {current.logo && (
                    <img src={current.logo} alt={current.logoAlt || current.title} className="h-12 max-w-[12rem] object-contain sm:w-auto" />
                )}
                {current.extraLogos && current.extraLogos.map((l, i) => (
                    <img key={i} src={l.src} alt={l.alt} className="h-10 w-auto ml-2" />
                ))}
                <button
                    className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/80 border border-primary-purple-100 shadow hover:bg-primary-purple-100 hover:text-white transition text-primary-purple-100 text-2xl"
                    aria-label="Siguiente"
                    onClick={goNext}
                >
                    <IoIosArrowForward />
                </button>
            </div>
            {/* Card principal */}
            <div className="flex flex-col gap-10 bg-white rounded-xl shadow p-6 md:p-10 w-full max-w-5xl 2xl:max-w-6xl ">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1">
                        <p className="text-gray-700 mb-4 font-nunito">{current.description}</p>
                        <h2 className="font-bold text-lg text-black mb-2 font-nunito">¿Cómo lo logramos?</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 font-nunito">
                            {current.how.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative flex-1 flex flex-col items-center gap-4 mb-16 sm:mb-20 md:mb-0">
                        {current.images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={current.title + " mockup " + (idx + 1)}
                                className={
                                    idx === 0
                                        ? "rounded-lg shadow w-full max-w-sm mb-16  pr-12 lg:pr-auto "
                                        : "absolute top-16 sm:top-28 right-0 3xl:right-10 z-10 rounded-lg shadow w-24 sm:w-32 md:w-36"
                                }
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-6xl flex justify-end mt-4">
                    <a
                        href={current.web}
                        className="flex items-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-5 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Ver página web
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </div>
            </div>

        </section>
    );
};

export default PortfolioCarousel;
