import React from 'react'
import { VscArrowCircleRight } from 'react-icons/vsc'

import satisfechoResultados from '@/assets/images/web_satisfecho_resultado.webp?url'

const SolicitarCTABannerSection = () => {
    return (
        <>
            <section
                className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-12"
            >
                <div className="max-w-lg 3xl:max-w-2xl text-start flex-1">
                    <h2 className="font-nunito text-3xl md:text-4xl font-bold text-black mb-4">
                        ¿No estás satisfecho con los resultados de tu web actual?
                    </h2>
                    <p className="font-nunito text-base text-black mb-6">
                        Solicita una auditoría con nosotros y con gusto te ayudaremos a
                        potenciarla.
                    </p>
                    <button
                        className="flex items-center gap-2 border-2 border-primary-purple-100 text-primary-purple-100 font-nunito font-semibold px-5 py-2 rounded-full transition hover:bg-primary-purple-100 hover:text-white"
                    >
                        Solicitar auditoría gratuita

                        <VscArrowCircleRight className="text-2xl" />
                    </button>
                </div>
                <div className="flex-1 flex justify-center">
                    <img
                        src={satisfechoResultados}
                        alt="Auditoría web"
                        className="rounded-lg object-cover w-full max-w-md h-64 md:h-72"
                    />
                </div>
            </section>
        </>
    )
}

export default SolicitarCTABannerSection